import React, { useState } from 'react';
import '../../App.css'; 

// Impor avatar
import avatar1 from '../../assets/img/cover-home.jpg'; // Placeholder
import avatar2 from '../../assets/img/wahyu.png'; // Placeholder
import avatar3 from '../../assets/img/razak.png'; // Placeholder

// 1. Data testimoni dipindahkan ke dalam sebuah array
const testimonialsData = [
  {
    id: 0,
    avatar: avatar2,
    name: 'Wahyu',
    role: 'Pegawai Swasta',
    text: '"Saya merasa assessment berjalan lancar. Asesor memberikan penjelasan tata cara assessment dengan sangat jelas dan proses assessment berjalan sangat efisien."',
  },
  {
    id: 1,
    avatar: avatar3,
    name: 'Razak',
    role: 'Peserta Digital Marketing',
    text: '"Asesor yang bertugas sangat kompeten dan berpengalaman. Mereka mampu menciptakan suasana yang nyaman namun tetap fokus, serta memberikan arahan yang jelas kepada para peserta."',
  },
  {
    id: 2,
    avatar: avatar1,
    name: 'Jhon',
    role: 'Data Analyst',
    text: '"Proses sertifikasi ini sangat membantu saya dalam memvalidasi keahlian yang saya miliki dan membuka peluang karir yang lebih baik di industri data."',
  },
];

const TestimonialsSection = () => {
  // 2. Menggunakan useState untuk melacak indeks testimoni yang aktif
  const [activeIndex, setActiveIndex] = useState(0);

  // 3. Fungsi untuk pindah ke slide berikutnya
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  // 4. Fungsi untuk pindah ke slide sebelumnya
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Dengar Langsung dari Mereka yang Telah Berhasil</h2>
        
        <div className="testimonials-slider">
          {/* 5. Tombol navigasi "previous" */}
          <button onClick={handlePrev} className="arrow-btn prev-btn" aria-label="Previous Testimonial">
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="testimonials-container">
            {/* 6. Render testimoni secara dinamis berdasarkan activeIndex */}
            {testimonialsData.map((testimonial, index) => {
              // Menentukan kelas untuk setiap kartu (prev, active, next)
              let position = 'next';
              if (index === activeIndex) {
                position = 'active';
              } else if (index === (activeIndex - 1 + testimonialsData.length) % testimonialsData.length) {
                position = 'prev';
              } else if (index === (activeIndex + 1) % testimonialsData.length) {
                 position = 'next';
              } else {
                 position = 'hidden'; // Sembunyikan kartu lain
              }

              return (
                <div className={`testimonial-card ${position}`} key={testimonial.id}>
                  <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 7. Tombol navigasi "next" */}
          <button onClick={handleNext} className="arrow-btn next-btn" aria-label="Next Testimonial">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="testimonial-pagination">
          {/* 8. Render titik navigasi secara dinamis */}
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)} // Membuat titik dapat diklik
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;