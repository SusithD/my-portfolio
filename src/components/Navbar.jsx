"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { List, X, House, User, Briefcase, Envelope } from "phosphor-react"; // Modern & Minimal Icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.15)", // Subtle white shade
        backdropFilter: "blur(10px)", // Soft blur effect
        boxShadow: "none",
        borderRadius: "10px", // Rounded corners
        padding: "8px 24px",
        top: "16px", // Keep it near the top
        left: "50%", // Center horizontally
        transform: "translateX(-50%)", // Align properly
        zIndex: 999,
        width: "fit-content",
      }}
    >
      <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
        {/* Desktop Navigation Links (Centered Icons) */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: "16px",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight contrast
            borderRadius: "10px",
            padding: "8px 16px",
          }}
        >
          <IconButton
            color="inherit"
            onClick={() => handleScroll("home")}
            sx={{
              color: "#ffffff",
              "&:hover": {
                color: "#40ffaa",
              },
            }}
          >
            <House size={24} weight="bold" />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => handleScroll("about")}
            sx={{
              color: "#ffffff",
              "&:hover": {
                color: "#40ffaa",
              },
            }}
          >
            <User size={24} weight="bold" />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => handleScroll("projects")}
            sx={{
              color: "#ffffff",
              "&:hover": {
                color: "#40ffaa",
              },
            }}
          >
            <Briefcase size={24} weight="bold" />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => handleScroll("contact")}
            sx={{
              color: "#ffffff",
              "&:hover": {
                color: "#40ffaa",
              },
            }}
          >
            <Envelope size={24} weight="bold" />
          </IconButton>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          sx={{ display: { xs: "block", sm: "none" }, color: "#ffffff" }}
        >
          {isMobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </IconButton>

        {/* Mobile Menu (Floating Icons) */}
        {isMobileMenuOpen && (
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              flexDirection: "column",
              gap: "16px",
              position: "fixed",
              top: "16px", // Keep it near the top
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.15)", // Soft white overlay
              backdropFilter: "blur(10px)",
              borderRadius: "24px",
              padding: "16px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              zIndex: 9999,
            }}
          >
            <IconButton
              color="inherit"
              onClick={() => handleScroll("home")}
              sx={{
                color: "#ffffff",
                "&:hover": {
                  color: "#40ffaa",
                },
              }}
            >
              <House size={24} weight="bold" />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => handleScroll("about")}
              sx={{
                color: "#ffffff",
                "&:hover": {
                  color: "#40ffaa",
                },
              }}
            >
              <User size={24} weight="bold" />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => handleScroll("projects")}
              sx={{
                color: "#ffffff",
                "&:hover": {
                  color: "#40ffaa",
                },
              }}
            >
              <Briefcase size={24} weight="bold" />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => handleScroll("contact")}
              sx={{
                color: "#ffffff",
                "&:hover": {
                  color: "#40ffaa",
                },
              }}
            >
              <Envelope size={24} weight="bold" />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
