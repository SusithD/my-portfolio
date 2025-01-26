// src/components/Certifications.jsx
import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const certifications = [
  {
    title: 'Certification 1',
    issuer: 'Issuer Name',
    date: 'Issued on [Date]',
    link: 'https://example.com/certification1',
  },
  // Add more certifications here
];

const Certifications = () => {
  return (
    <div id="certifications" style={{ padding: '50px 20px' }}>
      <Typography variant="h4" gutterBottom>
        Certifications
      </Typography>
      <Grid container spacing={3}>
        {certifications.map((certification, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{certification.title}</Typography>
                <Typography variant="body2">{certification.issuer}</Typography>
                <Typography variant="caption">{certification.date}</Typography>
                <br />
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Certifications;