"use client"; // Mark this component as a Client Component

import React from "react";
import { Typography, Box } from "@mui/material";
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
  return (
    <div
      id="about"
      style={{
        padding: "80px 20px",
        backgroundColor: "#000", // Black background
        color: "#fff", // White text
      }}
    >
      {/* Title Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "40px",
          position: "relative",
          textTransform: "uppercase",
          letterSpacing: "2px",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "4px",
            backgroundColor: "#0d6efd",
          },
        }}
      >
        About Me
      </Typography>

      {/* Profile Section */}
      <Box
        sx={{
          padding: "40px",
          maxWidth: "900px",
          margin: "0 auto 40px auto",
          backgroundColor: "#111",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Profile
        </Typography>
        <Typography variant="body1" sx={{ color: "#bbb", lineHeight: "1.8" }}>
          Enthusiastic software engineering undergraduate with expertise in
          full-stack development, specializing in React, Node.js, JavaScript,
          HTML, CSS, and MongoDB. Experienced in building responsive, scalable
          web applications with seamless API integrations. Skilled in Git, Agile
          methodologies, and debugging with Postman. With over 7 years of
          freelance experience in web development, UI/UX design, and graphic
          design, I deliver user-centric solutions. As the founder of{" "}
          <strong>The Qexle</strong>, I lead innovative projects globally. Eager
          to contribute my technical skills to impactful software development
          and grow in a dynamic engineering environment.
        </Typography>
      </Box>

      {/* Education Section */}
      <Box
        sx={{
          padding: "40px",
          maxWidth: "900px",
          margin: "0 auto 40px auto",
          backgroundColor: "#111",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Education
        </Typography>
        <Typography variant="body1" sx={{ color: "#bbb", lineHeight: "1.8" }}>
          🎓 <strong>Bachelor of Software Engineering (Honours)</strong>
          <br />
          National Institute of Business Management (NIBM), Sri Lanka
          <br />
          <i>Expected Graduation:</i> 2026 | <i>GPA:</i> 3.80/4.0
          <br />
          <strong>Relevant Courses:</strong> Data Structures and Algorithms,
          Object-Oriented Programming, Web Application Development, Agile
          Methodologies.
          <br />
          <br />
          📚 <strong>Certifications</strong>
          <br />
          - Foundations of Project Management (University of Moratuwa)
          <br />
          - Python for Beginners (University of Moratuwa)
          <br />
          - Front-End Web Development (University of Moratuwa)
          <br />
          - Web Design for Beginners (University of Moratuwa)
          <br />
          - Fundamentals of Digital Marketing (Google)
          <br />
          - Foundations of User Experience (UX) Design (Google)
          <br />
          - Career Essentials in Generative AI (Microsoft & LinkedIn)
        </Typography>
      </Box>

      {/* Experience Section */}
      <Box
        sx={{
          padding: "40px",
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#111",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Experience
        </Typography>

        {/* Timeline */}
        <Timeline position="alternate">
          {/* The Qexle Experience */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#0d6efd" }}>
                <WorkIcon sx={{ color: "#fff" }} />
              </TimelineDot>
              <TimelineConnector sx={{ backgroundColor: "#0d6efd" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Founder & UI/UX, Graphic Design & Web Development Specialist
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                The Qexle · Dec 2019 - Present
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Delivered 50+ web and e-commerce solutions globally.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Upwork & Fiverr Experience */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#0d6efd" }}>
                <CodeIcon sx={{ color: "#fff" }} />
              </TimelineDot>
              <TimelineConnector sx={{ backgroundColor: "#0d6efd" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Freelance UI/UX, Graphic and Web Designer
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Upwork & Fiverr · Aug 2016 - Mar 2024
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Completed 300+ projects with 95%+ client satisfaction.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Boss Up Media Experience */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#0d6efd" }}>
                <DesignServicesIcon sx={{ color: "#fff" }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Visual Graphic Designer (Full-Time)
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Boss Up Media · May 2024 – Nov 2024
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Designed digital & print assets for 20+ brands.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </div>
  );
};

export default About;
