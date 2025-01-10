import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import MissionIcon from '@mui/icons-material/EmojiNature';
import VisionIcon from '@mui/icons-material/Visibility';
import ValueIcon from '@mui/icons-material/ThumbUpAlt';
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

const AboutUs = () => {
  return (
    <Box
      id="about"
      sx={{
        background: 'linear-gradient(to bottom right, #e8f5e9, #e3f2fd)',
        py: 10,
        px: { xs: 3, sm: 6, md: 10 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#2e7d32',
          mb: 4,
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        About Us
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          color: '#4f4f4f',
          mb: 8,
          maxWidth: '800px',
          mx: 'auto',
          lineHeight: 1.8,
          animation: `${fadeIn} 1.5s ease-out`,
        }}
      >
        At <b>Shree Coirs</b>, we are passionate about sustainability and innovation.
        Our coco products empower farmers to grow better, greener, and more
        efficiently, while caring for the planet. Together, we nurture nature for a
        sustainable tomorrow.
      </Typography>

      <Grid container spacing={6} alignItems="stretch">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '12px',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
              animation: `${fadeIn} 1.8s ease-out`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: '#4caf50',
                mx: 'auto',
                mb: 2,
                width: 60,
                height: 60,
              }}
            >
              <MissionIcon fontSize="large" />
            </Avatar>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 2, color: '#2e7d32' }}
            >
              Our Mission
            </Typography>
            <Typography variant="body2" sx={{ color: '#4f4f4f' }}>
              To empower sustainable agriculture with eco-friendly coco products
              that enhance productivity and care for the planet.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '12px',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
              animation: `${fadeIn} 2.1s ease-out`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: '#8d6e63',
                mx: 'auto',
                mb: 2,
                width: 60,
                height: 60,
              }}
            >
              <VisionIcon fontSize="large" />
            </Avatar>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 2, color: '#6d4c41' }}
            >
              Our Vision
            </Typography>
            <Typography variant="body2" sx={{ color: '#4f4f4f' }}>
              To be the global leader in sustainable coco products, fostering
              innovation and creating lasting impact for farmers and the planet.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '12px',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
              animation: `${fadeIn} 2.4s ease-out`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: '#795548',
                mx: 'auto',
                mb: 2,
                width: 60,
                height: 60,
              }}
            >
              <ValueIcon fontSize="large" />
            </Avatar>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 2, color: '#5d4037' }}
            >
              Our Values
            </Typography>
            <Typography variant="body2" sx={{ color: '#4f4f4f' }}>
              Integrity, sustainability, and innovation guide us in everything we
              do, creating value for farmers and preserving nature.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
