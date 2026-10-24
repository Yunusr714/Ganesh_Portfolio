import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { professorData } from '../data/professorData';

export default function Hero() {
  const { personal } = professorData;

  const handleDownloadCV = () => {
    window.open('/DG_Biodata.pdf', '_blank');
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        padding: '20px 0 60px',
        overflow: 'hidden',
        minHeight: '82vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Huge Background Watermark Typography: "Mr. GANESH" */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(3.5rem, 15vw, 12.5rem)',
          fontWeight: 900,
          fontFamily: 'var(--font-heading)',
          color: 'rgba(3, 16, 60, 0.11)',
          letterSpacing: '0.04em',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          zIndex: 1
        }}
      >
        Mr. GANESH
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        
        {/* Center Stage: Transparent Portrait with Soft Gradient Feathering (Bottom, Left & Right) */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            minHeight: '490px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          {/* Profile Image Container with 3-Way Soft Gradient Fade */}
          <div
            style={{
              position: 'relative',
              width: 'min(480px, 90vw)',
              height: '520px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            {/* Actual Professor Ganesh Portrait (/profile.png) */}
            <img
              src="/profile.png"
              alt="Mr. Devadi Ganesh - Assistant Professor"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                zIndex: 3
              }}
            />

            {/* Bottom-to-Top White-to-Transparent Gradient */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '160px',
                background: 'linear-gradient(to top, #ffffff 18%, rgba(255, 255, 255, 0.88) 50%, rgba(255, 255, 255, 0.25) 80%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 10
              }}
            />
          </div>
        </div>

        {/* Action Buttons Cleanly Centered Below Portrait */}
        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <a
            href="#featured"
            className="btn-pill-dark"
            style={{ height: '52px', padding: '0 26px' }}
          >
            <span>Explore Research</span>
            <div className="btn-arrow-circle">
              <ArrowUpRight size={16} />
            </div>
          </a>

          <button
            onClick={handleDownloadCV}
            className="btn-pill-glass"
            style={{
              height: '52px',
              padding: '0 26px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.95rem'
            }}
          >
            <span>Download Biodata (PDF)</span>
            <div
              className="btn-arrow-circle"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'rgba(39, 72, 249, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)'
              }}
            >
              <Download size={15} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
