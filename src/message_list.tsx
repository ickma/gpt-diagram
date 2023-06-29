import * as React from 'react';
import { Box, Typography } from '@mui/material';

interface IMessage {
  sender: string;
  message: string | React.ReactNode;
  timestamp: number; // Unix timestamp (in seconds)
}

interface IChatProps {
  messages: IMessage[];
}

const getTimeString = (timestamp: number): string => {
  const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const MessageList: React.FC<IChatProps> = (props: IChatProps) => {
  const { messages } = props;

  return (
    <Box sx={{ overflowY: 'auto', minHeight: '200px' }}>
      {messages.map((message: IMessage, index: number) => {
        const isAi = message.sender === 'AI';
        const textAlign = isAi ? 'left' : 'right';
        const color = isAi ? 'primary.main' : 'secondary.main';
        const backgroundColor = isAi ? '#E0E0E0' : '#DCF8C6';
        
        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: textAlign,
              my: 1,
              mx: isAi ? 1 : 0,
              px: 1,
              py: 0.5,
              borderRadius: '10px',
              backgroundColor,
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color={color}
              sx={{ mb: 0.5 }}
            >
              {message.sender} ({getTimeString(message.timestamp)}):
            </Typography>
            <Typography variant="body2">{message.message}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default MessageList;
