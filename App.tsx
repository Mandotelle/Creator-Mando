import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Transformation } from './components/Transformation';
import { Features } from './components/Features';
import { Audience } from './components/Audience';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-mando-black min-h-screen text-white font-sans selection:bg-mando-red selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <Transformation />
        <Features />
        <Audience />
        <About />
        <Testimonials />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;