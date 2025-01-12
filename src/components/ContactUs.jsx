import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  Container,
} from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.mobile) {
      setError('All fields are required.');
      return;
    }

    setError('');

    const emailBody = `
      Name: ${formData.name}%0A
      Email: ${formData.email}%0A
      Mobile: ${formData.mobile}%0A
      Message: ${formData.message}
    `;

    window.location.href = `mailto:shreecoirs07@gmail.com?subject=Contact Us Submission&body=${emailBody}`;
  };

  return (
    <Box
      id="contactus"
      sx={{
        bgcolor: 'transparent', 
        py: 6,
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.8)', 
            p: { xs: 4, sm: 6 },
            borderRadius: '12px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              color: '#00796b',
              fontSize: { xs: '24px', sm: '32px' },
              textTransform: 'uppercase',
            }}
          >
            Get in Touch with Us
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  sx={{
                    borderRadius: '8px',
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  sx={{
                    borderRadius: '8px',
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  sx={{
                    borderRadius: '8px',
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  sx={{
                    borderRadius: '8px',
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    fontSize: '16px',
                    textTransform: 'none',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: '#00796b',
                    '&:hover': { backgroundColor: '#004d40' },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
