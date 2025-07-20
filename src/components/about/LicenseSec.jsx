import React from 'react';
import '../../App.css';
import licenseCert from '../../assets/img/lisensi.jpg'; // Ganti dengan path gambar yang sesuai

const LicenseSec = () => {
  return (
    <section className="license-section">
      <div className="container">
        <div className="license-image">
          <img src={licenseCert} alt="Sertifikat Lisensi BNSP" />
        </div>
        <div className="license-text">
          <h2>Kepercayaan yang Didukung oleh Lisensi</h2>
          <p>
            LSP TDDI telah mendapatkan lisensi resmi sebagai LSP P3 dari Badan Nasional Sertifikasi Profesi (BNSP) dengan nomor lisensi <strong>BNSP-LSP-2543-ID</strong>, yang berlaku hingga <strong>4 Oktober 2029</strong>. Pengakuan ini menegaskan komitmen kami untuk memberikan layanan sertifikasi yang tidak hanya berkualitas tinggi, tetapi juga sesuai dengan standar nasional dan kebutuhan industri terkini.
          </p>
          <p>
            Lisensi dari BNSP ini memastikan bahwa setiap proses sertifikasi yang kami lakukan memenuhi prinsip-prinsip transparansi, akuntabilitas, dan integritas. Hal ini memberikan jaminan kepada para profesional bahwa sertifikat yang mereka peroleh melalui LSP TDDI memiliki kredibilitas tinggi dan diakui secara resmi di tingkat nasional.
          </p>
          <p>
            Dengan dukungan lisensi ini, kami berupaya menjadi mitra terpercaya bagi individu dan organisasi yang ingin meningkatkan kompetensi, membangun reputasi profesional, dan membuka peluang karier lebih luas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LicenseSec;