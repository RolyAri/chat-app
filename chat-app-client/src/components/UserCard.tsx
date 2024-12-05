import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
    id: number;
    firstName: string;
    lastName: string;
}

const UserCard: React.FC<UserCardProps> = ({ id, firstName, lastName }) => {
    const navigate = useNavigate()
    return (
      <Box
      className='chat-item'
      /* direction="row"
      spacing={2}
      sx={{py: 1}} */
      onClick={()=> navigate(`/${id}/${firstName} ${lastName}`)}
      >
        <Avatar 
          src={`https://api.dicebear.com/9.x/initials/svg?seed=${firstName} ${lastName}`} 
          /* sx={{ width: "32px", height: "32px" }}  */
          className='profile-pic'
        />
        <Typography variant="subtitle2">{firstName} {lastName}</Typography> 
      </Box>
    );
  /* return (
    <Stack
    className='usercard'
    direction="row"
    spacing={2}
    sx={{py: 1}}
    onClick={()=> navigate(`/${id}/${firstName} ${lastName}`)}
    >
      <Avatar 
        src={`https://api.dicebear.com/9.x/initials/svg?seed=${firstName} ${lastName}`} 
        sx={{ width: "32px", height: "32px" }} 
      />
      <Typography variant="subtitle2">{firstName} {lastName}</Typography> 
    </Stack>
  ); */
};

export default UserCard;