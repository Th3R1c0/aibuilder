"use client";
/* eslint-disable react/display-name */
import { RxCross1 } from "react-icons/rx/";

import React, { useContext, useEffect, useState } from "react";
import { flowContext } from "@/GlobalRedux/ReactFlowContext";
import { IoAdd } from "react-icons/io5";
import { IconType } from "react-icons";
import { BiPencil } from "react-icons/bi";
import RenderEditPromptScreen from "./variableTypes/prompt";
import RenderEditMemoryScreen from "./variableTypes/memory";
import RenderEditModelScreen from "./variableTypes/model";
import NodeSettings from "./nodeSettings";

interface IvariableTypes {
  name: string;
  icon: IconType;
  fields?: any[];
}

const TopRightSideBar = () => {
  const { reactFlowInstance, setReactFlowInstance } = useContext(flowContext);
  const { currentSelectedNode, setCurrentSelectedNode } =
    useContext(flowContext);
  useEffect(() => {
    // console.log("selectedNode", currentSelectedNode?.data?.settings);
  }, [currentSelectedNode]);

  const { variables, setVariables } = useContext(flowContext);

  // sidebar screens: no_variables, variables, add_new_variable,
  const { currentSidebarScreen, setCurrentSideBarScreen } =
    useContext(flowContext);

  const [currentVariable, setCurrentVariable] = useState(null);

  //set the type of screen at the initial render

  //log variables
  useEffect(() => {
    console.log("variables change", variables);
  }, [variables]);
  const variableTypes = [
    {
      name: "Model",
      icon: RxCross1,
      display: RenderEditModelScreen,
    },
    {
      name: "Prompt",
      display: RenderEditPromptScreen,
      icon: RxCross1,
    },
    {
      name: "Memory",
      icon: RxCross1,
      display: RenderEditMemoryScreen,
    },
    {
      name: "Tools",
      icon: RxCross1,
    },
    {
      name: "Text",
      icon: RxCross1,
    },
    {
      name: "Parser",
      icon: RxCross1,
    },
  ];

  const handleAddVariable = (newvar) => {
    const newvar_withid = {
      ...newvar,
      id: variables.length + 1,
    };
    setVariables((curr) => [...curr, newvar_withid]);
    setCurrentSideBarScreen("variables");
  };

  const handleUpdateVariable = (updatedVariable) => {
    const updatedVariables = variables.map((variable) => {
      if (variable.id === updatedVariable.id) {
        return updatedVariable;
      }
      return variable;
    });

    setVariables(updatedVariables);
    setCurrentSideBarScreen("variables");
    setCurrentVariable(null);
  };

  return (
    <div className="w-full h-full flex flex-col p-4 bg-gray-100">
      <div>
        {currentSidebarScreen === "variables" && (
          <>
            <div className="flex items-center justify-between">
              <h1>Variables</h1>
              <IoAdd
                onClick={() => setCurrentSideBarScreen("add_new_variable")}
              />
            </div>

            {variables.length > 0 ? (
              variables.map((variable, index) => {
                console.log("variablesxxx", variable);
                return (
                  <div key={index} className="flex justify-between ">
                    <span>{variable?.variableName}</span>
                    <div className="flex space-x-2 items-center">
                      <span className="text-gray-400">{variable?.type} </span>
                      <BiPencil
                        onClick={() => {
                          setCurrentSideBarScreen(variable?.type);
                          setCurrentVariable(variable);
                        }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div>click + to start adding variables </div>
            )}
          </>
        )}
      </div>

      {currentSidebarScreen === "add_new_variable" && (
        <div>
          <div className="flex items-center  justify-between">
            <h1>Add New Variable</h1>
            <RxCross1 onClick={() => setCurrentSideBarScreen("variables")} />
          </div>
          <div className="flex  flex-wrap">
            {variableTypes.map(({ name, icon }) => {
              const Icon = icon;
              return (
                <div
                  key={name}
                  className="flex items-center p-2 w-1/3 h-max rounded-md border-black border"
                  onClick={() => setCurrentSideBarScreen(name)}
                >
                  <Icon />
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {currentSidebarScreen === "individual_node_settings" && <NodeSettings />}

      {variableTypes.map((variableType, index) => {
        if (variableType.name === currentSidebarScreen) {
          const DisplayComponent: any = variableType.display;
          console.log("displaying: ", DisplayComponent);
          return (
            <DisplayComponent
              key={index}
              variable={currentVariable}
              addVariable={(e) => handleAddVariable(e)}
              updateVariable={(e) => handleUpdateVariable(e)}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TopRightSideBar;
