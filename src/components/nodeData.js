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
      
        "settings": [
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
        ],
        //only needed if your adding inputAnchors, then the type would be baseclass it accepts, i just put string so it would render param
        // "inputs": [
        //   {
        //     "label": "Language Model",
        //     "name": "model",
        //     // if its not a string or number, it becomes a input for other nodes to connect to 
        //     "type": "string",
        //   },
        //   { "label": "Prompt", "name": "prompt", "type": "string" },
        //   {
        //     "label": "Chain name",
        //     "name": "chainName",
        //     "type": "string",
        //     "placeholder": "Give it a name",
        //     //not requried for this node to run
        //     "optional": true,
        //   }
        // ],
        variables: [
            {
                label: 'Name', 
                type: 'string',  
                variableName: '',
            }, 
            {
                label: 'Prompt', 
                type: 'Prompt Template', 
                variableName: '',

            },
            {
                label: 'Model', 
                type: 'Model',
                variableName: '',
            },
            {
                label: 'Output Parser', 
                type: 'Output Parser',
                variableName: '',
                optional: true,
            }, 
            {
                label: 'Memory',
                type: 'Memory',
                variableName: '',
                optional: true,
            }
        ],
        "outputs": [
          {
            "label": " Chain",
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
      {
        "label": "Transformation Chain",
        "name": "TransformationChain",
        "type": "TransformationChain",
        "category": "Chains",
        "description": "Transformation Chain to run queries against LLMs",
        //baseClasses are used to determine which nodes this can be connected to, basically 
        //any nodes that accept these base classees as inputs
        "baseClasses": ["TransformationChain", "BaseChain", "BaseLangChain"],
        //category showed in Node Library Sidebar
        "SortedCategory": "Basic",
      
        "settings": [
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
        ],
        //only needed if your adding inputAnchors, then the type would be baseclass it accepts, i just put string so it would render param
        // "inputs": [
        //   {
        //     "label": "Language Model",
        //     "name": "model",
        //     // if its not a string or number, it becomes a input for other nodes to connect to 
        //     "type": "string",
        //   },
        //   { "label": "Prompt", "name": "prompt", "type": "string" },
        //   {
        //     "label": "Chain name",
        //     "name": "chainName",
        //     "type": "string",
        //     "placeholder": "Give it a name",
        //     //not requried for this node to run
        //     "optional": true,
        //   }
        // ],
        variables: [
            {
                label: 'Name', 
                type: 'string',  
                variableName: '',
            }, 
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
      },      {
        "label": "Sequential Chain",
        "name": "SequentialChain",
        "type": "SequentialChain",
        "category": "Chains",
        "description": "Sequential Chain to run queries against LLMs",
        //baseClasses are used to determine which nodes this can be connected to, basically 
        //any nodes that accept these base classees as inputs
        "baseClasses": ["SequentialChain", "BaseChain", "BaseLangChain"],
        //category showed in Node Library Sidebar
        "SortedCategory": "Basic",
      
        "settings": [
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
        ],
        //only needed if your adding inputAnchors, then the type would be baseclass it accepts, i just put string so it would render param
        "inputs": [
          {
            "label": "Input",
            "name": "model",
            // if its not a string or number, it becomes a input for other nodes to connect to 
            "type": "BaseLanguageModel",
            optional: true,
          },
        ],
        InputParams: [
          {
            "label": "Name",
            "name": "Name",
            "type": "string",
            optional: true,
          }
        ],

        variables: [
            // {
            //     label: 'Name', 
            //     type: 'string',  
            //     variableName: '',
            // }, 
            
        ],
        "outputs": [
          {
            "label": "Chain",
            "name": "llmChain",
            "baseClasses": ["LLMChain", "BaseChain", "BaseLangChain"]
          },

        ],
      },
]

export default fulldata;