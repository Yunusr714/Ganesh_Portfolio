import React, { useState } from 'react';
import { School, Trophy } from 'lucide-react';
import { professorData } from '../data/professorData';

export default function FdpCertifications() {
  const { fdps, sports, conferences } = professorData;
  const [activeTab, setActiveTab] = useState('fdps');

  return (
    <section
      id="certifications"
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
        <div style={{ textAlign: 'center', marginBottom: '38px' }}>
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
              Continuous Learning & Excellence
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
            Faculty Development & Honors
          </h2>
        </div>

        {/* Tab Controls (Flat, No Shadows) */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {[
            { id: 'fdps', label: `FDPs & Certifications (${fdps.length})` },
            { id: 'conferences', label: `Conferences (${conferences.length})` },
            { id: 'sports', label: 'Sports & Campus Honors' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                background: activeTab === tab.id ? 'var(--btn-dark)' : 'var(--card-bg-solid, #ffffff)',
                color: activeTab === tab.id ? '#ffffff' : 'var(--text-main)',
                border: '1px solid',
                borderColor: activeTab === tab.id ? 'var(--btn-dark)' : 'var(--card-border)',
                boxShadow: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: FDPs & Certifications (18px Radius, Zero Shadow, Crisp 1px Border) */}
        {activeTab === 'fdps' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
              gap: '16px'
            }}
          >
            {fdps.map((fdp, idx) => (
              <div
                key={idx}
                style={{
                  padding: '22px',
                  borderRadius: '18px',
                  background: 'var(--card-bg-solid, #ffffff)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'none',
                  minHeight: '190px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--primary-light)',
                        color: 'var(--primary)',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {fdp.type}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 500 }}>
                      {fdp.year}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                      lineHeight: 1.4,
                      color: 'var(--text-main)',
                      letterSpacing: '-0.015em'
                    }}
                  >
                    {fdp.title}
                  </h4>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--card-border)',
                    marginTop: '12px'
                  }}
                >
                  <School size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>
                    {fdp.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Conferences */}
        {activeTab === 'conferences' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {conferences.map((conf, idx) => (
              <div
                key={idx}
                style={{
                  padding: '22px clamp(18px, 2.5vw, 26px)',
                  borderRadius: '18px',
                  background: 'var(--card-bg-solid, #ffffff)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'none'
                }}
              >
                <div style={{ flex: '1 1 540px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--btn-dark)',
                        color: '#ffffff',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {conf.conference}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 500 }}>
                      {conf.year}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--primary-light)',
                        color: 'var(--primary)',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {conf.role}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      marginBottom: '4px',
                      color: 'var(--text-main)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {conf.topic}
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0, fontWeight: 400 }}>
                    {conf.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Sports & Extracurriculars */}
        {activeTab === 'sports' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '16px'
            }}
          >
            {sports.map((sport, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px',
                  borderRadius: '18px',
                  background: 'var(--card-bg-solid, #ffffff)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'none',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: idx === 0 ? 'rgba(234, 179, 8, 0.15)' : 'rgba(39, 72, 249, 0.12)',
                    color: idx === 0 ? '#b45309' : 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Trophy size={22} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '2px 7px',
                      borderRadius: 'var(--radius-full)',
                      background: idx === 0 ? '#fef3c7' : '#e0e7ff',
                      color: idx === 0 ? '#92400e' : '#3730a3',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {idx === 0 ? 'Champion' : 'Runner-Up'}
                  </span>
                  <h4
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      margin: '6px 0 2px',
                      color: 'var(--text-main)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {sport.title}
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: '0 0 2px', fontWeight: 500 }}>
                    {sport.event}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', margin: 0, fontWeight: 400 }}>
                    {sport.team}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
