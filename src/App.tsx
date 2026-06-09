/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Credentials from './components/Credentials';
import Specialties from './components/Specialties';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Regions from './components/Regions';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  useEffect(() => {
    // Smoother reveal for sections on initial load
    document.body.style.opacity = '1';
  }, []);

  return (
    <main className="relative bg-primary-dark">
      <CustomCursor />
      <Navbar />
      
      <div id="inicio">
        <Hero />
      </div>
      
      <Credentials />
      
      <div id="especialidades">
        <Specialties />
      </div>
      
      <div id="sobre">
        <About />
      </div>
      
      <div id="depoimentos">
        <Testimonials />
      </div>
      
      <Regions />
      
      <div id="contato">
        <CTA />
      </div>
      
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}

