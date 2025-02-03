"use client";

import {
  addEdge,
  Background,
  BuiltInNode,
  Controls,
  Edge,
  EdgeTypes,
  NodeTypes,
  OnConnect,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback } from "react";
import { DesignComponent } from "./design-component";

export const initialNodes: BuiltInNode[] = [
  {
    id: "a",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "Apache" },
  },
  {
    id: "b",
    position: { x: -100, y: 100 },
    data: { label: "Websocket" },
  },
  { id: "c", position: { x: 100, y: 100 }, data: { label: "Server" } },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "Flow" },
  },
];

export const nodeTypes = {} satisfies NodeTypes;

const initialEdges = [
  { id: "a->c", source: "a", target: "c", animated: true },
  { id: "b->d", source: "b", target: "d" },
  { id: "c->d", source: "c", target: "d", animated: true },
] satisfies Edge[];

const edgeTypes = {} satisfies EdgeTypes;

export const Editor = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        colorMode="dark"
        fitView
      >
        <Background />
        <Controls />
        <DesignComponent />
      </ReactFlow>
    </div>
  );
};
