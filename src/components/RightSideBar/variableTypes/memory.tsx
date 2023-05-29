import { useState } from "react";

interface ImemoryData {
  memorySize: "Tokens" | "Sentences" | "Paragraphs";
  memoryType: "Conversation" | "Entity" | "Summary";
}

const RenderEditMemoryScreen = ({ variable, addVariable, updateVariable }) => {
  const isNewVariable = variable === null;
  console.log("memory: ", isNewVariable);
  const [name, setName] = useState(
    isNewVariable ? "defaultVariable" : variable.variableName
  );
  const memoryType = ["Conversation", "Entity", "Summary"];
  const memorySize = ["Tokens", "Sentences", "Paragraphs"];
  const memorySettings = [
    {
      label: "Type",
      options: memoryType,
    },
    {
      label: "Size",
      options: memorySize,
    },
  ];
  const [memory, setMemory] = useState<ImemoryData>(
    isNewVariable
      ? {
          memoryType: "Entity",
          memorySize: "Tokens",
        }
      : variable.data
  );
  const handleAddOrUpdateVariable = () => {
    if (isNewVariable) {
      const newMemoryVariable = {
        type: "Memory",
        variableName: name,
        data: memory,
      };
      addVariable(newMemoryVariable);
    } else {
      const updatedMemoryVariable = {
        ...variable,
        type: "Memory",
        variableName: name,
        data: memory,
      };

      updateVariable(updatedMemoryVariable);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <h3>Edit Memory Settings</h3>
      <div>
        name: <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      {memorySettings.map((setting, index) => (
        <div key={index} className="flex items-center justify-between">
          <span>{setting.label}</span>
          <div className="flex space-x-2">
            {setting.options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  if (setting.label === "Type") {
                    setMemory((prevMemory) => ({
                      ...prevMemory,
                      memoryType: option,
                    }));
                  } else if (setting.label === "Size") {
                    setMemory((prevMemory) => ({
                      ...prevMemory,
                      memorySize: option,
                    }));
                  }
                }}
                className={`bg-gray-${
                  memory.memorySize === option || memory.memoryType === option
                    ? 400
                    : 100
                } rounded-md p-1 border-black border`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        className="rounded-md p-1 border-black border"
        onClick={handleAddOrUpdateVariable}
      >
        {isNewVariable ? "Add" : "Done"}
      </button>
    </div>
  );
};

export default RenderEditMemoryScreen;
