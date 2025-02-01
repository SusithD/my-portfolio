"use client"; // Mark this component as a Client Component

import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

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
      {/* Title Section */}
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

      {/* Profile Section */}
      <Box
        sx={{
          backgroundColor: '#111111', // Dark gray background
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          maxWidth: '900px',
          margin: '0 auto 40px auto',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
          },
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

      {/* Education Section */}
      <Box
        sx={{
          backgroundColor: '#111111', // Dark gray background
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          maxWidth: '900px',
          margin: '0 auto 40px auto',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
          },
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

      {/* Experience Section */}
      <Box
        sx={{
          backgroundColor: '#111111', // Dark gray background
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          maxWidth: '900px',
          margin: '0 auto',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
          Experience
        </Typography>

        {/* Timeline */}
        <Timeline position="alternate">
          {/* The Qexle Experience */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#ffffff' }}>
                <WorkIcon sx={{ color: '#000000' }} />
              </TimelineDot>
              <TimelineConnector sx={{ backgroundColor: '#ffffff' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                Founder & UI/UX, Graphic Design & Web Development Specialist
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
                The Qexle · Full-time | Dec 2019 - Present · 5 yrs 3 mos
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
                Malabe, Western Province, Sri Lanka
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 1 }}>
                As the founder of The Qexle, I drive strategic growth and oversee all facets of the business,
                from client acquisition to project delivery. The Qexle specializes in Branding & Strategy,
                Web Development, Digital Marketing, and SEO Services.
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 1 }}>
                <strong>Skills:</strong> Branding & Identity Design, Digital Marketing, Web Development, SEO
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Upwork Experience */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#ffffff' }}>
                <CodeIcon sx={{ color: '#000000' }} />
              </TimelineDot>
              <TimelineConnector sx={{ backgroundColor: '#ffffff' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                User Interface Designer
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
                Upwork · Part-time | Aug 2016 - Present · 8 yrs 7 mos
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
                Remote
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 1 }}>
                As a part-time UI designer on Upwork for eight years, I've honed my skills in creating
                visually appealing, intuitive, and user-centered interfaces for a wide range of clients and
                industries.
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 1 }}>
                <strong>Skills:</strong> Figma, Graphic Design, UI/UX Design
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Fiverr Experience */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#ffffff' }}>
                <DesignServicesIcon sx={{ color: '#000000' }} />
              </TimelineDot>
              <TimelineConnector sx={{ backgroundColor: '#ffffff' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                Web Designer
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
                Fiverr · Part-time | Apr 2016 - Present · 8 yrs 11 mos
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
                Remote
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 1 }}>
                As a freelance web designer on Fiverr for eight years, I have developed custom, user-friendly
                websites that help clients stand out online.
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 1 }}>
                <strong>Skills:</strong> Figma, Graphic Design, Web Development
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Boss Up Experience */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#ffffff' }}>
                <DesignServicesIcon sx={{ color: '#000000' }} />
              </TimelineDot>
              <TimelineConnector sx={{ backgroundColor: '#ffffff' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                Freelancing Graphic Designer
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
                Fiverr · Part-time | Apr 2016 - Present · 8 yrs 11 mos
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
                Remote
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 1 }}>
                As a freelance web designer on Fiverr for eight years, I have developed custom, user-friendly
                websites that help clients stand out online.
              </Typography>
              <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 1 }}>
                <strong>Skills:</strong> Figma, Graphic Design, Web Development
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </div>
  );
};

export default About;
