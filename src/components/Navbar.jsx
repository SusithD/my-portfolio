"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, IconButton, Button, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Github, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll detection for navbar appearance change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Main Navigation Items
  const navItems = [
    { 
      label: "Learn", 
      id: "learn",
      hasDropdown: true,
      dropdownItems: [
        { label: "Documentation", id: "docs" },
        { label: "Blog", id: "blog" },
        { label: "Showcase", id: "showcase" }
      ]
    },
    { label: "About", id: "about", hasDropdown: false },
    { label: "Projects", id: "projects", hasDropdown: false },
    { label: "Contact", id: "contact", hasDropdown: false }
  ];

  // Toggle dropdown menu
  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ y: -20, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        boxShadow: scrolled ? "0 0 15px rgba(0,0,0,0.1)" : "none",
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.5)" 
      }}
      transition={{ duration: 0.3 }}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        backdropFilter: "blur(10px)",
        borderBottom: scrolled ? "1px solid rgba(66, 66, 66, 0.2)" : "none",
        transition: "all 0.25s ease"
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          py: { xs: 1.5, md: 1.75 },
          px: { xs: 2, md: 4 }
        }}
      >
        {/* Logo */}
        <Box 
          onClick={() => handleScroll("home")}
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            cursor: "pointer" 
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: "1.25rem",
              letterSpacing: "-0.5px",
              color: "#fff",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Box 
              component="span" 
              sx={{ 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center",
                width: 32,
                height: 32,
                mr: 1,
                backgroundColor: "#000",
                borderRadius: "8px"
              }}
            >
              SD
            </Box>
            Susith
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box 
          sx={{ 
            display: { xs: "none", md: "flex" }, 
            alignItems: "center", 
            gap: 0.5 
          }}
        >
          {navItems.map((item) => (
            <Box key={item.id} sx={{ position: "relative" }}>
              {item.hasDropdown ? (
                <>
                  <Button
                    onClick={() => toggleDropdown(item.id)}
                    endIcon={
                      <ChevronDown 
                        size={16} 
                        style={{ 
                          transform: activeDropdown === item.id ? 'rotate(180deg)' : 'rotate(0)', 
                          transition: 'transform 0.2s ease'
                        }} 
                      />
                    }
                    sx={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      textTransform: "none",
                      py: 1,
                      px: 2,
                      borderRadius: "6px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)"
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.id && (
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          width: "180px",
                          mt: 1,
                          backgroundColor: "#000",
                          borderRadius: "8px",
                          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                          border: "1px solid rgba(66, 66, 66, 0.3)",
                          backdropFilter: "blur(10px)",
                          overflow: "hidden",
                          zIndex: 1101
                        }}
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <Box
                            key={dropdownItem.id}
                            onClick={() => {
                              handleScroll(dropdownItem.id);
                              setActiveDropdown(null);
                            }}
                            sx={{
                              py: 1.5,
                              px: 2.5,
                              cursor: "pointer",
                              "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.05)"
                              },
                              transition: "all 0.15s ease"
                            }}
                          >
                            <Typography 
                              variant="body2"
                              sx={{ 
                                color: "#fff",
                                fontWeight: 400,
                                fontSize: "0.9rem" 
                              }}
                            >
                              {dropdownItem.label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Button
                  onClick={() => handleScroll(item.id)}
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    textTransform: "none",
                    py: 1,
                    px: 2,
                    borderRadius: "6px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }
                  }}
                >
                  {item.label}
                </Button>
              )}
            </Box>
          ))}
          
          {/* Search and GitHub Icons */}
          <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
            <IconButton
              sx={{ 
                color: "rgba(255, 255, 255, 0.7)",
                "&:hover": { color: "#fff", backgroundColor: "rgba(255, 255, 255, 0.1)" }
              }}
            >
              <Search size={18} />
            </IconButton>
            <IconButton
              sx={{ 
                color: "rgba(255, 255, 255, 0.7)",
                "&:hover": { color: "#fff", backgroundColor: "rgba(255, 255, 255, 0.1)" }
              }}
            >
              <Github size={18} />
            </IconButton>
          </Box>
        </Box>

        {/* Mobile Menu Toggle */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <IconButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{ color: "#fff" }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </IconButton>
        </Box>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Box
            component={motion.div}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            sx={{
              width: "100%",
              overflow: "hidden",
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              borderTop: "1px solid rgba(66, 66, 66, 0.15)",
              backdropFilter: "blur(10px)"
            }}
          >
            <Container sx={{ py: 2, px: 2 }}>
              {navItems.map((item) => (
                <Box key={item.id}>
                  {item.hasDropdown ? (
                    <>
                      <Button
                        onClick={() => toggleDropdown(item.id)}
                        endIcon={
                          <ChevronDown 
                            size={16} 
                            style={{ 
                              transform: activeDropdown === item.id ? 'rotate(180deg)' : 'rotate(0)', 
                              transition: 'transform 0.2s ease'
                            }} 
                          />
                        }
                        sx={{
                          color: "#fff",
                          fontWeight: 500,
                          textTransform: "none",
                          py: 1.5,
                          px: 0,
                          justifyContent: "space-between",
                          width: "100%",
                          borderRadius: 0,
                          borderBottom: "1px solid rgba(66, 66, 66, 0.15)",
                          "&:hover": {
                            backgroundColor: "transparent"
                          }
                        }}
                      >
                        {item.label}
                      </Button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.id && (
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            sx={{ pl: 2 }}
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <Button
                                key={dropdownItem.id}
                                onClick={() => handleScroll(dropdownItem.id)}
                                sx={{
                                  color: "rgba(255, 255, 255, 0.7)",
                                  fontWeight: 400,
                                  textTransform: "none",
                                  py: 1.5,
                                  px: 0,
                                  justifyContent: "flex-start",
                                  width: "100%",
                                  borderBottom: "1px solid rgba(66, 66, 66, 0.1)",
                                  borderRadius: 0,
                                  "&:hover": {
                                    backgroundColor: "transparent",
                                    color: "#fff"
                                  }
                                }}
                              >
                                {dropdownItem.label}
                              </Button>
                            ))}
                          </Box>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Button
                      onClick={() => handleScroll(item.id)}
                      sx={{
                        color: "#fff",
                        fontWeight: 500,
                        textTransform: "none",
                        py: 1.5,
                        px: 0,
                        justifyContent: "flex-start",
                        width: "100%",
                        borderRadius: 0,
                        borderBottom: "1px solid rgba(66, 66, 66, 0.15)",
                        "&:hover": {
                          backgroundColor: "transparent"
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  )}
                </Box>
              ))}
              
              {/* Mobile Search & GitHub */}
              <Box sx={{ display: "flex", mt: 2, gap: 2 }}>
                <Button
                  startIcon={<Search size={16} />}
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    textTransform: "none",
                    py: 1,
                    px: 2,
                    borderRadius: "6px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    },
                    flexGrow: 1
                  }}
                >
                  Search
                </Button>
                <Button
                  startIcon={<Github size={16} />}
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    textTransform: "none",
                    py: 1,
                    px: 2,
                    borderRadius: "6px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }
                  }}
                >
                  Github
                </Button>
              </Box>
            </Container>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;