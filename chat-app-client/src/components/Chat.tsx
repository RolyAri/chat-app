import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Avatar,
  TextField,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MessageCard from "./MessageCard";
/* import useGetMessagesByUser from "../hooks/messageByUser"; */
import {Send as SendIcon} from "@mui/icons-material"
import  { CREATE_MESSAGE } from "../hooks/createMessage";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { MESSAGE_SUB } from "../hooks/messageSub";
import { GET_MESSAGES_BY_USER } from "../hooks/messageByUser";

interface Message {
    id: string;
    text: string;
    receiverId: string;
    senderId: string;
    createdAt: string;
  }
  

const Chat: React.FC = () => {
  const { id, name } = useParams();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const receiverId = id ? +id : undefined; 
  const {loading: loadingGetMessage} = useQuery(GET_MESSAGES_BY_USER,{
    variables: {
      receiverId: receiverId
    },
    onCompleted(dataGetMessage){
      setMessages(dataGetMessage.messageByUser)
    }
  });
  const [createMessage] = useMutation(CREATE_MESSAGE,{
    /* onCompleted(data){
      setMessages((prev) => [...prev, data.createMessage])
    } */
  });

  /* useEffect(() => {
    if (dataGetMessage) {
      setMessages(dataGetMessage.messageByUser);
    }
  }, [dataGetMessage]); */

  /* useEffect(() => {
    if(dataCreateMessage) {
        setMessages((prevMessages)=>[
            ...prevMessages, dataCreateMessage.createMessage
          ])
      }
  }, [dataCreateMessage]); */

  useSubscription(MESSAGE_SUB,{
    onSubscriptionData(subData) {
      console.log(subData)
      setMessages((prev) => [...prev, subData.subscriptionData.data.messageAdded])
    },
  });

  /* useEffect(()=> {
    if(subData) {
      console.log(subData)
      setMessages((prev) => [...prev, subData.messageAdded])
    }
  },[subData]) */
  /* if (subData) {
    console.log(subData);
  }
  if (errorSubData) {
    console.log(errorSubData);
  } */

  
  return (
    <Stack flexGrow={1} height="95vh">
      <AppBar position="static" sx={{ background: "#5D5FEF", boxShadow: 0 }}>
        <Toolbar>
          <Avatar
            src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}`}
            sx={{ width: "32px", height: "32px", marginRight: "1rem" }}
          />
          <Typography variant="h6" color="white">
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className="chat-content" >
        {
            loadingGetMessage ? <Typography variant="h6">Cargando chats</Typography> : messages.map((msg:any)=>{
                return <MessageCard key={msg.createdAt} text={msg.text} date={msg.createdAt} direction={msg.receiverId == receiverId ? "end" : "start"} typeMessage={msg.receiverId == receiverId ? "sent" : "received"}></MessageCard>
            })
        }
        {/* <MessageCard text="hi mukesh" date="1223" direction="start"></MessageCard>
        <MessageCard text="hi mukesh" date="1223" direction="end"></MessageCard>
        <MessageCard text="hi mukesh" date="1223" direction="start"></MessageCard> */}
      </Box>
      <Stack direction="row">
        <TextField placeholder="Escribe un mensaje" variant="standard" fullWidth multiline rows={2} value={text} onChange={e=> setText(e.target.value)} />
        <SendIcon fontSize="large" onClick={()=>{
            createMessage({
                variables: {
                    receiverId: receiverId,
                    text: text
                }
            })
            
        }} />
      </Stack>
    </Stack>
  );
};

export default Chat;
