"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Container, Button, Grid, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowRight, Code, Terminal, Cpu, Database } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Hero = ({ toggleTheme, isDarkMode }) => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [activeCodeSnippet, setActiveCodeSnippet] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [wireframeStep, setWireframeStep] = useState(0);
  const theme = useTheme();
  const canvasRef = useRef(null);
  
  // Dynamic phrases for the typing effect
  const phrases = [
    "const passion = 'Creating beautiful, functional experiences'",
    "const skills = ['React', 'Next.js', 'TypeScript', 'Node.js']",
    "const goal = 'Building innovative solutions'",
    "const status = 'Available for new projects'",
    "const expertise = 'Full-stack Development'"
  ];

  // Code snippets with syntax highlighting
  const codeSnippets = [
    {
      title: "UI/UX Design",
      icon: <Terminal size={20} />,
      language: "javascript",
      code: [
        { text: "// Wireframe Component", indent: 0, color: "#616E88" },
        { text: "const Wireframe = () => {", indent: 0, color: "#81A1C1" },
        { text: "  const design = {", indent: 2, color: "#81A1C1" },
        { text: "    layout: 'Modern Grid System',", indent: 4, color: "#A3BE8C" },
        { text: "    colorPalette: ['#2E3440', '#88C0D0', '#A3BE8C'],", indent: 4, color: "#A3BE8C" },
        { text: "    typography: 'Inter, sans-serif',", indent: 4, color: "#A3BE8C" },
        { text: "    components: ['Hero', 'Projects', 'Contact']", indent: 4, color: "#A3BE8C" },        { text: "  };", indent: 2, color: "#ECEFF4" },
        { text: "", indent: 0, color: "#ECEFF4" },
        { text: "  return (", indent: 2, color: "#88C0D0" },
        { text: "    <div className='wireframe'>", indent: 4, color: "#88C0D0" },
        { text: "      <header className='hero'>", indent: 6, color: "#88C0D0" },
        { text: "        <h1>Susith Deshan</h1>", indent: 8, color: "#88C0D0" },
        { text: "        <p>Full Stack Developer</p>", indent: 8, color: "#88C0D0" },
        { text: "      </header>", indent: 6, color: "#88C0D0" },
        { text: "      <main className='content'>", indent: 6, color: "#88C0D0" },
        { text: "        <section className='projects'>", indent: 8, color: "#88C0D0" },
        { text: "          {/* Project cards */}", indent: 10, color: "#616E88" },
        { text: "        </section>", indent: 8, color: "#88C0D0" },
        { text: "      </main>", indent: 6, color: "#88C0D0" },
        { text: "    </div>", indent: 4, color: "#88C0D0" },
        { text: "  );", indent: 2, color: "#ECEFF4" },
        { text: "};", indent: 0, color: "#ECEFF4" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Code size={20} />,
      language: "javascript",
      code: [
        { text: "const Portfolio = () => {", indent: 0, color: "#81A1C1" },
        { text: "  const info = {", indent: 2, color: "#81A1C1" },
        { text: "    name: 'Susith Deshan',", indent: 4, color: "#A3BE8C" },
        { text: "    role: 'Full Stack Developer',", indent: 4, color: "#A3BE8C" },
        { text: "    expertise: ['React', 'Next.js', 'TypeScript'],", indent: 4, color: "#A3BE8C" },
        { text: "    passion: 'Building elegant user experiences'", indent: 4, color: "#A3BE8C" },
        { text: "  };", indent: 2, color: "#ECEFF4" },
        { text: "  return (", indent: 2, color: "#88C0D0" },
        { text: "    <Portfolio {...info} animate={true} />", indent: 4, color: "#88C0D0" },
        { text: "  );", indent: 2, color: "#88C0D0" },
        { text: "};", indent: 0, color: "#ECEFF4" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database size={20} />,
      language: "javascript", 
      code: [
        { text: "// RESTful API Implementation", indent: 0, color: "#616E88" },
        { text: "app.post('/api/projects', async (req, res) => {", indent: 0, color: "#81A1C1" },
        { text: "  try {", indent: 2, color: "#81A1C1" },
        { text: "    const { title, description, tech } = req.body;", indent: 4, color: "#88C0D0" },
        { text: "    const newProject = await Project.create({", indent: 4, color: "#88C0D0" },
        { text: "      title, description, tech, status: 'active'", indent: 6, color: "#A3BE8C" },
        { text: "    });", indent: 4, color: "#88C0D0" },
        { text: "    res.status(201).json(newProject);", indent: 4, color: "#A3BE8C" },
        { text: "  } catch (err) {", indent: 2, color: "#81A1C1" },
        { text: "    res.status(500).json({ error: err.message });", indent: 4, color: "#BF616A" },
        { text: "  }", indent: 2, color: "#ECEFF4" },
        { text: "});", indent: 0, color: "#ECEFF4" }
      ]
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Effect for cycling through phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Effect for typing animation
  useEffect(() => {
    if (!isTyping) return;
    
    const currentSnippet = codeSnippets[activeCodeSnippet];
    const typingSpeed = 300;
    
    const typingInterval = setInterval(() => {
      setTypingIndex((prev) => {
        if (prev >= currentSnippet.code.length - 1) {
          clearInterval(typingInterval);
          setIsTyping(false);
          return prev;
        }
        return prev + 1;
      });
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [isTyping, activeCodeSnippet]);

  // Effect for initial setup - only for initial load
  useEffect(() => {
    // This effect now only sets up the initial snippet
    setActiveCodeSnippet(0);
    setTypingIndex(0);
    setIsTyping(true);
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

  // Effect for wireframe animation
  useEffect(() => {
    if (activeCodeSnippet !== 0) return; // Only animate when UI/UX tab is active (now index 0)
    
    const interval = setInterval(() => {
      setWireframeStep((prev) => (prev + 1) % 4);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [activeCodeSnippet]);

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle code snippet click
  const handleCodeSnippetClick = (index) => {
    setActiveCodeSnippet(index);
    setTypingIndex(0);
    setIsTyping(true);
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

  // Function to render the wireframe visualization
  const renderWireframeVisualization = () => {
    if (activeCodeSnippet !== 0) return null; // Only show for UI/UX tab (now index 0)
    
    return (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
          zIndex: 2
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              width: 280,
              height: 200,
              border: '2px solid rgba(136, 192, 208, 0.5)',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'rgba(46, 52, 64, 0.2)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Header */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: wireframeStep >= 1 ? 60 : 0 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                backgroundColor: 'rgba(136, 192, 208, 0.2)',
                borderBottom: '1px solid rgba(136, 192, 208, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 10px'
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: wireframeStep >= 1 ? '70%' : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  height: '20px',
                  backgroundColor: 'rgba(163, 190, 140, 0.3)',
                  borderRadius: '4px',
                  marginBottom: '8px'
                }}
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: wireframeStep >= 1 ? '40%' : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{
                  height: '12px',
                  backgroundColor: 'rgba(163, 190, 140, 0.3)',
                  borderRadius: '4px'
                }}
              />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: wireframeStep >= 2 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              style={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              {/* Project cards */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: wireframeStep >= 2 ? 0 : -20, 
                  opacity: wireframeStep >= 2 ? 1 : 0 
                }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  gap: '10px'
                }}
              >
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: wireframeStep >= 2 ? 1 : 0,
                      opacity: wireframeStep >= 2 ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'rgba(136, 192, 208, 0.2)',
                      borderRadius: '4px',
                      border: '1px solid rgba(136, 192, 208, 0.3)'
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Text lines */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: wireframeStep >= 3 ? '90%' : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  height: '8px',
                  backgroundColor: 'rgba(163, 190, 140, 0.3)',
                  borderRadius: '4px'
                }}
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: wireframeStep >= 3 ? '70%' : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  height: '8px',
                  backgroundColor: 'rgba(163, 190, 140, 0.3)',
                  borderRadius: '4px'
                }}
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: wireframeStep >= 3 ? '50%' : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{
                  height: '8px',
                  backgroundColor: 'rgba(163, 190, 140, 0.3)',
                  borderRadius: '4px'
                }}
              />
            </motion.div>
            
            {/* Footer */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: wireframeStep >= 4 ? 30 : 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                backgroundColor: 'rgba(136, 192, 208, 0.2)',
                borderTop: '1px solid rgba(136, 192, 208, 0.3)',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '0 10px'
              }}
            >
              {['Home', 'Projects', 'Contact'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: wireframeStep >= 4 ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  style={{
                    width: '40px',
                    height: '8px',
                    backgroundColor: 'rgba(163, 190, 140, 0.3)',
                    borderRadius: '4px'
                  }}
                />
              ))}
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    );
  };

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
        pt: { xs: 12, sm: 10, md: 8, lg: 0 }
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
          top: { xs: 16, sm: 20 },
          right: { xs: 16, sm: 20 },
          zIndex: 10,
        }}
      >
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </Box>

      {/* Main content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          {/* Left column - Main content */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 3 }
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
                    mb: 1,
                    fontSize: { xs: "1rem", sm: "1.25rem" }
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
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "5rem" },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: { xs: 1, sm: 2 },
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
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                    color: "rgba(255, 255, 255, 0.8)",
                    mb: { xs: 2, sm: 3 }
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
                    fontSize: { xs: "0.95rem", sm: "1.1rem" },
                    color: "rgba(255, 255, 255, 0.7)",
                    mb: { xs: 3, sm: 4 },
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
                <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2 }, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => handleScroll("contact")}
                    endIcon={<ArrowRight size={20} />}
                    sx={{
                      backgroundColor: "#333333",
                      color: "#fff",
                      py: { xs: 1, sm: 1.5 },
                      px: { xs: 2, sm: 3 },
                      borderRadius: "12px",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
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
                      py: { xs: 1, sm: 1.5 },
                      px: { xs: 2, sm: 3 },
                      borderRadius: "12px",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
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
                <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 }, mt: { xs: 1.5, sm: 2 }, flexWrap: "wrap" }}>
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
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                        py: { xs: 0.5, sm: 1 },
                        px: { xs: 1, sm: 1.5 },
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

          {/* Right column - Interactive Code Snippets */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative", mt: { xs: 4, md: 0 } }}>
              {/* Code Snippet Tabs */}
              <Box 
                sx={{ 
                  display: "flex", 
                  gap: { xs: 0.5, sm: 1 }, 
                  mb: { xs: 1.5, sm: 2 },
                  justifyContent: "center",
                  flexWrap: "wrap"
                }}
              >
                {codeSnippets.map((snippet, index) => (
                  <Box
                    key={index}
                    component={motion.button}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCodeSnippetClick(index)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: { xs: 0.75, sm: 1 },
                      px: { xs: 1.5, sm: 2 },
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: activeCodeSnippet === index 
                        ? "rgba(255,255,255,0.1)" 
                        : "transparent",
                      color: activeCodeSnippet === index 
                        ? "#fff" 
                        : "rgba(255,255,255,0.6)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      "&:hover": {
                        borderColor: "rgba(255,255,255,0.3)",
                        backgroundColor: "rgba(255,255,255,0.05)"
                      }
                    }}
                  >
                    {snippet.icon}
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {snippet.title}
                    </Typography>
                  </Box>
                ))}
              </Box>

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
                    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.5)",
                    position: "relative",
                    maxHeight: { xs: "300px", sm: "400px" },
                    overflowY: "auto"
                  }}
                >
                  {/* Code panel header */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: { xs: 1, sm: 1.5 },
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
                        ml: "auto",
                        fontSize: { xs: "0.7rem", sm: "0.75rem" }
                      }}
                    >
                      {codeSnippets[activeCodeSnippet].title.toLowerCase().replace(/\s+/g, '-')}.js
                    </Typography>
                  </Box>

                  {/* Code content with typing animation */}
                  <Box
                    sx={{
                      p: { xs: 2, sm: 3 },
                      fontFamily: "monospace",
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      lineHeight: 1.6,
                      position: "relative"
                    }}
                  >
                    {activeCodeSnippet !== 0 ? (
                      <>
                        {codeSnippets[activeCodeSnippet].code.slice(0, typingIndex + 1).map((line, index) => (
                          <Box 
                            key={index} 
                            sx={{ 
                              ml: line.indent * 2,
                              color: line.color,
                              display: "flex",
                              flexWrap: "wrap"
                            }}
                          >
                            {line.text}
                          </Box>
                        ))}
                        
                        {/* Cursor animation */}
                        {isTyping && (
                          <Box
                            component={motion.span}
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            sx={{
                              display: "inline-block",
                              width: "8px",
                              height: "16px",
                              backgroundColor: "#fff",
                              ml: 0.5,
                              verticalAlign: "middle"
                            }}
                          />
                        )}

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
                            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                            pointerEvents: "none",
                            zIndex: 1,
                            opacity: 0.5
                          }}
                        />
                      </>
                    ) : (
                      <Box sx={{ height: { xs: "250px", sm: "300px" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {renderWireframeVisualization()}
                      </Box>
                    )}
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        component={motion.div}
        animate={{ 
          y: [0, 8, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2
        }}
        sx={{
          position: 'absolute',
          bottom: { xs: 40, sm: 60 },
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.8
          }
        }}
        onClick={() => handleScroll('about')}
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
  );
};

export default Hero;
