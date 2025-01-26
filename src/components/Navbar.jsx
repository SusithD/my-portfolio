"use client"; // Mark this component as a Client Component

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#1e1e1e' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Susith Deshan
        </Typography>
        <Button color="inherit" onClick={() => handleScroll('home')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => handleScroll('about')}>
          About
        </Button>
        <Button color="inherit" onClick={() => handleScroll('projects')}>
          Projects
        </Button>
        <Button color="inherit" onClick={() => handleScroll('contact')}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;