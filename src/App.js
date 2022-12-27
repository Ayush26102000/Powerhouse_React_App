import React from 'react';
import About from './components/About';
import Beforeafter from './components/Beforeafter';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Whatweoffer from './components/Whatweoffer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Whatweoffer/>
      <Beforeafter/>
      <About/>
    </div>
  );
}

export default App;
