// src/components/Hero.jsx
import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

const Hero = () => {
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
      <Button variant="contained" color="primary">
        <Link to="projects" smooth={true} duration={500}>
          View My Work
        </Link>
      </Button>
    </div>
  );
};

export default Hero;