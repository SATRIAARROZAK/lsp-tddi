import React from 'react';
import '../../App.css';

// 1. Impor gambar ikon dari folder assets
import iconKomitmen from '../../assets/img/Group.png';
import iconMemastikan from '../../assets/img/Group (1).png';
import iconBerperan from '../../assets/img/Group (2).png';

const StepsSec = () => {
  return (
    <section className="steps-section">
      <div className="container">
        <h2 className="section-title">Langkah Kami Menuju Sertifikasi Berkualitas</h2>
        <div className="steps-grid">
          
          {/* Card 1 */}
          <div className="step-card">
            <div className="step-icon">
              <img src={iconKomitmen} alt="Ikon Komitmen Uji Kompetensi" />
            </div>
            <div className="step-divider"></div>
            <p>
              Kami berkomitmen untuk menyelenggarakan uji kompetensi yang profesional sesuai dengan kaidah BNSP.
            </p>
          </div>

          {/* Card 2 */}
          <div className="step-card">
            <div className="step-icon">
              <img src={iconMemastikan} alt="Ikon Memastikan Kompetensi" />
            </div>
            <div className="step-divider"></div>
            <p>
              Memastikan pemegang sertifikasi memiliki tingkat kompetensi dan keterampilan yang diperlukan di bidang teknologi informasi dan komunikasi.
            </p>
          </div>

          {/* Card 3 */}
          <div className="step-card">
            <div className="step-icon">
              <img src={iconBerperan} alt="Ikon Pemeliharaan Standar Profesional" />
            </div>
            <div className="step-divider"></div>
            <p>
              Berperan serta dalam pemeliharaan standar profesional di bidang teknologi informasi dan komunikasi.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepsSec;