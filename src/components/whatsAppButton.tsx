import React from 'react';
import { Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton: React.FC = () => {
  return (
    <Box
      component="a"
      href="https://wa.me/5599999999999" // Substitua pelo número do WhatsApp desejado
      target="_blank"
      rel="noopener noreferrer"
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
