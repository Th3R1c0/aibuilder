"use client";

import { useCallback, useMemo, useState, useRef } from "react";
//react tabs

import "react-tabs/style/react-tabs.css";

import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  MiniMap,
  Background,
  Panel,
  ReactFlowProvider,
  Controls,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

//node classes
import { Prompt } from "../../langchainModuleClasses/prompt";
import { Openai } from "../../langchainModuleClasses/openai";
//custom nodes
import OpenAINode from "../customNodes/openAI";
import LLMchain from "../customNodes/LLMchain";
import PromptTemplates from "../customNodes/PromptTemplate";
import ComposableNode from "../customNodes/node";

interface initialNodesI {
  id: string;
  type: "openAiNode" | "LLMchain" | "PromptTemplates" | "node";
  data: any;
  position: { x: number; y: number };
}

const initialNodes: initialNodesI[] = [
  {
    id: "1",
    type: "node",
    data: {
      inputs: [1],
      outputs: [
        {
          descripton: "openai llm",
          type: "output",
        },
      ],
      description: "Connect to Open Ai llm",
      icon: "icon",
      parameters: [
        {
          descripton: "enter your api key here",
          type: "parameter",
        },
      ],
      name: "API KEY",
    },
    position: { x: -100, y: 325 },
  },
  {
    id: "2",
    type: "node",
    data: {
      inputs: [1],
      outputs: [
        {
          descripton: "openai llm",
          type: "output",
        },
      ],
      description: "description",
      icon: "icon",
      parameters: [
        {
          descripton: "enter your api key here",
          type: "parameter",
        },
      ],
      name: "LLM",
    },
    position: { x: 500, y: 200 },
  },
  {
    id: "3",
    type: "node",
    data: {
      inputs: [1],
      outputs: [
        {
          descripton: "openai llm",
          type: "output",
        },
      ],
      description: "Enter your prompt here",
      icon: "icon",
      parameters: [
        {
          descripton: "enter your llm here",
          type: "parameter",
        },
      ],
      name: "PROMPT",
    },
    position: { x: 0, y: -200 },
  },
  {
    id: "4",
    type: "node",
    data: {
      inputs: [1],
      outputs: [
        {
          descripton: "openai llm",
          type: "output",
        },
      ],
      description: "zero shot agent",
      icon: "icon",
      parameters: [
        {
          descripton: "enter zero shot prompt",
          type: "parameter",
        },
      ],
      name: "zero shot agent",
    },
    position: { x: 900, y: 500 },
  },
  {
    id: "5",
    type: "node",
    data: {
      inputs: [1],
      outputs: [
        {
          descripton: "openai llm",
          type: "output",
        },
      ],
      description: "Search for a vector in the database",
      icon: "icon",
      parameters: [
        {
          descripton: "enter pine cone index",
          type: "parameter",
        },
      ],
      name: "vector database",
    },
    position: { x: 400, y: -300 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: false },
  { id: "e3-2", source: "3", target: "2", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: false },
  { id: "e5-2", source: "5", target: "2", animated: true },
];

//drag and drop
let id = 5;
const getId = () => `dndnode_${id++}`;

const Flow = () => {
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  //drag and drop html native
  const [reactFlowInstance, setReactFlowInstance] = useState<any | null>(null);
  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );
  // const onEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
  const onConnect = useCallback(
    (connection: any) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const [backgroundVariant, setBackgroundVariant] = useState("cross");
  const nodeTypes = useMemo(
    () => ({
      openAiNode: OpenAINode,
      LLMchain: LLMchain,
      PromptTemplates: PromptTemplates,
      node: ComposableNode,
    }),
    []
  );
  return (
    <div className=" w-full hidden lg:inline h-screen " ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDragOver={onDragOver}
        fitView
        nodeTypes={nodeTypes}
      >
        <Background variant={backgroundVariant as any} />
        {/* <MiniMap zoomable pannable />
        
        <Panel position="top-right" className="bg-gray-300 p-4 rounded-md">
          <div>Bg-style:</div>
          <div className="flex space-x-2">
            <button onClick={() => setBackgroundVariant("dots")}>dots</button>
            <button onClick={() => setBackgroundVariant("lines")}>lines</button>
            <button onClick={() => setBackgroundVariant("cross")}>cross</button>
          </div>
        </Panel> */}
      </ReactFlow>
    </div>
  );
};

export default Flow;
