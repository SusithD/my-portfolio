"use client"; // Mark this component as a Client Component
import React from 'react';
import { Typography, Box } from '@mui/material';

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
      {/* Title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '60px',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            backgroundColor: '#0070f3', // Blue underline
          },
        }}
      >
        My Journey
      </Typography>

      {/* Timeline Container */}
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            borderLeft: '2px solid #0070f3',
            zIndex: 1,
          },
        }}
      >
        {/* Timeline Items */}
        <TimelineItem
          title="Founder & UI/UX, Graphic Design & Web Development Specialist"
          company="The Qexle"
          duration="Dec 2019 - Present · 5 yrs 3 mos"
          location="Malabe, Western Province, Sri Lanka"
          description={
            <>
              As the founder of The Qexle, I drive strategic growth and oversee all facets of the business, from
              client acquisition to project delivery. The Qexle specializes in Branding & Strategy, Web
              Development, Digital Marketing, and SEO Services, aiming to empower businesses with innovative
              solutions tailored for their digital success. I lead a team dedicated to delivering exceptional
              digital experiences that align with our clients’ business goals.
              <br />
              <strong>Skills:</strong> Branding & Identity Design, Digital Marketing, Web Development, SEO
            </>
          }
          side="left"
        />
        <TimelineItem
          title="User Interface Designer"
          company="Upwork"
          duration="Aug 2016 - Present · 8 yrs 7 mos"
          location="Remote"
          description={
            <>
              As a part-time UI designer on Upwork for eight years, I've honed my skills in creating visually
              appealing, intuitive, and user-centered interfaces for a wide range of clients and industries.
              <br />
              <strong>Key Achievements:</strong>
              <br />
              - Successfully completed over 300+ projects with high client satisfaction.
              <br />
              - Specialized in minimal, modern, and user-friendly UI designs.
              <br />
              - Consistently delivered responsive, high-quality designs under tight timelines.
              <br />
              <strong>Skills:</strong> Figma, Graphic Design, UI/UX Design
            </>
          }
          side="right"
        />
        <TimelineItem
          title="Web Designer"
          company="Fiverr"
          duration="Apr 2016 - Present · 8 yrs 11 mos"
          location="Remote"
          description={
            <>
              As a freelance web designer on Fiverr for eight years, I have developed custom, user-friendly
              websites that help clients stand out online. My work spans a range of industries, focusing on
              creating engaging, visually appealing designs that prioritize user experience and functionality.
              <br />
              <strong>Skills:</strong> Figma, Graphic Design, Web Development
            </>
          }
          side="left"
        />
        <TimelineItem
          title="Freelance Graphic Designer"
          company="Boss Up Media"
          duration="May 2024 - Nov 2024 · 7 mos"
          location="Colombo, Western Province, Sri Lanka · Hybrid"
          description={
            <>
              As a Graphic Designer at Boss Up Media, I create visually compelling and impactful designs that
              elevate our clients' brands. With a passion for creativity and a keen eye for detail, I specialize
              in producing a wide range of digital and print materials, including logos, marketing collateral,
              and social media graphics.
              <br />
              <strong>Skills:</strong> Adobe Illustrator, Adobe Photoshop, Graphic Design
            </>
          }
          side="right"
        />
      </Box>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ title, company, duration, location, description, side }) => {
  const isLeft = side === 'left';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        alignItems: 'center',
        position: 'relative',
        marginBottom: '60px',
      }}
    >
      {/* Circle Marker */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '12px',
          height: '12px',
          backgroundColor: '#0070f3',
          borderRadius: '50%',
          border: '3px solid #111111',
          zIndex: 2,
        }}
      />

      {/* Content Box */}
      <Box
        sx={{
          backgroundColor: '#1e1e1e',
          padding: '24px',
          borderRadius: '8px',
          width: 'calc(50% - 40px)',
          marginLeft: isLeft ? '0' : 'auto',
          marginRight: isLeft ? 'auto' : '0',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#0070f3', fontWeight: 'bold' }}>
          {company}
        </Typography>
        <Typography variant="body2" sx={{ color: '#a0a0a0', marginTop: '8px' }}>
          {duration} | {location}
        </Typography>
        <Typography variant="body1" sx={{ color: '#a0a0a0', marginTop: '16px', lineHeight: '1.8' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default About;