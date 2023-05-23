//input means it can receive edges
//output means it can create edges
//paramter means its just a standalone component like a textbox in the node
interface NodeData {
  type: "input" | "output" | "parameter";
  descripton: string;
}

export class Prompt {
  options: {};
  name: string;
  description: string;
  type: string;
  inputs: NodeData[];
  outputs: NodeData[];
  icon: string;
  parameters: NodeData[];
  constructor() {
    this.name = "Prompt";
    this.icon = "papericon";
    this.description = "write your basic prompt here";
    this.type = "PromptTemplates";
    this.inputs = [];
    this.parameters = [
      {
        descripton: "enter your prompt here",
        type: "parameter",
      },
    ];
    this.outputs = [
      {
        descripton: "PromptTemplate",
        type: "output",
      },
    ];
    this.options = {};
  }
}
