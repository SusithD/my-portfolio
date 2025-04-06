// src/components/Footer.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Link, Grid, IconButton, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Terminal, Code, Heart } from 'lucide-react';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const currentYear = new Date().getFullYear();

  // Effect for mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Effect for scroll position
  useEffect(() => {
    const handleScroll = () => {
      const shouldShowBackToTop = window.scrollY > 500;
      setShowBackToTop(shouldShowBackToTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Gradient animation for the title
  const gradientAnimation = {
    background: mounted 
      ? "linear-gradient(45deg, #FFFFFF, #808080, #FFFFFF)" 
      : "linear-gradient(45deg, #FFFFFF, #808080, #FFFFFF)",
    backgroundSize: "200% 200%",
    animation: mounted ? "gradientShift 8s ease infinite" : "none",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent"
  };

  // Quick links with hover effects
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  // Social links with hover effects
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github size={20} />, 
      href: "https://github.com/SusithD",
      color: "#6e5494"
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={20} />, 
      href: "https://www.linkedin.com/in/susith-deshan-alwis/",
      color: "#0077b5"
    },
    { 
      name: "Twitter", 
      icon: <Twitter size={20} />, 
      href: "https://twitter.com/susithdeshan",
      color: "#1da1f2"
    },
    { 
      name: "Email", 
      icon: <Mail size={20} />, 
      href: "mailto:iamsusithalwis@gmail.com",
      color: "#ea4335"
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 8 },
        borderTop: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      {/* Background gradient orbs */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "100%",
          background: "radial-gradient(circle at center, rgba(100,100,255,0.5), rgba(100,100,255,0) 70%)",
          bottom: "-300px",
          left: "-100px",
          filter: "blur(60px)",
          zIndex: 0
        }}
      />
      
      {/* Secondary background gradient orb */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        sx={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "100%",
          background: "radial-gradient(circle at center, rgba(255,100,100,0.5), rgba(255,100,100,0) 70%)",
          top: "-200px",
          right: "-100px",
          filter: "blur(60px)",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Footer Logo */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 6
          }}
        >
          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer"
            }}
            onClick={scrollToTop}
          >
            <Terminal size={28} color="rgba(255, 255, 255, 0.9)" />
            <Typography
              variant="h5"
              sx={{
                ml: 1,
                fontWeight: 700,
                ...gradientAnimation
              }}
            >
              Susith Deshan
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: 3,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    mb: 3,
                    lineHeight: 1.6
                  }}
                >
                  Full Stack Developer specializing in modern web technologies.
                  Building innovative solutions with passion and precision.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                  }}
                >
                  <Code size={16} color="rgba(255,255,255,0.5)" />
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "monospace"
                    }}
                  >
                    Always learning, always building
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: 3,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Quick Links
                </Typography>
                <Box
                  component="nav"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5
                  }}
                >
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={link.href}
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          "&:hover": {
                            color: "#fff"
                          }
                        }}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: hoveredLink === link.name ? "#fff" : "rgba(255,255,255,0.3)",
                            mr: 1.5,
                            transition: "all 0.3s ease"
                          }}
                        />
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: 3,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Connect
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    mb: 3
                  }}
                >
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#fff",
                            borderColor: link.color,
                            backgroundColor: `${link.color}20`,
                            transform: "translateY(-5px)"
                          }
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Mail size={16} />}
                    href="mailto:iamsusithalwis@gmail.com"
                    sx={{
                      borderColor: "rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.7)",
                      py: 1,
                      px: 2,
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      "&:hover": {
                        borderColor: "#fff",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        color: "#fff"
                      }
                    }}
                  >
                    Get in Touch
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          component={motion.div}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: "center",
            position: "relative"
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1
            }}
          >
            © {currentYear} Susith Deshan. All rights reserved.
          </Typography>
        </Box>
      </Container>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              zIndex: 1000
            }}
          >
            <Box
              component={motion.button}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }
              }}
            >
              <ArrowUp size={24} color="rgba(255, 255, 255, 0.9)" />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Footer;