"use client";

import React, { useEffect } from 'react';
import './globals.css'; 

export default function Home() {
  
  // This hook handles the scroll animations for a premium feel
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1, // Triggers when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const hiddenElements = document.querySelectorAll('.reveal');
    
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <a href="#" className="nav-logo">
          {/* Logo representation */}
          
          byten
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="reveal floating">
            <h1>We Architect <br/><span className="gradient-text">Digital Excellence</span></h1>
          </div>
          <p className="reveal delay-1">
            Byten provides premium software development, modern web applications, and intuitive enterprise solutions tailored for scale.
          </p>
          <div className="reveal delay-2">
            <a href="#contact" className="btn-primary">Initiate Project</a>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding">
        <h2 className="section-title reveal">Premium Solutions</h2>
        <p className="section-subtitle reveal delay-1">Engineered for performance, designed for impact.</p>
        
        <div className="services-grid">
          <div className="service-card glass-panel reveal delay-1">
            <div className="service-icon">🌐</div>
            <h3>Web Platforms</h3>
            <p>Immersive, high-performance web applications built on modern JavaScript frameworks like Next.js and React.</p>
          </div>
          
          <div className="service-card glass-panel reveal delay-2">
            <div className="service-icon">📱</div>
            <h3>Mobile Applications</h3>
            <p>Seamless cross-platform and native mobile experiences that engage users and drive business growth.</p>
          </div>
          
          <div className="service-card glass-panel reveal delay-3">
            <div className="service-icon">💳</div>
            <h3>POS Systems</h3>
            <p>Next-generation Point of Sale solutions designed for modern retail, ensuring rapid transactions and smart inventory.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="contact-grid">
          <div className="contact-text">
            <h2 className="section-title reveal" style={{ textAlign: 'left' }}>Let's Connect</h2>
            <p className="section-subtitle reveal delay-1" style={{ textAlign: 'left', margin: '0 0 3rem 0' }}>
              Transform your business with Byten's cutting-edge technology solutions.
            </p>
            
            <div className="contact-info">
              <div className="contact-card glass-panel reveal delay-1">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email Support</h4>
                  <a href="mailto:bytensolution@gmail.com">bytensolution@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-card glass-panel reveal delay-2">
                <span className="icon">📞</span>
                <div>
                  <h4>Direct Line</h4>
                  <a href="tel:+919633581368">+91 9633581368</a>
                </div>
              </div>

              <div className="contact-card glass-panel reveal delay-3">
                <span className="icon">🔗</span>
                <div>
                  <h4>Website</h4>
                  <a href="https://www.byten.in" target="_blank" rel="noreferrer">www.byten.in</a>
                </div>
              </div>
            </div>
          </div>

          <div className="form-container reveal delay-2">
            <form className="contact-form glass-panel" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="input-group">
                <textarea placeholder="Project Details..." required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Byten. All rights reserved.</p>
      </footer>
    </>
  );
}