import React from 'react';
import { Box, Typography } from '@mui/material';
import designLogo from '../assets/design.png';

const DesignedBy = () => {
  return (
    <Box
      sx={{
        mt: 8,
        textAlign: 'center',
        py: 4,
        px: 3,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
        borderRadius: '12px',
        maxWidth: '600px', 
        mx: 'auto',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          color: '#333',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Designed By
      </Typography>
      <Box
        component="img"
        src={designLogo}
        alt="Design Logo"
        sx={{
          width: { xs: '220px', sm: '260px', md: '300px' }, 
          height: 'auto',
          mx: 'auto',
          opacity: 0.95,
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
        }}
      />
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          color: '#666',
          lineHeight: 1.6,
          maxWidth: '500px',
          mx: 'auto',
          fontSize: '1rem', 
        }}
      >
        Creating innovative and user-centered designs that align with modern
        aesthetics and usability principles. We strive for excellence in every
        pixel.
      </Typography>
    </Box>
  );
};

export default DesignedBy;
