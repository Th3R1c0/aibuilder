const fulldata = [
  {
    "label": "AutoGPT",
    "name": "autoGPT",
    "type": "AutoGPT",
    "category": "Agents",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/agents/AutoGPT/autogpt.png",
    "description": "Autonomous agent with chain of thoughts for self-guided task completion",
    "baseClasses": ["AutoGPT"],
    "inputs": [
      {
        "label": "Allowed Tools",
        "name": "tools",
        "type": "Tool",
        "list": true
      },
      { "label": "Chat Model", "name": "model", "type": "BaseChatModel" },
      {
        "label": "Vector Store Retriever",
        "name": "vectorStoreRetriever",
        "type": "BaseRetriever"
      },
      {
        "label": "AutoGPT Name",
        "name": "aiName",
        "type": "string",
        "placeholder": "Tom",
        "optional": true
      },
      {
        "label": "AutoGPT Role",
        "name": "aiRole",
        "type": "string",
        "placeholder": "Assistant",
        "optional": true
      },
      {
        "label": "Maximum Loop",
        "name": "maxLoop",
        "type": "number",
        "default": 5,
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\agents\\AutoGPT\\AutoGPT.js"
  },
  {
    "label": "BabyAGI",
    "name": "babyAGI",
    "type": "BabyAGI",
    "category": "Agents",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/agents/BabyAGI/babyagi.jpg",
    "description": "Task Driven Autonomous Agent which creates new task and reprioritizes task list based on objective",
    "baseClasses": ["BabyAGI"],
    "inputs": [
      { "label": "Chat Model", "name": "model", "type": "BaseChatModel" },
      { "label": "Vector Store", "name": "vectorStore", "type": "VectorStore" },
      {
        "label": "Task Loop",
        "name": "taskLoop",
        "type": "number",
        "default": 3
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\agents\\BabyAGI\\BabyAGI.js"
  },
  {
    "label": "Conversational Agent",
    "name": "conversationalAgent",
    "type": "AgentExecutor",
    "category": "Agents",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/agents/ConversationalAgent/agent.svg",
    "description": "Conversational agent for a chat model. It will utilize chat specific prompts",
    "baseClasses": ["AgentExecutor", "BaseChain", "BaseLangChain"],
    "inputs": [
      {
        "label": "Allowed Tools",
        "name": "tools",
        "type": "Tool",
        "list": true
      },
      {
        "label": "Language Model",
        "name": "model",
        "type": "BaseLanguageModel"
      },
      { "label": "Memory", "name": "memory", "type": "BaseChatMemory" },
      {
        "label": "System Message",
        "name": "systemMessage",
        "type": "string",
        "rows": 4,
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Human Message",
        "name": "humanMessage",
        "type": "string",
        "rows": 4,
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\agents\\ConversationalAgent\\ConversationalAgent.js"
  },
  {
    "label": "MRKL Agent for Chat Models",
    "name": "mrklAgentChat",
    "type": "AgentExecutor",
    "category": "Agents",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/agents/MRKLAgentChat/agent.svg",
    "description": "Agent that uses the ReAct Framework to decide what action to take, optimized to be used with Chat Models",
    "baseClasses": ["AgentExecutor", "BaseChain", "BaseLangChain"],
    "inputs": [
      {
        "label": "Allowed Tools",
        "name": "tools",
        "type": "Tool",
        "list": true
      },
      {
        "label": "Language Model",
        "name": "model",
        "type": "BaseLanguageModel"
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\agents\\MRKLAgentChat\\MRKLAgentChat.js"
  },
  {
    "label": "MRKL Agent for LLMs",
    "name": "mrklAgentLLM",
    "type": "AgentExecutor",
    "category": "Agents",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/agents/MRKLAgentLLM/agent.svg",
    "description": "Agent that uses the ReAct Framework to decide what action to take, optimized to be used with LLMs",
    "baseClasses": ["AgentExecutor", "BaseChain", "BaseLangChain"],
    "inputs": [
      {
        "label": "Allowed Tools",
        "name": "tools",
        "type": "Tool",
        "list": true
      },
      {
        "label": "Language Model",
        "name": "model",
        "type": "BaseLanguageModel"
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\agents\\MRKLAgentLLM\\MRKLAgentLLM.js"
  },
  {
    "label": "Conversational Retrieval QA Chain",
    "name": "conversationalRetrievalQAChain",
    "type": "ConversationalRetrievalQAChain",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chains/ConversationalRetrievalQAChain/chain.svg",
    "category": "Chains",
    "description": "Document QA - built on RetrievalQAChain to provide a chat history component",
    "baseClasses": [
      "ConversationalRetrievalQAChain",
      "BaseChain",
      "BaseLangChain"
    ],
    "inputs": [
      {
        "label": "Language Model",
        "name": "model",
        "type": "BaseLanguageModel"
      },
      {
        "label": "Vector Store Retriever",
        "name": "vectorStoreRetriever",
        "type": "BaseRetriever"
      },
      {
        "label": "System Message",
        "name": "systemMessagePrompt",
        "type": "string",
        "rows": 4,
        "additionalParams": true,
        "optional": true,
        "placeholder": "I want you to act as a document that I am having a conversation with. Your name is \"AI Assistant\". You will provide me with answers from the given info. If the answer is not included, say exactly \"Hmm, I am not sure.\" and stop after that. Refuse to answer any question not about the info. Never break character."
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chains\\ConversationalRetrievalQAChain\\ConversationalRetrievalQAChain.js"
  },
  {
    "label": "Conversation Chain",
    "name": "conversationChain",
    "type": "ConversationChain",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chains/ConversationChain/chain.svg",
    "category": "Chains",
    "description": "Chat models specific conversational chain with memory",
    "baseClasses": [
      "ConversationChain",
      "LLMChain",
      "BaseChain",
      "BaseLangChain"
    ],
    "inputs": [
      { "label": "Language Model", "name": "model", "type": "BaseChatModel" },
      { "label": "Memory", "name": "memory", "type": "BaseMemory" },
      {
        "label": "System Message",
        "name": "systemMessagePrompt",
        "type": "string",
        "rows": 4,
        "additionalParams": true,
        "optional": true,
        "placeholder": "You are a helpful assistant that write codes"
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chains\\ConversationChain\\ConversationChain.js"
  },
  {
    "label": "LLM Chain",
    "name": "llmChain",
    "type": "LLMChain",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chains/LLMChain/chain.svg",
    "category": "Chains",
    "description": "Chain to run queries against LLMs",
    "baseClasses": ["LLMChain", "BaseChain", "BaseLangChain"],
    "inputs": [
      {
        "label": "Language Model",
        "name": "model",
        "type": "BaseLanguageModel"
      },
      { "label": "Prompt", "name": "prompt", "type": "BasePromptTemplate" },
      {
        "label": "Chain Name",
        "name": "chainName",
        "type": "string",
        "placeholder": "Name Your Chain",
        "optional": true
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
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chains\\LLMChain\\LLMChain.js"
  },
  {
    "label": "Retrieval QA Chain",
    "name": "retrievalQAChain",
    "type": "RetrievalQAChain",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chains/RetrievalQAChain/chain.svg",
    "category": "Chains",
    "description": "QA chain to answer a question based on the retrieved documents",
    "baseClasses": ["RetrievalQAChain", "BaseChain", "BaseLangChain"],
    "inputs": [
      {
        "label": "Language Model",
        "name": "model",
        "type": "BaseLanguageModel"
      },
      {
        "label": "Vector Store Retriever",
        "name": "vectorStoreRetriever",
        "type": "BaseRetriever"
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chains\\RetrievalQAChain\\RetrievalQAChain.js"
  },
  {
    "label": "Sql Database Chain",
    "name": "sqlDatabaseChain",
    "type": "SqlDatabaseChain",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chains/SqlDatabaseChain/sqlchain.svg",
    "category": "Chains",
    "description": "Answer questions over a SQL database",
    "baseClasses": ["SqlDatabaseChain", "BaseChain", "BaseLangChain"],
    "inputs": [
      {
        "label": "Language Model",
        "name": "model",
        "type": "BaseLanguageModel"
      },
      {
        "label": "Database",
        "name": "database",
        "type": "options",
        "options": [{ "label": "SQlite", "name": "sqlite" }],
        "default": "sqlite"
      },
      {
        "label": "Database File Path",
        "name": "dbFilePath",
        "type": "string",
        "placeholder": "C:/Users/chinook.db"
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chains\\SqlDatabaseChain\\SqlDatabaseChain.js"
  },
  {
    "label": "VectorDB QA Chain",
    "name": "vectorDBQAChain",
    "type": "VectorDBQAChain",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chains/VectorDBQAChain/chain.svg",
    "category": "Chains",
    "description": "QA chain for vector databases",
    "baseClasses": ["VectorDBQAChain", "BaseChain", "BaseLangChain"],
    "inputs": [
      {
        "label": "Language Model",
        "name": "model",
        "type": "BaseLanguageModel"
      },
      { "label": "Vector Store", "name": "vectorStore", "type": "VectorStore" }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chains\\VectorDBQAChain\\VectorDBQAChain.js"
  },
  {
    "label": "Azure ChatOpenAI",
    "name": "azureChatOpenAI",
    "type": "AzureChatOpenAI",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chatmodels/AzureChatOpenAI/Azure.svg",
    "category": "Chat Models",
    "description": "Wrapper around Azure OpenAI large language models that use the Chat endpoint",
    "baseClasses": [
      "AzureChatOpenAI",
      "BaseChatModel",
      "BaseLanguageModel",
      "BaseLangChain"
    ],
    "inputs": [
      {
        "label": "Azure OpenAI Api Key",
        "name": "azureOpenAIApiKey",
        "type": "password"
      },
      {
        "label": "Model Name",
        "name": "modelName",
        "type": "options",
        "options": [
          { "label": "gpt-4", "name": "gpt-4" },
          { "label": "gpt-4-32k", "name": "gpt-4-32k" },
          { "label": "gpt-35-turbo", "name": "gpt-35-turbo" }
        ],
        "default": "gpt-35-turbo",
        "optional": true
      },
      {
        "label": "Temperature",
        "name": "temperature",
        "type": "number",
        "default": 0.9,
        "optional": true
      },
      {
        "label": "Azure OpenAI Api Instance Name",
        "name": "azureOpenAIApiInstanceName",
        "type": "string",
        "placeholder": "YOUR-INSTANCE-NAME"
      },
      {
        "label": "Azure OpenAI Api Deployment Name",
        "name": "azureOpenAIApiDeploymentName",
        "type": "string",
        "placeholder": "YOUR-DEPLOYMENT-NAME"
      },
      {
        "label": "Azure OpenAI Api Version",
        "name": "azureOpenAIApiVersion",
        "type": "options",
        "options": [
          { "label": "2023-03-15-preview", "name": "2023-03-15-preview" }
        ],
        "default": "2023-03-15-preview"
      },
      {
        "label": "Max Tokens",
        "name": "maxTokens",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Frequency Penalty",
        "name": "frequencyPenalty",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Presence Penalty",
        "name": "presencePenalty",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Timeout",
        "name": "timeout",
        "type": "number",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chatmodels\\AzureChatOpenAI\\AzureChatOpenAI.js"
  },
  {
    "label": "ChatAnthropic",
    "name": "chatAnthropic",
    "type": "ChatAnthropic",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chatmodels/ChatAnthropic/chatAnthropic.png",
    "category": "Chat Models",
    "description": "Wrapper around ChatAnthropic large language models that use the Chat endpoint",
    "baseClasses": [
      "ChatAnthropic",
      "BaseChatModel",
      "BaseLanguageModel",
      "BaseLangChain"
    ],
    "inputs": [
      {
        "label": "ChatAnthropic Api Key",
        "name": "anthropicApiKey",
        "type": "password"
      },
      {
        "label": "Model Name",
        "name": "modelName",
        "type": "options",
        "options": [
          { "label": "claude-v1", "name": "claude-v1" },
          { "label": "claude-v1-100k", "name": "claude-v1-100k" },
          { "label": "claude-v1.0", "name": "claude-v1.0" },
          { "label": "claude-v1.2", "name": "claude-v1.2" },
          { "label": "claude-v1.3", "name": "claude-v1.3" },
          { "label": "claude-v1.3-100k", "name": "claude-v1.3-100k" },
          { "label": "claude-instant-v1", "name": "claude-instant-v1" },
          {
            "label": "claude-instant-v1-100k",
            "name": "claude-instant-v1-100k"
          },
          { "label": "claude-instant-v1.0", "name": "claude-instant-v1.0" },
          { "label": "claude-instant-v1.1", "name": "claude-instant-v1.1" },
          {
            "label": "claude-instant-v1.1-100k",
            "name": "claude-instant-v1.1-100k"
          }
        ],
        "default": "claude-v1",
        "optional": true
      },
      {
        "label": "Temperature",
        "name": "temperature",
        "type": "number",
        "default": 0.9,
        "optional": true
      },
      {
        "label": "Max Tokens",
        "name": "maxTokensToSample",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Top P",
        "name": "topP",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Top K",
        "name": "topK",
        "type": "number",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chatmodels\\ChatAnthropic\\ChatAnthropic.js"
  },
  {
    "label": "ChatLocalAI",
    "name": "chatLocalAI",
    "type": "ChatLocalAI",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chatmodels/ChatLocalAI/localai.png",
    "category": "Chat Models",
    "description": "Use local LLMs like llama.cpp, gpt4all using LocalAI",
    "baseClasses": [
      "ChatLocalAI",
      "BaseChatModel",
      "LLM",
      "BaseLLM",
      "BaseLanguageModel",
      "BaseLangChain"
    ],
    "inputs": [
      {
        "label": "Base Path",
        "name": "basePath",
        "type": "string",
        "placeholder": "http://localhost:8080/v1"
      },
      {
        "label": "Model Name",
        "name": "modelName",
        "type": "string",
        "placeholder": "gpt4all-lora-quantized.bin"
      },
      {
        "label": "Temperature",
        "name": "temperature",
        "type": "number",
        "default": 0.9,
        "optional": true
      },
      {
        "label": "Max Tokens",
        "name": "maxTokens",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Top Probability",
        "name": "topP",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Timeout",
        "name": "timeout",
        "type": "number",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chatmodels\\ChatLocalAI\\ChatLocalAI.js"
  },
  {
    "label": "ChatOpenAI",
    "name": "chatOpenAI",
    "type": "ChatOpenAI",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/chatmodels/ChatOpenAI/openai.png",
    "category": "Chat Models",
    "description": "Wrapper around OpenAI large language models that use the Chat endpoint",
    "baseClasses": [
      "ChatOpenAI",
      "BaseChatModel",
      "BaseLanguageModel",
      "BaseLangChain"
    ],
    "inputs": [
      { "label": "OpenAI Api Key", "name": "openAIApiKey", "type": "password" },
      {
        "label": "Model Name",
        "name": "modelName",
        "type": "options",
        "options": [
          { "label": "gpt-4", "name": "gpt-4" },
          { "label": "gpt-4-0314", "name": "gpt-4-0314" },
          { "label": "gpt-4-32k-0314", "name": "gpt-4-32k-0314" },
          { "label": "gpt-3.5-turbo", "name": "gpt-3.5-turbo" },
          { "label": "gpt-3.5-turbo-0301", "name": "gpt-3.5-turbo-0301" }
        ],
        "default": "gpt-3.5-turbo",
        "optional": true
      },
      {
        "label": "Temperature",
        "name": "temperature",
        "type": "number",
        "default": 0.9,
        "optional": true
      },
      {
        "label": "Max Tokens",
        "name": "maxTokens",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Top Probability",
        "name": "topP",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Frequency Penalty",
        "name": "frequencyPenalty",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Presence Penalty",
        "name": "presencePenalty",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Timeout",
        "name": "timeout",
        "type": "number",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\chatmodels\\ChatOpenAI\\ChatOpenAI.js"
  },
  {
    "label": "Cheerio Web Scraper",
    "name": "cheerioWebScraper",
    "type": "Document",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/documentloaders/Cheerio/cheerio.svg",
    "category": "Document Loaders",
    "description": "Load data from webpages",
    "baseClasses": ["Document"],
    "inputs": [
      { "label": "URL", "name": "url", "type": "string" },
      {
        "label": "Text Splitter",
        "name": "textSplitter",
        "type": "TextSplitter",
        "optional": true
      },
      {
        "label": "Web Scrap for Relative Links",
        "name": "webScrap",
        "type": "boolean",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Web Scrap Links Limit",
        "name": "limit",
        "type": "number",
        "default": 10,
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Metadata",
        "name": "metadata",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\documentloaders\\Cheerio\\Cheerio.js"
  },
  {
    "label": "Csv File",
    "name": "csvFile",
    "type": "Document",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/documentloaders/Csv/Csv.png",
    "category": "Document Loaders",
    "description": "Load data from CSV files",
    "baseClasses": ["Document"],
    "inputs": [
      {
        "label": "Csv File",
        "name": "csvFile",
        "type": "file",
        "fileType": ".csv"
      },
      {
        "label": "Text Splitter",
        "name": "textSplitter",
        "type": "TextSplitter",
        "optional": true
      },
      {
        "label": "Single Column Extraction",
        "name": "columnName",
        "type": "string",
        "description": "Extracting a single column",
        "placeholder": "Enter column name",
        "optional": true
      },
      {
        "label": "Metadata",
        "name": "metadata",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\documentloaders\\Csv\\Csv.js"
  },
  {
    "label": "Docx File",
    "name": "docxFile",
    "type": "Document",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/documentloaders/Docx/Docx.png",
    "category": "Document Loaders",
    "description": "Load data from DOCX files",
    "baseClasses": ["Document"],
    "inputs": [
      {
        "label": "Docx File",
        "name": "docxFile",
        "type": "file",
        "fileType": ".docx"
      },
      {
        "label": "Text Splitter",
        "name": "textSplitter",
        "type": "TextSplitter",
        "optional": true
      },
      {
        "label": "Metadata",
        "name": "metadata",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\documentloaders\\Docx\\Docx.js"
  },
  {
    "label": "Folder with Files",
    "name": "folderFiles",
    "type": "Document",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/documentloaders/Folder/folder.svg",
    "category": "Document Loaders",
    "description": "Load data from folder with multiple files",
    "baseClasses": ["Document"],
    "inputs": [
      {
        "label": "Folder Path",
        "name": "folderPath",
        "type": "string",
        "placeholder": ""
      },
      {
        "label": "Text Splitter",
        "name": "textSplitter",
        "type": "TextSplitter",
        "optional": true
      },
      {
        "label": "Metadata",
        "name": "metadata",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\documentloaders\\Folder\\Folder.js"
  },
  {
    "label": "Github",
    "name": "github",
    "type": "Document",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/documentloaders/Github/github.png",
    "category": "Document Loaders",
    "description": "Load data from a GitHub repository",
    "baseClasses": ["Document"],
    "inputs": [
      {
        "label": "Repo Link",
        "name": "repoLink",
        "type": "string",
        "placeholder": "https://github.com/FlowiseAI/Flowise"
      },
      {
        "label": "Branch",
        "name": "branch",
        "type": "string",
        "default": "main"
      },
      {
        "label": "Access Token",
        "name": "accessToken",
        "type": "password",
        "placeholder": "<GITHUB_ACCESS_TOKEN>",
        "optional": true
      },
      {
        "label": "Text Splitter",
        "name": "textSplitter",
        "type": "TextSplitter",
        "optional": true
      },
      {
        "label": "Metadata",
        "name": "metadata",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\documentloaders\\Github\\Github.js"
  },
  {
    "label": "Json File",
    "name": "jsonFile",
    "type": "Document",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/documentloaders/Json/json.svg",
    "category": "Document Loaders",
    "description": "Load data from JSON files",
    "baseClasses": ["Document"],
    "inputs": [
      {
        "label": "Json File",
        "name": "jsonFile",
        "type": "file",
        "fileType": ".json"
      },
      {
        "label": "Text Splitter",
        "name": "textSplitter",
        "type": "TextSplitter",
        "optional": true
      },
      {
        "label": "Pointers Extraction (separated by commas)",
        "name": "pointersName",
        "type": "string",
        "description": "Extracting multiple pointers",
        "placeholder": "Enter pointers name",
        "optional": true
      },
      {
        "label": "Metadata",
        "name": "metadata",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\documentloaders\\Json\\Json.js"
  },
  {
    "label": "Notion Folder",
    "name": "notionFolder",
    "type": "Document",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/documentloaders/Notion/notion.png",
    "category": "Document Loaders",
    "description": "Load data from Notion folder",
    "baseClasses": ["Document"],
    "inputs": [
      {
        "label": "Notion Folder",
        "name": "notionFolder",
        "type": "string",
        "description": "Get folder path",
        "placeholder": "Paste folder path"
      },
      {
        "label": "Text Splitter",
        "name": "textSplitter",
        "type": "TextSplitter",
        "optional": true
      },
      {
        "label": "Metadata",
        "name": "metadata",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\documentloaders\\Notion\\Notion.js"
  },
  {
    "label": "Pdf File",
    "name": "pdfFile",
    "type": "Document",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/documentloaders/Pdf/pdf.svg",
    "category": "Document Loaders",
    "description": "Load data from PDF files",
    "baseClasses": ["Document"],
    "inputs": [
      {
        "label": "Pdf File",
        "name": "pdfFile",
        "type": "file",
        "fileType": ".pdf"
      },
      {
        "label": "Text Splitter",
        "name": "textSplitter",
        "type": "TextSplitter",
        "optional": true
      },
      {
        "label": "Usage",
        "name": "usage",
        "type": "options",
        "options": [
          { "label": "One document per page", "name": "perPage" },
          { "label": "One document per file", "name": "perFile" }
        ],
        "default": "perPage"
      },
      {
        "label": "Metadata",
        "name": "metadata",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\documentloaders\\Pdf\\Pdf.js"
  },
  {
    "label": "Text File",
    "name": "textFile",
    "type": "Document",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/documentloaders/Text/textFile.svg",
    "category": "Document Loaders",
    "description": "Load data from text files",
    "baseClasses": ["Document"],
    "inputs": [
      {
        "label": "Txt File",
        "name": "txtFile",
        "type": "file",
        "fileType": ".txt"
      },
      {
        "label": "Text Splitter",
        "name": "textSplitter",
        "type": "TextSplitter",
        "optional": true
      },
      {
        "label": "Metadata",
        "name": "metadata",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\documentloaders\\Text\\Text.js"
  },
  {
    "label": "Azure OpenAI Embeddings",
    "name": "azureOpenAIEmbeddings",
    "type": "AzureOpenAIEmbeddings",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/embeddings/AzureOpenAIEmbedding/Azure.svg",
    "category": "Embeddings",
    "description": "Azure OpenAI API to generate embeddings for a given text",
    "baseClasses": ["AzureOpenAIEmbeddings", "Embeddings"],
    "inputs": [
      {
        "label": "Azure OpenAI Api Key",
        "name": "azureOpenAIApiKey",
        "type": "password"
      },
      {
        "label": "Azure OpenAI Api Instance Name",
        "name": "azureOpenAIApiInstanceName",
        "type": "string",
        "placeholder": "YOUR-INSTANCE-NAME"
      },
      {
        "label": "Azure OpenAI Api Deployment Name",
        "name": "azureOpenAIApiDeploymentName",
        "type": "string",
        "placeholder": "YOUR-DEPLOYMENT-NAME"
      },
      {
        "label": "Azure OpenAI Api Version",
        "name": "azureOpenAIApiVersion",
        "type": "options",
        "options": [
          { "label": "2023-03-15-preview", "name": "2023-03-15-preview" },
          { "label": "2022-12-01", "name": "2022-12-01" }
        ],
        "default": "2023-03-15-preview"
      },
      {
        "label": "Timeout",
        "name": "timeout",
        "type": "number",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\embeddings\\AzureOpenAIEmbedding\\AzureOpenAIEmbedding.js"
  },
  {
    "label": "Cohere Embeddings",
    "name": "cohereEmbeddings",
    "type": "CohereEmbeddings",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/embeddings/CohereEmbedding/cohere.png",
    "category": "Embeddings",
    "description": "Cohere API to generate embeddings for a given text",
    "baseClasses": ["CohereEmbeddings", "Embeddings"],
    "inputs": [
      { "label": "Cohere API Key", "name": "cohereApiKey", "type": "password" },
      {
        "label": "Model Name",
        "name": "modelName",
        "type": "options",
        "options": [
          { "label": "embed-english-v2.0", "name": "embed-english-v2.0" },
          {
            "label": "embed-english-light-v2.0",
            "name": "embed-english-light-v2.0"
          },
          {
            "label": "embed-multilingual-v2.0",
            "name": "embed-multilingual-v2.0"
          }
        ],
        "default": "embed-english-v2.0",
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\embeddings\\CohereEmbedding\\CohereEmbedding.js"
  },
  {
    "label": "HuggingFace Inference Embeddings",
    "name": "huggingFaceInferenceEmbeddings",
    "type": "HuggingFaceInferenceEmbeddings",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/embeddings/HuggingFaceInferenceEmbedding/huggingface.png",
    "category": "Embeddings",
    "description": "HuggingFace Inference API to generate embeddings for a given text",
    "baseClasses": ["HuggingFaceInferenceEmbeddings", "Embeddings"],
    "inputs": [
      { "label": "HuggingFace Api Key", "name": "apiKey", "type": "password" },
      {
        "label": "Model",
        "name": "modelName",
        "type": "string",
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\embeddings\\HuggingFaceInferenceEmbedding\\HuggingFaceInferenceEmbedding.js"
  },
  {
    "label": "OpenAI Embeddings",
    "name": "openAIEmbeddings",
    "type": "OpenAIEmbeddings",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/embeddings/OpenAIEmbedding/openai.png",
    "category": "Embeddings",
    "description": "OpenAI API to generate embeddings for a given text",
    "baseClasses": ["OpenAIEmbeddings", "Embeddings"],
    "inputs": [
      { "label": "OpenAI Api Key", "name": "openAIApiKey", "type": "password" },
      {
        "label": "Strip New Lines",
        "name": "stripNewLines",
        "type": "boolean",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Batch Size",
        "name": "batchSize",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Timeout",
        "name": "timeout",
        "type": "number",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\embeddings\\OpenAIEmbedding\\OpenAIEmbedding.js"
  },
  {
    "label": "Azure OpenAI",
    "name": "azureOpenAI",
    "type": "AzureOpenAI",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/llms/Azure OpenAI/Azure.svg",
    "category": "LLMs",
    "description": "Wrapper around Azure OpenAI large language models",
    "baseClasses": [
      "AzureOpenAI",
      "BaseLLM",
      "BaseLanguageModel",
      "BaseLangChain"
    ],
    "inputs": [
      {
        "label": "Azure OpenAI Api Key",
        "name": "azureOpenAIApiKey",
        "type": "password"
      },
      {
        "label": "Model Name",
        "name": "modelName",
        "type": "options",
        "options": [
          { "label": "text-davinci-003", "name": "text-davinci-003" },
          { "label": "ada", "name": "ada" },
          { "label": "text-ada-001", "name": "text-ada-001" },
          { "label": "babbage", "name": "babbage" },
          { "label": "text-babbage-001", "name": "text-babbage-001" },
          { "label": "curie", "name": "curie" },
          { "label": "text-curie-001", "name": "text-curie-001" },
          { "label": "davinci", "name": "davinci" },
          { "label": "text-davinci-001", "name": "text-davinci-001" },
          { "label": "text-davinci-002", "name": "text-davinci-002" },
          {
            "label": "text-davinci-fine-tune-002",
            "name": "text-davinci-fine-tune-002"
          },
          { "label": "gpt-35-turbo", "name": "gpt-35-turbo" }
        ],
        "default": "text-davinci-003",
        "optional": true
      },
      {
        "label": "Temperature",
        "name": "temperature",
        "type": "number",
        "default": 0.9,
        "optional": true
      },
      {
        "label": "Azure OpenAI Api Instance Name",
        "name": "azureOpenAIApiInstanceName",
        "type": "string",
        "placeholder": "YOUR-INSTANCE-NAME"
      },
      {
        "label": "Azure OpenAI Api Deployment Name",
        "name": "azureOpenAIApiDeploymentName",
        "type": "string",
        "placeholder": "YOUR-DEPLOYMENT-NAME"
      },
      {
        "label": "Azure OpenAI Api Version",
        "name": "azureOpenAIApiVersion",
        "type": "options",
        "options": [
          { "label": "2023-03-15-preview", "name": "2023-03-15-preview" },
          { "label": "2022-12-01", "name": "2022-12-01" }
        ],
        "default": "2023-03-15-preview"
      },
      {
        "label": "Max Tokens",
        "name": "maxTokens",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Top Probability",
        "name": "topP",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Best Of",
        "name": "bestOf",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Frequency Penalty",
        "name": "frequencyPenalty",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Presence Penalty",
        "name": "presencePenalty",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Timeout",
        "name": "timeout",
        "type": "number",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\llms\\Azure OpenAI\\AzureOpenAI.js"
  },
  {
    "label": "Cohere",
    "name": "cohere",
    "type": "Cohere",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/llms/Cohere/cohere.png",
    "category": "LLMs",
    "description": "Wrapper around Cohere large language models",
    "baseClasses": [
      "Cohere",
      "LLM",
      "BaseLLM",
      "BaseLanguageModel",
      "BaseLangChain"
    ],
    "inputs": [
      { "label": "Cohere Api Key", "name": "cohereApiKey", "type": "password" },
      {
        "label": "Model Name",
        "name": "modelName",
        "type": "options",
        "options": [
          { "label": "command", "name": "command" },
          { "label": "command-light", "name": "command-light" },
          { "label": "command-nightly", "name": "command-nightly" },
          { "label": "command-light-nightly", "name": "command-light-nightly" },
          { "label": "base", "name": "base" },
          { "label": "base-light", "name": "base-light" }
        ],
        "default": "command",
        "optional": true
      },
      {
        "label": "Temperature",
        "name": "temperature",
        "type": "number",
        "default": 0.7,
        "optional": true
      },
      {
        "label": "Max Tokens",
        "name": "maxTokens",
        "type": "number",
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\llms\\Cohere\\Cohere.js"
  },
  {
    "label": "HuggingFace Inference",
    "name": "huggingFaceInference_LLMs",
    "type": "HuggingFaceInference",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/llms/HuggingFaceInference/huggingface.png",
    "category": "LLMs",
    "description": "Wrapper around HuggingFace large language models",
    "baseClasses": [
      "HuggingFaceInference",
      "LLM",
      "BaseLLM",
      "BaseLanguageModel",
      "BaseLangChain"
    ],
    "inputs": [
      {
        "label": "Model",
        "name": "model",
        "type": "string",
        "placeholder": "gpt2"
      },
      { "label": "HuggingFace Api Key", "name": "apiKey", "type": "password" }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\llms\\HuggingFaceInference\\HuggingFaceInference.js"
  },
  {
    "label": "OpenAI",
    "name": "openAI",
    "type": "OpenAI",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/llms/OpenAI/openai.png",
    "category": "LLMs",
    "description": "Wrapper around OpenAI large language models",
    "baseClasses": ["OpenAI", "BaseLLM", "BaseLanguageModel", "BaseLangChain"],
    "inputs": [
      { "label": "OpenAI Api Key", "name": "openAIApiKey", "type": "password" },
      {
        "label": "Model Name",
        "name": "modelName",
        "type": "options",
        "options": [
          { "label": "text-davinci-003", "name": "text-davinci-003" },
          { "label": "text-davinci-002", "name": "text-davinci-002" },
          { "label": "text-curie-001", "name": "text-curie-001" },
          { "label": "text-babbage-001", "name": "text-babbage-001" }
        ],
        "default": "text-davinci-003",
        "optional": true
      },
      {
        "label": "Temperature",
        "name": "temperature",
        "type": "number",
        "default": 0.7,
        "optional": true
      },
      {
        "label": "Max Tokens",
        "name": "maxTokens",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Top Probability",
        "name": "topP",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Best Of",
        "name": "bestOf",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Frequency Penalty",
        "name": "frequencyPenalty",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Presence Penalty",
        "name": "presencePenalty",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Batch Size",
        "name": "batchSize",
        "type": "number",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Timeout",
        "name": "timeout",
        "type": "number",
        "optional": true,
        "additionalParams": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\llms\\OpenAI\\OpenAI.js"
  },
  {
    "label": "Buffer Memory",
    "name": "bufferMemory",
    "type": "BufferMemory",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/memory/BufferMemory/memory.svg",
    "category": "Memory",
    "description": "Remembers previous conversational back and forths directly",
    "baseClasses": ["BufferMemory", "BaseChatMemory", "BaseMemory"],
    "inputs": [
      {
        "label": "Memory Key",
        "name": "memoryKey",
        "type": "string",
        "default": "chat_history"
      },
      {
        "label": "Input Key",
        "name": "inputKey",
        "type": "string",
        "default": "input"
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\memory\\BufferMemory\\BufferMemory.js"
  },
  {
    "label": "Chat Prompt Template",
    "name": "chatPromptTemplate",
    "type": "ChatPromptTemplate",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/prompts/ChatPromptTemplate/prompt.svg",
    "category": "Prompts",
    "description": "Schema to represent a chat prompt",
    "baseClasses": [
      "ChatPromptTemplate",
      "BaseChatPromptTemplate",
      "BasePromptTemplate"
    ],
    "inputs": [
      {
        "label": "System Message",
        "name": "systemMessagePrompt",
        "type": "string",
        "rows": 4,
        "placeholder": "You are a helpful assistant that translates {input_language} to {output_language}."
      },
      {
        "label": "Human Message",
        "name": "humanMessagePrompt",
        "type": "string",
        "rows": 4,
        "placeholder": "{text}"
      },
      {
        "label": "Format Prompt Values",
        "name": "promptValues",
        "type": "string",
        "rows": 4,
        "placeholder": "{\n  \"input_language\": \"English\",\n  \"output_language\": \"French\"\n}",
        "optional": true,
        "acceptVariable": true,
        "list": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\prompts\\ChatPromptTemplate\\ChatPromptTemplate.js"
  },
  {
    "label": "Few Shot Prompt Template",
    "name": "fewShotPromptTemplate",
    "type": "FewShotPromptTemplate",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/prompts/FewShotPromptTemplate/prompt.svg",
    "category": "Prompts",
    "description": "Prompt template you can build with examples",
    "baseClasses": [
      "FewShotPromptTemplate",
      "BaseStringPromptTemplate",
      "BasePromptTemplate"
    ],
    "inputs": [
      {
        "label": "Examples",
        "name": "examples",
        "type": "string",
        "rows": 4,
        "placeholder": "[\n  { \"word\": \"happy\", \"antonym\": \"sad\" },\n  { \"word\": \"tall\", \"antonym\": \"short\" },\n]"
      },
      {
        "label": "Example Prompt",
        "name": "examplePrompt",
        "type": "PromptTemplate"
      },
      {
        "label": "Prefix",
        "name": "prefix",
        "type": "string",
        "rows": 4,
        "placeholder": "Give the antonym of every input"
      },
      {
        "label": "Suffix",
        "name": "suffix",
        "type": "string",
        "rows": 4,
        "placeholder": "Word: {input}\nAntonym:"
      },
      {
        "label": "Example Seperator",
        "name": "exampleSeparator",
        "type": "string",
        "placeholder": "\n\n"
      },
      {
        "label": "Template Format",
        "name": "templateFormat",
        "type": "options",
        "options": [
          { "label": "f-string", "name": "f-string" },
          { "label": "jinja-2", "name": "jinja-2" }
        ],
        "default": "f-string"
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\prompts\\FewShotPromptTemplate\\FewShotPromptTemplate.js"
  },
  {
    "label": "Prompt Template",
    "name": "promptTemplate",
    "type": "PromptTemplate",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/prompts/PromptTemplate/prompt.svg",
    "category": "Prompts",
    "description": "Schema to represent a basic prompt for an LLM",
    "baseClasses": [
      "PromptTemplate",
      "BaseStringPromptTemplate",
      "BasePromptTemplate"
    ],
    "inputs": [
      {
        "label": "Template",
        "name": "template",
        "type": "string",
        "rows": 4,
        "placeholder": "What is a good name for a company that makes {product}?"
      },
      {
        "label": "Format Prompt Values",
        "name": "promptValues",
        "type": "string",
        "rows": 4,
        "placeholder": "{\n  \"input_language\": \"English\",\n  \"output_language\": \"French\"\n}",
        "optional": true,
        "acceptVariable": true,
        "list": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\prompts\\PromptTemplate\\PromptTemplate.js"
  },
  {
    "label": "Character Text Splitter",
    "name": "characterTextSplitter",
    "type": "CharacterTextSplitter",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/textsplitters/CharacterTextSplitter/textsplitter.svg",
    "category": "Text Splitters",
    "description": "splits only on one type of character (defaults to \"\\n\\n\").",
    "baseClasses": ["CharacterTextSplitter", "TextSplitter"],
    "inputs": [
      {
        "label": "Separator",
        "name": "separator",
        "type": "string",
        "optional": true
      },
      {
        "label": "Chunk Size",
        "name": "chunkSize",
        "type": "number",
        "default": 1000,
        "optional": true
      },
      {
        "label": "Chunk Overlap",
        "name": "chunkOverlap",
        "type": "number",
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\textsplitters\\CharacterTextSplitter\\CharacterTextSplitter.js"
  },
  {
    "label": "Markdown Text Splitter",
    "name": "markdownTextSplitter",
    "type": "MarkdownTextSplitter",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/textsplitters/MarkdownTextSplitter/markdownTextSplitter.svg",
    "category": "Text Splitters",
    "description": "Split your content into documents based on the Markdown headers",
    "baseClasses": [
      "MarkdownTextSplitter",
      "RecursiveCharacterTextSplitter",
      "TextSplitter"
    ],
    "inputs": [
      {
        "label": "Chunk Size",
        "name": "chunkSize",
        "type": "number",
        "default": 1000,
        "optional": true
      },
      {
        "label": "Chunk Overlap",
        "name": "chunkOverlap",
        "type": "number",
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\textsplitters\\MarkdownTextSplitter\\MarkdownTextSplitter.js"
  },
  {
    "label": "Recursive Character Text Splitter",
    "name": "recursiveCharacterTextSplitter",
    "type": "RecursiveCharacterTextSplitter",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/textsplitters/RecursiveCharacterTextSplitter/textsplitter.svg",
    "category": "Text Splitters",
    "description": "Split documents recursively by different characters - starting with \"\\n\\n\", then \"\\n\", then \" \"",
    "baseClasses": ["RecursiveCharacterTextSplitter", "TextSplitter"],
    "inputs": [
      {
        "label": "Chunk Size",
        "name": "chunkSize",
        "type": "number",
        "default": 1000,
        "optional": true
      },
      {
        "label": "Chunk Overlap",
        "name": "chunkOverlap",
        "type": "number",
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\textsplitters\\RecursiveCharacterTextSplitter\\RecursiveCharacterTextSplitter.js"
  },
  {
    "label": "Token Text Splitter",
    "name": "tokenTextSplitter",
    "type": "TokenTextSplitter",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/textsplitters/TokenTextSplitter/tiktoken.svg",
    "category": "Text Splitters",
    "description": "Splits a raw text string by first converting the text into BPE tokens, then split these tokens into chunks and convert the tokens within a single chunk back into text.",
    "baseClasses": ["TokenTextSplitter", "TextSplitter"],
    "inputs": [
      {
        "label": "Encoding Name",
        "name": "encodingName",
        "type": "options",
        "options": [
          { "label": "gpt2", "name": "gpt2" },
          { "label": "r50k_base", "name": "r50k_base" },
          { "label": "p50k_base", "name": "p50k_base" },
          { "label": "p50k_edit", "name": "p50k_edit" },
          { "label": "cl100k_base", "name": "cl100k_base" }
        ],
        "default": "gpt2"
      },
      {
        "label": "Chunk Size",
        "name": "chunkSize",
        "type": "number",
        "default": 1000,
        "optional": true
      },
      {
        "label": "Chunk Overlap",
        "name": "chunkOverlap",
        "type": "number",
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\textsplitters\\TokenTextSplitter\\TokenTextSplitter.js"
  },
  {
    "label": "AI Plugin",
    "name": "aiPlugin",
    "type": "AIPlugin",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/AIPlugin/aiplugin.svg",
    "category": "Tools",
    "description": "Execute actions using ChatGPT Plugin Url",
    "baseClasses": ["AIPlugin", "Tool", "StructuredTool", "BaseLangChain"],
    "inputs": [
      {
        "label": "Plugin Url",
        "name": "pluginUrl",
        "type": "string",
        "placeholder": "https://www.klarna.com/.well-known/ai-plugin.json"
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\AIPlugin\\AIPlugin.js"
  },
  {
    "label": "Calculator",
    "name": "calculator",
    "type": "Calculator",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/Calculator/calculator.svg",
    "category": "Tools",
    "description": "Perform calculations on response",
    "baseClasses": ["Calculator", "Tool", "StructuredTool", "BaseLangChain"],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\Calculator\\Calculator.js"
  },
  {
    "label": "Chain Tool",
    "name": "chainTool",
    "type": "ChainTool",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/ChainTool/chaintool.svg",
    "category": "Tools",
    "description": "Use a chain as allowed tool for agent",
    "baseClasses": [
      "ChainTool",
      "DynamicTool",
      "Tool",
      "StructuredTool",
      "BaseLangChain"
    ],
    "inputs": [
      {
        "label": "Chain Name",
        "name": "name",
        "type": "string",
        "placeholder": "state-of-union-qa"
      },
      {
        "label": "Chain Description",
        "name": "description",
        "type": "string",
        "rows": 3,
        "placeholder": "State of the Union QA - useful for when you need to ask questions about the most recent state of the union address."
      },
      {
        "label": "Return Direct",
        "name": "returnDirect",
        "type": "boolean",
        "optional": true
      },
      { "label": "Base Chain", "name": "baseChain", "type": "BaseChain" }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\ChainTool\\ChainTool.js"
  },
  {
    "label": "Make.com Webhook",
    "name": "makeWebhook",
    "type": "MakeWebhook",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/MakeWebhook/make.png",
    "category": "Tools",
    "description": "Execute webhook calls on Make.com",
    "inputs": [
      {
        "label": "Webhook Url",
        "name": "url",
        "type": "string",
        "placeholder": "https://hook.eu1.make.com/abcdefg"
      },
      {
        "label": "Tool Description",
        "name": "desc",
        "type": "string",
        "rows": 4,
        "placeholder": "Useful when need to send message to Discord"
      }
    ],
    "baseClasses": ["MakeWebhook", "Tool", "StructuredTool", "BaseLangChain"],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\MakeWebhook\\MakeWebhook.js"
  },
  {
    "label": "Read File",
    "name": "readFile",
    "type": "ReadFile",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/ReadFile/readfile.svg",
    "category": "Tools",
    "description": "Read file from disk",
    "baseClasses": ["ReadFile", "Tool", "StructuredTool", "BaseLangChain"],
    "inputs": [
      {
        "label": "Base Path",
        "name": "basePath",
        "placeholder": "C:\\Users\\User\\Desktop",
        "type": "string",
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\ReadFile\\ReadFile.js"
  },
  {
    "label": "Requests Get",
    "name": "requestsGet",
    "type": "RequestsGet",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/RequestsGet/requestsget.svg",
    "category": "Tools",
    "description": "Execute HTTP GET requests",
    "baseClasses": ["RequestsGet", "Tool", "StructuredTool", "BaseLangChain"],
    "inputs": [
      {
        "label": "URL",
        "name": "url",
        "type": "string",
        "description": "Agent will make call to this exact URL. If not specified, agent will try to figure out itself from AIPlugin if provided",
        "additionalParams": true,
        "optional": true
      },
      {
        "label": "Description",
        "name": "description",
        "type": "string",
        "rows": 4,
        "default": "A portal to the internet. Use this when you need to get specific content from a website. \nInput should be a  url (i.e. https://www.google.com). The output will be the text response of the GET request.",
        "description": "Acts like a prompt to tell agent when it should use this tool",
        "additionalParams": true,
        "optional": true
      },
      {
        "label": "Headers",
        "name": "headers",
        "type": "json",
        "additionalParams": true,
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\RequestsGet\\RequestsGet.js"
  },
  {
    "label": "Requests Post",
    "name": "requestsPost",
    "type": "RequestsPost",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/RequestsPost/requestspost.svg",
    "category": "Tools",
    "description": "Execute HTTP POST requests",
    "baseClasses": ["RequestsPost", "Tool", "StructuredTool", "BaseLangChain"],
    "inputs": [
      {
        "label": "URL",
        "name": "url",
        "type": "string",
        "description": "Agent will make call to this exact URL. If not specified, agent will try to figure out itself from AIPlugin if provided",
        "additionalParams": true,
        "optional": true
      },
      {
        "label": "Body",
        "name": "body",
        "type": "json",
        "description": "JSON body for the POST request. If not specified, agent will try to figure out itself from AIPlugin if provided",
        "additionalParams": true,
        "optional": true
      },
      {
        "label": "Description",
        "name": "description",
        "type": "string",
        "rows": 4,
        "default": "Use this when you want to POST to a website.\nInput should be a json string with two keys: \"url\" and \"data\".\nThe value of \"url\" should be a string, and the value of \"data\" should be a dictionary of \nkey-value pairs you want to POST to the url as a JSON body.\nBe careful to always use double quotes for strings in the json string\nThe output will be the text response of the POST request.",
        "description": "Acts like a prompt to tell agent when it should use this tool",
        "additionalParams": true,
        "optional": true
      },
      {
        "label": "Headers",
        "name": "headers",
        "type": "json",
        "additionalParams": true,
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\RequestsPost\\RequestsPost.js"
  },
  {
    "label": "Serp API",
    "name": "serpAPI",
    "type": "SerpAPI",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/SerpAPI/serp.png",
    "category": "Tools",
    "description": "Wrapper around SerpAPI - a real-time API to access Google search results",
    "inputs": [
      { "label": "Serp Api Key", "name": "apiKey", "type": "password" }
    ],
    "baseClasses": ["SerpAPI", "Tool", "StructuredTool", "BaseLangChain"],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\SerpAPI\\SerpAPI.js"
  },
  {
    "label": "Web Browser",
    "name": "webBrowser",
    "type": "WebBrowser",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/WebBrowser/webBrowser.svg",
    "category": "Tools",
    "description": "Gives agent the ability to visit a website and extract information",
    "inputs": [
      {
        "label": "Language Model",
        "name": "model",
        "type": "BaseLanguageModel"
      },
      { "label": "Embeddings", "name": "embeddings", "type": "Embeddings" }
    ],
    "baseClasses": ["WebBrowser", "Tool", "StructuredTool", "BaseLangChain"],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\WebBrowser\\WebBrowser.js"
  },
  {
    "label": "Write File",
    "name": "writeFile",
    "type": "WriteFile",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/WriteFile/writefile.svg",
    "category": "Tools",
    "description": "Write file to disk",
    "baseClasses": ["WriteFile", "Tool", "StructuredTool", "BaseLangChain"],
    "inputs": [
      {
        "label": "Base Path",
        "name": "basePath",
        "placeholder": "C:\\Users\\User\\Desktop",
        "type": "string",
        "optional": true
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\WriteFile\\WriteFile.js"
  },
  {
    "label": "Zapier NLA",
    "name": "zapierNLA",
    "type": "ZapierNLA",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/tools/ZapierNLA/zapier.png",
    "category": "Tools",
    "description": "Access to apps and actions on Zapier's platform through a natural language API interface",
    "inputs": [
      { "label": "Zapier NLA Api Key", "name": "apiKey", "type": "password" }
    ],
    "baseClasses": ["ZapierNLA", "Tool"],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\tools\\ZapierNLA\\ZapierNLA.js"
  },
  {
    "label": "Chroma Load Existing Index",
    "name": "chromaExistingIndex",
    "type": "Chroma",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/vectorstores/Chroma_Existing/chroma.svg",
    "category": "Vector Stores",
    "description": "Load existing index from Chroma (i.e: Document has been upserted)",
    "baseClasses": ["Chroma", "VectorStoreRetriever", "BaseRetriever"],
    "inputs": [
      { "label": "Embeddings", "name": "embeddings", "type": "Embeddings" },
      {
        "label": "Collection Name",
        "name": "collectionName",
        "type": "string"
      },
      {
        "label": "Chroma URL",
        "name": "chromaURL",
        "type": "string",
        "optional": true
      }
    ],
    "outputs": [
      {
        "label": "Chroma Retriever",
        "name": "retriever",
        "baseClasses": ["Chroma", "VectorStoreRetriever", "BaseRetriever"]
      },
      {
        "label": "Chroma Vector Store",
        "name": "vectorStore",
        "baseClasses": ["Chroma", "VectorStore"]
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\vectorstores\\Chroma_Existing\\Chroma_Existing.js"
  },
  {
    "label": "Chroma Upsert Document",
    "name": "chromaUpsert",
    "type": "Chroma",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/vectorstores/Chroma_Upsert/chroma.svg",
    "category": "Vector Stores",
    "description": "Upsert documents to Chroma",
    "baseClasses": ["Chroma", "VectorStoreRetriever", "BaseRetriever"],
    "inputs": [
      {
        "label": "Document",
        "name": "document",
        "type": "Document",
        "list": true
      },
      { "label": "Embeddings", "name": "embeddings", "type": "Embeddings" },
      {
        "label": "Collection Name",
        "name": "collectionName",
        "type": "string"
      },
      {
        "label": "Chroma URL",
        "name": "chromaURL",
        "type": "string",
        "optional": true
      }
    ],
    "outputs": [
      {
        "label": "Chroma Retriever",
        "name": "retriever",
        "baseClasses": ["Chroma", "VectorStoreRetriever", "BaseRetriever"]
      },
      {
        "label": "Chroma Vector Store",
        "name": "vectorStore",
        "baseClasses": ["Chroma", "VectorStore"]
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\vectorstores\\Chroma_Upsert\\Chroma_Upsert.js"
  },
  {
    "label": "In-Memory Vector Store",
    "name": "memoryVectorStore",
    "type": "Memory",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/vectorstores/InMemory/memory.svg",
    "category": "Vector Stores",
    "description": "In-memory vectorstore that stores embeddings and does an exact, linear search for the most similar embeddings.",
    "baseClasses": ["Memory", "VectorStoreRetriever", "BaseRetriever"],
    "inputs": [
      {
        "label": "Document",
        "name": "document",
        "type": "Document",
        "list": true
      },
      { "label": "Embeddings", "name": "embeddings", "type": "Embeddings" }
    ],
    "outputs": [
      {
        "label": "Memory Retriever",
        "name": "retriever",
        "baseClasses": ["Memory", "VectorStoreRetriever", "BaseRetriever"]
      },
      {
        "label": "Memory Vector Store",
        "name": "vectorStore",
        "baseClasses": ["Memory", "VectorStore"]
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\vectorstores\\InMemory\\InMemoryVectorStore.js"
  },
  {
    "label": "Pinecone Load Existing Index",
    "name": "pineconeExistingIndex",
    "type": "Pinecone",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/vectorstores/Pinecone_Existing/pinecone.png",
    "category": "Vector Stores",
    "description": "Load existing index from Pinecone (i.e: Document has been upserted)",
    "baseClasses": ["Pinecone", "VectorStoreRetriever", "BaseRetriever"],
    "inputs": [
      { "label": "Embeddings", "name": "embeddings", "type": "Embeddings" },
      {
        "label": "Pinecone Api Key",
        "name": "pineconeApiKey",
        "type": "password"
      },
      {
        "label": "Pinecone Environment",
        "name": "pineconeEnv",
        "type": "string"
      },
      { "label": "Pinecone Index", "name": "pineconeIndex", "type": "string" },
      {
        "label": "Pinecone Namespace",
        "name": "pineconeNamespace",
        "type": "string",
        "placeholder": "my-first-namespace",
        "optional": true
      },
      {
        "label": "Pinecone Metadata Filter",
        "name": "pineconeMetadataFilter",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "outputs": [
      {
        "label": "Pinecone Retriever",
        "name": "retriever",
        "baseClasses": ["Pinecone", "VectorStoreRetriever", "BaseRetriever"]
      },
      {
        "label": "Pinecone Vector Store",
        "name": "vectorStore",
        "baseClasses": ["Pinecone", "VectorStore"]
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\vectorstores\\Pinecone_Existing\\Pinecone_Existing.js"
  },
  {
    "label": "Pinecone Upsert Document",
    "name": "pineconeUpsert",
    "type": "Pinecone",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/vectorstores/Pinecone_Upsert/pinecone.png",
    "category": "Vector Stores",
    "description": "Upsert documents to Pinecone",
    "baseClasses": ["Pinecone", "VectorStoreRetriever", "BaseRetriever"],
    "inputs": [
      {
        "label": "Document",
        "name": "document",
        "type": "Document",
        "list": true
      },
      { "label": "Embeddings", "name": "embeddings", "type": "Embeddings" },
      {
        "label": "Pinecone Api Key",
        "name": "pineconeApiKey",
        "type": "password"
      },
      {
        "label": "Pinecone Environment",
        "name": "pineconeEnv",
        "type": "string"
      },
      { "label": "Pinecone Index", "name": "pineconeIndex", "type": "string" },
      {
        "label": "Pinecone Namespace",
        "name": "pineconeNamespace",
        "type": "string",
        "placeholder": "my-first-namespace",
        "optional": true
      }
    ],
    "outputs": [
      {
        "label": "Pinecone Retriever",
        "name": "retriever",
        "baseClasses": ["Pinecone", "VectorStoreRetriever", "BaseRetriever"]
      },
      {
        "label": "Pinecone Vector Store",
        "name": "vectorStore",
        "baseClasses": ["Pinecone", "VectorStore"]
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\vectorstores\\Pinecone_Upsert\\Pinecone_Upsert.js"
  },
  {
    "label": "Supabase Load Existing Index",
    "name": "supabaseExistingIndex",
    "type": "Supabase",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/vectorstores/Supabase_Existing/supabase.svg",
    "category": "Vector Stores",
    "description": "Load existing index from Supabase (i.e: Document has been upserted)",
    "baseClasses": ["Supabase", "VectorStoreRetriever", "BaseRetriever"],
    "inputs": [
      { "label": "Embeddings", "name": "embeddings", "type": "Embeddings" },
      {
        "label": "Supabase API Key",
        "name": "supabaseApiKey",
        "type": "password"
      },
      {
        "label": "Supabase Project URL",
        "name": "supabaseProjUrl",
        "type": "string"
      },
      { "label": "Table Name", "name": "tableName", "type": "string" },
      { "label": "Query Name", "name": "queryName", "type": "string" },
      {
        "label": "Supabase Metadata Filter",
        "name": "supabaseMetadataFilter",
        "type": "json",
        "optional": true,
        "additionalParams": true
      }
    ],
    "outputs": [
      {
        "label": "Supabase Retriever",
        "name": "retriever",
        "baseClasses": ["Supabase", "VectorStoreRetriever", "BaseRetriever"]
      },
      {
        "label": "Supabase Vector Store",
        "name": "vectorStore",
        "baseClasses": ["Supabase", "VectorStore"]
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\vectorstores\\Supabase_Existing\\Supabase_Exisiting.js"
  },
  {
    "label": "Supabase Upsert Document",
    "name": "supabaseUpsert",
    "type": "Supabase",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/vectorstores/Supabase_Upsert/supabase.svg",
    "category": "Vector Stores",
    "description": "Upsert documents to Supabase",
    "baseClasses": ["Supabase", "VectorStoreRetriever", "BaseRetriever"],
    "inputs": [
      {
        "label": "Document",
        "name": "document",
        "type": "Document",
        "list": true
      },
      { "label": "Embeddings", "name": "embeddings", "type": "Embeddings" },
      {
        "label": "Supabase API Key",
        "name": "supabaseApiKey",
        "type": "password"
      },
      {
        "label": "Supabase Project URL",
        "name": "supabaseProjUrl",
        "type": "string"
      },
      { "label": "Table Name", "name": "tableName", "type": "string" },
      { "label": "Query Name", "name": "queryName", "type": "string" }
    ],
    "outputs": [
      {
        "label": "Supabase Retriever",
        "name": "retriever",
        "baseClasses": ["Supabase", "VectorStoreRetriever", "BaseRetriever"]
      },
      {
        "label": "Supabase Vector Store",
        "name": "vectorStore",
        "baseClasses": ["Supabase", "VectorStore"]
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\vectorstores\\Supabase_Upsert\\Supabase_Upsert.js"
  },
  {
    "label": "Weaviate Load Existing Index",
    "name": "weaviateExistingIndex",
    "type": "Weaviate",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/vectorstores/Weaviate_Existing/weaviate.png",
    "category": "Vector Stores",
    "description": "Load existing index from Weaviate (i.e: Document has been upserted)",
    "baseClasses": ["Weaviate", "VectorStoreRetriever", "BaseRetriever"],
    "inputs": [
      { "label": "Embeddings", "name": "embeddings", "type": "Embeddings" },
      {
        "label": "Weaviate Scheme",
        "name": "weaviateScheme",
        "type": "options",
        "default": "https",
        "options": [
          { "label": "https", "name": "https" },
          { "label": "http", "name": "http" }
        ]
      },
      {
        "label": "Weaviate Host",
        "name": "weaviateHost",
        "type": "string",
        "placeholder": "localhost:8080"
      },
      {
        "label": "Weaviate Index",
        "name": "weaviateIndex",
        "type": "string",
        "placeholder": "Test"
      },
      {
        "label": "Weaviate API Key",
        "name": "weaviateApiKey",
        "type": "password",
        "optional": true
      },
      {
        "label": "Weaviate Text Key",
        "name": "weaviateTextKey",
        "type": "string",
        "placeholder": "text",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Weaviate Metadata Keys",
        "name": "weaviateMetadataKeys",
        "type": "string",
        "rows": 4,
        "placeholder": "[\"foo\"]",
        "optional": true,
        "additionalParams": true
      }
    ],
    "outputs": [
      {
        "label": "Weaviate Retriever",
        "name": "retriever",
        "baseClasses": ["Weaviate", "VectorStoreRetriever", "BaseRetriever"]
      },
      {
        "label": "Weaviate Vector Store",
        "name": "vectorStore",
        "baseClasses": ["Weaviate", "VectorStore"]
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\vectorstores\\Weaviate_Existing\\Weaviate_Existing.js"
  },
  {
    "label": "Weaviate Upsert Document",
    "name": "weaviateUpsert",
    "type": "Weaviate",
    "icon": "D:/Flowise-1/node_modules/flowise-components/dist/nodes/vectorstores/Weaviate_Upsert/weaviate.png",
    "category": "Vector Stores",
    "description": "Upsert documents to Weaviate",
    "baseClasses": ["Weaviate", "VectorStoreRetriever", "BaseRetriever"],
    "inputs": [
      {
        "label": "Document",
        "name": "document",
        "type": "Document",
        "list": true
      },
      { "label": "Embeddings", "name": "embeddings", "type": "Embeddings" },
      {
        "label": "Weaviate Scheme",
        "name": "weaviateScheme",
        "type": "options",
        "default": "https",
        "options": [
          { "label": "https", "name": "https" },
          { "label": "http", "name": "http" }
        ]
      },
      {
        "label": "Weaviate Host",
        "name": "weaviateHost",
        "type": "string",
        "placeholder": "localhost:8080"
      },
      {
        "label": "Weaviate Index",
        "name": "weaviateIndex",
        "type": "string",
        "placeholder": "Test"
      },
      {
        "label": "Weaviate API Key",
        "name": "weaviateApiKey",
        "type": "password",
        "optional": true
      },
      {
        "label": "Weaviate Text Key",
        "name": "weaviateTextKey",
        "type": "string",
        "placeholder": "text",
        "optional": true,
        "additionalParams": true
      },
      {
        "label": "Weaviate Metadata Keys",
        "name": "weaviateMetadataKeys",
        "type": "string",
        "rows": 4,
        "placeholder": "[\"foo\"]",
        "optional": true,
        "additionalParams": true
      }
    ],
    "outputs": [
      {
        "label": "Weaviate Retriever",
        "name": "retriever",
        "baseClasses": ["Weaviate", "VectorStoreRetriever", "BaseRetriever"]
      },
      {
        "label": "Weaviate Vector Store",
        "name": "vectorStore",
        "baseClasses": ["Weaviate", "VectorStore"]
      }
    ],
    "filePath": "D:\\Flowise-1\\node_modules\\flowise-components\\dist\\nodes\\vectorstores\\Weaviate_Upsert\\Weaviate_Upsert.js"
  }
]
export default fulldata