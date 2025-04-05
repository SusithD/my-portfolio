// src/components/Footer.jsx
"use client";

import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent"
                }}
              >
                Susith Deshan
              </Typography>
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
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#fff"
                }}
              >
                Quick Links
              </Typography>
              <Box
                component="nav"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1
                }}
              >
                <Link
                  href="#about"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff"
                    }
                  }}
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff"
                    }
                  }}
                >
                  Projects
                </Link>
                <Link
                  href="#certifications"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff"
                    }
                  }}
                >
                  Certifications
                </Link>
                <Link
                  href="#contact"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff"
                    }
                  }}
                >
                  Contact
                </Link>
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
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#fff"
                }}
              >
                Connect
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 3
                }}
              >
                <IconButton
                  href="https://github.com/susith-deshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                      borderColor: "#fff",
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  <Github size={20} />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/susith-deshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                      borderColor: "#fff",
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  <Linkedin size={20} />
                </IconButton>
                <IconButton
                  href="https://twitter.com/susithdeshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                      borderColor: "#fff",
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  <Twitter size={20} />
                </IconButton>
                <IconButton
                  href="mailto:susith.deshan@gmail.com"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                      borderColor: "#fff",
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  <Mail size={20} />
                </IconButton>
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
            textAlign: "center"
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.875rem"
            }}
          >
            © {currentYear} Susith Deshan. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;