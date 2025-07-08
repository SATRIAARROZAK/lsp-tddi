import React from 'react';
import '../App.css'; // Import CSS untuk styling

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-column">
        <h4>LSP TDDI CLONE</h4>
        <p>Jl. Telekomunikasi No. 1, Terusan Buahbatu, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257.</p>
        <p><strong>Telepon:</strong> (+62) 812-3456-7890</p>
        <p><strong>Email:</strong> info@lsp-tddi.com</p>
      </div>
      <div className="footer-column">
        <h4>Tautan Penting</h4>
        <ul>
          <li><a href="#">Profil LSP</a></li>
          <li><a href="#">Visi & Misi</a></li>
          <li><a href="#">Skema Sertifikasi</a></li>
          <li><a href="#">Registrasi</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Layanan Kami</h4>
        <ul>
          <li><a href="#">Sertifikasi Drive Test</a></li>
          <li><a href="#">Sertifikasi Jaringan</a></li>
          <li><a href="#">Uji Kompetensi</a></li>
          <li><a href="#">Pelatihan</a></li>
        </ul>
      </div>
       <div className="footer-column">
        <h4>Hubungi Kami</h4>
        <form className="contact-form">
            <input type="text" placeholder="Nama Anda" />
            <input type="email" placeholder="Email Anda" />
            <textarea placeholder="Pesan Anda"></textarea>
            <button type="submit" className="btn btn-primary">Kirim</button>
        </form>
      </div>
    </div>
    <div className="copyright">
      <p>&copy; 2025 LSP TDDI Clone. Dibuat dengan React JS. Bukan situs asli.</p>
    </div>
  </footer>
);

export default Footer;