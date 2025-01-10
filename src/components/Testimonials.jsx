import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import TestimonialSVG from '../assets/testimonial.svg';

const testimonials = [
  {
    name: 'Arun Kumar',
    feedback: 'The custom coco coir mixes have made a noticeable difference in my farm. The growth of my vegetables has been much better than before, especially in terms of root health and overall plant vitality.',
    avatar: 'https://picsum.photos/80/80?random=1',
  },
  {
    name: 'Divya Rani',
    feedback: 'Being in the farming business for over 10 years, I have never encountered a product as reliable as this. Their eco-friendly and sustainable mixes have helped my crops grow stronger, while being kinder to the environment.',
    avatar: 'https://picsum.photos/80/80?random=2',
  },
  {
    name: 'Prakash Raj',
    feedback: 'I have been using these products for my horticulture farm. The results speak for themselves. The crops are thriving, and the nutrient retention of their mixes is excellent, ensuring healthy and long-lasting growth.',
    avatar: 'https://picsum.photos/80/80?random=3',
  },
  {
    name: 'Nithya Suresh',
    feedback: 'I’ve always struggled with finding the right mix for my crops. These tailored solutions helped me create the perfect environment for my plants, and now I see faster growth and better yields.',
    avatar: 'https://picsum.photos/80/80?random=4',
  },
];

const Testimonials = () => {
  return (
    <Box id="testimonials" sx={{ my: 8, px: { xs: 3, sm: 6 }, py: { xs: 6, sm: 8 } }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          color: '#333',
          fontSize: { xs: '1.6rem', sm: '2rem' },
        }}
      >
        What Our Clients Say
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: '100%', sm: 320 },
              boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.2)',
              },
              backgroundColor: '#f1f1f1',
            }}
          >
            <CardContent sx={{ textAlign: 'center', padding: 4 }}>
              <Avatar
                alt={testimonial.name}
                src={testimonial.avatar}
                sx={{ width: 80, height: 80, margin: '0 auto 16px', border: '3px solid #4caf50' }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 2, color: '#333', fontSize: '1.1rem' }}
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontSize: '0.95rem',
                  marginBottom: 2,
                  color: '#555',
                }}
              >
                {testimonial.feedback}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <StarIcon sx={{ color: '#f39c12', fontSize: '1.5rem' }} />
                <StarIcon sx={{ color: '#f39c12', fontSize: '1.5rem' }} />
                <StarIcon sx={{ color: '#f39c12', fontSize: '1.5rem' }} />
                <StarIcon sx={{ color: '#f39c12', fontSize: '1.5rem' }} />
                <StarIcon sx={{ color: '#f39c12', fontSize: '1.5rem' }} />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
