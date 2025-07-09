import React from 'react';
import '../App.css';

// Impor gambar hero yang baru
import cover from '../assets/img/cover-home.jpg';

const Hero = () => (
    <section className="hero">
        <div className="hero-text-content">
            <h1>
                Certify Your
                <br />
                Skills,
                <br />
                Transform Your
                <br />
                Future.
            </h1>
            <p>
                Dengan komitmen terhadap kualitas dan inovasi, kami menyelenggarakan
                sertifikasi yang tidak hanya memvalidasi keahlian Anda tetapi juga
                meningkatkan kepercayaan bagi pemberi kerja, klien, dan rekan kerja.
            </p>
        </div>
        <div className="hero-image-container">
            <img src={cover} alt="Person working on a computer" />
        </div>
    </section>
);

export default Hero;