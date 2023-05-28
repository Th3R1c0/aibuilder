"use client";

import Sidebar from "../../components/leftSideBar/sidebar";
import AppHeader from "@/components/header/index";
import { useState, createContext, useContext } from "react";
//react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RightSidebar from "../../components/RightSideBar/index";
import Flow from "../../components/flowComponents/flow";

export default function Home() {
  const [totalTabs] = useState([1, 2, 3]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <AppHeader />
      <main className="w-full h-full flex relative ">
        <Sidebar />

        {/* <Tabs className="w-full h-full">
          <TabList>
            {totalTabs.map((tab: number) => (
              <Tab key={tab}>Tab {tab}</Tab>
            ))}
          </TabList> */}
        {/* 
          {totalTabs.map((tab: number) => (
            <TabPanel className="w-full h-full" key={tab}>
              <Flow />
            </TabPanel>
          ))}
        </Tabs> */}
        <Flow />

        <RightSidebar />
      </main>
    </div>
  );
}
