// src/components/About.jsx
import React from 'react';
import { Typography, Grid } from '@mui/material';

const About = () => {
  return (
    <div id="about" style={{ padding: '50px 20px' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            I'm a passionate software engineering student with a strong interest
            in web development, machine learning, and problem-solving. I enjoy
            building projects that solve real-world problems.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Education</Typography>
          <Typography variant="body1">
            Bachelor of Science in Software Engineering<br />
            University of Westminster<br />
            Expected Graduation: 2024
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;