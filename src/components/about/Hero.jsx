import React from 'react';
import '../../App.css'; // Pastikan CSS diimpor

const Hero = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="about-title">Tentang Kami</h1>
        
        <p className="vision-statement">
          Kami memiliki visi untuk menjadi lembaga penyelenggara
          <br />
          sertifikasi profesi yang <strong>akuntabel</strong> dan <strong>kredibel</strong>.
        </p>

        <div className="about-content-grid">
          <p>
            LSP TDDI merupakan LSP dalam skema-skema Bidang Teknologi Informasi dan Komunikasi yang bertujuan untuk memberdayakan individu dan organisasi agar mencapai keunggulan melalui sertifikasi yang diakui secara di dunia profesional. Kami memastikan bahwa para profesional seperti Anda dilengkapi dengan kredensial guna meningkatkan peluang karier dan menunjukkan keahlian Anda.
          </p>
          <p>
            Kami percaya bahwa pertumbuhan profesional dimulai dengan validasi keahlian. LSP TDDI bertekad untuk menyelenggarakan program sertifikasi yang membantu individu dan bisnis mencapai potensi penuh mereka melalui kredensial yang terukur dan sesuai dengan kebutuhan industri.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;