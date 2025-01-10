import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Products', href: '#products' },
    { text: 'Features', href: '#features' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Contact Us', href: '#contactus' },
  ];

  const handleNavigation = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 64;
      const scrollPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
          zIndex: 1300,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingX: { xs: '16px', sm: '32px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: '#2c3e50',
                fontWeight: 'bold',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
              }}
            >
              Shree Coirs
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: '#2c3e50' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={(e) => handleNavigation(e, item.href)}
                sx={{
                  color: '#2c3e50',
                  fontSize: '1rem',
                  textTransform: 'capitalize',
                  '&:hover': {
                    color: '#006400',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: 1301 }}
      >
        <Box
          sx={{
            width: 300,
            backgroundColor: '#f4f4f4',
            height: '100%',
            paddingTop: '16px',
            paddingBottom: '16px',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={(e) => handleNavigation(e, item.href)}>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      textAlign: 'center',
                      color: '#2c3e50',
                      fontWeight: 'bold',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ marginTop: '64px' }}></Box>
    </>
  );
};

export default Header;
