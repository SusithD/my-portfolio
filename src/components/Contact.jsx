"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper, IconButton, Snackbar, Alert, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Facebook, Palette } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // First, test if the API is working with a simpler route
      const testResponse = await fetch('/api/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      
      if (!testResponse.ok) {
        throw new Error('API is not accessible');
      }
      
      // If test API is working, try the contact API
      const contactTestResponse = await fetch('/api/contact', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      
      if (!contactTestResponse.ok) {
        throw new Error('Contact API is not accessible');
      }
      
      // If both APIs are working, send the form data
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned non-JSON response');
      }
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setSnackbar({
        open: true,
        message: 'Message sent successfully! Thank you for reaching out.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSnackbar({
        open: true,
        message: error.message || 'An error occurred. Please try again later.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
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

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "iamsusithalwis@gmail.com",
      link: "mailto:iamsusithalwis@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      content: "+94 71 764 7805",
      link: "tel:+94717647805"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      content: "Colombo, Sri Lanka",
      link: "https://maps.google.com/?q=Colombo,Sri+Lanka"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      link: "https://github.com/SusithD"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/susith-deshan-alwis"
    },
    {
      icon: <Palette size={20} />,
      label: "Behance",
      link: "https://www.behance.net/susithalwis"
    },
    {
      icon: <Facebook size={20} />,
      label: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100014079360520"
    }
  ];

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
      {/* Background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.1), transparent 70%)",
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
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              textAlign: "center",
              mb: 8,
              background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Contact Information
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Paper
                        component="a"
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        elevation={0}
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          backgroundColor: "rgba(255,255,255,0.02)",
                          borderRadius: "12px",
                          border: "1px solid rgba(255,255,255,0.05)",
                          textDecoration: "none",
                          color: "inherit",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            backgroundColor: "rgba(255,255,255,0.05)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                          }
                        }}
                      >
                        <Box
                          sx={{
                            color: "rgba(255,255,255,0.7)",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.1)"
                            }
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: "rgba(255,255,255,0.7)",
                              fontWeight: 500
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgba(255,255,255,0.5)"
                            }}
                          >
                            {info.content}
                          </Typography>
                        </Box>
                      </Paper>
                    </motion.div>
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    background: "linear-gradient(to right, #fff, rgba(255,255,255,0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Follow Me
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <IconButton
                        component="a"
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.7)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.1)",
                            transform: "translateY(-5px)",
                            color: "#fff"
                          }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        disabled={isSubmitting}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "#fff",
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.1)"
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255,255,255,0.2)"
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "rgba(255,255,255,0.3)"
                            }
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.5)"
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "rgba(255,255,255,0.7)"
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        disabled={isSubmitting}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "#fff",
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.1)"
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255,255,255,0.2)"
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "rgba(255,255,255,0.3)"
                            }
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.5)"
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "rgba(255,255,255,0.7)"
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        disabled={isSubmitting}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "#fff",
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.1)"
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255,255,255,0.2)"
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "rgba(255,255,255,0.3)"
                            }
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.5)"
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "rgba(255,255,255,0.7)"
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        disabled={isSubmitting}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "#fff",
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.1)"
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255,255,255,0.2)"
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "rgba(255,255,255,0.3)"
                            }
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.5)"
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "rgba(255,255,255,0.7)"
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send size={20} />}
                        disabled={isSubmitting}
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.1)",
                          color: "#fff",
                          py: 1.5,
                          px: 3,
                          borderRadius: "12px",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.2)",
                            transform: "translateY(-5px)"
                          },
                          "&:disabled": {
                            backgroundColor: "rgba(255,255,255,0.05)",
                            color: "rgba(255,255,255,0.3)"
                          }
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      {/* Snackbar for notifications */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ 
            width: '100%',
            backgroundColor: snackbar.severity === 'success' ? 'rgba(76, 175, 80, 0.9)' : 'rgba(244, 67, 54, 0.9)',
            color: '#fff',
            '& .MuiAlert-icon': {
              color: '#fff'
            }
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;