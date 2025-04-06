"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Brush, Database, Cloud, Smartphone, Settings } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "UI/UX Design", 
      icon: <Brush size={24} />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Adobe Illustrator", level: 80 },
        { name: "Adobe Photoshop", level: 75 },
        { name: "Wireframing", level: 85 },
        { name: "Prototyping", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 65 },
        { name: "Mobile UI/UX", level: 85 },
        { name: "App Testing", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Settings size={24} />,
      skills: [
        { name: "VS Code", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "Jira", level: 80 },
        { name: "Postman", level: 85 },
        { name: "Webpack", level: 75 },
        { name: "npm/yarn", level: 90 }
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
          background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.1), transparent 70%)",
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
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              textAlign: "center",
              mb: 8,
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
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderRadius: "24px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
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

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Box 
                        key={skillIndex}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgba(255,255,255,0.7)",
                              fontWeight: 500,
                              transition: "all 0.3s ease",
                              transform: hoveredSkill === skill.name ? "translateX(5px)" : "none"
                            }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgba(255,255,255,0.5)",
                              fontWeight: 500
                            }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 3,
                              background: "linear-gradient(90deg, #fff, rgba(255,255,255,0.7))",
                              transition: "transform 0.3s ease",
                              transform: hoveredSkill === skill.name ? "scaleX(1.05)" : "none"
                            }
                          }}
                        />
                      </Box>
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