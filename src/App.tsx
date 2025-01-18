import { useState, useEffect } from 'react';
import AppStore from './components/AppStore';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Quotes from './components/Quotes';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
  }, []);



  return (
    <main className='overflow-x-hidden overflow-y-hidden bg-white dark:bg-black text-black dark:text-white duration-500'>
      <NavBar />
      <Hero />
      <Quotes />
      <Banner />
      <Banner2 />
      <Features />
      <AppStore />
      <Footer />
    </main>
  );
}

export default App;
