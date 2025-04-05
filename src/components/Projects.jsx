"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Paper, Button, Chip, Modal, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Web Development', value: 'web' },
    { label: 'UI/UX Design', value: 'design' },
    { label: 'Mobile Apps', value: 'mobile' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'AI/ML', value: 'ai' },
    { label: 'Digital Security', value: 'security' },
    { label: 'IoT', value: 'iot' },
    { label: 'Desktop Apps', value: 'desktop' },
    { label: 'Java Development', value: 'java' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'Branding', value: 'branding' }
  ];

const projects = [
  {
      title: "Plantation Field Management System Mobile Application",
      description: "A mobile application designed to streamline operations for Greentips Plantation, managing over 250 acres of coconut and intercrop plantations. The app automates data handling and enables real-time task management for all team members from field workers to executives.",
      image: "/images/Greentips-mobile.png",
      technologies: ["Figma", "Prototyping", "Wireframing", "UX/UI Design"],
      category: ["mobile", "design"],
      github: "https://github.com/SusithD/Greentips",
      demo: "https://www.behance.net/gallery/212189209/Greentips-Plantation-Management-System-UIUX-Design",
      role: "UI/UX Designer",
      duration: "Oct 2024 - Present",
      organization: "Academic Project",
      highlights: [
        "Led user-centered design process from wireframing to prototyping",
        "Designed with high-contrast colors and simplified layouts for outdoor settings",
        "Created interactive prototypes based on user feedback",
        "Implemented real-time task management and offline functionality"
      ]
    },
    {
      title: "Python Programming Assistant Chatbot",
      description: "An AI-powered chatbot designed to assist users with Python programming queries, providing coding solutions, explanations, and debugging support. The chatbot was trained on a custom dataset of Python-related challenges.",
      image: "/images/1734026766185.jpeg", 
      technologies: ["Python", "Hugging Face Transformers", "Flask", "MongoDB", "TensorFlow", "PyTorch", "RESTful APIs"],
      category: ["ai", "fullstack", "design", "web"],
      github: "https://github.com/SusithD/chatbot_project",
      demo: "https://github.com/SusithD/chatbot_project",
      role: "Developer",
      duration: "Dec 2024",
      organization: "Academic Project",
      highlights: [
        "Used Salesforce's codegen-350M-multi pre-trained model",
        "Built interactive web interface using Flask",
        "Implemented persistent chat sessions with MongoDB",
        "Added rate-limiting and session management"
      ]
    },
    {
      title: "SGSENSE Web Application",
      description: "A collaborative project aimed at enhancing user experience and operational efficiency for SGSENSE, an Australian leader in Force and Torque Measurement solutions.",
      image: "/images/sgsense.png",
      technologies: ["Web Development", "UI/UX Design", "Figma", "Wireframing", "Prototyping"],
      category: ["web", "design", "ecommerce"],
      github: "https://sgsensetech.com",
      demo: "https://sgsensetech.com",
      role: "Web Designer and Developer",
      duration: "Jan 2024 - Dec 2024",
      organization: "Academic Project",
      highlights: [
        "Enhanced user experience through user-friendly interface",
        "Implemented comprehensive product catalog with filtering",
        "Added detailed product specifications and related items",
        "Integrated company information and contact options"
      ]
    },
    {
      title: "The qexle Website Development",
      description: "A user-centric website designed to showcase branding, digital marketing, and web development services with optimized performance and SEO integration.",
      image: "/images/1729441306287.jpeg",
      technologies: ["WordPress", "Web Development", "Project Management", "UI/UX", "SEO"],
      category: ["web", "design", "ecommerce"],
      github: "https://theqexle.com/",
      demo: "https://theqexle.com/",
      role: "Web Developer",
      duration: "Jul 2024 - Dec 2024",
      organization: "Academic Project",
      highlights: [
        "Created custom visual design reflecting brand values",
        "Implemented seamless navigation and well-organized structure",
        "Optimized performance across all devices",
        "Integrated SEO for improved search visibility"
      ]
    },
    {
      title: "Todo Dashboard Web Application",
      description: "A full-featured Todo Dashboard Web Application empowering users to manage tasks efficiently with advanced features and an interactive interface.",
      image: "/images/to-do.png",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      category: ["web", "design", "fullstack"],
      github: "https://github.com/SusithD/ToDo-List-Web-Application",
      demo: "https://github.com/SusithD/ToDo-List-Web-Application",
      role: "Designer and Developer",
      duration: "Dec 2024",
      organization: "Academic Project",
      highlights: [
        "Implemented dynamic filters by status, priority, and due date",
        "Added interactive calendar view for visual task management",
        "Created real-time browser notifications system",
        "Built-in Pomodoro timer and task prioritization"
      ]
    },
    {
      title: "Mental Health App",
      description: "A secure, private platform designed to provide accessible mental well-being support, offering personalized resources, therapist communication, and self-help tools.",
      image: "/images/mental-health.jpeg",
      technologies: ["Node.js", "REST APIs", "JWT", "React.js", "HTML/CSS/JavaScript"],
      category: ["security", "fullstack", "design", "web"],
      github: "https://github.com/SusithD/folder-mental-health-platform",
      demo: "https://github.com/SusithD/folder-mental-health-platform",
      role: "Developer",
      duration: "Nov 2024",
      organization: "Academic Project",
      highlights: [
        "Implemented encrypted journaling for private tracking",
        "Added tailored self-help exercises",
        "Created secure therapist communication system",
        "Integrated guided mindfulness meditations"
      ]
    },
    {
      title: "Sri Lankan Currency Note Recognition System",
      description: "A Flask-based application that authenticates Sri Lankan currency using digital image processing and machine learning, verifying currency through automated detection.",
      image: "/images/currency-detection.jpeg",
      technologies: ["Machine Learning", "Deep Learning", "Flask", "Python", "OpenCV", "TensorFlow", "PyTorch"],
      category: ["ai", "fullstack", "design", "web"],
      github: "https://github.com/SusithD/Fake-Money-Detector",
      demo: "https://github.com/SusithD/Fake-Money-Detector",
      role: "Developer",
      duration: "Nov 2024",
      organization: "Academic Project",
      highlights: [
        "Implemented robust counterfeit detection system",
        "Created educational interface for security features",
        "Added advanced image processing capabilities",
        "Integrated YOLO for symbol detection and OCR"
      ]
    },
    {
      title: "FoodiHut - Android Application",
      description: "An Android mobile application connecting food enthusiasts with exclusive promotions from a food store chain, enabling online ordering and branch navigation.",
      image: "/images/Foodiehut.png",
      technologies: ["Android Development", "UI/UX Design", "Figma"],
      category: ["mobile", "design"],
      github: "https://github.com/SusithD/foodiehut",
      demo: "https://github.com/SusithD/foodiehut",
      role: "UI Designer and Backend Developer",
      duration: "Aug 2024 - Sep 2024",
      organization: "Academic Project",
      highlights: [
        "Created modern and intuitive user interface",
        "Implemented live location tracking",
        "Added streamlined online ordering process",
        "Integrated automated email notifications"
      ]
    },
    {
      title: "Arduino Robot Guide Rover",
      description: "A navigation assistance system designed for autonomous robots, utilizing Arduino technology to guide the rover through obstacles with real-time detection and avoidance.",
      image: "/images/guide-robot.png",
      technologies: ["Arduino", "C++", "HTML", "CSS"],
      category: ["iot", "design", "web"],
      github: "https://github.com/SusithD/Guide-Rover",
      demo: "https://youtu.be/wdSW6vEXCxk?si=Zd4oI6mB3SMccQ6G",
      role: "Developer",
      duration: "Feb-Mar 2024",
      organization: "Academic Project",
      highlights: [
        "Implemented real-time obstacle detection",
        "Created motor control system for navigation",
        "Built user interface for path visualization",
        "Integrated various sensors for environment detection"
      ]
    },
    {
      title: "Blvck Paris Web Application",
      description: "An e-commerce platform built to showcase and sell clothing, integrating a dynamic product catalog with filtering and search functionality.",
      image: "/images/black-paris.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Figma"],
      category: ["ecommerce", "design"],
      github: "https://github.com/SusithD/Blvck-Paris-Web-Application",
      demo: "https://youtu.be/0-j3NOPL_1g?si=ip1vI--5LC-zXYLA",
      role: "Developer",
      duration: "Feb-Mar 2024",
      organization: "Academic Project",
      highlights: [
        "Created interactive product catalog",
        "Implemented dynamic filtering and search",
        "Integrated PHP and MySQL for management",
        "Designed responsive layout for all devices"
      ]
    },
    {
      title: "Landing Page UI Design (Concept)",
      description: "A conceptual landing page design project focused on creating an engaging and user-friendly web interface with modern and intuitive design elements.",
      technologies: ["Figma", "Graphic Design"],
      image: "/images/wildlie.png",
      category: ["web", "design"],
      demo: "https://www.behance.net/gallery/146284501/Landing-Page-Ui-Design",
      role: "UI Designer",
      duration: "Jun 2022",
      organization: "The qexle",
      highlights: [
        "Created modern and intuitive user interface design",
        "Implemented strategic layout optimization for user engagement",
        "Developed brand-consistent visual elements"
      ]
    },
    {
      title: "Logo Design for Gyroction",
      description: "Brand identity design for Gyroction, creating a distinctive and memorable logo that represents the company's values and services.",
      image: "/images/Gyroction.png",
      technologies: ["Graphic Design"],
      category: ["branding"],
      github: "https://www.behance.net/gallery/145776937/Logo-Design-for-Gyroction",
      demo: "https://www.behance.net/gallery/145776937/Logo-Design-for-Gyroction",
      role: "Graphic Designer",
      duration: "Jun 2022",
      organization: "The qexle, Gyroction",
      highlights: [
        "Developed distinctive brand identity",
        "Created memorable logo design",
        "Ensured alignment with company values"
      ]
    },
    {
      title: "Logo Design for Kozha Leather Collections",
      description: "Development of a professional brand identity for Kozha Leather Collections through strategic logo design, conveying quality and craftsmanship.",
      image: "/images/kozha.png",
      technologies: ["Graphic Design"],
      category: ["branding"],
      github: "https://www.behance.net/gallery/144036805/Logo-Design-For-Kozha-Leather-Collections",
      demo: "https://www.behance.net/gallery/144036805/Logo-Design-For-Kozha-Leather-Collections",
      role: "Graphic Designer",
      duration: "Mar 2022",
      organization: "The qexle, Kozha Leather Collections",
      highlights: [
        "Created professional brand identity",
        "Designed strategic logo elements",
        "Conveyed quality and craftsmanship through design"
      ]
    },
    {
      title: "Logo Design for NOIR Interior Design Company",
      description: "Creation of a professional virtual identity for NOIR, an Interior Design Company, through distinctive logo design.",
      image: "/images/noir.png",
      technologies: ["Graphic Design"],
      category: ["branding"],
      github: "https://www.behance.net/gallery/143551429/Logo-design-for-NOIR-Interior-Design-Company",
      demo: "https://www.behance.net/gallery/143551429/Logo-design-for-NOIR-Interior-Design-Company",
      role: "Graphic Designer",
      duration: "Feb 2022",
      organization: "NOIR Interior Design Company",
      highlights: [
        "Developed professional virtual identity",
        "Created distinctive logo design",
        "Established brand recognition"
      ]
    },
    {
      title: "Logo Design for Organic Beltline",
      description: "Brand identity design for Organic Beltline, focusing on representing the company's organic values through visual elements.",
      image: "/images/oraganic.png",
      technologies: ["Graphic Design"],
      category: ["branding"],
      github: "https://www.behance.net/gallery/143551981/Logo-design-for-Organic-Beltline",
      demo: "https://www.behance.net/gallery/143551981/Logo-design-for-Organic-Beltline",
      role: "Graphic Designer",
      duration: "Feb 2022",
      organization: "Organic Beltline",
      highlights: [
        "Created brand identity reflecting organic values",
        "Developed visual elements for brand recognition",
        "Established cohesive brand presence"
      ]
    },
    {
      title: "Rebranding Logo of The qexle",
      description: "A rebranding project for The qexle team, incorporating minimalistic design principles and strategic color choices to enhance brand recognition.",
      image: "/images/theqexle.png",
      technologies: ["Graphic Design"],
      category: ["branding"],
      github: "https://www.behance.net/gallery/137769287/The-qexle-logo-rebranding",
      demo: "https://www.behance.net/gallery/137769287/The-qexle-logo-rebranding",
      role: "Graphic Designer",
      duration: "Feb 2022",
      organization: "The qexle",
      highlights: [
        "Incorporated letter Q as significant icon",
        "Used saturated blue color for visual distinction",
        "Applied minimalistic construction for modern appeal",
        "Optimized design for various publication platforms"
      ]
    },
    {
      title: "Logo Design for Bistro Coffee Shop",
      description: "Brand identity design for Bistro Coffee Shop in Anuradhapura, creating a logo that captures the welcoming and cozy atmosphere of the establishment.",
      image: "/images/bistro.png",
      technologies: ["Graphic Design"],
      category: ["branding"],
      github: "https://www.behance.net/gallery/135068517/Logo-Design-for-Bistro-Coffee-shop",
      demo: "https://www.behance.net/gallery/135068517/Logo-Design-for-Bistro-Coffee-shop",
      role: "Graphic Designer",
      duration: "Jan 2022",
      organization: "Bistro Coffee Shop",
      highlights: [
        "Created welcoming and cozy brand identity",
        "Developed distinctive logo design",
        "Established brand recognition in local market"
      ]
    },
    {
      title: "Logo Redesign Concept for Kandy Tuskers",
      description: "A conceptual logo redesign for Kandy Tuskers, a Sri Lankan franchise professional Twenty20 cricket team that competes in the Lanka Premier League.",
      image: "/images/kandy-tuskers.png",
      technologies: ["Graphic Design"],
      category: ["branding"],
      github: "https://www.behance.net/gallery/130369959/Logo-Redesign-concept-for-",
      demo: "https://www.behance.net/gallery/130369959/Logo-Redesign-concept-for-",
      role: "Graphic Designer",
      duration: "Apr-May 2021",
      organization: "Lanka Premier League, Kandy Tuskers",
      highlights: [
        "Developed conceptual logo redesign",
        "Created distinctive team identity",
        "Maintained brand recognition in sports context"
      ]
    },
    // {
    //   title: "Logo Design Concept for Lanka Premier League",
    //   description: "Development of a conceptual logo design for the Lanka Premier League, Sri Lanka's professional cricket league in Twenty20 format.",
    //   image: "/projects/lpl-logo.jpg",
    //   technologies: ["Graphic Design"],
    //   category: ["branding"],
    //   github: "https://www.behance.net/gallery/131948853/Lanka-Premier-League-Logo-Redesign",
    //   demo: "https://www.behance.net/gallery/131948853/Lanka-Premier-League-Logo-Redesign",
    //   role: "Graphic Designer",
    //   duration: "Apr 2021",
    //   organization: "Lanka Premier League",
    //   highlights: [
    //     "Created conceptual logo design",
    //     "Developed professional sports league identity",
    //     "Established brand recognition in cricket context"
    //   ]
    // },
    {
      title: "Logo Redesign Concept for Colombo Kings",
      description: "A conceptual logo redesign for Colombo Kings, a franchise Twenty20 cricket team based in Colombo, Sri Lanka, competing in the Lanka Premier League.",
      image: "/images/colombo-kings.png",
      technologies: ["Graphic Design"],
      category: ["branding"],
      github: "https://www.behance.net/gallery/130936549/Colombo-Kings-Logo-Redesign",
      demo: "https://www.behance.net/gallery/130936549/Colombo-Kings-Logo-Redesign",
      role: "Graphic Designer",
      duration: "Apr 2021",
      organization: "Lanka Premier League, Colombo Kings",
      highlights: [
        "Developed conceptual logo redesign",
        "Created distinctive team identity",
        "Maintained brand recognition in sports context"
      ]
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(selectedFilter));

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
            Featured Projects
      </Typography>
        </motion.div>

        {/* Filter Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 6,
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {filters.map((filter) => (
            <Chip
              key={filter.value}
              label={filter.label}
              onClick={() => setSelectedFilter(filter.value)}
              sx={{
                backgroundColor: selectedFilter === filter.value 
                  ? "rgba(255,255,255,0.2)" 
                  : "rgba(255,255,255,0.1)",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)"
                }
              }}
            />
          ))}
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      borderRadius: "12px",
                      mb: 2
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      color: "#fff"
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: "rgba(255,255,255,0.7)",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                      mb: 2
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.7)",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.2)"
                          }
                        }}
                      />
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 2
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<Github size={16} />}
                      sx={{
                        color: "#fff",
                        borderColor: "rgba(255,255,255,0.2)",
                        "&:hover": {
                          borderColor: "#fff",
                          backgroundColor: "rgba(255,255,255,0.1)"
                        }
                      }}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<ExternalLink size={16} />}
                      sx={{
                        color: "#fff",
                        borderColor: "rgba(255,255,255,0.2)",
                        "&:hover": {
                          borderColor: "#fff",
                          backgroundColor: "rgba(255,255,255,0.1)"
                        }
                      }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(255,255,255,0.5)"
                      }}
                    >
                      {project.role} • {project.organization}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(255,255,255,0.5)"
                      }}
                    >
                      {project.duration}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Project Preview Modal */}
        <Modal
          open={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "90%",
              maxWidth: 800,
              maxHeight: "90vh",
              overflow: "auto",
              backgroundColor: "#000",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.1)",
              p: 4
            }}
          >
            <IconButton
              onClick={() => setSelectedProject(null)}
              sx={{
                position: "absolute",
                right: 16,
                top: 16,
                color: "#fff"
              }}
            >
              <X size={24} />
            </IconButton>

            {selectedProject && (
              <>
                <Box
                  component="img"
                  src={selectedProject.image}
                  alt={selectedProject.title}
                sx={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                    borderRadius: "12px",
                    mb: 3
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    color: "#fff"
                  }}
                >
                  {selectedProject.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    mb: 3
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 500
                    }}
                  >
                    {selectedProject.role} • {selectedProject.organization}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "rgba(255,255,255,0.5)"
                    }}
                  >
                    {selectedProject.duration}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6
                  }}
                >
                  {selectedProject.description}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: "#fff",
                    fontWeight: 600
                  }}
                >
                  Key Highlights
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    mb: 3,
                    pl: 2,
                    "& li": {
                      color: "rgba(255,255,255,0.7)",
                      mb: 1,
                      lineHeight: 1.6
                    }
                  }}
                >
                  {selectedProject.highlights.map((highlight, index) => (
                    <Typography
                      component="li"
                      key={index}
                      variant="body2"
                    >
                      {highlight}
                </Typography>
                  ))}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: "#fff",
                    fontWeight: 600
                  }}
                >
                  Technologies Used
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    mb: 3
                  }}
                >
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.7)",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.2)"
                        }
                      }}
                    />
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2
                  }}
                >
                <Button
                    variant="contained"
                    href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                    startIcon={<Github size={20} />}
                  sx={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.2)"
                      }
                  }}
                >
                  View on GitHub
                </Button>
                  <Button
                    variant="contained"
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<ExternalLink size={20} />}
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.2)"
                      }
                    }}
                  >
                    Live Demo
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default Projects;
