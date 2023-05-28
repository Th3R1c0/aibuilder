"use client";
/* eslint-disable react/display-name */
import { RxCross1 } from "react-icons/rx/";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { BackpackIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";

import classNames from "classnames";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import * as Slider from "@radix-ui/react-slider";

import React, { useContext, useEffect, useState } from "react";
import { flowContext } from "@/GlobalRedux/ReactFlowContext";
import { IoAdd } from "react-icons/io5";
import { IconType } from "react-icons";
import { BiPencil } from "react-icons/bi";
import RenderEditPromptScreen from "./prompt";
import RenderEditMemoryScreen from "./memory";

interface IvariableTypes {
  name: string;
  icon: IconType;
  fields?: any[];
}

//for rendering heaps that have the same layout or something
// const RenderEditVariableScreen = ({ variableType }) => {
//   return (
//     <div className="flex flex-col space-y-2">
//       <h3>Edit {variableType.name}</h3>
//     </div>
//   );
// };

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        " mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-violet11   group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-2 text-[15px]  border-b border-gray-300 outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="flex items-center gap-2">
          <BackpackIcon />
          {children}
        </div>

        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Accordion.Content
        className={classNames(
          " data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="flex flex-col space-y-2">{children}</div>
      </Accordion.Content>
    );
  }
);

const TopRightSideBar = () => {
  const sections = [
    {
      title: "Model Selection",
      content: [
        {
          name: "Type",
          optionsType: "button",
          options: ["chat", "Completion"],
        },
        {
          name: "Provider",
          optionsType: "dropdown",
          options: ["OpenAi", "HuggingFace"],
        },
        {
          name: "Mode",
          optionsType: "dropdown",
          options: ["gpt-3.5-turbo"],
        },
      ],
    },
    {
      title: "Model Configuration",
      content: [
        {
          name: "Logging",
          optionsType: "button",
          options: ["Verbose", "Default"],
        },
        {
          name: "Max Tokens",
          optionsType: "input",
        },
        {
          name: "Temperature",
          optionsType: "slider",
          options: [0, 1],
        },
        {
          name: "Top P",
          optionsType: "slider",
          options: [0, 1],
        },
      ],
    },
    {
      title: "Advanced Settings",
      content: [
        {
          name: "You can provide additional configs through the json below ",
          optionsType: "code",
          options: [
            "best_of",
            "logprobs",
            "max_examples",
            "n",
            "presence_penalty",
            "frequency_penalty",
            "stop",
            "stream",
          ],
        },
      ],
    },
  ];
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

  //update sidebar when currectSelectedNode changes
  useEffect(() => {
    if (currentSelectedNode !== null) {
      setCurrentSideBarScreen("individual_node_settings");
      console.log("NODE AINT NULLLLLLLL");
    }
  }, [currentSelectedNode]);

  return (
    <div className="w-full h-full flex flex-col p-4 bg-gray-100">
      {currentSidebarScreen === "no Variables" && (
        <>
          <div className="flex items-center justify-between">
            <h1>Variables</h1>
            <IoAdd
              onClick={() => setCurrentSideBarScreen("add_new_variable")}
            />
          </div>
          <div>click + to start adding variables </div>
        </>
      )}
      {currentSidebarScreen === "variables" && (
        <div>
          <div className="flex items-center justify-between">
            <h1>Variables</h1>
            <IoAdd
              onClick={() => setCurrentSideBarScreen("add_new_variable")}
            />
          </div>
          {variables.map((variable, index) => {
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
          })}
        </div>
      )}
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

      {variableTypes.map((variableType, index) => {
        if (variableType.name === currentSidebarScreen) {
          const DisplayComponent = variableType.display;
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

      {/* component: individualNodeSettings */}

      {/* <Accordion.Root
        className=" w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="multiple"
        value={["Model Selection", "Model Configuration", "Advanced Settings"]}
      >
         old sidebar 
         <h1>{currentSelectedNode?.id}</h1>
        {currentSelectedNode?.data?.settings?.map((section) => {
          return (
            <AccordionItem
              key={section.title}
              value={section.title}
              className="p-2 border-2 flex flex-col space-y-2"
            >
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>
                {section.content.map((setting) => {
                  return (
                    <div
                      key={setting.name}
                      className="bg-white rounded-md justify-between p-2 flex items-center"
                    >
                      <p>{setting.name}:</p>
                      <div className="space-x-2">
                        {setting.optionsType === "button" &&
                          setting.options.map((option, index) => (
                            <button
                              key={index}
                              className="p-2 bg-gray-200 rounded-md"
                            >
                              {option}
                            </button>
                          ))}
                        {setting.optionsType === "dropdown" && (
                          <select>
                            {setting.options?.map((option, index) => (
                              <option key={index}>{option}</option>
                            ))}
                          </select>
                        )}
                        {setting.optionsType === "slider" && (
                          <form>
                            <Slider.Root
                              className="relative flex items-center select-none touch-none w-[200px] h-5"
                              defaultValue={[50]}
                              max={100}
                              step={1}
                            >
                              <Slider.Track className="bg-blackA10 relative grow rounded-full h-[3px]">
                                <Slider.Range className="absolute bg-white rounded-full h-full" />
                              </Slider.Track>
                              <Slider.Thumb
                                className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
                                aria-label="Volume"
                              />
                            </Slider.Root>
                          </form>
                        )}
                        {setting.optionsType === "input" && (
                          <input type="text" className="p-2 rounded-md" />
                        )}
                        {setting.optionsType === "code" && (
                          <>
                            <br />
                            <textarea className="p-2 rounded-md" />
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })} 
      </Accordion.Root> */}

      {/* <Accordion.Root
        className=" w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {Object.keys(groupedData).map((category, index) => {
          return (
            <AccordionItem
              key={index}
              value={category}
              className="p-2 border-2 "
            >
              <AccordionTrigger>{category}</AccordionTrigger>
              <AccordionContent>
                {groupedData[category].map((node, index) => {
                  return (
                    <div
                      key={index}
                      onDragStart={(event) => onDragStart(event, node as any)}
                      draggable
                      className="bg-white rounded-md border-2 p-2 flex items-center"
                    >
                      <DragHandleDots2Icon />
                      {node.name}
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion.Root>  */}
    </div>
  );
};

export default TopRightSideBar;
