"use client";

import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const Model3D = () => {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    script.type = 'module';
    document.body.appendChild(script);

    // Hide Spline logo
    const style = document.createElement('style');
    style.textContent = `
      spline-viewer::part(logo) {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Box
      id="3d-model"
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Background gradient */}
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1
        }}
      >
        <spline-viewer
          url="https://prod.spline.design/JM1oSkf6H2sDuEuR/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "transparent"
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Model3D; 