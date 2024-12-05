import React from 'react';
import { Box } from '@mui/material';
import SideBar from '../components/SideBar';

import { Routes, Route } from 'react-router-dom';
import Welcome from '../components/Welcome';
import Chat from '../components/Chat';

interface HomeProps {
    setIsUserLogged: (value: boolean) => void;
  }

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/:id/:name" element={<Chat />} /> 
    </Routes>
  )
}

const Home: React.FC<HomeProps> = ({ setIsUserLogged }) => {
  return (
    <Box
    display="flex"
    gap="1rem"
    height="95vh"
    > 
      <SideBar setIsUserLogged={setIsUserLogged}/>
      <AllRoutes />
    </Box>
  );
};

export default Home;