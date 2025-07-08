import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT LINK
import '../App.css';

const Header = () => (
    <header className="header">
        <div className="top-bar">
            {/* ... (tidak ada perubahan di sini) ... */}
        </div>
        <nav className="main-nav">
            <div className="container">
                {/* 2. Ganti logo menjadi Link ke halaman utama */}
                <Link to="/" className="logo">LSP TDDI CLONE</Link>

                {/* 3. Ganti semua <a> di navigasi menjadi <Link> */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Tentang</Link></li>
                    <li><Link to="/tahap-sertifikasi">Tahap Sertifikasi</Link></li>
                    <li><Link to="/skema">Skema Sertifikasi</Link></li>
                    <li><Link to="/berita">Berita</Link></li>
                    <li><Link to="/kontak">Kontak</Link></li>

                    {/* <li><Link to="/sertifikasi">Sertifikasi</Link></li> */}
                    {/* Tambahkan link lain sesuai kebutuhan */}
                    {/* <li><a href="#">TUK</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Kontak</a></li> */}
                </ul>
                {/* <div className="search-icon">🔍</div> */}
            </div>
        </nav>
    </header>
);

export default Header;