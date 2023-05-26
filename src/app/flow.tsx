"use client";

import { useCallback, useMemo, useState, useRef, useContext } from "react";
//react tabs

import "react-tabs/style/react-tabs.css";

const l = (x: any) => console.log(x);

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

//custom nodes
import OpenAINode from "../customNodes/openAI";
import LLMchain from "../customNodes/LLMchain";
import PromptTemplates from "../customNodes/PromptTemplate";
import ComposableNode from "../customNodes/node";
import { getUniqueNodeId, initNode } from "../../utils";

import { type Connection } from "reactflow";
import { flowContext } from "@/GlobalRedux/ReactFlowContext";

interface initialNodesI {
  id: string;
  type: "openAiNode" | "LLMchain" | "PromptTemplates" | "node";
  data: any;
  position: { x: number; y: number };
}

const initialNodes: initialNodesI[] = [];

const initialEdges: any = [];

//drag and drop
let id = 5;
const getId = () => `dndnode_${id++}`;

const Flow = () => {
  const reactFlowWrapper = useRef(null);
  // const [reactFlowInstance, setReactFlowInstance] = useState<any | null>(null);
  const { reactFlowInstance, setReactFlowInstance } = useContext(flowContext);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  //drag and drop html native

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      //eslint-disable-next-line
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      //receive nodeTypes "openAiNode" | "LLMchain" | "PromptTemplates" from sidebar.tsx
      const ___nodeData = event.dataTransfer.getData("application/reactflow");
      const nodeData = JSON.parse(___nodeData);

      // check if the dropped element is valid
      if (typeof nodeData === "undefined" || !nodeData) {
        return;
      }
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      //----------- node creation --------------------
      //generates a nodeID in the format nodeData.name_totalNodes
      const newNodeId = getUniqueNodeId(nodeData, reactFlowInstance.getNodes());

      const newNode = {
        id: newNodeId,
        position,
        type: "node",
        data: initNode(nodeData, newNodeId),
      };

      setNodes((nds) => nds.concat(newNode));
    },

    //eslint-disable-next-line
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
  //make this a callback function possibly or memo for performance reasons

  const getEdgeLabelName = (source) => {
    const sourceSplit = source.split("-");
    if (sourceSplit.length && sourceSplit[0].includes("ifElse")) {
      const outputAnchorsIndex = sourceSplit[sourceSplit.length - 1];
      return outputAnchorsIndex === "0" ? "true" : "false";
    }
    return "";
  };

  const onConnect = (params: Connection) => {
    l(
      `targethandle: ${params.targetHandle}, sourceHandle: ${params.sourceHandle}, source: ${params.source}, target: : ${params.target}`
    );
    const newEdge = {
      ...params,
      type: "buttonedge",
      id: `${params.source}-${params.sourceHandle}-${params.target}-${params.targetHandle}`,
      data: { label: getEdgeLabelName(params.sourceHandle) },
    };

    const targetNodeId = params.targetHandle.split("-")[0];
    const sourceNodeId = params.sourceHandle.split("-")[0];
    const targetInput = params.targetHandle.split("-")[2];

    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === targetNodeId) {
          let value;
          const inputAnchor = node.data.inputAnchors.find(
            (ancr) => ancr.name === targetInput
          );
          const inputParam = node.data.inputParams.find(
            (param) => param.name === targetInput
          );

          if (inputAnchor && inputAnchor.list) {
            const newValues = node.data.inputs[targetInput] || [];
            if (targetInput === "tools") {
              // rearrangeToolsOrdering(newValues, sourceNodeId)
            } else {
              newValues.push(`{{${sourceNodeId}.data.instance}}`);
            }
            value = newValues;
          } else if (inputParam && inputParam.acceptVariable) {
            value = node.data.inputs[targetInput] || "";
          } else {
            value = `{{${sourceNodeId}.data.instance}}`;
          }
          node.data = {
            ...node.data,
            inputs: {
              ...node.data.inputs,
              [targetInput]: value,
            },
          };
        }
        return node;
      })
    );

    setEdges((eds) => addEdge(newEdge, eds));
  };

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
        {/* nodelibrary needs to be a pannnel
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
