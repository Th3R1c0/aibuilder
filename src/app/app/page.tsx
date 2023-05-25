"use client";

import Sidebar from "../../components/sidebar";
import CodeSideBar from "../../components/CodeSideBar";
import { useState, createContext, useContext } from "react";
//react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Flow from "../flow";

export default function Home() {
  const [totalTabs] = useState([1, 2, 3]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="w-screen p-4 bg-gray-400 flex">AI builder</header>
      <main className="w-full h-full flex">
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

        <CodeSideBar />
      </main>
    </div>
  );
}
