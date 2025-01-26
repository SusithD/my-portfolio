// src/components/Contact.jsx
import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <div id="contact" style={{ padding: '50px 20px' }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form
        style={{ maxWidth: '500px', margin: '0 auto' }}
        action="https://formspree.io/f/your-form-id"
        method="POST"
      >
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;