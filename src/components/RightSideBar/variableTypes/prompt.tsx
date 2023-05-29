"use client";

import { useState, useEffect } from "react";

const RenderEditPromptScreen = ({ variable, addVariable, updateVariable }) => {
  const isNewVariable = variable === null;
  const [promptText, setPromptText] = useState(
    `${isNewVariable ? "write your prompt here ..." : variable.data.prompt}`
  );
  const [name, setName] = useState(
    isNewVariable ? "defaultVariable" : variable.variableName
  );
  const handleAddOrUpdateVariable = () => {
    const ExtractedvariablesFromPrompt = promptText
      .match(/{(.*?)}/g)
      ?.map((variable) => variable.slice(1, -1));
    const variablesFromPrompt =
      ExtractedvariablesFromPrompt === undefined
        ? []
        : ExtractedvariablesFromPrompt;
    if (isNewVariable) {
      const newPromptVariable = {
        type: "Prompt",
        variableName: name,
        data: {
          prompt: promptText,
          variables: variablesFromPrompt,
        },
      };
      addVariable(newPromptVariable);
    } else {
      const updatedPromptVariable = {
        ...variable,
        type: "Prompt",
        variableName: name,
        data: {
          prompt: promptText,
          variables: variablesFromPrompt,
        },
      };

      updateVariable(updatedPromptVariable);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <h3>Edit Prompt Template</h3>
      <div>
        name: <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="flex items-center justify-between">
        <span>Type</span>
        <div className="flex space-x-2">
          <button className="rounded-md p-1 border-black border">String</button>
          <button className="rounded-md p-1 border-black border">
            Message
          </button>
        </div>
      </div>
      <div>Template:</div>
      <div>Input variables:</div>
      <div className="flex flex-wrap">
        {promptText.match(/{(.*?)}/g)?.map((variable, index) => (
          <div key={index} className="rounded-md p-1 border-black border">
            {variable.slice(1, -1)}
          </div>
        ))}
      </div>
      <textarea
        className="w-full h-[400px]"
        value={promptText}
        onChange={(e) => setPromptText(e.target.value)}
      />
      <button
        className="rounded-md p-1 border-black border"
        onClick={handleAddOrUpdateVariable}
      >
        {isNewVariable ? "Add" : "Done"}
      </button>
    </div>
  );
};

export default RenderEditPromptScreen;
