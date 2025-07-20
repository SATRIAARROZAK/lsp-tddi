import React, { useState } from 'react';
import '../../App.css'; 

// Impor avatar
import avatar1 from '../../assets/img/cover-home.jpg'; // Placeholder
import avatar2 from '../../assets/img/wahyu.png'; // Placeholder
import avatar3 from '../../assets/img/razak.png'; // Placeholder

const testimonialsData = [
  {
    id: 0,
    avatar: avatar2,
    name: 'Wahyu',
    role: 'Pegawai Swasta',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
  },
  {
    id: 1,
    avatar: avatar3,
    name: 'Samual Karl',
    role: 'CEO',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
  },
  {
    id: 2,
    avatar: avatar1,
    name: 'Daria Linney',
    role: 'CEO',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the middle card as active

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Dengar Langsung dari Mereka yang Telah Berhasil</h2>
        
        <div className="testimonials-slider">
          <div className="testimonials-container">
            {testimonialsData.map((testimonial, index) => {
              let position = '';
              if (index === activeIndex) {
                position = 'active';
              } else if (index === (activeIndex - 1 + testimonialsData.length) % testimonialsData.length) {
                position = 'prev';
              } else {
                position = 'next';
              }

              return (
                <div className={`testimonial-card ${position}`} key={testimonial.id}>
                  <span className="quote-icon left">“</span>
                  <span className="quote-icon right">”</span>
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
        </div>

        <div className="testimonial-pagination">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleSelect(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;