import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';

const ContactUsDirectly = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        maxWidth: 600,
        margin: 'auto',
        marginTop: 4, 
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontWeight: 'bold',
          color: '#202124', 
          textAlign: 'center',
        }}
      >
        Contact Us Directly
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              borderRadius: '8px',
              gap: 2,
              backgroundColor: '#f5f5f5',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#e8f0fe',
              },
            }}
          >
            <Phone sx={{ fontSize: '24px', color: '#5f6368' }} />
            <Typography variant="body1" sx={{ fontWeight: 500, color: '#202124' }}>
              +91 73730 46699
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              borderRadius: '8px',
              gap: 2,
              backgroundColor: '#f5f5f5',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#e8f0fe',
              },
            }}
          >
            <Phone sx={{ fontSize: '24px', color: '#5f6368' }} />
            <Typography variant="body1" sx={{ fontWeight: 500, color: '#202124' }}>
              +91 73730 47799
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 16px',
              borderRadius: '8px',
              gap: 2,
              backgroundColor: '#f5f5f5',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#e8f0fe',
              },
            }}
          >
            <Email sx={{ fontSize: '24px', color: '#d93025' }} />
            <Typography variant="body1" sx={{ fontWeight: 500, color: '#202124' }}>
              shreecoirs07@gmail.com
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsDirectly;
