"use client";
/* eslint-disable react/display-name */
import { RxCross1 } from "react-icons/rx/";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { BackpackIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import classNames from "classnames";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import * as Slider from "@radix-ui/react-slider";
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
          "text-violet11   group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-2 text-[15px]  border-b border-gray-300 outline-none",
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
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Accordion.Content
        className={classNames(
          " data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="flex flex-col space-y-2">{children}</div>
      </Accordion.Content>
    );
  }
);

const RightSideBar = () => {
  const sections = [
    {
      title: "Model Selection",
      content: [
        {
          name: "Type",
          optionsType: "button",
          options: ["chat", "Completion"],
        },
        {
          name: "Provider",
          optionsType: "dropdown",
          options: ["OpenAi", "HuggingFace"],
        },
        {
          name: "Mode",
          optionsType: "dropdown",
          options: ["gpt-3.5-turbo"],
        },
      ],
    },
    {
      title: "Model Configuration",
      content: [
        {
          name: "Logging",
          optionsType: "button",
          options: ["Verbose", "Default"],
        },
        {
          name: "Max Tokens",
          optionsType: "input",
        },
        {
          name: "Temperature",
          optionsType: "slider",
          options: [0, 1],
        },
        {
          name: "Top P",
          optionsType: "slider",
          options: [0, 1],
        },
      ],
    },
    {
      title: "Advanced Settings",
      content: [
        {
          name: "You can provide additional configs through the json below ",
          optionsType: "code",
          options: [
            "best_of",
            "logprobs",
            "max_examples",
            "n",
            "presence_penalty",
            "frequency_penalty",
            "stop",
            "stream",
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col p-4 space-y-4 border-l border-gray-300 rounded-md">
      <div className="flex font-bold whitespace-nowrap items-center space-x-4 border-b p-4 border-gray-300">
        <span>Edit Model</span>
        <RxCross1 />
      </div>
      <Accordion.Root
        className=" w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="multiple"
        value={["Model Selection", "Model Configuration", "Advanced Settings"]}
      >
        {sections.map((section, index) => {
          return (
            <AccordionItem
              key={index}
              value={section.title}
              className="p-2 border-2 flex flex-col space-y-2"
            >
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>
                {section.content.map((subsection, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-md justify-between  p-2 flex items-center"
                    >
                      <p>{subsection.name}:</p>
                      <div className="space-x-2">
                        {subsection.optionsType === "button" && (
                          <>
                            {" "}
                            {subsection.options.map((opt, index) => {
                              return (
                                <button
                                  key={index}
                                  className="p-2 bg-gray-200 rounded-md"
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </>
                        )}
                        {subsection.optionsType === "dropdown" && (
                          <select>
                            {subsection.options?.map((opt, index) => {
                              return <option key={index}>{opt}</option>;
                            })}
                          </select>
                        )}
                        {subsection.optionsType === "slider" && (
                          <>
                            <form>
                              <Slider.Root
                                className="relative flex items-center select-none touch-none w-[200px] h-5"
                                defaultValue={[50]}
                                max={100}
                                step={1}
                              >
                                <Slider.Track className="bg-blackA10 relative grow rounded-full h-[3px]">
                                  <Slider.Range className="absolute bg-white rounded-full h-full" />
                                </Slider.Track>
                                <Slider.Thumb
                                  className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
                                  aria-label="Volume"
                                />
                              </Slider.Root>
                            </form>
                          </>
                        )}
                        {subsection.optionsType === "input" && (
                          <input type="text" className="p-2 rounded-md" />
                        )}
                        {subsection.optionsType === "code" && (
                          <>
                            <br />
                            <textarea className="p-2 rounded-md" />
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion.Root>

      {/* <Accordion.Root
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
      </Accordion.Root>  */}
    </div>
  );
};

export default RightSideBar;
