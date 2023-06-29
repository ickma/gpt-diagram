import React from "react";
import MessageList from "./message_list";

const messages =  [
  { sender: 'AI', message: 'Hello there', timestamp: 1634947612 },
  { sender: 'Me', message: <span>Hi AI</span>, timestamp: 1634947624 },
  { sender: 'AI', message: 'How are you?', timestamp: 1634947635 },
  { sender: 'Me', message: <em>I am doing fine, thanks</em>, timestamp: 1634947647 },
]

export default {
  title: "MessageList",
  component: MessageList,
}

export const Default = () => <MessageList messages={messages} />