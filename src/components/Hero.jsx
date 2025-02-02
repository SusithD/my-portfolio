"use client"; // Add this line at the top of your file

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Required for Vanta.js
import NET from "vanta/dist/vanta.net.min"; // Import Vanta.js effect
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion"; // Import Framer Motion

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0xD3D3D3, // Dots color
          lineColor: 0x2c2c2c, // Lines color
          backgroundColor: 0x000000, // Black background
          maxDistance: 20,
          spacing: 15,
          showDots: true,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Smooth scrolling function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={vantaRef}
      id="home"
      style={{
        textAlign: "center",
        padding: "50px 20px",
        color: "#ffffff", // White text
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Black Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.9)", // Black with 50% opacity
          zIndex: 1, // Ensures overlay is in front of Vanta effect
        }}
      ></div>

      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", zIndex: 2 }} // Make sure text is above overlay
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
            position: "relative",
            background: "linear-gradient(90deg, #ffffff, #a0a0a0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I'm Susith Deshan
        </Typography>
      </motion.div>

      {/* Animated Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={{ position: "relative", zIndex: 2 }} // Make sure text is above overlay
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#a0a0a0",
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            marginBottom: "32px",
          }}
        >
          Software Engineering Student | Aspiring Developer
        </Typography>
      </motion.div>

      {/* Call-to-Action Button with Hover Effect */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ position: "relative", zIndex: 2 }} // Make sure button is above overlay
      >
        <Button
          variant="outlined"
          sx={{
            color: "#ffffff",
            borderColor: "#ffffff",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#ffffff",
              color: "#000000",
              borderColor: "#ffffff",
            },
          }}
          onClick={() => handleScroll("projects")}
        >
          View My Work
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
