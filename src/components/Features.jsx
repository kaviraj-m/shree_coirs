import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import EcoSVG from '../assets/eco.svg';
import SettingsSVG from '../assets/settings.svg';
import WaterDropSVG from '../assets/water_drop.svg';
import GrowthSVG from '../assets/growth.svg';
import SupportSVG from '../assets/support.svg';
import SustainabilitySVG from '../assets/sustainability.svg';

const features = [
  {
    title: 'Eco-Friendly Products',
    description: 'We offer biodegradable and environmentally responsible solutions, supporting sustainable agriculture for a greener tomorrow.',
    icon: EcoSVG,
  },
  {
    title: 'Customizable Mix Ratios',
    description: 'Our tailor-made coco coir mixes allow precise adjustments for crop-specific needs, offering ratios like 50:50, 60:40, and more.',
    icon: SettingsSVG,
  },
  {
    title: 'Low EC (0.3)',
    description: 'With optimal water and nutrient retention, our low EC products ensure healthier root systems and robust plant growth.',
    icon: WaterDropSVG,
  },
  {
    title: 'Enhanced Growth',
    description: 'Our products improve aeration, drainage, and root penetration, leading to accelerated and healthy crop development.',
    icon: GrowthSVG,
  },
  {
    title: 'Dedicated Support',
    description: 'Our team of experts is always ready to guide you with valuable insights and advice to ensure your agricultural success.',
    icon: SupportSVG,
  },
  {
    title: 'Sustainable Sourcing',
    description: 'Our products are responsibly sourced from certified eco-friendly farms, ensuring high quality while supporting environmental conservation.',
    icon: SustainabilitySVG,
  },
];

const Features = () => {
  return (
    <Box id="features" sx={{ my: 8, px: { xs: 3, sm: 6 }, py: { xs: 6, sm: 8 } }}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}>
        Why Choose Shree Coirs?
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%', 
                textAlign: 'center',
                padding: 4,
                boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                style={{ height: '72px', marginBottom: '20px' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#4caf50' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.9rem' }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
