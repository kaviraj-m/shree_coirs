import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import cocoChips from '../assets/coco_chips.jpg';
import cocoPeat from '../assets/coco_peat.jpg';
import cocoMix from '../assets/coco_mix.jpg';
import growBag from '../assets/grow_bag.jpg';
import coinDisc from '../assets/coin_disc.jpg';

const products = [
  {
    name: '100% Coco Chips',
    description: 'Improves aeration and drainage for healthy plant growth.',
    moreInfo: 'Coco chips are great for orchids, hydroponics, and soil aeration, ensuring your plants have the perfect environment.',
    image: cocoChips,
  },
  {
    name: '100% Coco Peat',
    description: 'High water retention and Low EC for better root development.',
    moreInfo: 'Coco peat is an eco-friendly growing medium that retains moisture and improves nutrient absorption for plants.',
    image: cocoPeat,
  },
  {
    name: 'Custom Coco Mix',
    description: 'Perfect blend for all crops, available in 50:50, 60:40, and 70:30 ratios.',
    moreInfo: 'Custom coco mixes provide a tailored solution for diverse crop needs, balancing aeration and water retention.',
    image: cocoMix,
  },
  {
    name: 'Grow Bags',
    description: 'Durable grow bags for easy handling and growth support.',
    moreInfo: 'Our grow bags are UV-treated and ideal for both indoor and outdoor gardening, ensuring longevity and plant health.',
    image: growBag,
  },
  {
    name: '5kg Coco Blocks',
    description: 'High-density blocks for consistent plant growth.',
    moreInfo: 'These compact blocks expand when hydrated, providing a sustainable and versatile growing medium.',
    image: coinDisc,
  },
  {
    name: 'Coco Coins & Discs',
    description: 'Ideal for propagation and rooting with superior quality.',
    moreInfo: 'Perfect for nurseries and home gardening, coco coins and discs are easy to use and promote strong root development.',
    image: cocoChips,
  },
];

const Products = () => {
  const [expanded, setExpanded] = useState(Array(products.length).fill(false));

  const handleLearnMore = (index) => {
    setExpanded((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Box id="products" sx={{ my: 8, backgroundColor: 'transparent', py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ color: '#388e3c', fontWeight: 'bold' }}
      >
        Our Products
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', color: '#616161', mb: 4 }}
      >
        Discover a range of sustainable and high-quality coco products to support your agriculture needs.
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', mb: 1, color: '#388e3c' }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2 }}
                >
                  {expanded[index] ? product.moreInfo : product.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="success"
                  fullWidth
                  onClick={() => handleLearnMore(index)}
                  sx={{
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    boxShadow: '0px 4px 8px rgba(0, 128, 0, 0.2)',
                    '&:hover': {
                      backgroundColor: '#388e3c',
                      color: '#fff',
                    },
                  }}
                >
                  {expanded[index] ? 'Show Less' : 'Learn More'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
