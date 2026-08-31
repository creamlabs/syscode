"use client";

import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  Handle,
  MarkerType,
  MiniMap,
  Node,
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
  ArrowLeft,
  Boxes,
  Cloud,
  Database,
  Download,
  Globe2,
  GripVertical,
  HardDrive,
  Network,
  PanelLeftClose,
  PanelLeftOpen,
  Redo2,
  RotateCcw,
  Server,
  Undo2,
  Workflow,
  Zap,
} from "lucide-react";
import Link from "next/link";
import {
  DragEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ComponentKey =
  | "client"
  | "gateway"
  | "service"
  | "database"
  | "cache"
  | "queue"
  | "storage"
  | "cloud";

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

type SystemNodeData = {
  label: string;
  component: ComponentKey;
};

type SystemNode = Node<SystemNodeData, "system">;
type DiagramSnapshot = { nodes: SystemNode[]; edges: Edge[] };

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
  width: 176,
  height: 60,
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

const STORAGE_KEY = "syscode-diagram-v1";

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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [hydrated, setHydrated] = useState(false);
  const [, refreshHistoryControls] = useState(0);
  const history = useRef<DiagramSnapshot[]>([]);
  const future = useRef<DiagramSnapshot[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);
  const { screenToFlowPosition, fitView } = useReactFlow<SystemNode, Edge>();

  const commitHistory = useCallback(() => {
    history.current = [...history.current.slice(-39), { nodes, edges }];
    future.current = [];
    refreshHistoryControls((version) => version + 1);
  }, [edges, nodes]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const diagram = JSON.parse(stored) as DiagramSnapshot & {
          name?: string;
        };
        if (Array.isArray(diagram.nodes) && Array.isArray(diagram.edges)) {
          setNodes(
            diagram.nodes.map((node) => ({
              ...node,
              width: 176,
              height: 60,
            })),
          );
          setEdges(diagram.edges);
          if (diagram.name) setDiagramName(diagram.name);
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, [setEdges, setNodes]);

  useEffect(() => {
    if (!hydrated) return;
    const timeout = window.setTimeout(() => {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ name: diagramName, nodes, edges }),
      );
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
            type: "smoothstep",
            markerEnd: { type: MarkerType.ArrowClosed, color: "#64748b" },
            style: { stroke: "#64748b", strokeWidth: 1.5 },
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
    future.current = [{ nodes, edges }, ...future.current.slice(0, 39)];
    history.current = history.current.slice(0, -1);
    setNodes(previous.nodes);
    setEdges(previous.edges);
    refreshHistoryControls((version) => version + 1);
  }, [edges, nodes, setEdges, setNodes]);

  const redo = useCallback(() => {
    const next = future.current[0];
    if (!next) return;
    history.current = [...history.current, { nodes, edges }];
    future.current = future.current.slice(1);
    setNodes(next.nodes);
    setEdges(next.edges);
    refreshHistoryControls((version) => version + 1);
  }, [edges, nodes, setEdges, setNodes]);

  const reset = useCallback(() => {
    commitHistory();
    setNodes(starterNodes);
    setEdges(starterEdges);
    window.setTimeout(() => fitView({ padding: 0.2, duration: 450 }), 0);
  }, [commitHistory, fitView, setEdges, setNodes]);

  const exportDiagram = useCallback(() => {
    const file = new Blob(
      [JSON.stringify({ name: diagramName, nodes, edges }, null, 2)],
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
    URL.revokeObjectURL(url);
  }, [diagramName, edges, nodes]);

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

  const edgeDefaults = useMemo(
    () => ({
      type: "smoothstep",
      markerEnd: { type: MarkerType.ArrowClosed, color: "#64748b" },
      style: { stroke: "#64748b", strokeWidth: 1.5 },
    }),
    [],
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
              className="w-36 truncate rounded px-1 text-sm font-semibold text-slate-100 outline-none placeholder:text-slate-600 focus-visible:ring-2 focus-visible:ring-sky-400/70 sm:w-56"
              placeholder="Untitled design"
            />
            <p className="hidden items-center gap-1.5 text-[10px] text-slate-600 sm:flex">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Saved locally
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
            onClick={exportDiagram}
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
            onNodesChange={(changes) => {
              if (changes.some((change) => change.type === "remove"))
                commitHistory();
              onNodesChangeBase(changes);
            }}
            onEdgesChange={(changes) => {
              if (changes.some((change) => change.type === "remove"))
                commitHistory();
              onEdgesChangeBase(changes);
            }}
            onNodeDragStart={commitHistory}
            onConnect={onConnect}
            defaultEdgeOptions={edgeDefaults}
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
