import React from 'react';
import { GraduationCap, Briefcase, BookOpen, Users, FileCheck } from 'lucide-react';
import { professorData } from '../data/professorData';

export default function AcademicJourney() {
  const { academics, responsibilities } = professorData;

  return (
    <section
      id="academics"
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
              Academic Background
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
            Qualifications & Leadership
          </h2>
        </div>

        {/* 2-Column Grid (Flat Cards, 18px Radius, Zero Shadow) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}
        >
          {/* Left Column: Academic Qualifications */}
          <div
            style={{
              padding: '28px clamp(20px, 2.5vw, 32px)',
              borderRadius: '18px',
              background: 'var(--card-bg-solid, #ffffff)',
              border: '1px solid var(--card-border)',
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      margin: 0,
                      color: 'var(--text-main)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Degrees & Credentials
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '2px 0 0', fontWeight: 400 }}>
                    Doctoral research & postgraduate credentials
                  </p>
                </div>
              </div>

              {/* Degrees Timeline List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {academics.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'relative',
                      paddingLeft: '20px',
                      borderLeft: `2px solid ${item.status === 'Pursuing' ? 'var(--primary)' : 'var(--card-border)'}`
                    }}
                  >
                    {/* Status Indicator Dot */}
                    <span
                      style={{
                        position: 'absolute',
                        left: '-6px',
                        top: '3px',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: item.status === 'Pursuing' ? 'var(--primary)' : '#059669',
                        border: '2px solid #ffffff'
                      }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-full)',
                          background: item.status === 'Pursuing' ? 'rgba(39, 72, 249, 0.1)' : '#ecfdf5',
                          color: item.status === 'Pursuing' ? 'var(--primary)' : '#059669',
                          fontFamily: "'Inter', sans-serif"
                        }}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.02rem',
                        fontWeight: 600,
                        margin: '4px 0 2px',
                        color: 'var(--text-main)'
                      }}
                    >
                      {item.degree}
                    </h4>
                    <p style={{ fontSize: '0.86rem', fontWeight: 500, color: 'var(--text-muted)', margin: '0 0 3px' }}>
                      {item.institution}
                    </p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', margin: 0, fontWeight: 400 }}>
                      {item.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Administrative Roles */}
          <div
            style={{
              padding: '28px clamp(20px, 2.5vw, 32px)',
              borderRadius: '18px',
              background: 'var(--card-bg-solid, #ffffff)',
              border: '1px solid var(--card-border)',
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      margin: 0,
                      color: 'var(--text-main)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Faculty Role & Leadership
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '2px 0 0', fontWeight: 400 }}>
                    CSE Department, GMRIT (Sept 2023 – Present)
                  </p>
                </div>
              </div>

              {/* Current Position Banner (Flat, No Shadows) */}
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: 'var(--bg-page)',
                  border: '1px solid var(--card-border)',
                  marginBottom: '18px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--text-main)', fontFamily: "'Inter', sans-serif" }}>
                    Assistant Professor
                  </span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      padding: '3px 9px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--primary)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    Active Faculty
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '4px 0 0', lineHeight: 1.45 }}>
                  Department of Computer Science and Engineering, GMRIT – Deemed to be University, Rajam.
                </p>
              </div>

              {/* Departmental Responsibilities List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'var(--bg-page)',
                      border: '1px solid var(--card-border)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px'
                    }}
                  >
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '6px',
                        background: 'var(--card-bg-solid, #ffffff)',
                        border: '1px solid var(--card-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)',
                        flexShrink: 0,
                        marginTop: '1px'
                      }}
                    >
                      {idx === 0 ? <BookOpen size={14} /> : idx === 1 ? <Users size={14} /> : <FileCheck size={14} />}
                    </div>
                    <div>
                      <h5 style={{ fontSize: '0.88rem', fontWeight: 600, margin: 0, color: 'var(--text-main)', fontFamily: "'Inter', sans-serif" }}>
                        {resp.role}
                      </h5>
                      <p style={{ fontSize: '0.74rem', color: 'var(--primary)', fontWeight: 600, margin: '1px 0 2px' }}>
                        {resp.scope}
                      </p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                        {resp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
