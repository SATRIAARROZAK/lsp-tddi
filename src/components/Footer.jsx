// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// 1. Impor gambar logo dari folder assets
import footerLogo from '../assets/img/logo-lsp.png';

const Footer = () => (
    <footer className="footer">
        <div className="container footer-grid">

            {/* Kolom 1: Info Perusahaan */}
            <div className="footer-column">
                {/* 2. Ganti teks logo dengan gambar */}
                <img src={footerLogo} alt="LSP TDDI Logo" className="footer-logo" />
                <p>
                    JL. Perumahan Griya Pratama Mas Blok D4 No.35,
                    Desa Cikarageman Setu
                    Bekasi, Jawa Barat 17320
                </p>
                <p>
                    <strong>Telepon/Whatsapp:</strong> +62 815-1338-2480
                </p>
                <div className="social-icons">
                    <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                </div>
            </div>

            {/* Kolom 2: Layanan */}
            <div className="footer-column">
                <h4>Layanan</h4>
                <ul>
                    <li><Link to="/tahap-sertifikasi">Tahap Sertifikasi</Link></li>
                    <li><Link to="/skema">Skema Sertifikasi</Link></li>
                </ul>
            </div>

            {/* Kolom 3: Subscribe */}
            <div className="footer-column-subscribe">
                <h4>Subscribe Us</h4>
                <p>Subscribe kami untuk mendapatkan 
                    <br />info terkini terkait sertifikasi.</p>
                <form className="subscribe-form">
                    <input type="email" placeholder="Email" required />
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
        <div className="copyright">
            <p>Copyright © LSP TDDI 2025</p>
        </div>
    </footer>
);

export default Footer;