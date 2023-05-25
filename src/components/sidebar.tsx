import { Disclosure } from "@headlessui/react";
import fulldata from "./data";
type nodeTypes = "openAiNode" | "LLMchain" | "PromptTemplates";
import groupBy from "lodash/groupBy";
export default function Sidebar() {
  const nodes = [
    {
      name: "Prompts",
      data: ["PromptTemplates", "PromptTemplates"],
      inputs: [
        { label: "input_label_1", name: "input_name_1", type: "string" },
        { label: "input_label_2", name: "input_name_2", type: "CustomType" },
      ],
      outputs: [
        {
          name: "output_name_1",
          label: "output_label_1",
          baseClasses: ["baseClass1", "baseClass2"],
        },
        {
          name: "output_name_2",
          label: "output_label_2",
          baseClasses: ["baseClass3"],
        },
      ],
    },
    { name: "LLMs", data: ["openAiNode", "openAiNode", "openAiNode"] },
    { name: "Chains", data: ["LLMchain", "LLMchain", "LLMchain"] },
    { name: "Agents", data: ["jsonAgent", "SQLAgent"] },
    { name: "Document Loaders", data: ["Loader1", "Loader2"] },
    { name: "Embeddings", data: ["Embedding1", "Embedding2"] },
    { name: "Memories", data: ["Memory1", "Memory2", "Memory3", "Memory4"] },
    { name: "Text Splitters", data: ["Splitter1", "Splitter2", "Splitter3"] },
    { name: "Toolkits", data: ["Toolkit1", "Toolkit2", "Toolkit3"] },
    { name: "Tools", data: ["Tool1", "Tool2", "Tool3"] },
    { name: "Utilities", data: ["Utility1", "Utility2", "Utility3"] },
    { name: "Vector Stores", data: ["Store1", "Store2"] },
    { name: "Wrappers", data: ["Wrapper1", "Wrapper2", "Wrapper3"] },
  ];

  const _nodes = fulldata;

  const _dnodes = [
    {
      label: "LLM Chain",
      name: "llmChain",
      type: "LLMChain",
      icon: "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chains/LLMChain/chain.svg",
      category: "Chains",
      description: "Chain to run queries against LLMs",
      baseClasses: ["LLMChain", "BaseChain", "BaseLangChain"],
      inputs: [{ label: "Prompt", name: "prompt", type: "BasePromptTemplate" }],
      outputs: [
        {
          label: "LLM Chain",
          name: "llmChain",
          baseClasses: ["LLMChain", "BaseChain", "BaseLangChain"],
        },
        {
          label: "Output Prediction",
          name: "outputPrediction",
          baseClasses: ["string"],
        },
      ],
      filePath:
        "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chains\\LLMChain\\LLMChain.js",
    },
    {
      label: "Prompt Template",
      name: "promptTemplate",
      type: "PromptTemplate",
      icon: "D:/Flowise-1/node_modules/flowise-components/dist/nodes/prompts/PromptTemplate/prompt.svg",
      category: "Prompts",
      description: "Schema to represent a basic prompt for an LLM",
      baseClasses: [
        "PromptTemplate",
        "BaseStringPromptTemplate",
        "BasePromptTemplate",
      ],
      inputs: [
        {
          label: "Template",
          name: "template",
          type: "string",
          rows: 4,
          placeholder:
            "What is a good name for a company that makes {product}?",
        },
        {
          label: "Format Prompt Values",
          name: "promptValues",
          type: "string",
          rows: 4,
          placeholder:
            '{\n  "input_language": "English",\n  "output_language": "French"\n}',
          optional: true,
          acceptVariable: true,
          list: true,
        },
      ],
      filePath:
        "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\prompts\\PromptTemplate\\PromptTemplate.js",
    },
  ];

  //for html drag and drop
  const onDragStart = (event: any, node: any) => {
    //send all of _node object to flow
    // console.log("onDrag", node);
    event.dataTransfer.setData("application/reactflow", JSON.stringify(node));
    event.dataTransfer.effectAllowed = "move";
  };

  const groupedData = groupBy(_nodes, "category");
  console.log(groupedData);

  return (
    <div className="bg-gray-200 p-2">
      <h1 className="text-2xl font-bold">Sidebar</h1>
      <div className=" w-ful  flex flex-col justify-start items-start">
        {Object.keys(groupedData).map((category, index) => {
          return (
            <Disclosure key={index}>
              <Disclosure.Button
                className={`flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
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
        })}

        {/* {_nodes.map((node, index) => {
          return (
            <div
              key={index}
              className="bg-red-200 p-4 rounded-md"
              //send whole node object to dragstart
              onDragStart={(event) => onDragStart(event, node as any)}
              draggable
            >
              {node.name}
            </div>
          );
        })} */}

        {/* {[groupedData].map((category, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
                >
                  <span>{category}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col space-y-2 py-2">
                  {[category].map((node, index) => {
                    return (
                      <div
                        //html drag and drop implementation
                        onDragStart={(event) =>
                          onDragStart(event, node as nodeTypes)
                        }
                        draggable
                        className=" bg-white px-4 pt-4 pb-2 rounded-md text-sm text-gray-500"
                        key={index}
                      >
                        {node}
                      </div>
                    );
                  })}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
        <div className="flex flex-col bg-red-200">
          {nodes.map((node, index) => {
            return (
              <Disclosure key={index}>
                <Disclosure.Button className="py-2">{node}</Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                  <div>drag and drop button</div>
                </Disclosure.Panel>
              </Disclosure>
            );
          })}  */}
      </div>
    </div>
  );
}
