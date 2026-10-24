import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#featured' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Patent', href: '#patent' },
    { label: 'Publications', href: '#publications' },
    { label: 'Academics', href: '#academics' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        padding: scrolled ? '12px clamp(20px, 4vw, 56px)' : '18px clamp(20px, 4vw, 56px)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled
          ? darkMode
            ? 'rgba(10, 13, 22, 0.92)'
            : 'rgba(255, 255, 255, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--card-border)' : '1px solid transparent'
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative'
        }}
      >
        {/* 1. FAR LEFT: Signature Image Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            zIndex: 10,
            flexShrink: 0
          }}
          title="Devadi Ganesh"
        >
          <img
            src="/signature.png"
            alt="Devadi Ganesh Signature"
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter: 'var(--signature-filter, none)',
              transition: 'transform 0.25s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </a>

        {/* 2. TRUE CENTER: Navigation Links (Refined smaller font size, no card) */}
        <nav
          className="desktop-nav"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'none',
            alignItems: 'center',
            gap: '24px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontSize: '0.84rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease, transform 0.2s ease',
                padding: '4px 0',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                letterSpacing: '-0.005em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 3. FAR RIGHT: Get In Touch CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 10,
            flexShrink: 0
          }}
        >

          {/* Compact Refined Get In Touch Button */}
          <a
            href="#contact"
            className="btn-pill-dark"
            style={{
              display: 'none',
              padding: '8px 16px',
              fontSize: '0.82rem',
              gap: '8px'
            }}
            id="nav-cta-btn"
          >
            <span>Get In Touch</span>
            <div
              className="btn-arrow-circle"
              style={{ width: '24px', height: '24px' }}
            >
              <ArrowUpRight size={13} />
            </div>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-main)',
              cursor: 'pointer'
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: darkMode ? 'rgba(12, 16, 28, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--card-border)',
            padding: '20px 24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                padding: '8px 0',
                borderBottom: '1px solid var(--card-border)',
                textDecoration: 'none'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-pill-primary"
            style={{ justifyContent: 'center', marginTop: '10px', padding: '10px', fontSize: '0.85rem' }}
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      {/* Responsive Breakpoint */}
      <style>{`
        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-cta-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
