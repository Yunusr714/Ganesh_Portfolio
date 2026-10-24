import React from 'react';
import { ArrowUp } from 'lucide-react';
import { professorData } from '../data/professorData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--card-bg-solid, #ffffff)',
        borderTop: '1px solid var(--card-border)',
        padding: '50px 0 26px',
        position: 'relative',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '36px',
            marginBottom: '40px'
          }}
        >
          {/* Col 1: Identity */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
              <img
                src="/signature.png"
                alt="Devadi Ganesh Signature"
                style={{ height: '38px', width: 'auto', alignSelf: 'flex-start', objectFit: 'contain' }}
              />
              <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', margin: 0, fontWeight: 500 }}>
                Assistant Professor • Department of Computer Science and Engineering
              </p>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              GMR Institute of Technology (GMRIT) – Deemed to be University, Rajam, Andhra Pradesh. 
              Dedicated to cutting-edge research in AI, Deep Learning, Medical Imaging, and Cybersecurity.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h5 style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '14px', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
              Quick Navigation
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Home Overview', href: '#home' },
                { label: 'Featured Research', href: '#featured' },
                { label: 'Research Domains', href: '#expertise' },
                { label: 'Indian Patent (2024)', href: '#patent' },
                { label: 'Publications (11 Papers)', href: '#publications' },
                { label: 'Academics & FDPs', href: '#academics' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ fontSize: '0.82rem', color: 'var(--text-muted)', transition: 'color 0.2s', fontWeight: 400 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Repositories */}
          <div>
            <h5 style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '14px', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
              Academic Verification
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {professorData.academicIds.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color }} />
                  <span style={{ fontWeight: 600 }}>{item.name}:</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.78rem' }}>{item.id}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="btn-pill-glass"
              style={{ padding: '9px 16px', gap: '6px', fontSize: '0.82rem', height: '38px', boxShadow: 'none' }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            paddingTop: '20px',
            borderTop: '1px solid var(--card-border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '0.78rem',
            color: 'var(--text-subtle)'
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Mr. Devadi Ganesh. All Rights Reserved. GMRIT, Rajam.
          </p>
          <p style={{ margin: 0 }}>
            Official Academic & Research Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
