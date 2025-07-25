import React from 'react';
import Hero from '../components/about/Hero';
import StepsSec from '../components/about/StepsSec';
import LicenseSec from '../components/about/LicenseSec';
import PartnersSection from '../components/Home/PartnerSec';
import CtaSec from '../components/home/CtaSec';


const About = () => {
    return (
        <>
            {/* Bagian 1: Banner "Tentang Kami" */}
            <Hero />
            
            {/* Bagian 2: Langkah Kami Menuju Sertifikasi Berkualitas */}
            <StepsSec />

            {/* Bagian 3: Kepercayaan yang Didukung oleh Lisensi */}
            <LicenseSec />
			{/* Bagian 4: Partner Kami */}
			<PartnersSection />
			{/* Bagian 5: Call to Action */}
			<CtaSec />	
        </>
    );
};

export default About;