import React from 'react'; 
import { Grid, Paper, Typography, Box, Button } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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

        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              backgroundColor: '#1e88e5',
              color: '#ffffff',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
              padding: '12px 16px',
              borderRadius: '8px',
            }}
            href="https://maps.app.goo.gl/quyFJJe1B66X3Vp7A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocationOn />
            View Location
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{
              backgroundColor: '#25D366',
              '&:hover': { backgroundColor: '#1da851' },
              color: '#ffffff',
              textTransform: 'none',
              width: '100%',
              padding: '10px 16px',
            }}
            href="https://wa.me/917373046699?text=நான்%20உங்கள்%20இணையதளத்தை%20பார்த்தேன்."
            target="_blank"
          >
            Message Us on WhatsApp
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsDirectly;
