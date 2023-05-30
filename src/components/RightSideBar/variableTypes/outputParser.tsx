"use client";

import { flowContext } from "@/GlobalRedux/ReactFlowContext";
import { useContext, useState } from "react";
import { HiX } from "react-icons/hi";

const sections = [
  {
    title: "Settings",
    content: [
      {
        name: "Type",
        optionsType: "dropdown",
        options: ["List", "Custom", "Advanced"],
      },
    ],
  },
  {
    title: "History",
    content: [
      {
        name: "Table of past parsing results ",
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

const RenderEditoutputParser = ({ variable, addVariable, updateVariable }) => {
  const isNewVariable = variable === null;
  const [selectedSettings, setSelectedSettings] = useState(
    isNewVariable
      ? {
          Type: "List",
        }
      : variable.data
  );
  const [name, setName] = useState(
    isNewVariable ? "defaultVariable" : variable.variableName
  );
  const handleAddOrUpdateVariable = () => {
    if (isNewVariable) {
      const newParserVariable = {
        type: "OuputParser",
        variableName: name,
        data: selectedSettings,
      };
      addVariable(newParserVariable);
    } else {
      const updatedParserVariable = {
        ...variable,
        type: "OuputParser",
        variableName: name,
        data: selectedSettings,
      };

      updateVariable(updatedParserVariable);
    }
  };
  const { setCurrentSideBarScreen } = useContext(flowContext);
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        <h3>Edit Output Parser</h3>
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
                    className={`bg-white rounded-md  justify-between flex p-2 flex-${
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
                            value={JSON.stringify(setting.options)}
                            onChange={(e) =>
                              setSelectedSettings(JSON.parse(e.target.value))
                            }
                            className="p-2 w-full bg-black text-white rounded-md"
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
  );
};

export default RenderEditoutputParser;
