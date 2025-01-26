"use client"; // Mark this component as a Client Component

import React from 'react';
import { Typography, Button } from '@mui/material';

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="home"
      style={{
        textAlign: 'center',
        padding: '150px 20px',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Hi, I'm Susith Deshan
      </Typography>
      <Typography variant="h5" gutterBottom>
        Software Engineering Student | Aspiring Developer
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleScroll('projects')}
      >
        View My Work
      </Button>
    </div>
  );
};

export default Hero;