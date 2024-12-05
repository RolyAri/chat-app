import { Box, Typography } from "@mui/material";
import React from "react";

interface MessageCardProps {
  text: string,
  date: string,
  direction: string,
  typeMessage: string
}


const MessageCard: React.FC<MessageCardProps> = ({ text, date, direction, typeMessage }) => {
  return (
    <Box display="flex" justifyContent={direction}>
      <Box className={`message ${typeMessage}`}>
        <Typography variant="subtitle2" padding="5px">
          {text}
        </Typography>
        <Typography variant="caption">{new Date(date).toLocaleTimeString()}</Typography>
      </Box>
    </Box>
  );
};

export default MessageCard;
