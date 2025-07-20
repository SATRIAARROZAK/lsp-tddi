import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'; 

const SchemesSection = () => {
  return (
    <section className="schemes-section">
      <div className="container">
        <h2 className="section-title">Kenali Program Sertifikasi Kami</h2>
        <div className="schemes-grid">
          {/* Card 1: Data Scientist */}
          <div className="scheme-card">
            <div className="icon-container">
              <i className="bi bi-clipboard-data"></i>
            </div>
            <h3>Data scientist</h3>
            <div className="scheme-divider"></div>
            <p>
              Skema ini menguji kompetensi dalam analisis data, perencanaan dan pengembangan model prediktif, dan visualisasi untuk mendukung keputusan strategis, memastikan kemampuan sesuai kebutuhan industri data modern.
            </p>
          </div>

          {/* Card 2: Associate Data Scientist */}
          <div className="scheme-card">
            <div className="icon-container">
              <i className="bi bi-person-check"></i>
            </div>
            <h3>Associate data scientist</h3>
            <div className="scheme-divider"></div>
            <p>
              Skema ini menilai dasar-dasar analisis data, pemahaman algoritma, dan visualisasi, memastikan kemampuan awal yang relevan untuk mendukung peran di bidang data science.
            </p>
          </div>

          {/* Card 3: Data Engineer */}
          <div className="scheme-card">
            <div className="icon-container">
              <i className="bi bi-database-gear"></i>
            </div>
            <h3>Data Engineer</h3>
            <div className="scheme-divider"></div>
            <p>
              Skema ini menguji kemampuan dalam merancang, membangun, & mengelola infrastruktur data. Kompetensi yang diuji di antaranya terkait integrasi data, pengelolaan pipeline, & optimasi sistem untuk mendukung analisis data skala besar.
            </p>
          </div>

          {/* Card 4: Database Programmer */}
          <div className="scheme-card">
            <div className="icon-container">
              <i className="bi bi-code-slash"></i>
            </div>
            <h3>Database programmer</h3>
            <div className="scheme-divider"></div>
            <p>
              Skema ini menguji kemampuan dalam merancang, membangun, dan mengelola sistem basis data yang mendukung integrasi aplikasi, efisiensi penyimpanan, dan akses data optimal.
            </p>
          </div>
        </div>
        <Link to="/skema" className="btn-lihat-semua">
          Lihat skema lainnya
        </Link>
      </div>
    </section>
  );
};

export default SchemesSection;