"use client";

import { flowContext } from "@/GlobalRedux/ReactFlowContext";
import { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
const NodeSettings = () => {
  const { currentSelectedNode, setCurrentSelectedNode } =
    useContext(flowContext);
  const {
    variableSearchPopup,
    setVariableSearchPopup,
    setCurrentSideBarScreen,
    setCurrentVariableSelected,
  } = useContext(flowContext);
  const handleSelectVariable = (search?: boolean, variable?) => {
    setCurrentSideBarScreen("variables");
    setCurrentSelectedNode(null);
    if (search) {
      setVariableSearchPopup(currentSelectedNode.id);
      setCurrentVariableSelected(variable);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1>Edit {currentSelectedNode.label}</h1>
        <HiOutlineX onClick={() => handleSelectVariable()} />
      </div>

      <div className="flex flex-col p-4 border-b-2 space-y-4 border-gray-300">
        {currentSelectedNode.variables.map((variable: any, index: number) => {
          return (
            <div key={index} className="w-full 200 justify-between flex">
              <div>{variable.label}</div>
              <button
                onClick={() => handleSelectVariable(true, variable)}
                className={`  rounded-md border-2 border-black  px-2 hover:bg-gray-200`}
              >
                {variable.variableName === "" ? "+ Add" : variable.variableName}
              </button>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default NodeSettings;
