"use client";

import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";
const handleStyle = { left: 10 };

const ComposableNode = ({ data }: any) => {
  //   const onChange = useCallback((evt) => {
  //     console.log(evt.target.value);
  //   }, []);
  console.log("data", data);
  return (
    <div className=" shadow-md  bg-white border-2 border-gray-500 rounded-lg flex flex-col space-y-4">
      <div className="flex justify-between text-2xl space-x-4 items-center p-2 bg-gray-200">
        <div className="flex items-center space-x-4 flex-1 text-2xl font-bold ">
          <IoSettingsSharp />
          <div>{data.name}</div>
        </div>
        <BiTrash />
      </div>
      <div className="p-4 flex flex-col bg-gray-200">
        <p>{data.description}</p>
      </div>

      {/* render paramters */}

      <div className="p-4 flex flex-col bg-gray-200">
        <label htmlFor="api-key">desc</label>
        <input type="text" placeholder="..." />
      </div>

      {/* render inputs */}

      <div className="p-4 flex flex-col bg-gray-200 relative">
        <div>input</div>
        <Handle
          position={Position.Left}
          type="target"
          className=" absolute top-30 w-4 h-4 left-[-10px] "
        />
      </div>

      {/* render outputs */}

      <div className="p-4 flex flex-col bg-gray-200 relative">
        <Handle
          position={Position.Right}
          type="source"
          className="bg-black absolute top-30 w-4 h-4 right-[-10px] "
        />
        <div>output</div>
      </div>
    </div>
  );
};

export default ComposableNode;
