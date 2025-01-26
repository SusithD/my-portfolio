// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#1e1e1e' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Susith Deshan
        </Typography>
        <Button color="inherit">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;