"use client"; // Mark this component as a Client Component

import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Briefcase, GraduationCap, Code2, Palette } from 'lucide-react';

const About = () => {
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
      id="about"
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
              mb: 6, // Changed from mb: 8 to create consistent spacing
              background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Profile Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Box
                sx={{
                  p: 4,
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
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Profile
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                    fontSize: "1.1rem"
                  }}
                >
                  Enthusiastic software engineering undergraduate with expertise in
                  full-stack development, specializing in React, Node.js, JavaScript,
                  HTML, CSS, and MongoDB. Experienced in building responsive, scalable
                  web applications with seamless API integrations.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Education Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Box
                sx={{
                  p: 4,
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
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Education
                </Typography>
                <Box sx={{ color: "rgba(255,255,255,0.7)" }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1,
                      background: "linear-gradient(to right, #fff, rgba(255,255,255,0.9))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Bachelor of Software Engineering (Honours)
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}>
                    National Institute of Business Management (NIBM), Sri Lanka
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "rgba(255,255,255,0.6)" }}>
                    Expected Graduation: 2026 | GPA: 3.80/4.0
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
                    Relevant Courses: Data Structures and Algorithms,
                    Object-Oriented Programming, Web Application Development
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Experience Timeline */}
          <Grid item xs={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Box
                sx={{
                  p: 4,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  mt: 4,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Experience
                </Typography>
                <Timeline position="alternate">
                  {experiences.map((exp, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot 
                          sx={{ 
                            backgroundColor: 'transparent',
                            border: '2px solid rgba(255,255,255,0.2)',
                            p: 1
                          }}
                        >
                          <Box component={motion.div} whileHover={{ scale: 1.2 }}>
                            {exp.icon}
                          </Box>
                        </TimelineDot>
                        {index !== experiences.length - 1 && (
                          <TimelineConnector sx={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                        )}
                      </TimelineSeparator>
                      <TimelineContent>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              background: "linear-gradient(to right, #fff, rgba(255,255,255,0.9))",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              fontWeight: 600,
                              mb: 1
                            }}
                          >
                            {exp.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                            {exp.company} · {exp.period}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                            {exp.location}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                            {exp.description}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", mt: 1 }}>
                            Skills: {exp.skills}
                          </Typography>
                        </motion.div>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Experience data
const experiences = [
  {
    title: "Software Engineer Intern",
    company: "CoverageX",
    period: "Jan 2025 - Present",
    location: "Colombo, Western Province, Sri Lanka · On-site",
    description: "Working on full-stack development using modern technologies.",
    skills: "User Experience (UX), React.js",
    icon: <Code2 size={20} color="rgba(255,255,255,0.7)" />
  },
  {
    title: "Graphic Designer",
    company: "Boss Up Media",
    period: "May 2024 - Nov 2024",
    location: "Colombo, Western Province, Sri Lanka · Hybrid",
    description: "As a Graphic Designer at Boss Up Media, I create visually compelling and impactful designs that elevate our clients' brands. With a passion for creativity and a keen eye for detail, I specialize in producing a wide range of digital and print materials, including logos, marketing collateral, social media graphics, and more. My goal is to blend artistic innovation with strategic thinking to deliver designs that not only look great but also effectively communicate our clients' messages.",
    skills: "Adobe Illustrator, Adobe Photoshop, Graphic Design, Brand Identity",
    icon: <Palette size={20} color="rgba(255,255,255,0.7)" />
  },
  {
    title: "Co-Founder & CEO",
    company: "The qexle",
    period: "Dec 2019 - Present",
    location: "Malabe, Western Province, Sri Lanka",
    description: "As the founder of The qexle, I drive strategic growth and oversee all facets of the business, from client acquisition to project delivery. The qexle specializes in Branding & Strategy, Web Development, Digital Marketing, and SEO Services, aiming to empower businesses with innovative solutions tailored for their digital success. I lead a team dedicated to delivering exceptional digital experiences that align with our clients’ business goals.",
    skills: "Branding & Identity Design, Digital Marketing",
    icon: <Briefcase size={20} color="rgba(255,255,255,0.7)" />
  },
  {
    title: "User Interface Designer",
    company: "Upwork", 
    period: "Aug 2016 - Present",
    location: "Remote · Part-time",
    description: "As a part-time UI designer on Upwork for eight years, I've honed my skills in creating visually appealing, intuitive, and user-centered interfaces for a wide range of clients and industries. I am experienced in crafting designs that blend functionality with aesthetic appeal, ensuring a seamless user experience across web and mobile platforms. My responsibilities included understanding client requirements, conducting UX research, designing responsive layouts, and iterating based on user feedback. Throughout my time on Upwork, I've collaborated with international clients, consistently meeting project deadlines while adapting to diverse project needs. My commitment to continuous learning and client satisfaction has led to repeat business and positive reviews. Key achievements include: Successfully completing over 300+ projects with high client satisfaction, specializing in minimal, modern, and user-friendly UI designs, and consistently delivering responsive, high-quality designs under tight timelines.",
    skills: "Figma, Graphic Design",
    icon: <Palette size={20} color="rgba(255,255,255,0.7)" />
  },
  {
    title: "Web Designer",
    company: "Fiverr",
    period: "Apr 2016 - Present",
    location: "Remote · Part-time",
    description: "As a freelance web designer on Fiverr for eight years, I have developed custom, user-friendly websites that help clients stand out online. My work spans a range of industries, focusing on creating engaging, visually appealing designs that prioritize user experience and functionality. From concept to completion, I deliver responsive, SEO-friendly websites tailored to each client’s unique brand identity and goals.",
    skills: "Web Design, UI/UX Design",
    icon: <Code2 size={20} color="rgba(255,255,255,0.7)" />
  }
];

export default About;
