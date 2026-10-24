import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { professorData } from '../data/professorData';

export default function AboutSection() {
  const { personal } = professorData;

  return (
    <section id="about" style={{ padding: '80px 0 110px', position: 'relative' }}>
      <div className="container">
        
        {/* ========================================================
            ROW 1: Header ("✦ About Me" on Left, Headline & CTA on Right)
           ======================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 380px) 1fr',
            gap: 'clamp(28px, 4.5vw, 64px)',
            alignItems: 'start',
            marginBottom: '44px'
          }}
          className="about-header-grid"
        >
          {/* Left Column: ✦ About Me */}
          <div>
            <div className="section-badge" style={{ margin: 0 }}>
              <span className="section-badge-star" style={{ color: 'var(--primary)' }}>✦</span>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>About Me</span>
            </div>
          </div>

          {/* Right Column: Headline (Inter, normal weight) + CTA Button */}
          <div>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1.9rem, 3.4vw, 2.5rem)',
                fontWeight: 400,
                letterSpacing: '-0.025em',
                lineHeight: 1.25,
                color: 'var(--text-main)',
                marginBottom: '26px'
              }}
            >
              Advancing intelligent computing through high-impact research, clinical AI diagnostics, and dedicated academic mentorship.
            </h2>

            <div>
              <a href="#contact" className="btn-pill-dark">
                <span>Get In Touch</span>
                <div className="btn-arrow-circle">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            ROW 2: Portrait Card on Left & 2x2 Bento Cards on Right (Aligned at Bottom)
           ======================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 380px) 1fr',
            gap: 'clamp(28px, 4.5vw, 64px)',
            alignItems: 'stretch'
          }}
          className="about-cards-grid"
        >
          {/* Left Column: Portrait Card, stretching 100% height to align flush with remaining cards */}
          <div
            style={{
              position: 'relative',
              borderRadius: '26px',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, #f8f9fd 0%, #edf1fa 100%)',
              border: '1px solid var(--card-border)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              height: '100%',
              minHeight: '400px'
            }}
          >
            <img
              src="/profile.png"
              alt="Mr. Devadi Ganesh"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                display: 'block'
              }}
            />

            {/* Bottom Subtle White Fade */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '90px',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.95) 10%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* Right Column: 2x2 Bento Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px'
            }}
            className="about-bento-grid"
          >
            {/* Card 1: Years Academic Excellence */}
            <div
              className="glass-card"
              style={{
                borderRadius: '24px',
                padding: '28px 24px',
                background: 'var(--card-bg-solid)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                  Years Crafting
                </p>
                <p style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-main)', margin: '2px 0 0', lineHeight: 1.3 }}>
                  Academic Excellence
                </p>
              </div>
              <span
                style={{
                  fontSize: 'clamp(2.3rem, 3.6vw, 3rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-main)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1
                }}
              >
                5+
              </span>
            </div>

            {/* Card 2: Publications */}
            <div
              className="glass-card"
              style={{
                borderRadius: '24px',
                padding: '28px 24px',
                background: 'var(--card-bg-solid)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                  Peer-Reviewed
                </p>
                <p style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-main)', margin: '2px 0 0', lineHeight: 1.3 }}>
                  Indexed Publications
                </p>
              </div>
              <span
                style={{
                  fontSize: 'clamp(2.3rem, 3.6vw, 3rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1
                }}
              >
                11+
              </span>
            </div>

            {/* Card 3: Indian Patent & Academic Recognition */}
            <div
              className="glass-card"
              style={{
                borderRadius: '24px',
                padding: '28px 24px',
                background: 'var(--card-bg-solid)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '180px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                      fontWeight: 800,
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--text-main)',
                      lineHeight: 1
                    }}
                  >
                    1
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                    Patent Published
                  </span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '4px', margin: 0, fontWeight: 500 }}>
                  Cloud-Based Threat Intelligence (2024)
                </p>
              </div>

              {/* Rating & student community pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--card-border)',
                  marginTop: '14px'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: '#fef3c7',
                    color: '#92400e',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}
                >
                  <Star size={12} fill="#f59e0b" color="#f59e0b" />
                  <span>4.9 / 5.0</span>
                </div>

                <span style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-subtle)' }}>
                  Student Mentorship Score
                </span>
              </div>
            </div>

            {/* Card 4: Strategic Research & Applied Innovation */}
            <div
              className="glass-card"
              style={{
                borderRadius: '24px',
                padding: '28px 24px',
                background: 'var(--card-bg-solid)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '180px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '14px', lineHeight: 1.25, color: 'var(--text-main)' }}>
                  Strategic Research, <br />
                  Applied Innovation
                </h4>
              </div>

              {/* Pill tags layout with diagonal badge */}
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: 'fit-content',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-page)',
                    fontSize: '0.76rem',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  Medical Image Analysis
                </span>

                <span
                  style={{
                    display: 'inline-block',
                    width: 'fit-content',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-page)',
                    fontSize: '0.76rem',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  Deep Learning & NLP
                </span>

                <span
                  style={{
                    display: 'inline-block',
                    width: 'fit-content',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-page)',
                    fontSize: '0.76rem',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  Cybersecurity Systems
                </span>

                {/* Angled Floating Pill Badge */}
                <div
                  style={{
                    position: 'absolute',
                    right: '-4px',
                    top: '18px',
                    transform: 'rotate(-42deg)',
                    background: 'var(--btn-dark)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '5px 14px',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 6px 14px rgba(0,0,0,0.18)',
                    zIndex: 2
                  }}
                >
                  Quantum AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 900px) {
          .about-header-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .about-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .about-bento-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
