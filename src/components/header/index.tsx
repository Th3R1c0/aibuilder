import { FiSettings } from "react-icons/fi";
import { TbReload } from "react-icons/Tb";
// import { AiOutlineQuestionCircle } from "react-icons/Ai";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
const AppHeader = () => {
  return (
    <header className="w-screen p-4 bg-gray-400 text-2xl flex justify-between">
      <h1>Splatter AI Extreme Prototype </h1>
      <div className="flex items-center space-x-4 ">
        <FiSettings />
        <TbReload />
        {/* <AiOutlineQuestionCircle /> */}
        <IoExtensionPuzzleOutline />
      </div>
    </header>
  );
};

export default AppHeader;
