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
  type: "openAiNode" | "LLMchain" | "PromptTemplates";
  data: any;
  position: { x: number; y: number };
}

const initialNodes: initialNodesI[] = [
  //   {
  //     id: "1",
  //     type: "openAiNode",
  //     data: { label: "Input Node" },
  //     position: { x: -400, y: 25 },
  //   },
  //   {
  //     id: "2",
  //     type: "LLMchain",
  //     data: { label: <div>Default Node</div> },
  //     position: { x: 100, y: 125 },
  //   },
  //   {
  //     id: "3",
  //     type: "PromptTemplates",
  //     data: { label: "Output Node" },
  //     position: { x: -100, y: -300 },
  //   },
  //   {
  //     id: "4",
  //     type: "node",
  //     data: { label: <div>Default Node</div> },
  //     position: { x: 200, y: 200 },
  //   },
];

const initialEdges: any = [
  //   { id: "e1-2", source: "1", target: "2", animated: false },
  //   { id: "e3-2", source: "3", target: "2", animated: false },
  //   { id: "e2-4", source: "2", target: "4", animated: false },
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

  const [nodeClasses, setNodeClasses] = useState([]);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      //receive nodeTypes "openAiNode" | "LLMchain" | "PromptTemplates" from sidebar.tsx
      const type = event.dataTransfer.getData("application/reactflow");
      console.log("type:", type);
      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }
      //----------- class creation --------------------
      let newnodeclass;
      if (type === "PromptTemplates") {
        newnodeclass = new Prompt();
        console.log(newnodeclass);
      } else if (type === "openAiNode") {
        newnodeclass = new Openai();
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      if (newnodeclass) {
        const newNode = {
          id: getId(),
          type: "node",
          position,
          data: {
            inputs: newnodeclass.inputs,
            outputs: newnodeclass.outputs,
            description: newnodeclass.description,
            icon: newnodeclass.icon,
            parameters: newnodeclass.parameters,
            name: newnodeclass.name,
          },
        };

        setNodes((nds) => nds.concat(newNode));
      }
    },
    [reactFlowInstance]
  );

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

  const nodeTypes = useMemo(
    () => ({
      openAiNode: OpenAINode,
      LLMchain: LLMchain,
      PromptTemplates: PromptTemplates,
      node: ComposableNode,
    }),
    []
  );
  const [backgroundVariant, setBackgroundVariant] = useState("cross");
  return (
    <div className="w-full h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
        nodeTypes={nodeTypes}
      >
        <MiniMap zoomable pannable />
        <Background variant={backgroundVariant as any} />
        <Panel position="top-right" className="bg-gray-300 p-4 rounded-md">
          <div>Bg-style:</div>
          <div className="flex space-x-2">
            <button onClick={() => setBackgroundVariant("dots")}>dots</button>
            <button onClick={() => setBackgroundVariant("lines")}>lines</button>
            <button onClick={() => setBackgroundVariant("cross")}>cross</button>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default Flow;
