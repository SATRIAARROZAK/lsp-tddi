import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import ctaPeopleImage from '../../assets/img/Contact.jpg';

const CtaSec = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <div className="cta-text">
          <h2>Daftar Asesmen <br />dan Wujudkan <br />Sertifikasi <br />Anda!</h2>
          <p>
            Ambil langkah pertama menuju pengakuan profesional dan 
            pengembangan karier. Daftar sekarang!
          </p>
          <Link to="/kontak" className="btn-cta">
            Hubungi kami
          </Link>
        </div>
        <div className="cta-image">
          <img src={ctaPeopleImage} alt="Tim siap membantu asesmen" />
        </div>
      </div>
    </section>
  );
};

export default CtaSec;