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
              <i className="bi bi-stars"></i>
            </div>
            <h3>Data Scientist</h3>
            <p>
              Skema ini menguji kompetensi dalam analisis data, perencanaan dan pengembangan model prediktif, dan visualisasi untuk mendukung keputusan strategis, memastikan kemampuan sesuai kebutuhan industri data modern.
            </p>
          </div>

          {/* Card 2: Associate Data Scientist */}
          <div className="scheme-card">
            <div className="icon-container">
              <i className="bi bi-person-workspace"></i>
            </div>
            <h3>Associate Data Scientist</h3>
            <p>
              Skema ini menguji kompetensi dasar dalam analisis data, machine learning, dan komunikasi data untuk mendukung pengambilan keputusan berbasis data di berbagai sektor industri.
            </p>
          </div>

          {/* Card 3: Associate Data Engineer */}
          <div className="scheme-card">
            <div className="icon-container">
              <i className="bi bi-database-gear"></i>
            </div>
            <h3>Associate Data Engineer</h3>
            <p>
              Skema ini menguji kompetensi dasar dalam pemrosesan data, ETL, dan pengelolaan pipeline data untuk memastikan ketersediaan data bagi proses analitik lanjutan.
            </p>
          </div>

          {/* Card 4: Data Engineer */}
          <div className="scheme-card">
            <div className="icon-container">
              <i className="bi bi-code-slash"></i>
            </div>
            <h3>Data Engineer</h3>
            <p>
              Skema ini menguji kompetensi lanjutan dalam membangun, mengelola, dan mengoptimalkan infrastruktur data skala besar untuk mendukung sistem analitik dan aplikasi cerdas.
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