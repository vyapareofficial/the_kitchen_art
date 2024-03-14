import React, { useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Benefitss from './components/Benefitss';
import Kitchenlayouts from './components/Kitchenlayouts';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import BackToTopButton from './components/Backtotbutton';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/Whatsappbutton';
import Heronew from './components/Heronew';
import Modularwardrobe from './components/Modularwardrobe';


function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToModularwardrobe = () => {
    const contactElement = document.getElementById('Modularwardrobe');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToModularkitchen = () => {
    const contactElement = document.getElementById('Modularkitchen');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToService = () => {
    const contactElement = document.getElementById('Service');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAboutus = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <BackToTopButton/>
      <WhatsAppButton/>
      <Navbar scrollToContact={scrollToContact} scrollToModularwardrobe={scrollToModularwardrobe} scrollToModularkitchen={scrollToModularkitchen} scrollToService={scrollToService} scrollToAboutus={scrollToAboutus}  />
      <Herosection scrollToContact={scrollToContact} />
      <About scrollToContact={scrollToContact} />
      <Services />
      <Steps scrollToContact={scrollToContact} />
      <Benefitss scrollToContact={scrollToContact} />
      <Banner scrollToContact={scrollToContact}  />
      <Kitchenlayouts />
      <Modularwardrobe />
      <Testimonials />
      <Contact ref={contactRef} />
      
      <Footer scrollToContact={scrollToContact} scrollToAboutus={scrollToAboutus} scrollToService={scrollToService} scrollToModularkitchen={scrollToModularkitchen} />
    </div>
  );
}

export default App;
