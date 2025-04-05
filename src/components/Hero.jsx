"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Button, Grid, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Hero = ({ toggleTheme, isDarkMode }) => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const theme = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Gradient animation for the main title
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

  // Social links
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/SusithD", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/susith-deshan-alwis", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:iamsusithalwis@gmail.com", label: "Email" }
  ];

  // Quick stats
  const stats = [
    { label: "Projects", value: "20+" },
    { label: "Experience", value: "3+ Years" },
    { label: "Technologies", value: "15+" }
  ];

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 8, md: 0 }
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.1), transparent 70%)",
          zIndex: 0
        }}
      />

      {/* Theme Toggle */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 10,
        }}
      >
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </Box>

      {/* Main content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left column - Main content */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3
              }}
            >
              {/* Greeting */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontWeight: 500,
                    mb: 1
                  }}
                >
                  Hello, I'm
                </Typography>
              </motion.div>

              {/* Name */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, delay: 0.2 }
                  }
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 2,
                    ...gradientAnimation
                  }}
                >
                  Susith Deshan
                </Typography>
              </motion.div>

              {/* Title */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, delay: 0.4 }
                  }
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    color: "rgba(255, 255, 255, 0.8)",
                    mb: 3
                  }}
                >
                  Software Engineering Student & Developer
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, delay: 0.6 }
                  }
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    mb: 4,
                    maxWidth: "600px"
                  }}
                >
                  Passionate about creating innovative solutions and beautiful user experiences. 
                  Specializing in full-stack development, UI/UX design, and emerging technologies.
                </Typography>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, delay: 0.8 }
                  }
                }}
              >
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
                  <Button
                    variant="outlined"
                    size="large"
                    href="/resume.pdf"
                    download
                    startIcon={<Download size={20} />}
                    sx={{
                      borderColor: "rgba(255,255,255,0.2)",
                      color: "#fff",
                      py: 1.5,
                      px: 3,
                      borderRadius: "12px",
                      "&:hover": {
                        borderColor: "#fff",
                        backgroundColor: "rgba(255,255,255,0.1)"
                      }
                    }}
                  >
                    Download CV
                  </Button>
                </Box>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, delay: 1 }
                  }
                }}
              >
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={link.icon}
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        "&:hover": {
                          color: "#fff",
                          backgroundColor: "rgba(255,255,255,0.1)"
                        }
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Grid>

          {/* Right column - Stats and Code Preview */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative" }}>
              {/* Code Preview */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 1, delay: 0.8 }
                  }
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(30, 30, 35, 0.5)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    overflow: "hidden",
                    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.5)"
                  }}
                >
                  {/* Code panel header */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 1.5,
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#27C93F" }} />
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontFamily: "monospace",
                        ml: "auto"
                      }}
                    >
                      portfolio.js
                    </Typography>
                  </Box>

                  {/* Code content */}
                  <Box
                    sx={{
                      p: 3,
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                      lineHeight: 1.6
                    }}
                  >
                    <Box sx={{ color: "#81A1C1" }}>
                      {'const '}<Box component="span" sx={{ color: "#88C0D0" }}>Developer</Box>{' = () => {'}
                    </Box>
                    <Box sx={{ ml: 2, color: "#616E88" }}>// Always learning and building new things</Box>
                    <Box sx={{ ml: 2, color: "#81A1C1" }}>
                      const <Box component="span" sx={{ color: "#D8DEE9" }}>skills</Box> ={" "}
                      <Box component="span" sx={{ color: "#ECEFF4" }}>[</Box>
                    </Box>
                    <Box sx={{ ml: 4, color: "#A3BE8C" }}>'React', 'Next.js', 'Vue.js', 'Nuxt.js', 'TypeScript', 'Node.js', 'UI/UX'</Box>
                    <Box sx={{ ml: 2, color: "#ECEFF4" }}>];</Box>
                    <Box sx={{ ml: 2, color: "#81A1C1" }}>
                      const <Box component="span" sx={{ color: "#D8DEE9" }}>passion</Box> ={" "}
                      <Box component="span" sx={{ color: "#A3BE8C" }}>'Creating beautiful, functional experiences'</Box>;
                    </Box>
                    <Box sx={{ ml: 2, mt: 2, color: "#81A1C1" }}>
                      return <Box component="span" sx={{ color: "#ECEFF4" }}>(</Box>
                    </Box>
                    <Box sx={{ ml: 4, color: "#88C0D0" }}>
                      {"<"}Portfolio
                    </Box>
                    <Box sx={{ ml: 6, color: "#D8DEE9" }}>
                      name=<Box component="span" sx={{ color: "#A3BE8C" }}>"Susith Deshan"</Box>
                    </Box>
                    <Box sx={{ ml: 6, color: "#D8DEE9" }}>
                      skills=<Box component="span" sx={{ color: "#D8DEE9" }}>{"{"}skills{"}"}</Box>
                    </Box>
                    <Box sx={{ ml: 6, color: "#D8DEE9" }}>
                      available=<Box component="span" sx={{ color: "#81A1C1" }}>true</Box>
                    </Box>
                    <Box sx={{ ml: 4, color: "#88C0D0" }}>
                      {"/>"}
                    </Box>
                    <Box sx={{ ml: 2, color: "#ECEFF4" }}>);</Box>
                    <Box sx={{ color: "#ECEFF4" }}>{`}`};</Box>
                    <Box sx={{ mt: 2, color: "#81A1C1" }}>
                      export default <Box component="span" sx={{ color: "#88C0D0" }}>Developer</Box>;
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
        sx={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer"
        }}
        onClick={() => handleScroll("about")}
      >
        <Typography 
          variant="caption" 
          sx={{ 
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.1em",
            mb: 1,
            fontSize: "0.75rem",
            textTransform: "uppercase"
          }}
        >
          Scroll
        </Typography>
        <Box
          component={motion.div}
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2
          }}
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M8 2L8 22M8 22L2 16M8 22L14 16" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;