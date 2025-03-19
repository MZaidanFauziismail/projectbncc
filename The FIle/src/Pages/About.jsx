import React, { useEffect, useState } from "react";
import "../styles/About.css";

const About = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100 + "%",
      size: Math.random() * 8 + 2 + "px", 
      animationDuration: Math.random() * 6 + 3 + "s",
      animationDelay: Math.random() * 3 + "s", 
    }));
    setParticles(newParticles);
  }, []);
  
  return (
    <div className="about-page">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="animated-particle"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDuration: particle.animationDuration,
            animationDelay: particle.animationDelay,
          }}
        />
      ))}

      <div className="content-container">
        <div className="about-content-box">
          <h1>About WorldUniversity</h1>
          <p>     
          WorldUniversity adalah platform pendidikan global yang menyediakan akses informasi komprehensif mengenai universitas di seluruh dunia. Kami membantu calon mahasiswa menemukan institusi pendidikan terbaik yang sesuai dengan minat, bakat, dan tujuan akademik mereka.
          </p>
        </div>
        <div className="connector"><div className="rope"></div></div>
      </div>

      <div className="content-container">
        <div className="vision-box">
          <h2>Vision</h2>
          <p>Menjadi jembatan bagi setiap individu untuk mendapatkan akses pendidikan berkualitas yang terjangkau dan inklusif, tanpa batasan geografis..</p>
        </div>
        <div className="connector"><div className="rope"></div></div>
      </div>

      <div className="content-container">
        <div className="mission-box">
          <h2>Mission</h2>
          <ul>
            <li>Mempermudah pencarian universitas berdasarkan lokasi, bidang studi, dan reputasi akademik.</li>
            <li>Menyediakan informasi akurat, terkini, dan terpercaya tentang institusi pendidikan di seluruh dunia.</li>
            <li>Menghubungkan calon mahasiswa dengan universitas serta lembaga pendidikan unggulan melalui teknologi inovatif.</li>
          </ul>
        </div>
        <div className="connector"><div className="rope"></div></div>
      </div>

      <div className="content-container">
        <div className="about-content-box">
          <h2>Development Team</h2>
          <p>
            We are a group of developers, designers, and educators committed to improving access to education. By leveraging modern technology, we aim to develop innovative solutions that streamline your learning experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
