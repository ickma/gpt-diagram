import * as React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface IChatProps {
  onSend: (message: string) => void;
}

const Chat: React.FC<IChatProps> = (props: IChatProps) => {
  const [message, setMessage] = React.useState('');

  const handleSend = () => {
    if (message.trim().length > 0) {
      props.onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
      <TextField
        label="Type your message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
        fullWidth
        autoFocus
        sx={{ mr: 1 }}
      />
      <IconButton onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default Chat;
