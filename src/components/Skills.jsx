"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Brush, Database, Cloud, Smartphone, Settings } from 'lucide-react';
import { Icon } from '@iconify/react';

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: [
        { name: "React.js", icon: "logos:react" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "Nuxt.js", icon: "logos:nuxt-icon" },
        { name: "Vue.js", icon: "logos:vue" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "HTML/CSS", icon: "logos:html-5" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" }
      ]
    },
    {
      title: "UI/UX Design", 
      icon: <Brush size={24} />,
      skills: [
        { name: "Figma", icon: "logos:figma" },
        { name: "Adobe XD", icon: "logos:adobe-xd" },
        { name: "Adobe Illustrator", icon: "logos:adobe-illustrator" },
        { name: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
        { name: "Wireframing", icon: "fluent:design-ideas-24-regular" },
        { name: "Prototyping", icon: "fluent:app-generic-24-regular" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      skills: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Express.js", icon: "logos:express" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "SQL", icon: "logos:mysql" },
        { name: "REST APIs", icon: "mdi:api" },
        { name: "GraphQL", icon: "logos:graphql" }
      ]
    },
    // {
    //   title: "Mobile Development",
    //   icon: <Smartphone size={24} />,
    //   skills: [
    //     { name: "React Native", icon: "logos:react" },
    //     { name: "Flutter", icon: "logos:flutter" },
    //     { name: "iOS Development", icon: "logos:apple" },
    //     { name: "Android Development", icon: "logos:android-icon" },
    //     { name: "Mobile UI/UX", icon: "mdi:cellphone" },
    //     { name: "App Testing", icon: "mdi:test-tube" }
    //   ]
    // },
    {
      title: "Tools & Others",
      icon: <Settings size={24} />,
      skills: [
        { name: "VS Code", icon: "logos:visual-studio-code" },
        { name: "GitHub", icon: "logos:github-icon" },
        { name: "Jira", icon: "logos:jira" },
        { name: "Postman", icon: "logos:postman-icon" },
        { name: "Webpack", icon: "logos:webpack" },
        { name: "npm/yarn", icon: "logos:npm-icon" }
      ]
    }
  ];

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
      id="skills"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 }
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
          background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.05), transparent 70%)",
          zIndex: 0
        }}
      />

      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
          opacity: 0.5
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
          opacity: 0.5
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
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              textAlign: "center",
              mb: 6, // Changed from mb: 8 to maintain consistent spacing
              background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Skills & Expertise
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      gap: 2
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: "12px",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.2)",
                          transform: "scale(1.1)"
                        }
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  <Box 
                    sx={{ 
                      display: "grid", 
                      gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", 
                      gap: 2 
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 1.5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(255,255,255,0.03)",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.05)",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            position: "relative",
                            overflow: "hidden",
                            "&:hover": {
                              backgroundColor: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.1)"
                            }
                          }}
                        >
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mb: 1,
                              position: "relative"
                            }}
                          >
                            <Icon 
                              icon={skill.icon} 
                              width={32} 
                              height={32}
                              style={{
                                opacity: 1,
                                transition: "all 0.3s ease"
                              }}
                            />
                          </Box>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "rgba(255,255,255,0.7)",
                              fontWeight: 500,
                              textAlign: "center",
                              fontSize: "0.7rem",
                              transition: "all 0.3s ease"
                            }}
                          >
                            {skill.name}
                          </Typography>
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

export default Skills;