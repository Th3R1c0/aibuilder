import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";
const handleStyle = { left: 10 };

const LLMchain = () => {
  //   const onChange = useCallback((evt) => {
  //     console.log(evt.target.value);
  //   }, []);

  return (
    <div className=" shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex justify-between items-center p-2 bg-gray-200">
        <div className="flex items-center space-x-4 flex-1 ">
          <IoSettingsSharp />
          <div>LLM chain</div>
        </div>
        <BiTrash />
      </div>
      <div className="p-4 flex flex-col">
        <div>Inputs: </div>
        <div>Outputs: </div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default LLMchain;
