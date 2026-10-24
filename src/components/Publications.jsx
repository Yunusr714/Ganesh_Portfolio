import React, { useState, useMemo } from 'react';
import { Search, Quote, Check, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { professorData } from '../data/professorData';

export default function Publications({ onSelectPaper }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    'All',
    'Medical Imaging',
    'AI & Machine Learning',
    'Computer Vision',
    'Cybersecurity',
    'NLP & Sentiment Analysis'
  ];

  const filteredPublications = useMemo(() => {
    return professorData.publications.filter((pub) => {
      const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory;
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Display top 6 initially unless search/filter is active or user expanded
  const isFiltering = selectedCategory !== 'All' || searchQuery.trim() !== '';
  const displayedPublications = isFiltering || showAll
    ? filteredPublications
    : filteredPublications.slice(0, 6);

  const handleCopyCitation = (pub, e) => {
    e.stopPropagation();
    const citation = `Devadi Ganesh. "${pub.title}." ${pub.journal}, ${pub.volume}, ${pub.year}, pp. ${pub.pages}.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="publications"
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
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
              Academic Contributions
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
            Research Publications Repository
          </h2>
        </div>

        {/* Filter Controls Bar (Flat, Clean, No Shadows) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
            marginBottom: '28px'
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                style={{
                  padding: '7px 15px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  background: selectedCategory === cat ? 'var(--btn-dark)' : 'var(--card-bg-solid, #ffffff)',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-main)',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--btn-dark)' : 'var(--card-border)',
                  boxShadow: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div
            style={{
              position: 'relative',
              minWidth: '240px',
              maxWidth: '320px',
              flex: '1 1 auto'
            }}
          >
            <Search
              size={15}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-subtle)'
              }}
            />
            <input
              type="text"
              placeholder="Search 11 papers, topics, journals..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAll(false);
              }}
              style={{
                width: '100%',
                padding: '9px 14px 9px 38px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--card-border)',
                background: 'var(--card-bg-solid, #ffffff)',
                color: 'var(--text-main)',
                fontSize: '0.82rem',
                fontFamily: "'Inter', sans-serif",
                outline: 'none',
                boxShadow: 'none'
              }}
            />
          </div>
        </div>

        {/* 100% Equal Size Grid across all rows and columns */}
        {displayedPublications.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '50px 20px',
              borderRadius: '18px',
              background: 'var(--card-bg-solid, #ffffff)',
              border: '1px solid var(--card-border)',
              boxShadow: 'none'
            }}
          >
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
              No publications match your filter criteria. Try adjusting the search or category.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '310px',
              gap: '20px'
            }}
            className="publications-grid"
          >
            {displayedPublications.map((pub) => (
              <div
                key={pub.id}
                onClick={() => onSelectPaper && onSelectPaper(pub)}
                style={{
                  height: '100%',
                  borderRadius: '18px',
                  padding: '22px 22px 18px',
                  background: 'var(--card-bg-solid, #ffffff)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  {/* Top Metadata Strip */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      height: '24px',
                      marginBottom: '10px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--primary-light)',
                        color: 'var(--primary)',
                        fontFamily: "'Inter', sans-serif",
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {pub.category}
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.76rem', color: 'var(--text-subtle)', fontWeight: 500 }}>
                        {pub.year}
                      </span>
                      <span style={{ color: 'var(--card-border)' }}>•</span>
                      <span style={{ fontSize: '0.76rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                        #{pub.id < 10 ? `0${pub.id}` : pub.id}
                      </span>
                    </div>
                  </div>

                  {/* Strictly Clamped 2-Line Title with Equal Height Across All Cards */}
                  <h4
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      lineHeight: 1.35,
                      color: 'var(--text-main)',
                      letterSpacing: '-0.02em',
                      margin: '0 0 6px',
                      height: '42px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                    title={pub.title}
                  >
                    {pub.title}
                  </h4>

                  {/* Journal Name & Volume (Fixed 1-Line Height) */}
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      margin: '0 0 8px',
                      fontFamily: "'Inter', sans-serif",
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      height: '18px',
                      lineHeight: '18px'
                    }}
                    title={`${pub.journal} (${pub.volume})`}
                  >
                    {pub.journal} <span style={{ color: 'var(--text-subtle)', fontWeight: 400 }}>• {pub.volume}</span>
                  </p>

                  {/* Abstract Snippet (Fixed 2-Line Height) */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.45,
                      margin: '0 0 10px',
                      height: '38px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {pub.abstract}
                  </p>

                  {/* Compact Tags (Single-line row to prevent height variation) */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'nowrap',
                      gap: '5px',
                      height: '24px',
                      overflow: 'hidden'
                    }}
                  >
                    {(pub.tags || []).slice(0, 2).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.68rem',
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-full)',
                          background: 'var(--bg-page)',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--card-border)',
                          fontFamily: "'Inter', sans-serif",
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {(pub.tags || []).length > 2 && (
                      <span
                        style={{
                          fontSize: '0.68rem',
                          padding: '2px 7px',
                          borderRadius: 'var(--radius-full)',
                          background: 'var(--bg-page)',
                          color: 'var(--text-subtle)',
                          fontFamily: "'Inter', sans-serif",
                          border: '1px solid var(--card-border)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        +{(pub.tags || []).length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer (Locked at bottom with uniform height) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--card-border)',
                    marginTop: 'auto',
                    height: '42px',
                    boxSizing: 'border-box'
                  }}
                >
                  <button
                    onClick={(e) => handleCopyCitation(pub, e)}
                    title="Copy Citation"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-page)',
                      border: '1px solid var(--card-border)',
                      color: copiedId === pub.id ? '#059669' : 'var(--text-muted)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: 'none'
                    }}
                  >
                    {copiedId === pub.id ? <Check size={12} /> : <Quote size={12} />}
                    <span>{copiedId === pub.id ? 'Copied' : 'Cite'}</span>
                  </button>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    <span>Details</span>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'var(--primary-light)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All / Show Less Toggle (Only when not filtering and > 6 items) */}
        {!isFiltering && filteredPublications.length > 6 && (
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className={showAll ? "btn-pill-glass" : "btn-pill-dark"}
              style={{
                boxShadow: 'none',
                height: '42px',
                padding: '0 22px',
                fontSize: '0.84rem',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              <span>{showAll ? 'Show Less (Top 6)' : `View All 11 Publications (${filteredPublications.length - 6} more)`}</span>
              {showAll ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>
        )}
      </div>

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 1024px) {
          .publications-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .publications-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
