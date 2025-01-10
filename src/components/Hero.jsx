import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import heroImage from '../assets/hero.jpg';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Hero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom right, #e8f5e9, #ffe0b2)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '16px', sm: '32px', md: '64px' },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            animation: `${fadeIn} 1.5s ease-out`,
          }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="Shree Coirs Products"
            sx={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '12px',
              boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)',
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            animation: `${fadeIn} 2s ease-out`,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              mb: 3,
              color: '#2e2e2e',
            }}
          >
            Cultivating Sustainability
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              mb: 4,
              color: '#4c4c4c',
              lineHeight: 1.8,
            }}
          >
            At <b>Shree Coirs</b>, we specialize in eco-friendly coir products like 
            coco peat, coir fibers, and bio-grow solutions. Enhance your soil’s 
            fertility and grow your harvest naturally with our premium-grade products.
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            href="#products"
            sx={{
              px: { xs: 4, sm: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1rem', sm: '1.2rem' },
              borderRadius: '8px',
              boxShadow: '0px 8px 16px rgba(34, 139, 34, 0.4)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 12px 24px rgba(34, 139, 34, 0.6)',
              },
            }}
          >
            Explore Our Products
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
