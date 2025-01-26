"use client"; // Mark this component as a Client Component

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Optional: For a mobile menu icon

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Semi-transparent black background
        backdropFilter: 'blur(10px)', // Frosted glass effect
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', // Subtle shadow
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Subtle white border
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0 24px' }}>
        {/* Logo or Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#ffffff', // White text
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8, // Slight fade on hover
            },
          }}
          onClick={() => handleScroll('home')}
        >
          Susith Deshan
        </Typography>

        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <Button
            color="inherit"
            onClick={() => handleScroll('home')}
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#ffffff', // White text
              '&:hover': {
                color: '#ffffff', // Keep text white
                borderBottom: '2px solid #ffffff', // White underline on hover
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScroll('about')}
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#ffffff',
              '&:hover': {
                color: '#ffffff',
                borderBottom: '2px solid #ffffff',
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScroll('projects')}
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#ffffff',
              '&:hover': {
                color: '#ffffff',
                borderBottom: '2px solid #ffffff',
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScroll('contact')}
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#ffffff',
              '&:hover': {
                color: '#ffffff',
                borderBottom: '2px solid #ffffff',
              },
            }}
          >
            Contact
          </Button>
        </div>

        {/* Optional: Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', sm: 'none' } }} // Show only on small screens
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;