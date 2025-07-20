import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import ctaBanner from '../../assets/img/Contact.jpg';

const CtaSec = () => {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <Link to="/kontak">
          <img src={ctaBanner} alt="Daftar Asesmen dan Wujudkan Sertifikasi Anda" className="cta-banner-image" />
        </Link>
      </div>
    </section>
  );
};

export default CtaSec;