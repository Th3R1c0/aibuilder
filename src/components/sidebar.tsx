"use client";

import { Disclosure } from "@headlessui/react";
import fulldata from "./nodeData";
type nodeTypes = "openAiNode" | "LLMchain" | "PromptTemplates";
import groupBy from "lodash/groupBy";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { BackpackIcon } from "@radix-ui/react-icons";

/* eslint-disable react/display-name */

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        " mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-violet11   group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-2 text-[15px]  outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div class="flex items-center gap-2">
          <BackpackIcon />
          {children}
        </div>

        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="flex flex-col space-y-2">{children}</div>
    </Accordion.Content>
  )
);

export default function Sidebar() {
  //for html drag and drop
  const onDragStart = (event: any, node: any) => {
    //send all of _node object to flow
    // console.log("onDrag", node);
    event.dataTransfer.setData("application/reactflow", JSON.stringify(node));
    event.dataTransfer.effectAllowed = "move";
  };

  const groupedData = _.groupBy(fulldata, "category");

  console.log(groupedData);

  return (
    <div className="bg-white border-2 fixed z-50 m-10 h-max rounded-md  p-4 space-y-4">
      <h1 className="text-2xl font-bold">+ Node Library</h1>
      {/* <div className=" w-ful  flex flex-col justify-start items-start"> */}
      {/* {Object.keys(groupedData).map((category, index) => {
          return (
            <Disclosure key={index}>
              <Disclosure.Button
                className={`flex w-full justify-between rounded-lg bg-purple-100 px-4 -2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
              >
                {category}
              </Disclosure.Button>
              {groupedData[category].map((node, index) => {
                return (
                  <Disclosure.Panel
                    key={index}
                    onDragStart={(event) => onDragStart(event, node as any)}
                    draggable
                    className=" bg-white w-full px-4 pt-4 pb-2 rounded-md text-sm text-gray-500"
                  >
                    {node.name}
                  </Disclosure.Panel>
                );
              })}
            </Disclosure>
          );
        })} */}

      {/* </div> */}
      <Accordion.Root
        className=" w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {Object.keys(groupedData).map((category, index) => {
          return (
            <AccordionItem
              key={index}
              value={category}
              className="p-2 border-2 "
            >
              <AccordionTrigger>{category}</AccordionTrigger>
              <AccordionContent>
                {groupedData[category].map((node, index) => {
                  return (
                    <div
                      key={index}
                      onDragStart={(event) => onDragStart(event, node as any)}
                      draggable
                      className="bg-white rounded-md border-2 p-2 flex items-center"
                    >
                      <DragHandleDots2Icon />
                      {node.name}
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
