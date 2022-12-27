import React from 'react';
import About from './components/About';
import Beforeafter from './components/Beforeafter';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Whatweoffer from './components/Whatweoffer';
import Tour from './components/Tour';
import Footer from './components/Footer';
import Contact from './components/Contact';

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
