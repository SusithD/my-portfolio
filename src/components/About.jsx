"use client"; // Mark this component as a Client Component

import React from 'react';
import { Typography, Grid, Box, Divider } from '@mui/material';

const About = () => {
  return (
    <div
      id="about"
      style={{
        padding: '80px 20px',
        backgroundColor: '#000000', // Black background
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
        About Me
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Profile Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#111111', // Dark gray background
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
              Profile
            </Typography>
            <Typography variant="body1" sx={{ color: '#a0a0a0', lineHeight: '1.8' }}>
              Enthusiastic software engineering undergraduate with expertise in fullstack development,
              specializing in React, Node.js, JavaScript, HTML, CSS, and MongoDB. Experienced in building
              responsive, scalable web applications with seamless API integrations. Skilled in Git, Agile
              methodologies, and debugging with Postman. With over 7 years of freelance experience in web
              development, UI/UX design, and graphic design, I deliver user-centric solutions. As the founder
              of The Qexle, I lead innovative projects globally. Eager to contribute my technical skills to
              impactful software development and grow in a dynamic engineering environment.
            </Typography>
          </Box>
        </Grid>

        {/* Education Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#111111', // Dark gray background
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
              Education
            </Typography>
            <Typography variant="body1" sx={{ color: '#a0a0a0', lineHeight: '1.8' }}>
              <strong>Bachelor of Software Engineering (Honours)</strong>
              <br />
              National Institute of Business Management (NIBM), Sri Lanka
              <br />
              Expected Graduation: 2026
              <br />
              Current Year: Second Year (2022 – Present)
              <br />
              GPA: 3.80/4.0
              <br />
              Relevant Courses: Data Structures and Algorithms, Object-Oriented Programming, Software
              Development, Web Application Development, Database Management Systems, Agile Methodologies
            </Typography>
          </Box>
        </Grid>

        {/* Experience Section */}
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: '#111111', // Dark gray background
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
              Experience
            </Typography>
            <Typography variant="body1" sx={{ color: '#a0a0a0', lineHeight: '1.8' }}>
              <strong>Founder & UI/UX, Graphic Design & Web Development Specialist</strong>
              <br />
              The Qexle, Malabe, Sri Lanka | Dec 2019 - Present
              <br />
              - Founded The Qexle, delivering 50+ web and e-commerce solutions for global clients across 5+
              countries.
              <br />
              - Designed and developed responsive, user-focused web applications using React.js, Node.js, and
              modern CMS platforms like WordPress, improving client user engagement by 30%.
              <br />
              - Increased client sales by up to 20% through strategic UX/UI design and SEO-optimized solutions.
            </Typography>
            <Divider sx={{ my: 2, borderColor: '#333333' }} />
            <Typography variant="body1" sx={{ color: '#a0a0a0', lineHeight: '1.8' }}>
              <strong>Freelance UI/UX, Graphic and Web Designer</strong>
              <br />
              Upwork & Fiverr | Aug 2016 - Mar 2024
              <br />
              - Completed 300+ projects over 7 years, including 100+ web development and 120+ UI/UX design
              projects for clients worldwide.
              <br />
              - Designed and developed responsive, user-centric websites using React, Node.js, HTML, CSS, and
              JavaScript, enhancing client conversions by up to 20%.
              <br />
              - Maintained a 95%+ client satisfaction rating through consistent, high-quality deliverables and
              timely project completion.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;