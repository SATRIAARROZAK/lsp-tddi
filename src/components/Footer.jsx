import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import footerLogo from '../assets/img/logo-lsp.png';

const Footer = () => (
    <footer className="footer">
        <div className="container footer-grid">

            {/* Kolom 1: Info Perusahaan */}
            <div className="footer-column">
                <img src={footerLogo} alt="LSP TDDI Logo" className="footer-logo" />
                <p>
                    JL. Perumahan Griya Pratama Mas Blok D10 No.35,
                    Desa Cikarageman Setu
                    Bekasi, Jawa Barat 17320
                </p>
                <p>
                    <strong>Telepon/Whatsapp:</strong> +62 815-1338-2480
                </p>
                <div className="social-icons">
                    <a href="#" aria-label="Instagram" className="social-icon-box">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>

            {/* Kolom 2: Layanan */}
            <div className="footer-column">
                <h4>Services</h4>
                <div className="footer-divider"></div>
                <ul>
                    <li><Link to="/tahap-sertifikasi">Tahap sertifikasi</Link></li>
                    <li><Link to="/skema">Skema sertifikasi</Link></li>
                </ul>
            </div>

            {/* Kolom 3: Subscribe */}
            <div className="footer-column-subscribe">
                <h4>Subscribe Us</h4>
                <div className="footer-divider"></div>
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