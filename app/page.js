// app/page.js
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Certifications from '../src/components/Certifications';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Skills from '../src/components/Skills';
import Model3D from '../src/components/Model3D';
import Navbar from '../src/components/Navbar';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Model3D />
      <Footer />
    </div>
  );
}