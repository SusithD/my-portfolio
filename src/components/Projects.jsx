// src/components/Projects.jsx
import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of the project.',
    technologies: 'React, Node.js, MongoDB',
    link: 'https://github.com/susith-deshan/project1',
  },
  {
    title: 'Project 2',
    description: 'Another project description.',
    technologies: 'Python, Flask, SQLite',
    link: 'https://github.com/susith-deshan/project2',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div id="projects" style={{ padding: '50px 20px' }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
                <Typography variant="caption">{project.technologies}</Typography>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;