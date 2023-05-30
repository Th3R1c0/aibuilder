"use client";

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
  Input,
} from "@mui/material";
import { flowContext } from "@/GlobalRedux/ReactFlowContext";
import GrBug from "react-icons/gr";
import {
  Cross2Icon,
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { FcCheckmark } from "react-icons/fc";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import * as Popover from "@radix-ui/react-popover";
import VariableSearch from "@/components/nodeComponents/variableSearch";
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

  const {
    reactFlowInstance,
    setReactFlowInstance,
    currentVariableSelected,
    setCurrentVariableSelected,
  } = useContext(flowContext);
  const { deleteNode, duplicateNode } = useContext(flowContext);

  const { currentSidebarScreen, setCurrentSideBarScreen } =
    useContext(flowContext);

  const { currentSelectedNode, setCurrentSelectedNode } =
    useContext(flowContext);

  const { variableSearchPopup, setVariableSearchPopup } =
    useContext(flowContext);

  const handleSelectVariable = (variable) => {
    setCurrentVariableSelected(variable);
    setVariableSearchPopup(data.id);
  };

  useEffect(() => {
    console.log(
      `CURRENTSELECTEDNODEIS: ${JSON.stringify(currentSelectedNode)}`
    );
  }, [currentSelectedNode]);
  const handleClick = () => {
    setCurrentSelectedNode(data);
    setCurrentSideBarScreen("individual_node_settings");
  };
  return (
    // overflow hidden creates half circles
    <>
      <NodeToolbar
        isVisible={variableSearchPopup === data.id}
        position={"right"}
      >
        <VariableSearch
          setVariableSearchPopup={(state: boolean) => {
            //put in seperate function called close variable search
            setVariableSearchPopup(state);
            setCurrentVariableSelected(null);
          }}
          currentVariableSelected={currentVariableSelected}
        />
      </NodeToolbar>
      <div
        className={` shadow-md bg-white  border-2 border-${
          currentSelectedNode?.id === data.id
        } rounded-lg  flex flex-col `}
        onClick={handleClick}
      >
        {/* header */}
        <div className="flex flex-col p-2 border-b-2 border-gray-300">
          {/* top header bar */}
          <div className="flex justify-between text-2xl space-x-12 items-center  ">
            <div className="flex items-center space-x-2 flex-1  text-2xl font-bold ">
              <FcCheckmark />
              <div>{data.name}</div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="flex space-x-2">
              <BiBug className=" hover:bg-gray-200 rounded-md " />
              <HiOutlineDocumentDuplicate
                onClick={() => duplicateNode(data.id)}
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
        {/* render paramters if we have any inputs which turn into inputAnchors from algorythm */}
        {data.InputParams && (
          <div className="flex flex-col p-4 border-b-2 space-y-4 border-gray-300">
            {data.InputParams.map((parameter: any, index: number) => {
              return (
                <div key={index} className="w-full 200 justify-between flex">
                  <div>{parameter.name}</div>
                  {parameter.type === "string" ? (
                    <Input placeholder="enter name" />
                  ) : (
                    <button className="rounded-md border-2 border-black  px-2">
                      varialbe
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}{" "}
        {/* render variables */}
        {data.variables.length > 0 && (
          <div className="flex flex-col p-4 border-b-2 space-y-4 border-gray-300">
            {data.variables.map((variable: any, index: number) => {
              return (
                <div key={index} className="w-full 200 justify-between flex">
                  <div>{variable.label}</div>
                  <button
                    onClick={() => handleSelectVariable(variable)}
                    className={` bg-${
                      currentVariableSelected === variable ? "gray-200" : "none"
                    } rounded-md border-2 border-black  px-2 hover:bg-gray-200`}
                  >
                    {variable.variableName === ""
                      ? "+ Add"
                      : variable.variableName}
                  </button>
                </div>
              );
            })}{" "}
          </div>
        )}{" "}
        {/* render inputs */}
        {data.inputAnchors &&
          data.inputAnchors.map((inputAnchor: any, index: any) => {
            console.log(`inputAnchors: ${JSON.stringify(inputAnchor)}`);
            if (inputAnchor.optional === true) {
              return (
                <Tooltip key={index} title={inputAnchor.type}>
                  <div className="p-4 flex items-center justify-center text-gray-400 border-b-2 border-gray-300 relative">
                    <div>Start by dragging a chain here</div>
                  </div>
                </Tooltip>
              );
            }

            return (
              <Tooltip key={index} title={inputAnchor.type}>
                <div className="p-4 flex flex-col border-b-2 border-gray-300 relative">
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
