import React from 'react';
import About from './components/About/About';
import Beforeafter from './components/Results/Beforeafter';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Whatweoffer from './components/What we offer/Whatweoffer';
import Tour from './components/Tour/Tour';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Whatweoffer />
      <Beforeafter />
      <Tour />
      <About />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
