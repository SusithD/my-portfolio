"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#000000', // Black background
        boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.1)', // Subtle white shadow
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
              opacity: 0.8,
              transform: 'scale(1.05)', // Slight scale animation on hover
              transition: 'transform 0.3s ease',
            },
          }}
          onClick={() => handleScroll('home')}
        >
          Susith Deshan
        </Typography>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '24px' }}>
          <Button
            color="inherit"
            onClick={() => handleScroll('home')}
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#ffffff', // White text
              position: 'relative',
              '&:hover::after': {
                content: '""',
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                width: '100%',
                height: '2px',
                backgroundColor: '#ffffff', // White underline on hover
                animation: 'underline 0.3s ease',
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
              position: 'relative',
              '&:hover::after': {
                content: '""',
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                width: '100%',
                height: '2px',
                backgroundColor: '#ffffff',
                animation: 'underline 0.3s ease',
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
              position: 'relative',
              '&:hover::after': {
                content: '""',
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                width: '100%',
                height: '2px',
                backgroundColor: '#ffffff',
                animation: 'underline 0.3s ease',
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
              position: 'relative',
              '&:hover::after': {
                content: '""',
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                width: '100%',
                height: '2px',
                backgroundColor: '#ffffff',
                animation: 'underline 0.3s ease',
              },
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          sx={{ display: { xs: 'block', sm: 'none' }, color: '#ffffff' }}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              flexDirection: 'column',
              gap: '16px',
              position: 'absolute',
              top: '64px',
              right: '24px',
              backgroundColor: '#111111', // Dark gray background
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.1)', // Subtle white shadow
            }}
          >
            <Button
              color="inherit"
              onClick={() => handleScroll('home')}
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                color: '#ffffff',
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
              }}
            >
              Contact
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;