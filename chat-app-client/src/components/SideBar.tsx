import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material'
import UserCard from './UserCard';
import useGetAllUsers from '../hooks/getAllUsers';

interface SideBarProps {
  setIsUserLogged: (value: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({setIsUserLogged}) => {
  const {data, loading, error} = useGetAllUsers()
  if(loading) return (<Typography variant='h6'>Cargando chats</Typography>)
  if(error) console.log(error)
    return (
      <Box className="sidebar">
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Chat</Typography>
        <LogoutIcon onClick={()=>{
          localStorage.removeItem('jwt')
          setIsUserLogged(false)
        }}/>
      </Stack>
      <Divider />
      <Box className="chat-list">
        {data.users.map((item:any) => (
        <UserCard key={item.id} {...item}/>
        ))}
      </Box>
      
    </Box>
  )
  /* return (
    <Box
    bgcolor = "#f7f7f7"
    height="100vh"
    width="250px"
    padding="10px"
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Chat</Typography>
        <LogoutIcon onClick={()=>{
          localStorage.removeItem('jwt')
          setIsUserLogged(false)
        }}/>
      </Stack>
      <Divider />
      {data.users.map((item:any) => (
        <UserCard key={item.id} {...item}/>
      ))}
    </Box>
  ); */
};

export default SideBar;