import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { professorData } from '../data/professorData';

export default function FeaturedProjects({ onSelectPaper }) {
  const { featuredProjects } = professorData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeProject = featuredProjects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="featured"
      style={{
        padding: '70px 0 90px',
        position: 'relative',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Expanded Container Width */}
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
              Research Portfolio
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
            Projects That Delivered Real Impact
          </h2>
        </div>

        {/* Widescreen, Sleeker Card with Reduced Height and Reduced Corner Roundness (18px) */}
        <div
          style={{
            background: 'var(--card-bg-solid, #ffffff)',
            borderRadius: '18px',
            border: '1px solid var(--card-border, rgba(18, 24, 48, 0.08))',
            boxShadow: '0 6px 24px -10px rgba(0, 0, 0, 0.04)',
            padding: '28px clamp(24px, 3.5vw, 44px)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Top Row: Title on Left, Large Number '01' on Right */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '20px',
              marginBottom: '18px'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '2px 9px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase'
                  }}
                >
                  {activeProject.domain}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 500 }}>
                  • {activeProject.year}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1.4rem, 2.4vw, 1.95rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.25,
                  color: 'var(--text-main)',
                  margin: 0
                }}
              >
                {activeProject.title}
              </h3>
            </div>

            {/* Large Subtle Number Stamp */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                fontWeight: 700,
                color: 'rgba(18, 24, 48, 0.12)',
                lineHeight: 0.9,
                userSelect: 'none',
                letterSpacing: '-0.04em'
              }}
            >
              {activeProject.id}
            </div>
          </div>

          {/* Body Content Row: Reduced Height Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.15fr)',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center'
            }}
            className="carousel-body-grid"
          >
            {/* Left Column: Action Button & Navigation Controls */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: '100%',
                paddingBottom: '8px'
              }}
            >

              {/* Action Buttons & Navigation Row */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px',
                  paddingTop: '8px'
                }}
              >
                {/* Explore Project Button */}
                <button
                  onClick={() => onSelectPaper(activeProject)}
                  className="btn-pill-dark"
                  style={{ height: '44px', padding: '0 20px', fontSize: '0.86rem' }}
                >
                  <span>Explore Project</span>
                  <div className="btn-arrow-circle" style={{ width: '24px', height: '24px' }}>
                    <ArrowUpRight size={13} />
                  </div>
                </button>

                {/* Carousel Arrow Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-subtle)',
                      marginRight: '4px'
                    }}
                  >
                    {activeProject.id} / 0{featuredProjects.length}
                  </span>

                  <button
                    onClick={handlePrev}
                    title="Previous Project"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid var(--card-border)',
                      background: 'var(--card-bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border)';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }}
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    onClick={handleNext}
                    title="Next Project"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid var(--card-border)',
                      background: 'var(--card-bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border)';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Sleeker 3D Render Mockup Container (Reduced Height: 250px, Reduced Radius: 14px) */}
            <div
              style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, #e7efff 0%, #d8e5ff 100%)',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '260px'
              }}
            >
              <img
                src={activeProject.image}
                alt={activeProject.title}
                style={{
                  width: '100%',
                  height: '236px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  display: 'block',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.06)'
                }}
              />

              {/* Floating Metric Pill on Visual */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '22px',
                  left: '22px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
              >
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {activeProject.stats.metric}
                </span>
                <span
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  {activeProject.stats.value}
                </span>
              </div>

              {/* Verified Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '22px',
                  right: '22px',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(15, 18, 29, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 600
                }}
              >
                {activeProject.stats.badge}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '22px' }}>
          {featuredProjects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              title={`Go to project ${p.id}`}
              style={{
                width: currentIndex === idx ? '24px' : '7px',
                height: '7px',
                borderRadius: 'var(--radius-full)',
                background: currentIndex === idx ? 'var(--primary)' : 'var(--card-border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 900px) {
          .carousel-body-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
