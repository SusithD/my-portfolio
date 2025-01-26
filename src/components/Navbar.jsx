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
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background
        backdropFilter: 'blur(10px)', // Frosted glass effect
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', // Subtle shadow
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo or Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#ffffff', // White text
            cursor: 'pointer',
            '&:hover': {
              color: '#0070f3', // Blue accent on hover
            },
          }}
          onClick={() => handleScroll('home')}
        >
          Susith Deshan
        </Typography>

        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button
            color="inherit"
            onClick={() => handleScroll('home')}
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#ffffff', // White text
              '&:hover': {
                color: '#0070f3', // Blue accent on hover
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
                color: '#0070f3',
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
                color: '#0070f3',
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
                color: '#0070f3',
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