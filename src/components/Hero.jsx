"use client";

import React, { useState, useEffect, useRef } from "react";
import { Typography, Box, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

// For a particle effect similar to stars/constellation
const ParticleField = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas size to match parent
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    function initParticles() {
      particles = [];
      const particleCount = Math.floor(canvas.width * canvas.height / 8000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.2 + 0.1,
          directionX: Math.random() * 0.4 - 0.2,
          directionY: Math.random() * 0.4 - 0.2,
          alpha: Math.random() * 0.5 + 0.2
        });
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 200, 255, ${particle.alpha})`;
        ctx.fill();
        
        // Connect particles with lines if they're close enough
        particles.forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(120, 200, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
        
        // Move particles
        particle.x += particle.directionX;
        particle.y += particle.directionY;
        
        // Wrap around edges
        if (particle.x < 0 || particle.x > canvas.width) particle.directionX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.directionY *= -1;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.8
      }}
    />
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #080808 0%, #121216 40%, #080818 100%)',
      }}
    >
      {/* Geometric accent shapes */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 0.2 : 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        sx={{
          position: 'absolute',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          border: '1px solid rgba(150, 200, 255, 0.1)',
          top: '5%',
          right: '-20%',
        }}
      />
      
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 0.15 : 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        sx={{
          position: 'absolute',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          border: '1px solid rgba(150, 200, 255, 0.1)',
          bottom: '-15%',
          left: '-10%',
        }}
      />
      
      {/* Interactive particle background */}
      <ParticleField />
      
      {/* Content */}
      <Container maxWidth="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 20px'
          }}
        >
          
          {/* Main heading with gradient text */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 700,
                textAlign: 'center',
                background: 'white',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '1px',
                mb: 2
              }}
            >
              Susith Deshan
            </Typography>
          </motion.div>
          
          {/* Role/description with minimalist line divider */}
          <motion.div variants={itemVariants} style={{ width: '100%', textAlign: 'center' }}>
            <Box
              sx={{
                width: '40px',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, rgba(150, 200, 255, 0.7), transparent)',
                margin: '20px auto',
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 300,
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                mb: 4
              }}
            >
              Software Engineering • Development • Innovation
            </Typography>
          </motion.div>
          
          {/* Call to action button with hover effect */}
          <motion.div variants={itemVariants}>
            <Button
              component={motion.button}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(120, 200, 255, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScroll("projects")}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(10, 15, 30, 0.6)',
                color: '#ffffff',
                border: '1px solid rgba(150, 200, 255, 0.3)',
                borderRadius: '4px',
                padding: '12px 32px',
                fontSize: '1rem',
                fontWeight: 400,
                letterSpacing: '1px',
                textTransform: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Explore My Work
            </Button>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Scroll indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        sx={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.8rem',
            letterSpacing: '2px',
            mb: 1 
          }}
        >
          SCROLL
        </Typography>
        <Box
          component={motion.div}
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2
          }}
          sx={{
            width: '20px',
            height: '30px',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            padding: '5px 0',
          }}
        >
          <Box
            sx={{
              width: '2px',
              height: '6px',
              backgroundColor: 'rgba(150, 200, 255, 0.7)',
              borderRadius: '1px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;