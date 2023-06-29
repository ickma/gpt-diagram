import React, { useState } from "react";
import { Box } from "@mui/material";
import MessageList, { IMessage } from "../components/message_list";
import Chat from "../components/chat";
import Diagram from "../components/diagram";
import { makeChain } from "components/chain";

const MainPage = () => {
  const initialMessage = {
    sender: "AI",
    message:
      "I am your diagram assistant, I can help you to draw a diagram, just type your code or paste your doc here and I will draw it for you",
    timestamp: Math.floor(Date.now() / 1000),
  };
  const [messageList, setMessageList] = useState<IMessage[]>([initialMessage]);
  const chain = makeChain();

  const onSend = async (message: string) => {
    const newMessageList = [...messageList];
    newMessageList.push({
      sender: "Me",
      message,
      timestamp: Math.floor(Date.now() / 1000),
    });
    setMessageList(newMessageList);
    const response = await chain.call({ input: message });
    const result = JSON.parse(response.response);
    const AIMessage = result.diagram ? (
      <Diagram code={result.diagram} />
    ) : (
      result.response
    );
    const newMessageListWithAIMessage = [...newMessageList];
    newMessageListWithAIMessage.push({
      sender: "AI",
      message: AIMessage,
      timestamp: Math.floor(Date.now() / 1000),
    });
    setMessageList(newMessageListWithAIMessage);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "80%",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <MessageList messages={messageList} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Chat onSend={onSend} />
      </Box>
    </Box>
  );
};

export default MainPage;
