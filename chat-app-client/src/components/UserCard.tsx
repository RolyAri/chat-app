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
      onClick={()=> navigate(`/${id}/${firstName} ${lastName}`)}
      >
        <Avatar 
          src={`https://api.dicebear.com/9.x/initials/svg?seed=${firstName} ${lastName}`} 
          className='profile-pic'
        />
        <Typography variant="subtitle2">{firstName} {lastName}</Typography> 
      </Box>
    );
};

export default UserCard;