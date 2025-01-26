// src/components/Experience.jsx
import React from 'react';
import { Typography, Grid } from '@mui/material';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Company Name',
    duration: 'May 2023 - August 2023',
    description: 'Worked on building and maintaining web applications.',
  },
  // Add more experiences here
];

const Experience = () => {
  return (
    <div id="experience" style={{ padding: '50px 20px' }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={3}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h6">{experience.title}</Typography>
            <Typography variant="subtitle1">{experience.company}</Typography>
            <Typography variant="caption">{experience.duration}</Typography>
            <Typography variant="body1">{experience.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Experience;