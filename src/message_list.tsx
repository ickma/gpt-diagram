import React from 'react';
import {  MessageList  as MessageListComponent, MessageType } from "react-chat-elements" 

type Message ={
  position: 'left' | 'right';
  type: 'text';
  text: string;
  title: string;
  date: Date
}

const MessageList = (props: {messages: Message[]}) => {
  const { messages } = props;
  return (
    <MessageListComponent
      className='message-list'
      lockable={true}
      referance={null}
      toBottomHeight={'100%'}
      dataSource={messages as MessageType []}
    />
  )
}