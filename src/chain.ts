import { ChatOpenAI } from "langchain/chat_models/openai";

import { BufferMemory } from "langchain/memory";

import { ConversationChain } from "langchain/chains";
import { StructuredOutputParser } from "langchain/output_parsers";

const parser = StructuredOutputParser.fromNamesAndDescriptions({
  diagram:
    "mermaid chart code. If no chart could be generated, leave it as null",
  response:
    "response to user question, not the chart code. If no response, leave it as null",
});
const formatInstructions = parser.getFormatInstructions();

import { PromptTemplate } from "langchain/prompts";

const PROMPT_TEMPLATE = `
{format_instructions}
You are a senior mermaid diagram designer.
Below is the user input, it could be either or a doc or a description of a flow chart.
Please generate help generate the mermaid chart.
If it is doc, please try to extract the flow chart from the doc.
If it is a question regarding digram, please help to answer.
If it is anything else, just answer I am not sure.

Current conversation:
  {chat_history}
Human: {input}
AI:
`;

const chatPrompt = new PromptTemplate({
  template: PROMPT_TEMPLATE,
  inputVariables: ["input", "chat_history"],
  partialVariables: { format_instructions: formatInstructions },
});

export const makeChain = () => {
  return new ConversationChain({
    memory: new BufferMemory({ returnMessages: true, memoryKey: "chat_history" }),
    prompt: chatPrompt,
    llm: new ChatOpenAI({ temperature: 0.1 }),
  });
};
