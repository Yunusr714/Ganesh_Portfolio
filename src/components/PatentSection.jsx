import React, { useState } from 'react';
import { Award, Shield, Check, Copy, ExternalLink, Calendar, CheckCircle2, Lock, FileCheck } from 'lucide-react';
import { professorData } from '../data/professorData';

export default function PatentSection() {
  const { patent } = professorData;
  const [copied, setCopied] = useState(false);

  const handleCopyPatent = () => {
    navigator.clipboard.writeText(patent.applicationNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="patent"
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
        {/* Section Header */}
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
              Intellectual Property
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
            Patented Cybersecurity Innovation
          </h2>
        </div>

        {/* Master Patent Showcase Card (18px Radius, Zero Shadow, Crisp 1px Border) */}
        <div
          style={{
            background: 'var(--card-bg-solid, #ffffff)',
            borderRadius: '18px',
            border: '1px solid var(--card-border, rgba(18, 24, 48, 0.08))',
            boxShadow: 'none',
            padding: '32px clamp(20px, 3.5vw, 44px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Status Strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              paddingBottom: '22px',
              borderBottom: '1px solid var(--card-border)',
              marginBottom: '28px'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: '#ecfdf5',
                  color: '#065f46',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  border: '1px solid #a7f3d0',
                  boxShadow: 'none'
                }}
              >
                <CheckCircle2 size={13} />
                Status: Published & Verified
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  boxShadow: 'none'
                }}
              >
                <FileCheck size={13} />
                {patent.jurisdiction}
              </span>
            </div>

            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--text-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Gazette Issue: 34/2024</span>
              <span>•</span>
              <span style={{ color: 'var(--primary)' }}>Official Publication</span>
            </div>
          </div>

          {/* Main 2-Column Content Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(300px, 1.25fr) minmax(280px, 1fr)',
              gap: 'clamp(28px, 4vw, 52px)',
              alignItems: 'start'
            }}
            className="patent-grid"
          >
            {/* Left Column: Patent Core Details & Verification Metadata */}
            <div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.025em',
                  marginBottom: '14px',
                  color: 'var(--text-main)',
                  lineHeight: 1.3
                }}
              >
                {patent.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                  fontWeight: 400,
                  marginBottom: '24px'
                }}
              >
                {patent.abstract}
              </p>

              {/* Application Details Grid (Flat, No Shadows, 12px Radius) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                  padding: '18px',
                  borderRadius: '14px',
                  background: 'var(--bg-page)',
                  border: '1px solid var(--card-border)',
                  marginBottom: '26px'
                }}
              >
                <div>
                  <p style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-subtle)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    Application Number
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                    <span style={{ fontSize: '0.96rem', fontWeight: 700, fontFamily: 'monospace', color: 'var(--text-main)' }}>
                      {patent.applicationNumber}
                    </span>
                    <button
                      onClick={handleCopyPatent}
                      title="Copy Application Number"
                      style={{
                        padding: '3px 6px',
                        borderRadius: '6px',
                        background: copied ? '#ecfdf5' : 'transparent',
                        border: '1px solid ' + (copied ? '#a7f3d0' : 'var(--card-border)'),
                        color: copied ? '#065f46' : 'var(--text-muted)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {copied ? (
                        <>
                          <Check size={12} />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-subtle)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    Filing Date
                  </p>
                  <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '4px', margin: 0 }}>
                    {patent.filedDate}
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-subtle)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    Publication Date
                  </p>
                  <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--primary)', marginTop: '4px', margin: 0 }}>
                    {patent.publishedDate}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <button
                  onClick={handleCopyPatent}
                  className="btn-pill-dark"
                  style={{ height: '44px', padding: '0 20px', fontSize: '0.86rem', boxShadow: 'none' }}
                >
                  <Award size={15} />
                  <span>{copied ? 'Patent Number Copied!' : 'Copy Patent Number'}</span>
                </button>

                <a
                  href="/DG_Biodata.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-glass"
                  style={{ height: '44px', padding: '0 20px', fontSize: '0.86rem', boxShadow: 'none' }}
                >
                  <ExternalLink size={15} />
                  <span>Verify in Official Biodata</span>
                </a>
              </div>
            </div>

            {/* Right Column: Patented Architecture & Technological Claims */}
            <div
              style={{
                background: 'var(--bg-page)',
                borderRadius: '16px',
                padding: '24px clamp(18px, 2.5vw, 24px)',
                border: '1px solid var(--card-border)',
                boxShadow: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Lock size={18} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      margin: 0,
                      color: 'var(--text-main)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Patented Architecture Features
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '2px 0 0', fontWeight: 400 }}>
                    Technological claims filed under IPC: H04L
                  </p>
                </div>
              </div>

              {/* Claims List (Clean, Flat White Cards, No Shadows) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {patent.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'var(--card-bg-solid, #ffffff)',
                      border: '1px solid var(--card-border)',
                      boxShadow: 'none'
                    }}
                  >
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: 'rgba(39, 72, 249, 0.1)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        fontFamily: "'Inter', sans-serif",
                        marginTop: '1px'
                      }}
                    >
                      {idx + 1}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.84rem',
                        color: 'var(--text-main)',
                        margin: 0,
                        fontWeight: 500,
                        lineHeight: 1.5
                      }}
                    >
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 900px) {
          .patent-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
