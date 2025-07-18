import React from 'react';
import '../../App.css'; 

// Impor logo mitra dari folder assets
import logoLpkad from '../../assets/img/ppkd-jakut.png';
import logoPpkd from '../../assets/img/ppkd-jakbar.png';
import logoAidi from '../../assets/img/aidi.png';
import logoMps from '../../assets/img/mps.png';

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="section-title">Mitra Kami</h2>
        <div className="partners-logos">
          <img src={logoLpkad} alt="LPKAD Jakarta Logo" />
          <img src={logoPpkd} alt="PPKD Jakarta Utara Logo" />
          <img src={logoAidi} alt="Asosiasi Ilmuwan Data Indonesia Logo" />
          <img src={logoMps} alt="MPS Consulting Group Logo" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;