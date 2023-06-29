import { ChatOpenAI } from "langchain/chat_models/openai";

import { BufferMemory } from "langchain/memory";

import { ConversationChain } from "langchain/chains";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";

const parser = StructuredOutputParser.fromNamesAndDescriptions({
  diagram:
    "mermaid chart code. If no chart could be generated, leave it as null",
  response:
    "response to user question, not the chart code. If no response, leave it as null",
});
const formatInstructions = parser.getFormatInstructions();



const PROMPT_TEMPLATE = `
{format_instructions}
Current conversation:
  {chat_history}
You are a senior mermaid diagram designer.
Below is the user input, it could be either or a doc or a description of a flow chart.
Please  generate the mermaid diagram for it.
Don't put space in the component names since it will cause render errors

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
    llm: new ChatOpenAI({ modelName:'gpt-3.5-turbo',temperature: 0.1,openAIApiKey:process.env.REACT_APP_OPENAI_API_KEY }),
  });
};
