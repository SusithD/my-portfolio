"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Smartphone, 
  Globe, 
  Cloud, 
  Shield, 
  Cpu 
} from 'lucide-react';

const TechStack = () => {
  const theme = useTheme();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <Layout size={24} />,
      technologies: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Material UI', level: 80 },
        { name: 'Redux', level: 75 },
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: <Server size={24} />,
      technologies: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 70 },
      ]
    },
    {
      id: 'database',
      title: 'Database',
      icon: <Database size={24} />,
      technologies: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Firebase', level: 75 },
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile',
      icon: <Smartphone size={24} />,
      technologies: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 65 },
        { name: 'iOS/Swift', level: 60 },
        { name: 'Android/Kotlin', level: 60 },
      ]
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: <Cloud size={24} />,
      technologies: [
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 65 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Git', level: 85 },
      ]
    },
    {
      id: 'other',
      title: 'Other',
      icon: <Cpu size={24} />,
      technologies: [
        { name: 'GraphQL', level: 70 },
        { name: 'WebSockets', level: 75 },
        { name: 'Microservices', level: 70 },
        { name: 'Agile/Scrum', level: 80 },
      ]
    }
  ];

  return (
    <Box
      id="tech-stack"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(0, 0, 0, 0.8)' 
          : 'rgba(245, 245, 245, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.05) 0%, transparent 50%)',
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              textAlign: 'center',
              mb: 2,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(to right, #fff, rgba(255,255,255,0.7))'
                : 'linear-gradient(to right, #000, rgba(0,0,0,0.7))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Tech Stack
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            A comprehensive overview of the technologies I work with
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} md={6} key={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.02)',
                    border: `1px solid ${theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 10px 20px rgba(0, 0, 0, 0.3)'
                        : '0 10px 20px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.05)',
                        mr: 2,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: hoveredCategory === category.id ? 1 : 0.7,
                          scale: hoveredCategory === category.id ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 1,
                            px: 2,
                            borderRadius: 1,
                            backgroundColor: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.05)',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              color: 'text.primary',
                              position: 'relative',
                              zIndex: 1,
                            }}
                          >
                            {tech.name}
                          </Typography>
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              height: '2px',
                              width: `${tech.level}%`,
                              backgroundColor: theme.palette.primary.main,
                              transition: 'width 0.3s ease',
                            }}
                          />
                        </Paper>
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechStack; 