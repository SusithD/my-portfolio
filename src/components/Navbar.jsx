"use client"; // Mark this component as a Client Component

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useScrollTrigger, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Optional: For a mobile menu icon
import Link from 'next/link'; // For client-side navigation (optional)

// Optional: Add a scroll behavior to hide the Navbar on scroll down
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#121212', // Dark theme background
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', // Subtle shadow
          backdropFilter: 'blur(10px)', // Frosted glass effect
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo or Name */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: '#ffffff', // White text
              cursor: 'pointer',
              '&:hover': {
                color: '#bb86fc', // Purple accent on hover
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
                  color: '#bb86fc', // Purple accent on hover
                  backgroundColor: 'rgba(187, 134, 252, 0.1)', // Light purple background on hover
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
                  color: '#bb86fc',
                  backgroundColor: 'rgba(187, 134, 252, 0.1)',
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
                  color: '#bb86fc',
                  backgroundColor: 'rgba(187, 134, 252, 0.1)',
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
                  color: '#bb86fc',
                  backgroundColor: 'rgba(187, 134, 252, 0.1)',
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
    </HideOnScroll>
  );
};

export default Navbar;