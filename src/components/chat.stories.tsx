import React from 'react';
import Chat from './chat';

export default {
    title: 'Chat',
    component: Chat,
};

export const Default = () => <Chat onSend={(message) => console.log(message)} />;
