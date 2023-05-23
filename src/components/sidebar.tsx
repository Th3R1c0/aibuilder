import { Disclosure } from "@headlessui/react";
type nodeTypes = "openAiNode" | "LLMchain" | "PromptTemplates";
export default function Sidebar() {
  const nodes = [
    { name: "Prompts", data: ["PromptTemplates", "PromptTemplates"] },
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

  //for html drag and drop
  const onDragStart = (event: any, nodeType: nodeTypes) => {
    // sends nodeTypes "openAiNode" | "LLMchain" | "PromptTemplates" to flow.tsx
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="bg-gray-200 p-2">
      <h1 className="text-2xl font-bold">Sidebar</h1>
      <div className=" w-full">
        {nodes.map((node, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
                >
                  <span>{node.name}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col space-y-2 py-2">
                  {node.data.map((data, index) => {
                    return (
                      <div
                        //html drag and drop implementation
                        onDragStart={(event) =>
                          onDragStart(event, data as nodeTypes)
                        }
                        draggable
                        className=" bg-white px-4 pt-4 pb-2 rounded-md text-sm text-gray-500"
                        key={index}
                      >
                        {data}
                      </div>
                    );
                  })}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
        {/* <div className="flex flex-col bg-red-200">
        {nodes.map((node, index) => {
          return (
            <Disclosure key={index}>
              <Disclosure.Button className="py-2">{node}</Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                <div>drag and drop button</div>
              </Disclosure.Panel>
            </Disclosure>
          );
        })}
      </div> */}
      </div>
    </div>
  );
}
