import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { BackpackIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";

import classNames from "classnames";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import * as Slider from "@radix-ui/react-slider";
import React, { useContext, useEffect, useState } from "react";
import { flowContext } from "@/GlobalRedux/ReactFlowContext";
import { HiX } from "react-icons/hi";

// const AccordionItem = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Item
//       className={classNames(
//         " mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b ",
//         className
//       )}
//       {...props}
//       ref={forwardedRef}
//     >
//       {children}
//     </Accordion.Item>
//   )
// );

// const AccordionTrigger = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Header className="flex">
//       <Accordion.Trigger
//         className={classNames(
//           "text-violet11   group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-2 text-[15px]  border-b border-gray-300 outline-none",
//           className
//         )}
//         {...props}
//         ref={forwardedRef}
//       >
//         <div className="flex items-center gap-2">
//           <BackpackIcon />
//           {children}
//         </div>

//         <ChevronDownIcon
//           className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
//           aria-hidden
//         />
//       </Accordion.Trigger>
//     </Accordion.Header>
//   )
// );

// const AccordionContent = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => {
//     return (
//       <Accordion.Content
//         className={classNames(
//           " data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
//           className
//         )}
//         {...props}
//         ref={forwardedRef}
//       >
//         <div className="flex flex-col space-y-2">{children}</div>
//       </Accordion.Content>
//     );
//   }
// );
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

const RenderEditModelScreen = ({ variable, addVariable, updateVariable }) => {
  const isNewVariable = variable === null;
  const [selectedSettings, setSelectedSettings] = useState(
    isNewVariable
      ? {
          Type: "chat",
          Provider: "OpenAi",
          Mode: "gpt-3.5-turbo",
          Logging: "Verbose",
          "Max Tokens": 50,
          Temperature: 0.5,
          "Top P": 0.5,
        }
      : variable.data
  );
  const [name, setName] = useState(
    isNewVariable ? "defaultVariable" : variable.variableName
  );
  const handleAddOrUpdateVariable = () => {
    if (isNewVariable) {
      const newModelVariable = {
        type: "Model",
        variableName: name,
        data: selectedSettings,
      };
      addVariable(newModelVariable);
    } else {
      const updatedModelVariable = {
        ...variable,
        type: "Model",
        variableName: name,
        data: selectedSettings,
      };

      updateVariable(updatedModelVariable);
    }
  };
  const { setCurrentSideBarScreen } = useContext(flowContext);
  return (
    <>
      <div className="w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5">
        <div> </div>

        <div className="flex justify-between items-center">
          <h3>Edit Model</h3>
          <HiX onClick={() => setCurrentSideBarScreen("variables")} />
        </div>
        {sections.map((section, sectionIndex) => {
          return (
            <div
              key={sectionIndex}
              className="p-2 border-2 flex flex-col space-y-2"
            >
              <div>{section.title}</div>
              <div>
                name:{" "}
                <input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                {section.content.map((setting) => {
                  return (
                    <div
                      key={setting.name}
                      className={`bg-white rounded-md justify-between flex p-2 flex-${
                        setting.optionsType === "code" ? "col" : "row"
                      } items-center`}
                    >
                      <p>{setting.name}:</p>
                      <div className="space-x-2">
                        {setting.optionsType === "button" &&
                          setting.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                setSelectedSettings((prev) => ({
                                  ...prev,
                                  [setting.name]: option,
                                }))
                              }
                              className={classNames("p-2 rounded-md", {
                                "bg-gray-400":
                                  selectedSettings[setting.name] === option,
                                "bg-gray-200":
                                  selectedSettings[setting.name] !== option,
                              })}
                            >
                              {option}
                            </button>
                          ))}
                        {setting.optionsType === "dropdown" && (
                          <select
                            value={selectedSettings[setting.name]}
                            onChange={(e) =>
                              setSelectedSettings((prev) => ({
                                ...prev,
                                [setting.name]: e.target.value,
                              }))
                            }
                          >
                            {setting.options?.map((option, index) => (
                              <option key={index}>{option}</option>
                            ))}
                          </select>
                        )}
                        {setting.optionsType === "slider" && (
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={selectedSettings[setting.name] * 100}
                            onChange={(e) =>
                              setSelectedSettings((prev) => ({
                                ...prev,
                                [setting.name]: e.target.value / 100,
                              }))
                            }
                            className="w-[200px] h-5"
                          />
                        )}
                        {setting.optionsType === "input" && (
                          <input
                            type="text"
                            value={selectedSettings[setting.name]}
                            onChange={(e) =>
                              setSelectedSettings((prev) => ({
                                ...prev,
                                [setting.name]: e.target.value,
                              }))
                            }
                            className="p-2 rounded-md"
                          />
                        )}
                        {setting.optionsType === "code" && (
                          <>
                            <br />
                            <textarea
                              value={JSON.stringify(selectedSettings)}
                              onChange={(e) =>
                                setSelectedSettings(JSON.parse(e.target.value))
                              }
                              className="p-2 bg-black text-white rounded-md"
                            />
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <button
          className="rounded-md p-1 border-black border"
          onClick={handleAddOrUpdateVariable}
        >
          {isNewVariable ? "Add" : "Done"}
        </button>
      </div>
    </>
  );
};

export default RenderEditModelScreen;
