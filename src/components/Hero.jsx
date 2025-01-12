import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import heroImage from '../assets/hero.jpg';
import { keyframes } from '@mui/system';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const fadeIn = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Hero = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;
    if (vantaRef.current) {
      vantaEffect = CLOUDS({
        el: vantaRef.current,
        THREE,
        color: 0x87ceeb,
        backgroundColor: 0xffffff,
        cloudColor: 0xadd8e6,
        speed: 1.5,
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <Box
      ref={vantaRef}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: { xs: '16px', sm: '32px', md: '64px' },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            animation: `${fadeIn} 1.5s ease-out`,
            order: { xs: 2, md: 1 },
          }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="Shree Coirs Products"
            sx={{
              width: '100%',
              maxWidth: { xs: '350px', sm: '500px', md: '600px' },
              borderRadius: '16px',
              boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.4)',
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            animation: `${fadeIn} 2s ease-out`,
            order: { xs: 1, md: 2 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
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
 