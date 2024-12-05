import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material'
import UserCard from './UserCard';
import useGetAllUsers from '../hooks/getAllUsers';

interface SideBarProps {
  setIsUserLogged: (value: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({setIsUserLogged}) => {
  const {data, loading} = useGetAllUsers()
  if(loading) return (<Typography variant='h6'>Cargando chats</Typography>)
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
};

export default SideBar;