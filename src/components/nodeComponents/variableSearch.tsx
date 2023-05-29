"use client";

import { flowContext } from "@/GlobalRedux/ReactFlowContext";
import { useContext, useState } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

const VariableSearch = ({
  setVariableSearchPopup,
  currentVariableSelected,
}) => {
  const [search, setSearch] = useState("");

  const { setCurrentSideBarScreen } = useContext(flowContext);
  const { updateNodeVariables } = useContext(flowContext);
  const { variables } = useContext(flowContext);

  const handleAddVariable = () => {
    setCurrentSideBarScreen("add_new_variable");
    setVariableSearchPopup(false);
  };

  const handleSelectVariable = (variable) => {
    setVariableSearchPopup(false);
    //variable is the selected variable from global created variables,
    //curentvariable is the variable being updated from the node
    updateNodeVariables(currentVariableSelected, variable);
  };

  return (
    <div className="flex flex-col p-4 rounded-md bg-white border-2 space-y-2  border-gray-300 ">
      <div className="flex text-2xl items-center space-x-2 ">
        <AiOutlineSearch />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-gray-300 border-2 rounded-md p-1"
          placeholder="search variables"
        />
        <AiOutlinePlus onClick={handleAddVariable} />
      </div>
      <div className="flex flex-col  ">
        {variables.length > 0 ? (
          variables.map((variable, index) => {
            return (
              <div
                className="flex items-center hover:bg-gray-100 cursor-pointer  rounded-md justify-between border-b-2 border-gray-300 p-2 space-x-2"
                key={index}
                onClick={() => handleSelectVariable(variable)}
              >
                <span>{variable.variableName}</span>
                <div className="flex items-center">
                  <span className="text-gray-400">{variable.type}</span>
                  <FiMoreVertical />
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center p-8">
            <div
              className="flex items-center space-x-2"
              onClick={handleAddVariable}
            >
              <AiOutlinePlus />
              click here to add a variable
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VariableSearch;
