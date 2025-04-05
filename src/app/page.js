"use client";

import React from "react";
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import TechShowcase from '../components/TechShowcase';
import Projects from '../components/Projects';
import Model3D from '../components/Model3D';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechShowcase />
      <Projects />
      <Model3D />
      <Contact />
    </main>
  );
} 