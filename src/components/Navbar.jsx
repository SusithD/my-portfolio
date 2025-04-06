"use client";

import React, { useState, useEffect } from 'react';
import { Box, Container, IconButton, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail, ArrowUp, Terminal, Github, Linkedin, Twitter, Palette } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for navbar styling
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      // Show back to top button after scrolling down
      const shouldShowBackToTop = window.scrollY > 500;
      setShowBackToTop(shouldShowBackToTop);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'model3d', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
  };

  // Nav items
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }
  ];

  // Social links
  const socialLinks = [
    { id: 'github', icon: <Github size={18} />, url: 'https://github.com/SusithD' },
    { id: 'linkedin', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/susith-deshan-alwis/' },
    { id: 'behance', icon: <Palette size={18} />, url: 'https://www.behance.net/susithalwis' }
  ];

  return (
    <>
      {/* Floating Navbar */}
      <Box
        component={motion.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          position: 'fixed',
          top: '20px',
          left: '0',
          right: '0',
          margin: '0 auto',
          zIndex: 1000,
          width: 'auto',
          minWidth: { xs: '90%', sm: '80%', md: '60%' },
          maxWidth: '800px',
          backgroundColor: scrolled 
            ? 'rgba(0, 0, 0, 0.8)' 
            : 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: scrolled 
            ? '0 10px 30px rgba(0, 0, 0, 0.3)' 
            : '0 5px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          py: 1,
          px: { xs: 1, sm: 2, md: 3 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          {/* Logo */}
          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <Terminal size={24} color="rgba(255, 255, 255, 0.9)" />
            <Typography
              variant="h6"
              sx={{
                ml: 1,
                fontWeight: 700,
                fontSize: '1.2rem',
                background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.7))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Susith
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              sx={{
                display: 'flex',
                gap: 1,
                justifyContent: 'center',
                flex: 1
              }}
            >
              {navItems.map((item) => (
                <Box
                  key={item.id}
                  component={motion.button}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    background: activeSection === item.id 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'transparent',
                    border: 'none',
                    color: activeSection === item.id 
                      ? '#fff' 
                      : 'rgba(255, 255, 255, 0.7)',
                    cursor: 'pointer',
                    p: 1,
                    px: 2,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#fff',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }
                  }}
                >
                  {item.icon}
                  <Box component="span" sx={{ fontWeight: 500 }}>
                    {item.label}
                  </Box>
                </Box>
              ))}
            </Box>
          )}

          {/* Social Links (Desktop) */}
          {!isMobile && (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              sx={{
                display: 'flex',
                gap: 1
              }}
            >
              {socialLinks.map((link) => (
                <Box
                  key={link.id}
                  component={motion.a}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    cursor: 'pointer',
                    p: 1,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#fff',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }
                  }}
                >
                  {link.icon}
                </Box>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': {
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            width: '70%',
            maxWidth: '300px',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              '&:hover': {
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }
            }}
          >
            <X size={24} />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.id}
              button
              onClick={() => scrollToSection(item.id)}
              sx={{
                color: activeSection === item.id 
                  ? '#fff' 
                  : 'rgba(255, 255, 255, 0.7)',
                backgroundColor: activeSection === item.id 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'transparent',
                '&:hover': {
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, mt: 'auto', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 1 }}>
            Connect with me
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((link) => (
              <Box
                key={link.id}
                component={motion.a}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  cursor: 'pointer',
                  p: 1,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }
                }}
              >
                {link.icon}
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              zIndex: 1000
            }}
          >
            <Box
              component={motion.button}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              sx={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }
              }}
            >
              <ArrowUp size={24} color="rgba(255, 255, 255, 0.9)" />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;