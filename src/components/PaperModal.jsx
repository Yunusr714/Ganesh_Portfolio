import React, { useState, useEffect } from 'react';
import { X, Quote, Check, ExternalLink } from 'lucide-react';

export default function PaperModal({ paper, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!paper) return null;

  const handleCopyCitation = () => {
    const citation = `Devadi Ganesh. "${paper.title}." ${paper.domain || paper.category}, Published Research, 2024-2025.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        background: 'rgba(10, 14, 25, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'Inter', sans-serif"
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--card-bg-solid, #ffffff)',
          borderRadius: '18px',
          padding: '28px clamp(20px, 3.5vw, 36px)',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(0,0,0,0.18)',
          border: '1px solid var(--card-border)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'var(--bg-page)',
            border: '1px solid var(--card-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-main)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: 'none'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
        >
          <X size={18} />
        </button>

        {/* Modal Category Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              padding: '3px 10px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--primary-light)',
              color: 'var(--primary)',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {paper.domain || paper.category}
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 500 }}>
            {paper.year}
          </span>
        </div>

        {/* Modal Title */}
        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1.35rem, 2.3vw, 1.7rem)',
            fontWeight: 600,
            lineHeight: 1.3,
            marginBottom: '12px',
            color: 'var(--text-main)',
            paddingRight: '36px',
            letterSpacing: '-0.025em'
          }}
        >
          {paper.title}
        </h3>

        {/* Author credit */}
        <p style={{ fontSize: '0.84rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '20px' }}>
          Lead / Co-Investigator: Mr. Devadi Ganesh (GMRIT)
        </p>

        {/* Description / Abstract */}
        <div style={{ marginBottom: '22px' }}>
          <h4 style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-main)' }}>
            Comprehensive Abstract & Methodology
          </h4>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
            {paper.description || paper.abstract}
          </p>
        </div>

        {/* High-Impact Insight Box */}
        {paper.highlight && (
          <div
            style={{
              padding: '14px 16px',
              borderRadius: '12px',
              background: 'var(--bg-page)',
              border: '1px solid var(--card-border)',
              marginBottom: '22px'
            }}
          >
            <p style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', margin: '0 0 2px', letterSpacing: '0.03em' }}>
              Scientific Highlight
            </p>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-main)', margin: 0, fontWeight: 500 }}>
              {paper.highlight}
            </p>
          </div>
        )}

        {/* Key Metrics / Tags */}
        <div style={{ marginBottom: '26px' }}>
          <h4 style={{ fontSize: '0.84rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-main)' }}>
            Keywords & Architecture Stacks
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {(paper.tags || []).map((t) => (
              <span
                key={t}
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 500,
                  padding: '4px 11px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-page)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--card-border)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid var(--card-border)'
          }}
        >
          <button
            onClick={handleCopyCitation}
            className="btn-pill-dark"
            style={{ height: '40px', padding: '0 18px', fontSize: '0.82rem', boxShadow: 'none' }}
          >
            {copied ? <Check size={14} /> : <Quote size={14} />}
            <span>{copied ? 'Citation Copied!' : 'Copy Citation'}</span>
          </button>

          <a
            href="/DG_Biodata.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-glass"
            style={{ height: '40px', padding: '0 18px', fontSize: '0.82rem', boxShadow: 'none' }}
          >
            <ExternalLink size={14} />
            <span>Verify in Biodata</span>
          </a>
        </div>
      </div>
    </div>
  );
}
