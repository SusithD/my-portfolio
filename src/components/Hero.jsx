"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
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
      ? "linear-gradient(to right, #fff, #fff)" 
      : "linear-gradient(to right, #fff, #fff)",
    backgroundSize: "200% 200%",
    animation: mounted ? "gradientShift 8s ease infinite" : "none",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent"
  };

  // Grid background for visual effect (simulating Next.js dots pattern)
  const GridBackground = () => {
    return (
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0,
          opacity: 0.4
        }}
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", opacity: 0.15 }}
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at center, transparent 30%, #000 90%)",
            zIndex: 1
          }}
        />
      </Box>
    );
  };

  // Floating gradient orbs (similar to Next.js site)
  const GradientOrbs = () => {
    return (
      <>
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          sx={{
            position: "absolute",
            width: { xs: "300px", md: "600px" },
            height: { xs: "300px", md: "600px" },
            borderRadius: "100%",
            background: "radial-gradient(circle at center, rgba(100,100,255,0.5), rgba(100,100,255,0) 70%)",
            top: { xs: "-150px", md: "-300px" },
            right: { xs: "-150px", md: "-100px" },
            filter: "blur(60px)",
            zIndex: 0
          }}
        />
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3 }}
          sx={{
            position: "absolute",
            width: { xs: "250px", md: "500px" },
            height: { xs: "250px", md: "500px" },
            borderRadius: "100%",
            background: "radial-gradient(circle at center, rgba(200,200,255,0.4), rgba(150,150,255,0) 70%)",
            bottom: { xs: "-100px", md: "-200px" },
            left: { xs: "-100px", md: "-100px" },
            filter: "blur(60px)",
            zIndex: 0
          }}
        />
      </>
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
        pt: { xs: 8, md: 0 }
      }}
    >
      {/* Background elements */}
      <GridBackground />
      <GradientOrbs />

      {/* Main content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            py: { xs: 8, md: 12 }
          }}
        >
          {/* Eyebrow text - appears above main title */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{ width: "100%" }}
          >
            <Typography
              variant="overline"
              component="div"
              sx={{
                fontSize: { xs: "0.85rem", md: "1rem" },
                fontWeight: 500,
                letterSpacing: "0.2em",
                mb: 2,
                color: "rgba(255, 255, 255, 0.7)",
                textTransform: "uppercase"
              }}
            >
              Portfolio of
            </Typography>
          </motion.div>

          {/* Main title with gradient animation */}
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
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem", lg: "6rem" },
                fontWeight: 800,
                letterSpacing: "-0.05em",
                mb: { xs: 2, md: 3 },
                ...gradientAnimation,
                "@keyframes gradientShift": {
                  "0%": { backgroundPosition: "0% 50%" },
                  "50%": { backgroundPosition: "100% 50%" },
                  "100%": { backgroundPosition: "0% 50%" }
                }
              }}
            >
              Susith Deshan
            </Typography>
          </motion.div>

          {/* Subtitle */}
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
              component="h2"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "800px",
                mx: "auto",
                mb: 6,
                lineHeight: 1.5
              }}
            >
              Software Engineering Student & Developer
              <br />
              Building modern web experiences with cutting-edge technologies
            </Typography>
          </motion.div>

          {/* CTA Button Group */}
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
            style={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "1rem",
              marginTop: "1rem"
            }}
          >
            {/* Primary CTA Button */}
            <Button
              variant="contained"
              onClick={() => handleScroll("projects")}
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                fontSize: { xs: "0.95rem", md: "1rem" },
                fontWeight: 600,
                padding: { xs: "0.75rem 1.5rem", md: "0.9rem 2rem" },
                borderRadius: "0.5rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)"
                }
              }}
            >
              View My Projects
            </Button>

            {/* Secondary CTA Button */}
            <Button
              variant="outlined"
              onClick={() => handleScroll("contact")}
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "#fff",
                fontSize: { xs: "0.95rem", md: "1rem" },
                fontWeight: 500,
                padding: { xs: "0.75rem 1.5rem", md: "0.9rem 2rem" },
                borderRadius: "0.5rem",
                textTransform: "none",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }
              }}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Code example panel (inspired by Next.js site) */}
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
            style={{ width: "100%", maxWidth: "750px", margin: "5rem auto 0" }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(30, 30, 35, 0.5)",
                backdropFilter: "blur(16px)",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.5)",
                position: "relative"
              }}
            >
              {/* Code panel header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1.25rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  backgroundColor: "rgba(0, 0, 0, 0.2)"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "0.5rem"
                  }}
                >
                  <Box 
                    sx={{ 
                      width: "12px", 
                      height: "12px", 
                      borderRadius: "50%", 
                      backgroundColor: "#FF5F56" 
                    }} 
                  />
                  <Box 
                    sx={{ 
                      width: "12px", 
                      height: "12px", 
                      borderRadius: "50%", 
                      backgroundColor: "#FFBD2E" 
                    }} 
                  />
                  <Box 
                    sx={{ 
                      width: "12px", 
                      height: "12px", 
                      borderRadius: "50%", 
                      backgroundColor: "#27C93F" 
                    }} 
                  />
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    ml: "auto"
                  }}
                >
                  portfolio.js
                </Typography>
              </Box>

              {/* Code content */}
              <Box
                sx={{
                  padding: { xs: "1.25rem", md: "1.5rem" },
                  fontFamily: "monospace",
                  fontSize: { xs: "0.85rem", md: "1rem" },
                  lineHeight: 1.6,
                  textAlign: "left",
                  overflowX: "auto"
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
                <Box sx={{ ml: 4, color: "#A3BE8C" }}>'React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX'</Box>
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

            {/* Gradient glow effect under code panel */}
            <Box
              sx={{
                position: "absolute",
                width: "60%",
                height: "10%",
                background: "radial-gradient(circle at center, rgba(100,100,255,0.2), rgba(100,100,255,0) 70%)",
                borderRadius: "100%",
                filter: "blur(50px)",
                bottom: "-5%",
                left: "20%",
                zIndex: -1
              }}
            />
          </motion.div>
        </Box>
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