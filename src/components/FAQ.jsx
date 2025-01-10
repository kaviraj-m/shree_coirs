import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help'; 

const faqs = [
  {
    question: 'What is the ideal mix ratio?',
    answer: 'It depends on your crops. Popular ratios are 50:50 and 60:40, but we can customize based on your specific needs.',
  },
  {
    question: 'Are all products Low EC?',
    answer: 'Yes, all our products maintain Low EC levels (0.3) to promote healthy plant growth.',
  },
  {
    question: 'How long does the coco coir last?',
    answer: 'Coco coir lasts for several growing cycles, depending on usage and maintenance. Typically, it lasts for 2-3 years.',
  },
  {
    question: 'Is the coco mix eco-friendly?',
    answer: 'Yes, all our coco coir products are sustainably sourced and biodegradable, ensuring minimal environmental impact.',
  },
  {
    question: 'Can I use Coco Strong for hydroponics?',
    answer: 'Yes, our products are suitable for hydroponic systems, providing excellent aeration and moisture retention for optimal plant growth.',
  },
];

const FAQ = () => {
  return (
    <Box id="faq" sx={{ my: 8, px: { xs: 3, sm: 6 }, py: { xs: 6, sm: 8 } }}>
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
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '16px',
            '&:hover': {
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
            },
            transition: 'box-shadow 0.3s ease-in-out',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#4caf50' }} />}
            sx={{
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              padding: '16px',
              '&:hover': {
                backgroundColor: '#f1f1f1',
              },
            }}
          >
            <HelpIcon sx={{ color: '#4caf50', marginRight: 2 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: '#333',
                fontSize: { xs: '1rem', sm: '1.2rem' }, 
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#f9f9f9',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '0.95rem',
              color: '#555',
            }}
          >
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
