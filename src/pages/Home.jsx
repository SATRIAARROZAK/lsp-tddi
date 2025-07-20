import React from 'react';
// import HeroSection from '../components/HeroSection';
// import AboutSection from '../components/AboutSection';
// import SchemesSection from '../components/SchemesSection';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSec';
import SchemesSection from '../components/home/SchemeSec';
import TestimonialsSection from '../components/home/TestimoSec';
import PartnersSection from '../components/Home/PartnerSec';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <SchemesSection />
            <TestimonialsSection />
            <PartnersSection />
            
        </>
    );
};

export default Home;