import React, { useState } from 'react';
import { ExternalLink, Copy, Check, ShieldCheck } from 'lucide-react';
import { professorData } from '../data/professorData';

export default function AcademicBar() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, name) => {
    navigator.clipboard.writeText(text);
    setCopiedId(name);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      style={{
        width: '100%',
        margin: '20px 0 60px',
        borderTop: '1px solid var(--card-border)',
        borderBottom: '1px solid var(--card-border)',
        background: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: 'none',
        padding: '22px 0'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '16px'
          }}
        >
          {/* Centered Title Strip with Verified Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ShieldCheck size={16} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--text-main)',
                  lineHeight: 1.2
                }}
              >
                Verified Academic Identifiers
              </span>
              <span
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: '#ecfdf5',
                  color: '#059669',
                  border: '1px solid #a7f3d0'
                }}
              >
                Official
              </span>
            </div>
          </div>

          {/* Centered Row of Academic Identifiers (No shadow, centered position) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            {professorData.academicIds.map((item) => (
              <div
                key={item.name}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'var(--bg-page)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  gap: '8px',
                  boxShadow: 'none',
                  transition: 'border-color 0.2s ease, background 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(39, 72, 249, 0.4)';
                  e.currentTarget.style.background = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.background = 'var(--bg-page)';
                }}
              >
                {/* Status Dot + Name + ID */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: item.color,
                      flexShrink: 0
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {item.name}:
                  </span>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      fontWeight: 600,
                      color: 'var(--text-muted)'
                    }}
                  >
                    {item.id}
                  </span>
                </div>

                {/* 1-Click Copy Button with Instant Toast State */}
                <button
                  onClick={() => handleCopy(item.id, item.name)}
                  title={`Copy ${item.name}`}
                  style={{
                    padding: '3px',
                    borderRadius: '5px',
                    background: 'transparent',
                    color: copiedId === item.name ? '#10b981' : 'var(--text-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {copiedId === item.name ? <Check size={13} /> : <Copy size={13} />}
                </button>

                {/* Direct Link to Profile */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View profile on ${item.name}`}
                  style={{
                    padding: '3px',
                    borderRadius: '5px',
                    color: 'var(--text-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-subtle)')}
                >
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
