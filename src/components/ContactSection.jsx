import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Download, Clock, School } from 'lucide-react';
import confetti from 'canvas-confetti';
import { professorData } from '../data/professorData';

export default function ContactSection() {
  const { personal } = professorData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    purpose: 'Research Collaboration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // fallback
    }
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        affiliation: '',
        purpose: 'Research Collaboration',
        message: ''
      });
    }, 4500);
  };

  return (
    <section
      id="contact"
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
              Get In Touch
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
            Connect With Professor Ganesh
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
          {/* Left Column: Campus Office & Direct Contact Info */}
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
                  <School size={20} />
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
                    Faculty Office & Contact
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '2px 0 0', fontWeight: 400 }}>
                    CSE Department, GMRIT Campus
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={18} style={{ color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h5 style={{ fontSize: '0.88rem', fontWeight: 600, margin: '0 0 2px', color: 'var(--text-main)' }}>
                      Campus Location
                    </h5>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                      Department of Computer Science & Engineering<br />
                      GMR Institute of Technology (GMRIT) – Deemed to be University<br />
                      Rajam, Vizianagaram District, Andhra Pradesh - 532127, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Mail size={18} style={{ color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h5 style={{ fontSize: '0.88rem', fontWeight: 600, margin: '0 0 2px', color: 'var(--text-main)' }}>
                      Official Email
                    </h5>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0 }}>
                      <a
                        href="mailto:ganesh.d@gmrit.edu.in"
                        style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}
                      >
                        ganesh.d@gmrit.edu.in
                      </a>
                    </p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', margin: '2px 0 0' }}>
                      Alternative: devadi.ganesh@gmail.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Clock size={18} style={{ color: '#059669', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h5 style={{ fontSize: '0.88rem', fontWeight: 600, margin: '0 0 2px', color: 'var(--text-main)' }}>
                      Office & Mentoring Hours
                    </h5>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                      Monday – Friday: 09:30 AM – 04:30 PM IST
                    </p>
                    <p style={{ fontSize: '0.76rem', color: 'var(--text-subtle)', margin: '2px 0 0' }}>
                      Coursera & Academic Consultations by appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Official CV */}
            <div
              style={{
                padding: '16px',
                borderRadius: '12px',
                background: 'var(--bg-page)',
                border: '1px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--primary)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Curriculum Vitae
                </p>
                <p style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-main)', margin: '2px 0 0' }}>
                  Official Biodata (PDF)
                </p>
              </div>

              <a
                href="/DG_Biodata.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-dark"
                style={{ padding: '7px 16px', fontSize: '0.8rem', height: '36px', boxShadow: 'none' }}
              >
                <Download size={13} />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Message Form */}
          <div
            style={{
              padding: '28px clamp(20px, 2.5vw, 32px)',
              borderRadius: '18px',
              background: 'var(--card-bg-solid, #ffffff)',
              border: '1px solid var(--card-border)',
              boxShadow: 'none'
            }}
          >
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '4px',
                color: 'var(--text-main)',
                letterSpacing: '-0.02em'
              }}
            >
              Send An Inquiry
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '22px', fontWeight: 400 }}>
              Connect directly with Professor Ganesh for collaborations, research inquiries, or mentorship.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '36px 20px',
                  borderRadius: '14px',
                  background: '#ecfdf5',
                  textAlign: 'center',
                  border: '1px solid #a7f3d0'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#059669',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px'
                  }}
                >
                  <CheckCircle2 size={24} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#065f46', marginBottom: '6px' }}>
                  Inquiry Sent Successfully!
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#047857', maxWidth: '340px', margin: '0 auto' }}>
                  Thank you for reaching out. Professor Ganesh's office will review your message and reply via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '5px', color: 'var(--text-main)' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Scholar / Student"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--card-border)',
                        background: 'var(--bg-page)',
                        color: 'var(--text-main)',
                        fontSize: '0.86rem',
                        fontFamily: "'Inter', sans-serif",
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '5px', color: 'var(--text-main)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--card-border)',
                        background: 'var(--bg-page)',
                        color: 'var(--text-main)',
                        fontSize: '0.86rem',
                        fontFamily: "'Inter', sans-serif",
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '5px', color: 'var(--text-main)' }}>
                      Institution / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="University / Lab / Company"
                      value={formData.affiliation}
                      onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--card-border)',
                        background: 'var(--bg-page)',
                        color: 'var(--text-main)',
                        fontSize: '0.86rem',
                        fontFamily: "'Inter', sans-serif",
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '5px', color: 'var(--text-main)' }}>
                      Purpose of Contact
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--card-border)',
                        background: 'var(--bg-page)',
                        color: 'var(--text-main)',
                        fontSize: '0.86rem',
                        fontFamily: "'Inter', sans-serif",
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                    >
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="PhD / Academic Discussion">PhD / Academic Discussion</option>
                      <option value="Student Project Mentorship">Student Project Mentorship</option>
                      <option value="Conference / Guest Lecture">Conference / Guest Lecture</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '5px', color: 'var(--text-main)' }}>
                    Message / Proposal *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your research proposal, query, or invitation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--card-border)',
                      background: 'var(--bg-page)',
                      color: 'var(--text-main)',
                      fontSize: '0.86rem',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      resize: 'vertical',
                      boxShadow: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-pill-dark"
                  style={{ justifyContent: 'center', width: '100%', height: '44px', fontSize: '0.88rem', boxShadow: 'none', marginTop: '4px' }}
                >
                  <Send size={15} />
                  <span>Transmit Inquiry to Professor</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
