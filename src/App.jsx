import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="font-roboto">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
