//input means it can receive edges
//output means it can create edges
//paramter means its just a standalone component like a textbox in the node
interface NodeData {
  type: "input" | "output" | "parameter";
  descripton: string;
}

export class Openai {
  options: {};
  name: string;
  description: string;
  type: string;
  inputs: NodeData[];
  outputs: NodeData[];
  icon: string;
  parameters: NodeData[];
  constructor() {
    this.name = "Openai";
    this.icon = "papericon";
    this.description = "Connects to Open AI LLM";
    this.type = "openAiNode";
    this.inputs = [];
    this.parameters = [
      {
        descripton: "enter your api key here",
        type: "parameter",
      },
    ];
    this.outputs = [
      {
        descripton: "openai llm",
        type: "output",
      },
    ];
    this.options = {};
  }
}
