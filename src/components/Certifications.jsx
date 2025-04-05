// src/components/Certifications.jsx
"use client";

import React from 'react';
import { Typography, Grid, Card, CardContent, Box, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const certifications = [
  {
    title: 'Foundations of Project Management',
    issuer: 'University of Moratuwa',
    date: '2023',
    link: 'https://example.com/certification1',
    icon: '🎓',
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: '2023',
    link: 'https://example.com/certification2',
    icon: '🐍',
  },
  {
    title: 'Front-End Web Development',
    issuer: 'University of Moratuwa',
    date: '2023',
    link: 'https://example.com/certification3',
    icon: '💻',
  },
  {
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa',
    date: '2023',
    link: 'https://example.com/certification4',
    icon: '🎨',
  },
  {
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    date: '2023',
    link: 'https://example.com/certification5',
    icon: '📱',
  },
  {
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google',
    date: '2023',
    link: 'https://example.com/certification6',
    icon: '👤',
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    date: '2023',
    link: 'https://example.com/certification7',
    icon: '🤖',
  },
];

const Certifications = () => {
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

  return (
    <Box
      id="certifications"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 }
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
          top: "-300px",
          right: "-100px",
          filter: "blur(60px)",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 800,
              textAlign: "center",
              mb: 8,
              background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            Certifications
          </Typography>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {certifications.map((certification, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      borderRadius: '24px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          mb: 2,
                          gap: 2
                        }}
                      >
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            fontSize: '1.5rem'
                          }}
                        >
                          {certification.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: '#fff',
                            flex: 1
                          }}
                        >
                          {certification.title}
                        </Typography>
                      </Box>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          mb: 1
                        }}
                      >
                        {certification.issuer}
                      </Typography>
                      
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          color: 'rgba(255,255,255,0.5)',
                          mb: 2
                        }}
                      >
                        {certification.date}
                      </Typography>
                      
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<ExternalLink size={16} />}
                        href={certification.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#fff',
                          borderColor: 'rgba(255,255,255,0.2)',
                          '&:hover': {
                            borderColor: '#fff',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                          },
                        }}
                      >
                        View Certificate
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Certifications;