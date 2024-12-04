import React from 'react';
import { Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton: React.FC = () => {
  return (
    <Box
      component="a"
      href="https://wa.me/551239418414?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20algumas%20informações!"  // Substitua pelo número do WhatsApp desejado
      target="_blank"
      rel="noopener noreferrer"
      // Adiciona o manipulador de clique
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: '#25D366',
        color: 'white',
        padding: 1.5,
        borderRadius: '50%',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <WhatsAppIcon fontSize="large" />
    </Box>
  );
};

export default WhatsAppButton;
