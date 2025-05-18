// src/components/Certifications.jsx
"use client";

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Brain, Code, Briefcase, Brush, Award } from 'lucide-react';

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

  const certificationCategories = [
    {
      title: "Generative AI & AI Tools",
      icon: <Brain size={20} />,
      certifications: [
        {
          title: "Career Essentials in Generative AI",
          issuer: "Microsoft & LinkedIn",
          date: "Aug 2024",
          skills: ["Artificial Intelligence (AI)", "Generative AI Tools", "Computer Ethics"]
        },
        {
          title: "Generative AI: The Evolution of Thoughtful Online Search",
          issuer: "LinkedIn",
          date: "Aug 2024",
          skills: ["Search Engine Technology", "AI for Business"]
        }
      ]
    },
    {
      title: "Programming & Technical Skills",
      icon: <Code size={20} />,
      certifications: [
        {
          title: "JavaScript (Intermediate)",
          issuer: "HackerRank",
          date: "May 2024",
          skills: ["Design Patterns", "Memory Management", "Concurrency Model", "Event Loops"]
        },
        {
          title: "JavaScript (Basic)",
          issuer: "HackerRank",
          date: "May 2024",
          skills: ["Functions", "Hoisting", "Scope", "Inheritance", "Events", "Error Handling"]
        },
        {
          title: "Java (Basic)",
          issuer: "HackerRank",
          date: "May 2024",
          skills: ["Classes", "Data Structures", "Inheritance", "Exception Handling"]
        },
        {
          title: "CSS (Basic)",
          issuer: "HackerRank",
          date: "May 2024",
          skills: ["Layouts", "Cascading", "Text Styling", "Boxing of Elements"]
        },
        {
          title: "SQL (Advanced)",
          issuer: "HackerRank",
          date: "May 2024",
          skills: ["Query Optimization", "Data Modeling", "Indexing", "Window Functions"]
        },
        {
          title: "SQL (Intermediate)",
          issuer: "HackerRank",
          date: "May 2024",
          skills: ["Complex Joins", "Subqueries", "Unions"]
        },
        {
          title: "SQL (Basic)",
          issuer: "HackerRank",
          date: "May 2024",
          skills: ["Simple Queries", "Relationships", "Aggregators"]
        },
        {
          title: "Problem Solving (Basic)",
          issuer: "HackerRank",
          date: "May 2024",
          skills: ["Arrays", "Strings", "Sorting", "Searching Algorithms"]
        }
      ]
    },
    {
      title: "Project Management & IT Support",
      icon: <Briefcase size={20} />,
      certifications: [
        {
          title: "Foundations of Project Management",
          issuer: "University of Moratuwa",
          date: "Aug 2023",
          credentialId: "umtJ3CMzsB",
          skills: ["Project Management", "Quality Reviews"]
        },
        {
          title: "Technical Support Fundamentals",
          issuer: "Google",
          date: "Aug 2023",
          credentialId: "QPFVCRXMTCJ8",
          skills: ["Technical Support", "IT Fundamentals"]
        }
      ]
    },
    {
      title: "UX/UI Design & Front-End",
      icon: <Brush size={20} />,
      certifications: [
        {
          title: "Foundations of UX Design",
          issuer: "Google",
          date: "Aug 2023",
          credentialId: "85F54LYBYNXE",
          skills: ["User Experience (UX)", "Wireframing", "Prototyping"]
        },
        {
          title: "Front-End Web Development",
          issuer: "University of Moratuwa",
          date: "May 2022",
          credentialId: "cCQoBOtxDR",
          skills: ["Front-End Dev", "Wireframing", "Prototyping", "Figma"]
        },
        {
          title: "Web Design for Beginners",
          issuer: "University of Moratuwa",
          date: "May 2022",
          credentialId: "x5F4Eq1CLD",
          skills: ["HTML", "CSS", "JavaScript", "Web Dev", "Wireframing", "Prototyping"]
        }
      ]
    },
    {
      title: "Other Certifications",
      icon: <Award size={20} />,
      certifications: [
        {
          title: "Python for Beginners",
          issuer: "University of Moratuwa",
          date: "May 2023",
          credentialId: "kuBYyUFBuf",
          skills: ["Python", "Algorithms", "Quality Reviews"]
        },
        {
          title: "Fundamentals of Digital Marketing",
          issuer: "Google",
          date: "Sep 2021",
          credentialId: "E4F 3HD F86",
          skills: ["Digital Marketing Basics"]
        }
      ]
    }
  ];

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
              mb: 6, // Changed from mb: 8 to maintain consistent spacing
              background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Licenses & Certifications
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {certificationCategories.map((category, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      gap: 1
                    }}
                  >
                    <Box
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        display: "flex",
                        alignItems: "center",
                        transition: "transform 0.3s ease",
                        "&:hover": {
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
                        fontSize: "1.1rem"
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  <Grid container spacing={2}>
                    {category.certifications.map((cert, certIndex) => (
                      <Grid item xs={12} sm={6} md={4} key={certIndex}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (certIndex * 0.05) }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              p: 2,
                              backgroundColor: "rgba(255,255,255,0.02)",
                              borderRadius: "8px",
                              border: "1px solid rgba(255,255,255,0.05)",
                              transition: "transform 0.3s ease, box-shadow 0.3s ease",
                              "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                              }
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 500,
                                color: "rgba(255,255,255,0.9)",
                                mb: 0.5,
                                fontSize: "0.95rem"
                              }}
                            >
                              {cert.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255,255,255,0.6)",
                                mb: 1,
                                fontSize: "0.85rem"
                              }}
                            >
                              {cert.issuer} • {cert.date}
                            </Typography>
                            {cert.credentialId && (
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "rgba(255,255,255,0.4)",
                                  display: "block",
                                  mb: 1,
                                  fontSize: "0.75rem"
                                }}
                              >
                                ID: {cert.credentialId}
                              </Typography>
                            )}
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5
                              }}
                            >
                              {cert.skills.map((skill, skillIndex) => (
                                <Chip
                                  key={skillIndex}
                                  label={skill}
                                  size="small"
                                  sx={{
                                    backgroundColor: "rgba(255,255,255,0.05)",
                                    color: "rgba(255,255,255,0.6)",
                                    fontSize: "0.7rem",
                                    height: "20px",
                                    "& .MuiChip-label": {
                                      px: 1
                                    },
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                      backgroundColor: "rgba(255,255,255,0.1)",
                                      transform: "translateY(-2px)"
                                    }
                                  }}
                                />
                              ))}
                            </Box>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications;