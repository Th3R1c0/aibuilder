// list of initial nodes for prototype

const fulldata = [
    {
        "label": "LLM Chain",
        "name": "llmChain",
        "type": "LLMChain",
        "category": "Chains",
        "description": "Chain to run queries against LLMs",
        //baseClasses are used to determine which nodes this can be connected to, basically 
        //any nodes that accept these base classees as inputs
        "baseClasses": ["LLMChain", "BaseChain", "BaseLangChain"],
        //category showed in Node Library Sidebar
        "SortedCategory": "Basic",
        "inputs": [
          {
            "label": "Language Model",
            "name": "model",
            // if its not a string or number, it becomes a input for other nodes to connect to 
            "type": "string",
          },
          { "label": "Prompt", "name": "prompt", "type": "string" },
          {
            "label": "Chain name",
            "name": "chainName",
            "type": "string",
            "placeholder": "Give it a name",
            //not requried for this node to run
            "optional": true,
          }
        ],
        "outputs": [
          {
            "label": "LLM Chain",
            "name": "llmChain",
            "baseClasses": ["LLMChain", "BaseChain", "BaseLangChain"]
          },
          {
            "label": "Output Prediction",
            "name": "outputPrediction",
            "baseClasses": ["string"]
          }
        ],
      },
]

export default fulldata;