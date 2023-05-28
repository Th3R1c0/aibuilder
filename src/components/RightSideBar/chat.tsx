"use client";

import { FiCheck } from "react-icons/fi";
import { IoReloadSharp } from "react-icons/io5";
import { AiOutlineBranches } from "react-icons/ai";
import { useState } from "react";
const ChatHeader = () => {
  return (
    <div className="flex p-2 justify-between items-center">
      <FiCheck />
      <div>Demo Name</div>
      <div className="flex items-center space-x-2">
        <IoReloadSharp />
        <AiOutlineBranches />
      </div>
    </div>
  );
};

const ChatBox = () => {
  const [userinput, setUserInput] = useState("");
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 h-full bg-gray-400">x</div>

      <input
        className="p-2 border-2 rounded-md border-gray-200"
        type="text"
        value={userinput}
        placeholder="message content"
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  );
};

const Chat = () => {
  return (
    <div className="h-1/3 flex flex-col">
      <ChatHeader />
      <ChatBox />
    </div>
  );
};

export default Chat;
