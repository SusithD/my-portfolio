// src/components/Footer.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Link, Grid, IconButton, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight, ArrowUp, Terminal, Code, Heart } from 'lucide-react';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  // Effect for mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
        py: { xs: 8, md: 12 },
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      {/* Background gradient orbs */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: "absolute",
          width: "800px",
          height: "800px",
          borderRadius: "100%",
          background: "radial-gradient(circle at center, rgba(100,100,255,0.3), rgba(100,100,255,0) 70%)",
          bottom: "-400px",
          left: "-200px",
          filter: "blur(80px)",
          zIndex: 0
        }}
      />
      
      {/* Secondary background gradient orb */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        sx={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "100%",
          background: "radial-gradient(circle at center, rgba(255,100,100,0.3), rgba(255,100,100,0) 70%)",
          top: "-300px",
          right: "-150px",
          filter: "blur(80px)",
          zIndex: 0
        }}
      />

      {/* Mouse interaction highlight effect */}
      <Box
        component={motion.div}
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)",
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.5
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Big Typography Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{
            mb: { xs: 6, md: 10 },
            textAlign: "left"
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "3rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 2,
              background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em"
            }}
          >
            Let's Build Something Together
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.2rem" },
              fontWeight: 400,
              color: "rgba(255,255,255,0.7)",
              maxWidth: "800px",
              mb: 4
            }}
          >
            Have a project in mind? I'd love to hear about it. Let's create something amazing.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
                    variant="contained"
                    size="large"
                    onClick={() => handleScroll("contact")}
                    endIcon={<ArrowRight size={20} />}
                    sx={{
                      backgroundColor: "#333333",
                      color: "#fff",
                      py: 1.5,
                      px: 3,
                      borderRadius: "12px",
                      "&:hover": {
                        backgroundColor: "#4d4d4d"
                      }
                    }}
                  >
                    Get in Touch
                  </Button>
          </Box>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
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
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.1)"
                  }
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2
                  }}
                >
                  <Terminal size={24} color="rgba(255,255,255,0.9)" />
                  <Typography
                    variant="h6"
                    sx={{
                      ml: 1,
                      fontWeight: 700,
                      ...gradientAnimation
                    }}
                  >
                    Susith Deshan
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    mb: 2,
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
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.1)"
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    ...gradientAnimation
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
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.1)"
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    ...gradientAnimation
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
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#fff",
                            borderColor: link.color,
                            backgroundColor: `${link.color}20`
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
                    justifyContent: "flex-start",
                    mt: 2
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Mail size={16} />}
                    href="mailto:iamsusithalwis@gmail.com"
                    sx={{
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                      py: 1,
                      px: 2,
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      "&:hover": {
                        borderColor: "#fff",
                        backgroundColor: "rgba(255,255,255,0.05)",
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
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            textAlign: "left",
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