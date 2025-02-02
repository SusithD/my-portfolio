"use client"; // Mark this component as a Client Component

import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';

const projects = [
  {
    title: 'Greentips Plantation Management System',
    description:
      'A web and mobile application for managing tree health, harvesting, and coconut plantation management. Developed with React, Node.js, and MySQL.',
    technologies: 'React, Node.js, MySQL, Java',
    link: 'https://github.com/susith-deshan/greentips',
    image: '/images/greentips.png', // Add image path
  },
  {
    title: 'Secure Mental Health Management Web Application',
    description:
      'A secure mental health app emphasizing accessibility and data privacy. Built with React, Node.js, PostgreSQL, and OAuth 2.0.',
    technologies: 'React, Node.js, PostgreSQL, OAuth 2.0',
    link: 'https://github.com/susith-deshan/mental-health-app',
    image: '/images/mental-health.png', // Add image path
  },
  {
    title: 'Sri Lankan Fake Currency Note Recognition',
    description:
      'An AI-powered web app for authenticating Sri Lankan currency using deep learning and image processing.',
    technologies: 'Python, TensorFlow, OpenCV',
    link: 'https://github.com/susith-deshan/currency-recognition',
    image: '/images/currency-recognition.png', // Add image path
  },
  {
    title: 'Python Programming Assistant Chatbot',
    description:
      'A chatbot for Python programming assistance using Flask, Python, and MongoDB. Trained a custom AI model for real-time coding solutions.',
    technologies: 'Flask, Python, MongoDB, Machine Learning',
    link: 'https://github.com/susith-deshan/python-chatbot',
    image: '/images/1734026766185.jpeg', // Add image path
  },
  {
    title: 'SGSENSE Web Application Design & Development',
    description:
      'A WordPress-based e-commerce website with Elementor, improving SGSENSE’s online presence through enhanced product displays.',
    technologies: 'WordPress, Elementor, Figma',
    link: 'https://github.com/susith-deshan/sgsense',
    image: '/images/sgsense.png', // Add image path
  },
  {
    title: 'The Qexle Portfolio Website Development',
    description:
      'A responsive, SEO-driven website highlighting UI/UX design excellence with intuitive navigation and CMS integration.',
    technologies: 'WordPress, Figma, SEO',
    link: 'https://github.com/susith-deshan/qexle-portfolio',
    image: '/images/qexle-portfolio.png', // Add image path
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      style={{
        padding: '80px 20px',
        backgroundColor: '#121212', // Dark background similar to previous sections
        color: '#ffffff', // White text
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '40px',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            backgroundColor: '#ffffff', // White underline
          },
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#1e1e1e', // Dark gray background
                color: '#ffffff',
                borderRadius: '8px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              {/* Project Image */}
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              />

              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: '#ffffff',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#a0a0a0', marginBottom: '16px' }}>
                  {project.description}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#bb86fc',
                    display: 'block',
                    marginBottom: '16px',
                  }}
                >
                  <strong>Technologies:</strong> {project.technologies}
                </Typography>
                <Button
                  variant="outlined"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#ffffff',
                    borderColor: '#ffffff',
                    '&:hover': {
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      borderColor: '#ffffff',
                    },
                  }}
                >
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
