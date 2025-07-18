import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'; 

// Import the image for the section. 
// Make sure you have an image named 'about-section.jpg' in the 'src/assets/img/' folder.
import sec1 from '../../assets/img/sec1.jpg';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-image">
          <img src={sec1} alt="Persiapan Sertifikasi" />
        </div>
        <div className="about-text">
          <h2>Dari Persiapan Hingga Sertifikasi</h2>
          <p>
            Proses mendapatkan sertifikasi itu mudah: pilih program Anda, persiapkan diri, 
            ikuti asesmen, dan dapatkan sertifikat Anda. Proses kami yang efisien 
            membuat semuanya terasa sederhana dari awal hingga akhir.
          </p>
          <Link to="/tahap-sertifikasi" className="btn-learn-more">
            Pelajari lebih lanjut
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;