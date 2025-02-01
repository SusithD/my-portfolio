"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

// Typewriter Effect Component
const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax Effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      id="home"
      style={{
        textAlign: 'center',
        padding: '50px 20px',
        backgroundColor: '#000000', // Black background
        color: '#ffffff', // White text
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), 
          url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjEwMCUiIHkyPSIxMDAlIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=')
        `, // Subtle diagonal lines pattern
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        y, // Apply parallax effect
      }}
    >
      {/* Main Heading with Typewriter Effect */}
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#ffffff', // White text
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }, // Responsive font size
          marginBottom: '16px',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            backgroundColor: '#ffffff', // White underline
          },
        }}
      >
        Hi, I'm <Typewriter text="Susith Deshan" delay={100} />
      </Typography>

      {/* Subheading */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: '#a0a0a0', // Light gray text
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }, // Responsive font size
          marginBottom: '32px',
        }}
      >
        Software Engineering Student | Aspiring Developer
      </Typography>

      {/* Call-to-Action Button with Hover Effect */}
      <Button
        variant="outlined"
        sx={{
          color: '#ffffff', // White text
          borderColor: '#ffffff', // White border
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#ffffff', // White background on hover
            color: '#000000', // Black text on hover
            borderColor: '#ffffff',
            transform: 'scale(1.05)', // Slight scale on hover
          },
        }}
        onClick={() => handleScroll('projects')}
      >
        View My Work
      </Button>
    </motion.div>
  );
};

export default Hero;