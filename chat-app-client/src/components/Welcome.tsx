import React from 'react';
import { Stack, Typography } from '@mui/material';

const Welcome: React.FC = () => {
  return (
    <Stack 
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Typography variant="h2">Bienvenido al chat</Typography>
      <Typography variant='h6'>seleccione un usuario para visualizar el historial de conversaciones</Typography>
    </Stack>
  );
}

export default Welcome;