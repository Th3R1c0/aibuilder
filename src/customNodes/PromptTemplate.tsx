import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";
const handleStyle = { left: 10 };

const PromptTemplate = () => {
  //   const onChange = useCallback((evt) => {
  //     console.log(evt.target.value);
  //   }, []);

  return (
    <div className=" shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex justify-between items-center p-2 bg-gray-200">
        <div className="flex items-center space-x-4 flex-1 ">
          <IoSettingsSharp />
          <div>Simple Prompt</div>
        </div>
        <BiTrash />
      </div>
      <div className="p-4 flex flex-col">
        <label htmlFor="api-key">Enter Prompt Template</label>
        <input type="text" placeholder="..." />
        <div>
          variables:
          <input type="text" placeholder="Enter" />
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default PromptTemplate;
