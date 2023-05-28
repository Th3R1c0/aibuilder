import TopRightSideBar from "./TopRightSideBar";

import Chat from "./chat";

export default function RightSidebar() {
  return (
    <div className="w-[500px] h-full flex flex-col">
      <TopRightSideBar />
      <Chat />
    </div>
  );
}
