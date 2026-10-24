import React from 'react';
import { ArrowUpRight, Brain, Eye, Atom, ShieldCheck, Lock, Network, Award } from 'lucide-react';

export default function CoreDomains() {
  return (
    <section
      id="expertise"
      style={{
        padding: '70px 0 90px',
        position: 'relative',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1400px'
        }}
      >
        {/* Section Header (Inter font, clean medium weight, no clutter) */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            className="section-badge"
            style={{
              justifyContent: 'center',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '8px'
            }}
          >
            <span className="section-badge-star" style={{ color: 'var(--primary)' }}>✦</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
              Core Expertise
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 3.8vw, 2.5rem)',
              fontWeight: 500,
              letterSpacing: '-0.035em',
              lineHeight: 1.18,
              color: 'var(--text-main)',
              margin: '0 auto',
              maxWidth: '550px'
            }}
          >
            Research Domains Built For Innovation
          </h2>
        </div>

        {/* Bento Grid (2x2 Grid + 1 Tall Card matching Reference Image 3, Zero Shadows, 18px radius) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '20px'
          }}
          className="bento-container"
        >
          {/* Card 1: Machine Learning & NLP (Top Left Gradient Card - Reference 3) */}
          <div
            className="bento-card bento-card-left-top"
            style={{
              gridColumn: 'span 4',
              borderRadius: '18px',
              padding: '28px clamp(20px, 2.5vw, 28px)',
              background: 'linear-gradient(145deg, #2748f9 0%, #1a3ad4 100%)',
              color: '#ffffff',
              border: '1px solid rgba(39, 72, 249, 0.4)',
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                <Brain size={22} color="#ffffff" />
              </div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  marginBottom: '8px',
                  letterSpacing: '-0.025em',
                  color: '#ffffff'
                }}
              >
                Machine Learning & NLP
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.86rem',
                  lineHeight: 1.55,
                  color: '#e0e7ff',
                  fontWeight: 400,
                  margin: 0
                }}
              >
                Aspect-based sentiment analysis with EXB_RNN hybrid ensembles, multi-modal feature classification, and predictive analytics.
              </p>
            </div>

            {/* Floating White Pill Badges (Matching Reference 3 Top-Left Card, Flat No Shadows) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '22px'
              }}
            >
              {[
                'EXB_RNN Model',
                'Sentiment Polarity',
                'Multi-modal AI',
                'BiLSTM Attention',
                'Aspect Extraction'
              ].map((tag, idx) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: '#1a33aa',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.74rem',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    boxShadow: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transform: idx % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Computer Vision & Medical Diagnostics (Top Middle White Card - Reference 3) */}
          <div
            className="bento-card bento-card-mid-top"
            style={{
              gridColumn: 'span 4',
              borderRadius: '18px',
              padding: '28px clamp(20px, 2.5vw, 28px)',
              background: 'var(--card-bg-solid, #ffffff)',
              border: '1px solid var(--card-border, rgba(18, 24, 48, 0.08))',
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px'
            }}
          >
            <div>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(14, 165, 233, 0.12)',
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                <Eye size={22} />
              </div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  marginBottom: '8px',
                  letterSpacing: '-0.025em',
                  color: 'var(--text-main)'
                }}
              >
                Computer Vision & Diagnostics
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.86rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55,
                  fontWeight: 400,
                  margin: 0
                }}
              >
                ConvNeXt attention models for Osteoporosis, UNet brain tumor segmentation, and real-time medical imaging pipelines.
              </p>
            </div>

            {/* Diagnostic Clinical Cockpit Preview Box (Matching Reference 3 Top-Middle Card Visual) */}
            <div
              style={{
                marginTop: '22px',
                padding: '14px 16px',
                borderRadius: '14px',
                background: 'linear-gradient(145deg, #f0f4ff 0%, #e6efff 100%)',
                border: '1px solid rgba(39, 72, 249, 0.12)',
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'var(--primary)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Eye size={17} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#1e40af',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    Clinical AI Pipeline
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: '#0f172a',
                      margin: '1px 0 0'
                    }}
                  >
                    OsteoNet & UNet Brain MRI
                  </p>
                </div>
              </div>

              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '4px 9px',
                  borderRadius: '6px',
                  background: 'var(--primary)',
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                  boxShadow: 'none'
                }}
              >
                98.4% Acc
              </span>
            </div>
          </div>

          {/* Card 5: Tall Collaboration Card (Right Column - Spanning 2 Rows - Reference 3) */}
          <div
            className="bento-card bento-card-tall"
            style={{
              gridColumn: 'span 4',
              gridRow: 'span 2',
              borderRadius: '18px',
              padding: '28px clamp(20px, 2.5vw, 28px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'var(--card-bg-solid, #ffffff)',
              border: '1px solid var(--card-border, rgba(18, 24, 48, 0.08))',
              boxShadow: 'none'
            }}
          >
            {/* Top Media / Collaboration Graphic */}
            <div>
              <div
                style={{
                  width: '100%',
                  height: '210px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: 'linear-gradient(160deg, #dbe7ff 0%, #bdd2fc 100%)',
                  marginBottom: '22px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(39, 72, 249, 0.1)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
                  alt="Academic Research Mentorship & Collaboration"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '5px 11px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.94)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: 'none'
                  }}
                >
                  ✦ Faculty & Mentorship
                </div>
              </div>

              {/* Pill Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-page)',
                  border: '1px solid var(--card-border)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  marginBottom: '14px',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                Trusted Across Academic Communities
              </div>

              {/* Title & Description */}
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1.75rem, 2.4vw, 2.05rem)',
                  fontWeight: 600,
                  marginBottom: '12px',
                  lineHeight: 1.2,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-main)'
                }}
              >
                Let's Create Impact
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  margin: '0 0 24px'
                }}
              >
                Open for joint research publications, doctoral collaborations, student project guidance, and government-funded R&D projects.
              </p>
            </div>

            {/* CTA Button (Flat, Inter font, no shadow) */}
            <a
              href="#contact"
              className="btn-pill-dark"
              style={{
                justifyContent: 'center',
                width: '100%',
                boxShadow: 'none',
                fontFamily: "'Inter', sans-serif",
                height: '46px',
                fontSize: '0.88rem'
              }}
            >
              <span>Start A Discussion</span>
              <div className="btn-arrow-circle" style={{ width: '26px', height: '26px' }}>
                <ArrowUpRight size={14} />
              </div>
            </a>
          </div>

          {/* Card 3: Quantum & Smart Systems (Bottom Left Soft Blue Card - Reference 3) */}
          <div
            className="bento-card bento-card-left-bottom"
            style={{
              gridColumn: 'span 4',
              borderRadius: '18px',
              padding: '28px clamp(20px, 2.5vw, 28px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px',
              background: 'linear-gradient(135deg, #eef4ff 0%, #e2ecfd 100%)',
              border: '1px solid rgba(39, 72, 249, 0.15)',
              boxShadow: 'none'
            }}
          >
            <div>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(39, 72, 249, 0.12)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                <Atom size={22} />
              </div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  marginBottom: '8px',
                  letterSpacing: '-0.025em',
                  color: 'var(--text-main)'
                }}
              >
                Quantum & Smart Systems
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.86rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55,
                  fontWeight: 400,
                  margin: 0
                }}
              >
                Quantum algorithms, intelligent smart grid control, and next-generation communications via AICTE ATAL and IIT Patna programs.
              </p>
            </div>

            {/* 3 Mini Preview Cards in a Row (Matching Reference 3 Bottom-Left 3 Mini Cards) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                marginTop: '22px'
              }}
            >
              {[
                { label: 'Quantum ATAL', sub: 'South Asian Univ', badge: 'Q-Circuits' },
                { label: 'Smart Grids', sub: 'IIT Patna FDP', badge: 'ML Control' },
                { label: 'Edge Systems', sub: 'IIIT Guwahati', badge: 'IoT Network' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    borderRadius: '10px',
                    border: '1px solid rgba(39, 72, 249, 0.12)',
                    padding: '10px 8px',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '74px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.64rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em'
                    }}
                  >
                    {item.badge}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        margin: '3px 0 0',
                        lineHeight: 1.2
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.64rem',
                        color: 'var(--text-subtle)',
                        margin: '1px 0 0',
                        lineHeight: 1.2
                      }}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Cybersecurity & Patented Defenses (Bottom Middle White Card - Reference 3) */}
          <div
            className="bento-card bento-card-mid-bottom"
            style={{
              gridColumn: 'span 4',
              borderRadius: '18px',
              padding: '28px clamp(20px, 2.5vw, 28px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px',
              background: 'var(--card-bg-solid, #ffffff)',
              border: '1px solid var(--card-border, rgba(18, 24, 48, 0.08))',
              boxShadow: 'none'
            }}
          >
            <div>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  marginBottom: '8px',
                  letterSpacing: '-0.025em',
                  color: 'var(--text-main)'
                }}
              >
                Cybersecurity & Defenses
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.86rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55,
                  fontWeight: 400,
                  margin: 0
                }}
              >
                Threat intelligence telemetry, cloud perimeter intrusion detection, and high-concurrency credential verification.
              </p>
            </div>

            {/* Radar Arc with Orbiting Badges & Patent Chip (Matching Reference 3 Bottom-Middle Card) */}
            <div
              style={{
                marginTop: '16px',
                position: 'relative',
                height: '95px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                overflow: 'hidden'
              }}
            >
              {/* Concentric Dashed Radar Arcs */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-35px',
                  width: '260px',
                  height: '130px',
                  borderRadius: '130px 130px 0 0',
                  border: '1.5px dashed rgba(39, 72, 249, 0.22)',
                  borderBottom: 'none',
                  pointerEvents: 'none'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  width: '180px',
                  height: '90px',
                  borderRadius: '90px 90px 0 0',
                  border: '1.5px dashed rgba(39, 72, 249, 0.14)',
                  borderBottom: 'none',
                  pointerEvents: 'none'
                }}
              />

              {/* Orbiting Badges along the arc */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  marginBottom: '8px'
                }}
              >
                {[
                  { icon: <ShieldCheck size={13} color="#ffffff" />, bg: '#059669', label: 'Patent' },
                  { icon: <Lock size={13} color="#ffffff" />, bg: '#2563eb', label: 'Auth' },
                  { icon: <Network size={13} color="#ffffff" />, bg: '#0284c7', label: 'Cloud' },
                  { icon: <Award size={13} color="#ffffff" />, bg: '#7c3aed', label: 'Telemetry' }
                ].map((b, i) => (
                  <div
                    key={i}
                    title={b.label}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: b.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #ffffff',
                      boxShadow: 'none'
                    }}
                  >
                    {b.icon}
                  </div>
                ))}
              </div>

              {/* Patent Chip at bottom */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-page)',
                  border: '1px solid var(--card-border)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: 'none'
                }}
              >
                <span style={{ color: '#059669' }}>✦</span>
                <span>Indian Patent No: 202441061967</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments for Bento Grid */}
      <style>{`
        @media (max-width: 1024px) {
          .bento-card-left-top,
          .bento-card-mid-top,
          .bento-card-left-bottom,
          .bento-card-mid-bottom {
            grid-column: span 6 !important;
          }
          .bento-card-tall {
            grid-column: span 12 !important;
            grid-row: auto !important;
          }
        }
        @media (max-width: 768px) {
          .bento-card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
