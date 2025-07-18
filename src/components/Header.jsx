import React from 'react';
// 1. Ubah import dari Link menjadi NavLink
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/img/logo-lsp.png'; // Pastikan path ini sesuai

const Header = () => (
    <header className="header">
        <nav className="main-nav">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="LSP TDDI Logo" />
                </Link>

                <div className="nav-menu">
                    {/* 2. Semua Link di sini sudah menjadi NavLink */}
                    <ul className="nav-links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">Tentang</NavLink></li>
                        <li><NavLink to="/tahap-sertifikasi">Tahap Sertifikasi</NavLink></li>
                        <li><NavLink to="/skema">Skema Sertifikasi</NavLink></li>
                        <li><NavLink to="/berita">Berita</NavLink></li>
                        <li><NavLink to="/kontak">Kontak</NavLink></li>
                    </ul>
                </div>

                <Link to="/kontak" className="btn-contact">
                    Hubungi kami
                </Link>
            </div>
        </nav>
    </header>
);

export default Header;