import React from 'react';
import { Box, Typography, Link, Grid, IconButton, Divider } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#333',
        color: 'white',
        p: 4,
        mt: 6,
        fontFamily: 'Roboto, sans-serif',
        textAlign: 'center',
        boxShadow: '0px -2px 15px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" sx={{ fontWeight: '600', color: '#4caf50', mb: 2 }}>
            Shree Coirs
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Leading the way in sustainable agricultural solutions. We provide eco-friendly coco products for healthy, thriving crops.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#about" color="inherit" sx={{ fontWeight: '500', textDecoration: 'none' }}>
              About Us
            </Link>
            <Link href="#products" color="inherit" sx={{ fontWeight: '500', textDecoration: 'none' }}>
              Our Products
            </Link>
            <Link href="#careers" color="inherit" sx={{ fontWeight: '500', textDecoration: 'none' }}>
              Careers
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" sx={{ fontWeight: '600', color: '#4caf50', mb: 2 }}>
            Stay Connected
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
            <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#3b5998' } }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#e4405f' } }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1da1f2' } }}>
              <Twitter />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#0077b5' } }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3, backgroundColor: '#4caf50' }} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" sx={{ fontSize: '14px' }}>
          &copy; {new Date().getFullYear()} Shree Coirs. All Rights Reserved. |{' '}
          <Link href="#privacy" color="inherit" sx={{ textDecoration: 'none', fontWeight: '500' }}>
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="#terms" color="inherit" sx={{ textDecoration: 'none', fontWeight: '500' }}>
            Terms & Conditions
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
