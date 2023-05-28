"use client";

// {
//   "label": "LLM Chain",
//   "name": "llmChain",
//   "type": "LLMChain",
//   "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chains/LLMChain/chain.svg",
//   "category": "Chains",
//   "description": "Chain to run queries against LLMs",
//   "baseClasses": [
//       "LLMChain",
//       "BaseChain",
//       "BaseLangChain"
//   ],
//   "inputs": {
//       "model": "",
//       "prompt": "",
//       "chainName": ""
//   },
//   "outputs": {
//       "output": "llmChain"
//   },
//   "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chains\\LLMChain\\LLMChain.js",
//   "inputAnchors": [
//       {
//           "label": "Language Model",
//           "name": "model",
//           "type": "BaseLanguageModel",
//           "id": "llmChain_0-input-model-BaseLanguageModel"
//       },
//       {
//           "label": "Prompt",
//           "name": "prompt",
//           "type": "BasePromptTemplate",
//           "id": "llmChain_0-input-prompt-BasePromptTemplate"
//       }
//   ],
//   "inputParams": [
//       {
//           "label": "Chain Name",
//           "name": "chainName",
//           "type": "string",
//           "placeholder": "Name Your Chain",
//           "optional": true,
//           "id": "llmChain_0-input-chainName-string"
//       }
//   ],
//   "outputAnchors": [
//       {
//           "name": "output",
//           "label": "Output",
//           "type": "options",
//           "options": [
//               {
//                   "id": "llmChain_0-output-llmChain-LLMChain|BaseChain|BaseLangChain",
//                   "name": "llmChain",
//                   "label": "LLM Chain",
//                   "type": "LLMChain | BaseChain | BaseLangChain"
//               },
//               {
//                   "id": "llmChain_0-output-outputPrediction-string",
//                   "name": "outputPrediction",
//                   "label": "Output Prediction",
//                   "type": "string"
//               }
//           ],
//           "default": "llmChain"
//       }
//   ],
//   "id": "llmChain_0"

