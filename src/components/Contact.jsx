"use client";

import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitError('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 }
      }}
    >
      {/* Background gradient orbs */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "100%",
          background: "radial-gradient(circle at center, rgba(100,100,255,0.5), rgba(100,100,255,0) 70%)",
          top: "-300px",
          right: "-100px",
          filter: "blur(60px)",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 800,
              textAlign: "center",
              mb: 8,
              background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            Get In Touch
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: '#fff',
                  }}
                >
                  Send Me a Message
                </Typography>

                {submitSuccess ? (
                  <Box
                    sx={{
                      p: 3,
                      mb: 3,
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 255, 0, 0.1)',
                      border: '1px solid rgba(0, 255, 0, 0.2)',
                      color: '#fff',
                    }}
                  >
                    <Typography>
                      Thank you for your message! I'll get back to you soon.
                    </Typography>
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      required
                      variant="outlined"
                      sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.4)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#fff',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                          '&.Mui-focused': {
                            color: '#fff',
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      required
                      variant="outlined"
                      sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.4)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#fff',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                          '&.Mui-focused': {
                            color: '#fff',
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      margin="normal"
                      multiline
                      rows={4}
                      required
                      variant="outlined"
                      sx={{
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.4)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#fff',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                          '&.Mui-focused': {
                            color: '#fff',
                          },
                        },
                      }}
                    />
                    
                    {submitError && (
                      <Typography
                        sx={{
                          mb: 2,
                          color: '#ff6b6b',
                        }}
                      >
                        {submitError}
                      </Typography>
                    )}
                    
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      startIcon={<Send size={18} />}
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        py: 1.5,
                        px: 3,
                        borderRadius: '12px',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.2)',
                        },
                        '&:disabled': {
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          color: 'rgba(255,255,255,0.3)',
                        },
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: '#fff',
                  }}
                >
                  Connect With Me
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Mail size={20} color="#fff" style={{ marginRight: '12px' }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      susith.deshan@gmail.com
                    </Typography>
                  </Box>
                  
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: '#fff',
                  }}
                >
                  Follow Me
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    href="https://github.com/susith-deshan"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Github size={18} />}
                    sx={{
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.2)',
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://linkedin.com/in/susith-deshan"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Linkedin size={18} />}
                    sx={{
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.2)',
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://twitter.com/susithdeshan"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Twitter size={18} />}
                    sx={{
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.2)',
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    Twitter
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;