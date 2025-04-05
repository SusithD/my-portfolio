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
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

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
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)"
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: "#fff"
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
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)"
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: "#fff"
                  }}
                >
                  Education
                </Typography>
                <Box sx={{ color: "rgba(255,255,255,0.7)" }}>
                  <Typography variant="h6" sx={{ mb: 1, color: "#fff" }}>
                    Bachelor of Software Engineering (Honours)
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    National Institute of Business Management (NIBM), Sri Lanka
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Expected Graduation: 2026 | GPA: 3.80/4.0
                  </Typography>
                  <Typography variant="body2">
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
              variants={staggerContainer}
            >
              <Box
                sx={{
                  p: 4,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  mt: 4
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    color: "#fff"
                  }}
                >
                  Experience
                </Typography>
                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ backgroundColor: "#0d6efd" }}>
                        <WorkIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ backgroundColor: "#0d6efd" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" sx={{ color: "#fff" }}>
                        Software Engineer Intern
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        CoverageX · Jan 2025 - Present
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        Colombo, Western Province, Sri Lanka · On-site
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                        Skills: User Experience (UX), React.js and more
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ backgroundColor: "#0d6efd" }}>
                        <WorkIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ backgroundColor: "#0d6efd" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" sx={{ color: "#fff" }}>
                        Co-Founder & CEO
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        The qexle · Dec 2019 - Present
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        Malabe, Western Province, Sri Lanka
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                        As the founder of The qexle, I drive strategic growth and oversee all facets of the business, from client acquisition to project delivery. The qexle specializes in Branding & Strategy, Web Development, Digital Marketing, and SEO Services, aiming to empower businesses with innovative solutions tailored for their digital success.
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                        Skills: Branding & Identity Design, Digital Marketing and more
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ backgroundColor: "#0d6efd" }}>
                        <WorkIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ backgroundColor: "#0d6efd" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" sx={{ color: "#fff" }}>
                        User Interface Designer
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        Upwork · Aug 2016 - Present
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        Remote · Part-time
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                        As a part-time UI designer on Upwork for eight years, I've honed my skills in creating visually appealing, intuitive, and user-centered interfaces. Successfully completed over 300+ projects with high client satisfaction, specializing in minimal, modern, and user-friendly UI designs.
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                        Skills: Figma, Graphic Design and more
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ backgroundColor: "#0d6efd" }}>
                        <WorkIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ backgroundColor: "#0d6efd" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" sx={{ color: "#fff" }}>
                        Web Designer
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        Fiverr · Apr 2016 - Present
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        Remote · Part-time
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                        Developed custom, user-friendly websites that help clients stand out online. Focus on creating engaging, visually appealing designs that prioritize user experience and functionality.
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                        Skills: Figma, Graphic Design and more
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ backgroundColor: "#0d6efd" }}>
                        <WorkIcon />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" sx={{ color: "#fff" }}>
                        Freelance Graphic Designer
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        Boss Up Media · May 2024 - Nov 2024
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        Colombo, Western Province, Sri Lanka · Hybrid
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                        Created visually compelling and impactful designs that elevate clients' brands. Specialized in producing digital and print materials, including logos, marketing collateral, and social media graphics.
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                        Skills: Adobe Illustrator, Adobe Photoshop and more
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
