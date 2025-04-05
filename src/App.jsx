"use client";

import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import createAppTheme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechStack from './components/TechStack';

function App() {
  const [mode, setMode] = useState('dark');

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <Hero toggleTheme={toggleTheme} isDarkMode={mode === 'dark'} />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App; 