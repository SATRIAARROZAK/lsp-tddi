import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, dan Route dari react-router-dom
// Impor CSS untuk styling  
import './App.css';

// Impor komponen layout
import Header from './components/Header';
import Footer from './components/Footer';

// Impor komponen Halaman (Pages)
import Home from './pages/Home';
import About from './pages/About';
import Berita from './pages/Berita';
import Kontak from './pages/Kontak';
import Skema from './pages/Skema';
import TahapSertifikasi from './pages/TahapSertifikasi';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
          <Routes>
            {/* Rute untuk setiap halaman */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skema" element={<Skema />} />
            <Route path="/tahap-sertifikasi" element={<TahapSertifikasi />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/berita" element={<Berita />} />
            
            
            {/* <Route path="/sertifikasi" element={<Sertifikasi />} /> */}
            
            {/* Anda bisa menambahkan rute lain di sini */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;