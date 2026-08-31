"use client";

import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  DefaultEdgeOptions,
  Edge,
  Handle,
  MarkerType,
  MiniMap,
  NodeProps,
  OnConnect,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  ComponentKey,
  DIAGRAM_STORAGE_KEY,
  DiagramDocument,
  parseDiagramDocument,
  serializeDiagramDocument,
  SystemNode,
  SystemNodeData,
  SYSTEM_NODE_SIZE,
} from "@/lib/diagram-document";
import {
  ArrowLeft,
  Boxes,
  Cloud,
  Database,
  Download,
  Eraser,
  Globe2,
  GripVertical,
  HardDrive,
  Network,
  PanelLeftClose,
  PanelLeftOpen,
  Redo2,
  RotateCcw,
  Server,
  Trash2,
  Undo2,
  Upload,
  Workflow,
  Zap,
} from "lucide-react";
import Link from "next/link";
import {
  ChangeEvent,
  DragEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type ComponentDefinition = {
  key: ComponentKey;
  label: string;
  description: string;
  accent: string;
  icon: typeof Server;
};

const components: ComponentDefinition[] = [
  {
    key: "client",
    label: "Client",
    description: "Web or mobile app",
    accent: "#38bdf8",
    icon: Globe2,
  },
  {
    key: "gateway",
    label: "API gateway",
    description: "Request entry point",
    accent: "#a78bfa",
    icon: Network,
  },
  {
    key: "service",
    label: "Service",
    description: "Application logic",
    accent: "#60a5fa",
    icon: Server,
  },
  {
    key: "database",
    label: "Database",
    description: "Persistent records",
    accent: "#34d399",
    icon: Database,
  },
  {
    key: "cache",
    label: "Cache",
    description: "Fast temporary data",
    accent: "#fbbf24",
    icon: Zap,
  },
  {
    key: "queue",
    label: "Message queue",
    description: "Async processing",
    accent: "#fb7185",
    icon: Workflow,
  },
  {
    key: "storage",
    label: "Object storage",
    description: "Files and media",
    accent: "#2dd4bf",
    icon: HardDrive,
  },
  {
    key: "cloud",
    label: "External service",
    description: "Third-party system",
    accent: "#94a3b8",
    icon: Cloud,
  },
];

const componentMap = Object.fromEntries(
  components.map((component) => [component.key, component]),
) as Record<ComponentKey, ComponentDefinition>;

const createNode = (
  id: string,
  component: ComponentKey,
  x: number,
  y: number,
  label?: string,
): SystemNode => ({
  id,
  type: "system",
  position: { x, y },
  width: SYSTEM_NODE_SIZE.width,
  height: SYSTEM_NODE_SIZE.height,
  data: { component, label: label ?? componentMap[component].label },
});

const starterNodes: SystemNode[] = [
  createNode("client-1", "client", 20, 150, "Web client"),
  createNode("gateway-1", "gateway", 250, 150),
  createNode("service-1", "service", 500, 70, "URL service"),
  createNode("service-2", "service", 500, 240, "Redirect service"),
  createNode("cache-1", "cache", 750, 55, "Redis cache"),
  createNode("database-1", "database", 750, 245, "Primary database"),
];

const starterEdges: Edge[] = [
  { id: "client-gateway", source: "client-1", target: "gateway-1" },
  { id: "gateway-url", source: "gateway-1", target: "service-1" },
  { id: "gateway-redirect", source: "gateway-1", target: "service-2" },
  { id: "url-cache", source: "service-1", target: "cache-1" },
  { id: "url-db", source: "service-1", target: "database-1" },
  { id: "redirect-cache", source: "service-2", target: "cache-1" },
];

const edgeOptions = {
  type: "smoothstep",
  markerEnd: { type: MarkerType.ArrowClosed, color: "#64748b" },
  style: { stroke: "#64748b", strokeWidth: 1.5 },
} satisfies DefaultEdgeOptions;

function SystemComponentNode({ data, selected }: NodeProps<SystemNode>) {
  const component = componentMap[data.component];
  const Icon = component.icon;

  return (
    <div
      className={`min-w-[176px] rounded-xl border bg-[#111823] px-3 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition ${selected ? "ring-2 ring-sky-400/70" : ""}`}
      style={{
        borderColor: selected ? component.accent : `${component.accent}45`,
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!size-2.5 !border-2 !border-[#111823] !bg-slate-400"
      />
      <div className="flex items-center gap-3">
        <span
          className="grid size-9 shrink-0 place-items-center rounded-lg"
          style={{
            backgroundColor: `${component.accent}14`,
            color: component.accent,
          }}
        >
          <Icon className="size-4" strokeWidth={1.9} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-slate-100">
            {data.label}
          </p>
          <p className="mt-0.5 text-[10px] text-slate-500">{component.label}</p>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="!size-2.5 !border-2 !border-[#111823] !bg-sky-400"
      />
    </div>
  );
}

const nodeTypes = { system: SystemComponentNode };

function WorkspaceCanvas() {
  const [nodes, setNodes, onNodesChangeBase] =
    useNodesState<SystemNode>(starterNodes);
  const [edges, setEdges, onEdgesChangeBase] =
    useEdgesState<Edge>(starterEdges);
  const [diagramName, setDiagramName] = useState("URL shortener");
  const [saveStatus, setSaveStatus] = useState<"saved" | "error">("saved");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selection, setSelection] = useState<{
    nodes: SystemNode[];
    edges: Edge[];
  }>({ nodes: [], edges: [] });
  const [hydrated, setHydrated] = useState(false);
  const [, refreshHistoryControls] = useState(0);
  const history = useRef<DiagramDocument[]>([]);
  const future = useRef<DiagramDocument[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);
  const importInputRef = useRef<HTMLInputElement>(null);
  const { screenToFlowPosition, fitView, deleteElements } = useReactFlow<
    SystemNode,
    Edge
  >();

  const commitHistory = useCallback(() => {
    history.current = [
      ...history.current.slice(-39),
      { name: diagramName, nodes, edges },
    ];
    future.current = [];
    refreshHistoryControls((version) => version + 1);
  }, [diagramName, edges, nodes]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(DIAGRAM_STORAGE_KEY);
      if (stored) {
        const diagram = parseDiagramDocument(stored);
        if (diagram) {
          setNodes(diagram.nodes);
          setEdges(diagram.edges);
          setDiagramName(diagram.name);
        } else {
          window.localStorage.removeItem(DIAGRAM_STORAGE_KEY);
        }
      }
    } catch {
      window.localStorage.removeItem(DIAGRAM_STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, [setEdges, setNodes]);

  useEffect(() => {
    if (!hydrated) return;
    const timeout = window.setTimeout(() => {
      try {
        window.localStorage.setItem(
          DIAGRAM_STORAGE_KEY,
          serializeDiagramDocument({ name: diagramName, nodes, edges }),
        );
        setSaveStatus("saved");
      } catch {
        setSaveStatus("error");
      }
    }, 250);
    return () => window.clearTimeout(timeout);
  }, [diagramName, edges, hydrated, nodes]);

  const addComponent = useCallback(
    (component: ComponentKey, position?: { x: number; y: number }) => {
      commitHistory();
      const bounds = canvasRef.current?.getBoundingClientRect();
      const defaultPosition = bounds
        ? screenToFlowPosition({
            x: bounds.left + bounds.width / 2,
            y: bounds.top + bounds.height / 2,
          })
        : { x: 320, y: 180 };
      const id = `${component}-${globalThis.crypto?.randomUUID?.() ?? Date.now()}`;
      setNodes((currentNodes) => [
        ...currentNodes,
        createNode(
          id,
          component,
          position?.x ?? defaultPosition.x,
          position?.y ?? defaultPosition.y,
        ),
      ]);
    },
    [commitHistory, screenToFlowPosition, setNodes],
  );

  const onConnect: OnConnect = useCallback(
    (connection) => {
      commitHistory();
      setEdges((currentEdges) =>
        addEdge(
          {
            ...connection,
            id: `edge-${Date.now()}`,
            ...edgeOptions,
          },
          currentEdges,
        ),
      );
    },
    [commitHistory, setEdges],
  );

  const undo = useCallback(() => {
    const previous = history.current.at(-1);
    if (!previous) return;
    future.current = [
      { name: diagramName, nodes, edges },
      ...future.current.slice(0, 39),
    ];
    history.current = history.current.slice(0, -1);
    setNodes(previous.nodes);
    setEdges(previous.edges);
    setDiagramName(previous.name);
    refreshHistoryControls((version) => version + 1);
  }, [diagramName, edges, nodes, setEdges, setNodes]);

  const redo = useCallback(() => {
    const next = future.current[0];
    if (!next) return;
    history.current = [...history.current, { name: diagramName, nodes, edges }];
    future.current = future.current.slice(1);
    setNodes(next.nodes);
    setEdges(next.edges);
    setDiagramName(next.name);
    refreshHistoryControls((version) => version + 1);
  }, [diagramName, edges, nodes, setEdges, setNodes]);

  const reset = useCallback(() => {
    commitHistory();
    setNodes(starterNodes);
    setEdges(starterEdges);
    window.setTimeout(() => fitView({ padding: 0.2, duration: 450 }), 0);
  }, [commitHistory, fitView, setEdges, setNodes]);

  const deleteSelection = useCallback(() => {
    if (!selection.nodes.length && !selection.edges.length) return;
    void deleteElements(selection);
  }, [deleteElements, selection]);

  const clearCanvas = useCallback(() => {
    if (!nodes.length && !edges.length) return;
    if (
      !window.confirm(
        "Clear every component and connection? You can undo this action.",
      )
    ) {
      return;
    }
    void deleteElements({ nodes, edges });
  }, [deleteElements, edges, nodes]);

  const exportDiagram = useCallback(() => {
    const file = new Blob(
      [serializeDiagramDocument({ name: diagramName, nodes, edges }, true)],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(file);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${
      diagramName
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") || "syscode-diagram"
    }.json`;
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  }, [diagramName, edges, nodes]);

  const importDiagram = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      event.target.value = "";
      if (!file) return;
      if (file.size > 1_000_000) {
        window.alert("That diagram is too large to import.");
        return;
      }

      let rawDiagram: string;
      try {
        rawDiagram = await file.text();
      } catch {
        window.alert("SysCode could not read that file.");
        return;
      }

      const diagram = parseDiagramDocument(rawDiagram);
      if (!diagram) {
        window.alert("This file is not a valid SysCode diagram.");
        return;
      }

      commitHistory();
      setDiagramName(diagram.name);
      setNodes(diagram.nodes);
      setEdges(diagram.edges);
      window.setTimeout(() => fitView({ padding: 0.2, duration: 450 }), 0);
    },
    [commitHistory, fitView, setEdges, setNodes],
  );

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const component = event.dataTransfer.getData(
        "application/syscode-component",
      ) as ComponentKey;
      if (!componentMap[component]) return;
      addComponent(
        component,
        screenToFlowPosition({ x: event.clientX, y: event.clientY }),
      );
    },
    [addComponent, screenToFlowPosition],
  );

  return (
    <main className="flex h-[100dvh] min-h-[580px] flex-col overflow-hidden bg-[#080b10] text-white">
      <header className="z-20 flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-[#0b0f15] px-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            aria-label="Back to home"
            className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft className="size-4" />
          </Link>
          <span className="hidden size-8 place-items-center rounded-lg bg-sky-400 text-slate-950 sm:grid">
            <Boxes className="size-4" />
          </span>
          <div className="min-w-0">
            <input
              aria-label="Diagram name"
              value={diagramName}
              onChange={(event) => setDiagramName(event.target.value)}
              className="w-20 truncate rounded px-1 text-sm font-semibold text-slate-100 outline-none placeholder:text-slate-600 focus-visible:ring-2 focus-visible:ring-sky-400/70 sm:w-56"
              placeholder="Untitled design"
            />
            <p
              className={`hidden items-center gap-1.5 text-[10px] sm:flex ${saveStatus === "saved" ? "text-slate-600" : "text-rose-400"}`}
            >
              <span
                className={`size-1.5 rounded-full ${saveStatus === "saved" ? "bg-emerald-400" : "bg-rose-400"}`}
              />
              {saveStatus === "saved" ? "Saved locally" : "Could not save"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={undo}
            disabled={!history.current.length}
            title="Undo"
            aria-label="Undo"
            className="grid size-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Undo2 className="size-4" />
          </button>
          <button
            type="button"
            onClick={redo}
            disabled={!future.current.length}
            title="Redo"
            aria-label="Redo"
            className="grid size-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Redo2 className="size-4" />
          </button>
          <button
            type="button"
            onClick={reset}
            title="Reset example"
            className="hidden h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white sm:flex"
          >
            <RotateCcw className="size-3.5" />
            Reset
          </button>
          <button
            type="button"
            onClick={deleteSelection}
            disabled={!selection.nodes.length && !selection.edges.length}
            title="Delete selection"
            aria-label="Delete selection"
            className="grid size-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-rose-400/30 hover:bg-rose-400/10 hover:text-rose-300 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Trash2 className="size-4" />
          </button>
          <input
            ref={importInputRef}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            tabIndex={-1}
            onChange={importDiagram}
          />
          <button
            type="button"
            onClick={() => importInputRef.current?.click()}
            title="Import diagram"
            aria-label="Import diagram"
            className="grid size-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <Upload className="size-4" />
          </button>
          <button
            type="button"
            onClick={exportDiagram}
            title="Export diagram"
            aria-label="Export diagram"
            className="flex h-9 items-center gap-2 rounded-lg bg-sky-400 px-3 text-xs font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <aside
          className={`${sidebarOpen ? "flex" : "hidden"} z-10 h-auto shrink-0 flex-col border-b border-white/10 bg-[#0b0f15] md:h-full md:w-64 md:border-b-0 md:border-r`}
        >
          <div className="hidden items-center justify-between border-b border-white/[0.07] px-4 py-4 md:flex">
            <div>
              <h2 className="text-xs font-semibold text-slate-200">
                Components
              </h2>
              <p className="mt-1 text-[10px] text-slate-600">
                Drag or click to add
              </p>
            </div>
            <GripVertical className="size-4 text-slate-700" />
          </div>
          <div className="flex gap-2 overflow-x-auto p-3 md:grid md:overflow-y-auto md:p-3">
            {components.map(
              ({ key, label, description, accent, icon: Icon }) => (
                <button
                  key={key}
                  type="button"
                  draggable
                  onDragStart={(event) => {
                    event.dataTransfer.setData(
                      "application/syscode-component",
                      key,
                    );
                    event.dataTransfer.effectAllowed = "move";
                  }}
                  onClick={() => addComponent(key)}
                  className="group flex min-w-40 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 text-left transition hover:border-white/15 hover:bg-white/[0.05] md:min-w-0"
                >
                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-lg"
                    style={{ color: accent, backgroundColor: `${accent}12` }}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-xs font-medium text-slate-300 group-hover:text-white">
                      {label}
                    </span>
                    <span className="mt-0.5 block truncate text-[10px] text-slate-600">
                      {description}
                    </span>
                  </span>
                </button>
              ),
            )}
            <button
              type="button"
              onClick={clearCanvas}
              disabled={!nodes.length && !edges.length}
              className="group flex min-w-40 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 text-left transition hover:border-rose-400/20 hover:bg-rose-400/[0.06] disabled:cursor-not-allowed disabled:opacity-40 md:min-w-0"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-rose-400/[0.07] text-rose-300">
                <Eraser className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-medium text-slate-300 group-hover:text-white">
                  Clear canvas
                </span>
                <span className="mt-0.5 block truncate text-[10px] text-slate-600">
                  Remove everything
                </span>
              </span>
            </button>
          </div>
          <p className="mt-auto hidden border-t border-white/[0.07] p-4 text-[10px] leading-4 text-slate-600 md:block">
            Tip: select a component and press Delete to remove it. Connect nodes
            using their side handles.
          </p>
        </aside>

        <div
          ref={canvasRef}
          className="relative min-h-0 flex-1"
          onDrop={onDrop}
          onDragOver={(event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
          }}
        >
          <button
            type="button"
            onClick={() => setSidebarOpen((open) => !open)}
            title={
              sidebarOpen ? "Hide component library" : "Show component library"
            }
            aria-label={
              sidebarOpen ? "Hide component library" : "Show component library"
            }
            className="absolute left-3 top-3 z-10 hidden size-9 place-items-center rounded-lg border border-white/10 bg-[#111722] text-slate-400 shadow-lg transition hover:text-white md:grid"
          >
            {sidebarOpen ? (
              <PanelLeftClose className="size-4" />
            ) : (
              <PanelLeftOpen className="size-4" />
            )}
          </button>
          <ReactFlow<SystemNode, Edge>
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChangeBase}
            onEdgesChange={onEdgesChangeBase}
            onBeforeDelete={async () => {
              commitHistory();
              return true;
            }}
            onSelectionChange={({
              nodes: selectedNodes,
              edges: selectedEdges,
            }) =>
              setSelection({
                nodes: selectedNodes as SystemNode[],
                edges: selectedEdges,
              })
            }
            onNodeDragStart={commitHistory}
            onConnect={onConnect}
            defaultEdgeOptions={edgeOptions}
            colorMode="dark"
            fitView
            fitViewOptions={{ padding: 0.22 }}
            minZoom={0.25}
            maxZoom={1.8}
            deleteKeyCode={["Backspace", "Delete"]}
            proOptions={{ hideAttribution: true }}
          >
            <Background
              variant={BackgroundVariant.Dots}
              gap={22}
              size={1}
              color="#263244"
            />
            <Controls
              position="bottom-right"
              showInteractive={false}
              className="!overflow-hidden !rounded-lg !border !border-white/10 !bg-[#111722] !shadow-xl [&>button]:!border-white/10 [&>button]:!bg-[#111722] [&>button]:!fill-slate-400 [&>button]:hover:!bg-[#18202d]"
            />
            <MiniMap
              position="bottom-left"
              pannable
              zoomable
              nodeColor={(node) =>
                componentMap[(node.data as SystemNodeData).component]?.accent ??
                "#64748b"
              }
              maskColor="rgba(8, 11, 16, .76)"
              className="!hidden !rounded-lg !border !border-white/10 !bg-[#111722] md:!block"
            />
          </ReactFlow>
        </div>
      </div>
    </main>
  );
}

export const Editor = () => (
  <ReactFlowProvider>
    <WorkspaceCanvas />
  </ReactFlowProvider>
);
