"use client";

import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
      }}
    >
      <IconButton
        onClick={toggleTheme}
        sx={{
          width: 48,
          height: 48,
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.2)' 
            : 'rgba(0, 0, 0, 0.2)'}`,
          '&:hover': {
            backgroundColor: theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.2)'
              : 'rgba(0, 0, 0, 0.2)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <motion.div
          animate={{ rotate: isDarkMode ? 0 : 180 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {isDarkMode ? (
            <Moon size={24} color={theme.palette.text.primary} />
          ) : (
            <Sun size={24} color={theme.palette.text.primary} />
          )}
        </motion.div>
      </IconButton>
    </motion.div>
  );
};

export default ThemeToggle; 