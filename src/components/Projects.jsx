"use client"; // Mark this component as a Client Component

import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Greentips Plantation Management System',
    description:
      'A web and mobile application for managing tree health, harvesting, and coconut plantation management. Developed with React, Node.js, and MySQL.',
    technologies: ['React', 'Node.js', 'MySQL', 'Java'],
    github: 'https://github.com/susith-deshan/greentips',
    demo: '#',
    image: '/images/greentips-mobile.jpeg',
  },
  {
    title: 'Secure Mental Health Management Web Application',
    description:
      'A secure mental health app emphasizing accessibility and data privacy. Built with React, Node.js, PostgreSQL, and OAuth 2.0.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OAuth 2.0'],
    github: 'https://github.com/susith-deshan/mental-health-app',
    demo: '#',
    image: '/images/mental-health.jpeg',
  },
  {
    title: 'Sri Lankan Fake Currency Note Recognition',
    description:
      'An AI-powered web app for authenticating Sri Lankan currency using deep learning and image processing.',
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/susith-deshan/currency-recognition',
    demo: '#',
    image: '/images/currency-detection.jpeg',
  },
  {
    title: 'Python Programming Assistant Chatbot',
    description:
      'A chatbot for Python programming assistance using Flask, Python, and MongoDB. Trained a custom AI model for real-time coding solutions.',
    technologies: ['Flask', 'Python', 'MongoDB', 'Machine Learning'],
    github: 'https://github.com/susith-deshan/python-chatbot',
    demo: '#',
    image: '/images/1734026766185.jpeg',
  },
  {
    title: 'SGSENSE Web Application Design & Development',
    description:
      "A WordPress-based e-commerce website with Elementor, improving SGSENSE's online presence through enhanced product displays.",
    technologies: ['WordPress', 'Elementor', 'Figma'],
    github: 'https://github.com/susith-deshan/sgsense',
    demo: '#',
    image: '/images/sgsense.png',
  },
  {
    title: 'The Qexle Portfolio Website Development',
    description:
      'A responsive, SEO-driven website highlighting UI/UX design excellence with intuitive navigation and CMS integration.',
    technologies: ['WordPress', 'Figma', 'SEO'],
    github: 'https://github.com/susith-deshan/qexle-portfolio',
    demo: '#',
    image: '/images/1729441306287.jpegv',
  },
];

const Projects = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Box
      id="projects"
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
            Projects
          </Typography>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                    <Box
                      sx={{
                        position: 'relative',
                        paddingTop: '56.25%', // 16:9 aspect ratio
                        overflow: 'hidden',
                        borderTopLeftRadius: '24px',
                        borderTopRightRadius: '24px',
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: '#fff',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        {project.technologies.map((tech, i) => (
                          <Box
                            key={i}
                            component="span"
                            sx={{
                              display: 'inline-block',
                              mr: 1,
                              mb: 1,
                              px: 2,
                              py: 0.5,
                              borderRadius: '20px',
                              backgroundColor: 'rgba(255,255,255,0.1)',
                              color: 'rgba(255,255,255,0.7)',
                              fontSize: '0.875rem',
                            }}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                          variant="outlined"
                          startIcon={<Github size={20} />}
                          href={project.github}
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
                          GitHub
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<ExternalLink size={20} />}
                          href={project.demo}
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
                          Live Demo
                        </Button>
                      </Box>
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

export default Projects;
