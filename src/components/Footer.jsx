// src/components/Footer.jsx
import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <Typography variant="body1" align="center">
        Connect with me:
        <MuiLink href="https://github.com/susith-deshan" color="inherit" style={{ margin: '0 10px' }}>
          GitHub
        </MuiLink>
        <MuiLink href="https://linkedin.com/in/susith-deshan" color="inherit" style={{ margin: '0 10px' }}>
          LinkedIn
        </MuiLink>
      </Typography>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Susith Deshan. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;