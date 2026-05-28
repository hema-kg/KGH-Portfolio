
import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';

import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import BgAnimation from './components/BgAnimation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

// Load data.json
const DATA_URL = process.env.PUBLIC_URL ? process.env.PUBLIC_URL + '/data.json' : '/data.json';


function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(DATA_URL)
      .then(res => res.json())
      .then(setProfile)
      .catch(() => setProfile(null));
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Parallax effect for floating shapes
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.pageYOffset;
      document.querySelectorAll('.shape').forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active nav link on scroll
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-links a');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 300)) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll for nav links
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMobileMenuOpen(false);
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handler);
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handler);
      });
    };
  }, []);

  // Contact form animation
  useEffect(() => {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    const onSubmit = (e) => {
      e.preventDefault();
      const button = form.querySelector('.submit-btn');
      const originalText = button.textContent;
      button.textContent = 'Sending...';
      button.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      setTimeout(() => {
        button.textContent = 'Message Sent!';
        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
          form.reset();
        }, 2000);
      }, 1500);
    };
    form.addEventListener('submit', onSubmit);
    return () => form.removeEventListener('submit', onSubmit);
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <>
      <BgAnimation />
      <Header
        onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        theme={theme}
        onMobileMenuOpen={() => setMobileMenuOpen(true)}
        name={profile.name}
      />
      {mobileMenuOpen && <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />}
      <Hero name={profile.name} summary={profile.summary} />
      <About summary={profile.summary} strengths={profile.strengths} languages={profile.languages} />
      <Skills technicalSkills={profile.technicalSkills} />
      <Experience experience={profile.experience} education={profile.education} />
      <Projects projects={profile.projects} />
      <Contact email={profile.email} phone={profile.phone} location={profile.location} linkedin={profile.linkedin} github={profile.github} />
    </>
  );
}

export default App;
