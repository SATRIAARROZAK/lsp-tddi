import React from 'react';
// import HeroSection from '../components/HeroSection';
// import AboutSection from '../components/AboutSection';
// import SchemesSection from '../components/SchemesSection';
import Hero from '../components/Home/Hero';
import AboutSection from '../components/Home/AboutSec';
import SchemesSection from '../components/Home/SchemeSec';
import TestimonialsSection from '../components/Home/TestimoSec';
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