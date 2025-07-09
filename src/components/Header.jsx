import React from 'react';
// src/components/Header.jsx

// 1. Ubah import dari Link menjadi NavLink
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/img/logo-lsp.png'; // Pastikan path ini sesuai dengan struktur folder Anda

const Header = () => (
    <header className="header">
        <nav className="main-nav">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="LSP TDDI Logo" />
                </Link>

                <div className="nav-menu">
                    {/* 2. Ganti semua Link di sini menjadi NavLink */}
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