// }
import { Listbox } from "@headlessui/react";
import { useContext, useEffect } from "react";
import {
  Handle,
  NodeToolbar,
  Position,
  useUpdateNodeInternals,
} from "reactflow";
import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { BiBug, BiPencil, BiTrash } from "react-icons/bi";
const handleStyle = { left: 10 };
import {
  Box,
  Typography,
  Tooltip,
  FormControl,
  Autocomplete,
  TextField,
} from "@mui/material";
import { flowContext } from "@/GlobalRedux/ReactFlowContext";
import GrBug from "react-icons/gr";
import {
  Cross2Icon,
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
export const isValidConnection = (connection, reactFlowInstance) => {
  const sourceHandle = connection.sourceHandle;
  const targetHandle = connection.targetHandle;
  const target = connection.target;

  //sourceHandle: "llmChain_0-output-llmChain-BaseChain"
  //targetHandle: "mrlkAgentLLM_0-input-model-BaseLanguageModel"
  //split to get the last parts of the id seperated by |
  const sourceTypes = sourceHandle
    .split("-")
    [sourceHandle.split("-").length - 1].split("|");
  const targetTypes = targetHandle
    .split("-")
    [targetHandle.split("-").length - 1].split("|");
  //if target includes source
  if (targetTypes.some((t) => sourceTypes.includes(t))) {
    // let targetNode = reactFlowInstance.getNode(target);

    // if (!targetNode) {
    //   if (
    //     !reactFlowInstance
    //       .getEdges()
    //       .find((e) => e.targetHandle === targetHandle)
    //   ) {
    //     return true;
    //   }
    // }
    let targetNode = reactFlowInstance.getNode(target);

    if (
      !reactFlowInstance.getEdges().find((e) => e.targetHandle === targetHandle)
    ) {
      return true;
    } else {
      const targetNodeInputAnchor =
        targetNode.data.inputAnchors.find((ancr) => ancr.id === targetHandle) ||
        targetNode.data.inputParams.find((ancr) => ancr.id === targetHandle);
      if (
        (targetNodeInputAnchor &&
          !targetNodeInputAnchor?.list &&
          !reactFlowInstance
            .getEdges()
            .find((e) => e.targetHandle === targetHandle)) ||
        targetNodeInputAnchor?.list
      ) {
        return true;
      }
    }
  }
  return false;
};

const ComposableNode = ({ data }: any) => {
  //   const onChange = useCallback((evt) => {
  //     console.log(evt.target.value);
  //   }, []);
  const updateNodeInternals = useUpdateNodeInternals();
  const [dropdownValue, setDropdownValue] = useState(null);

  //notify react-flow that a node has internally changed something of itsself like its handle position or number of handles
  useEffect(() => {
    if (dropdownValue) {
      setTimeout(() => {
        updateNodeInternals(data.id);
      }, 0);
    }
  }, [dropdownValue]);
  const { reactFlowInstance, setReactFlowInstance } = useContext(flowContext);
  const { deleteNode, duplicateNode } = useContext(flowContext);

  const [settings, setIsSettingsOpen] = useState(false);

  const [variableSearchPopup, setIsVariableSearchPopup] = useState(false);
  const handleEditVariable = (variableName: string) => {
    // when there is no variable (variableName === ''), open a popup? or go to sidebar and open variable tab? orrrr.
  };
  return (
    // overflow hidden creates half circles
    <>
      <div className=" shadow-md hover:border-blue-800  bg-white border-2 border-gray-300 rounded-lg  flex flex-col ">
        {/* header */}
        <div className="flex flex-col p-2 border-b-2 border-gray-300">
          {/* top header bar */}
          <div className="flex justify-between text-2xl space-x-12 items-center  ">
            <div className="flex items-center space-x-4 flex-1  text-2xl font-bold ">
              <IoSettingsSharp />
              <div>{data.name}</div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="flex space-x-2">
              <BiBug className=" hover:bg-gray-200 rounded-md " />
              <BiPencil
                onClick={() => setIsSettingsOpen((e) => !e)}
                className=" hover:bg-gray-200 rounded-md "
              />
              <BiTrash
                className=" hover:bg-gray-200 rounded-md "
                onClick={() => deleteNode(data.id)}
              />
            </div>
          </div>
          <div className="text-sm flex flex-col ">
            <p>{data.description}</p>
          </div>
        </div>
        {/* render inputs */}
        {data.inputAnchors &&
          data.inputAnchors.map((inputAnchor: any, index: any) => {
            // console.log(`inputAnchors: ${JSON.stringify(inputAnchor)}`);
            return (
              <Tooltip key={index} title={inputAnchor.type}>
                <div className="p-4 flex flex-col bg-gray-200 relative">
                  <div>{inputAnchor.label}</div>
                  <Handle
                    position={Position.Left}
                    type="target"
                    key={inputAnchor.id}
                    id={inputAnchor.id}
                    isValidConnection={(connection) =>
                      isValidConnection(connection, reactFlowInstance)
                    }
                    className=" absolute top-30 w-4 h-4 left-[-10px] "
                  />
                </div>
              </Tooltip>
            );
          })}
        {/* render paramters if we have any inputs which turn into inputAnchors from algorythm */}
        {/* {data.inputParams && (
          <div className="flex flex-col p-8 border-b-2 space-y-4 border-gray-300">
            {data.inputParams.map((parameter: any, index: number) => {
              return (
                <div key={index} className="w-full 200 justify-between flex">
                  <div>{parameter.name}</div>
                  <button className="rounded-md border-2 border-black  px-2">
                    varialbe
                  </button>
                </div>
              );
            })}
          </div>
        )}{" "} */}
        {/* render variables */}
        <div className="flex flex-col p-8 border-b-2 space-y-4 border-gray-300">
          {data.variables &&
            data.variables.map((variable: any, index: number) => {
              return (
                <div key={index} className="w-full 200 justify-between flex">
                  <div>{variable.label}</div>
                  <button
                    onClick={handleEditVariable(variable.variableName)}
                    className="rounded-md border-2 border-black  px-2"
                  >
                    {variable.variableName === ""
                      ? "+ Add"
                      : variable.variableName}
                  </button>
                </div>
              );
            })}{" "}
        </div>
        {/* render outputs */}
        <div className="py-2">
          {data?.outputAnchors?.map((outputAnchor: any, index: any) => {
            // if (outputAnchor.type !== "options" && !outputAnchor.options) {

            return (
              <div key={index}>
                {outputAnchor.options.map(
                  (_outputAnchor: any, index: number) => {
                    return (
                      <Tooltip
                        key={index}
                        placement="bottom"
                        title={_outputAnchor.type}
                      >
                        <div className=" text-end flex flex-col relative">
                          <Handle
                            isValidConnection={(connection) =>
                              isValidConnection(connection, reactFlowInstance)
                            }
                            position={Position.Right}
                            type="source"
                            key={_outputAnchor.id}
                            id={_outputAnchor.id}
                            className="bg-black absolue top-30 w-4 h-4 right-[-10px] "
                          />
                          <div className=" px-4">{_outputAnchor.label}</div>
                        </div>
                      </Tooltip>
                    );
                  }
                )}
              </div>
            );
          })}
        </div>
        {/* {optional outputs} */}
        {/* {data?.outputAnchors?.map((outputAnchor: any, index: any) => {
          if (outputAnchor.type !== "options" && !outputAnchor.options) {
            return (
              <Tooltip key={index} placement="bottom" title={outputAnchor.type}>
                <div className="p-4 flex flex-col bg-gray-200 relative">
                  <Handle
                    isValidConnection={(connection) =>
                      isValidConnection(connection, reactFlowInstance)
                    }
                    position={Position.Right}
                    type="source"
                    key={outputAnchor.id}
                    id={outputAnchor.id}
                    className="bg-black absolute top-30 w-4 h-4 right-[-10px] "
                  />
                  <div>{outputAnchor.label}</div>
                </div>
              </Tooltip>
            );
          } else if (
            outputAnchor.type === "options" &&
            outputAnchor.options &&
            outputAnchor.options.length > 0
          ) {
            return (
              <div key={index}>
                <Tooltip
                  key={index}
                  placement="bottom"
                  title={
                    outputAnchor.options.find(
                      (opt) => opt.name === data.outputs?.[outputAnchor.name]
                    )?.type ?? outputAnchor.type
                  }
                >
                  <div className="p-4 flex flex-col bg-gray-200 relative">
                    <Handle
                      position={Position.Right}
                      type="source"
                      key={outputAnchor.id}
                      id={outputAnchor.id}
                      className="bg-black absolute top-30 w-4 h-4 right-[-10px] "
                    />
                    <div>{outputAnchor.label}</div>
                    <label>
                      choose a output
                      <br />
                      <select>
                        {outputAnchor.options.map(
                          (option: any, index: number) => {
                            // console.log(
                            //   `output Anchor: ${JSON.stringify(option)}`
                            // );
                            return (
                              <option key={index} value={option.label}>
                                {option.label}
                              </option>
                            );
                          }
                        )}{" "}
                      </select>
                    </label>
                  </div>
                </Tooltip>
              </div>
            );
          }
        })} */}
      </div>
    </>
  );
};

export default ComposableNode;
