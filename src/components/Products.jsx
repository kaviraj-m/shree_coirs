import React from 'react';
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
    image: cocoChips,
  },
  {
    name: '100% Coco Peat',
    description: 'High water retention and Low EC for better root development.',
    image: cocoPeat,
  },
  {
    name: 'Custom Coco Mix',
    description: 'Perfect blend for all crops, available in 50:50, 60:40, and 70:30 ratios.',
    image: cocoMix,
  },
  {
    name: 'Grow Bags',
    description: 'Durable grow bags for easy handling and growth support.',
    image: growBag,
  },
  {
    name: '5kg Coco Blocks',
    description: 'High-density blocks for consistent plant growth.',
    image: coinDisc,
  },
  {
    name: 'Coco Coins & Discs',
    description: 'Ideal for propagation and rooting with superior quality.',
    image: cocoChips,
  },
];

const Products = () => {
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
                  {product.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="success"
                  fullWidth
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
                  Learn More
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
