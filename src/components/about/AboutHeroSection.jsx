import React from 'react';
import { SproutIcon, ScaleQualityIcon, LeafIcon, FamilyIcon } from '../Icons';

export default function AboutHeroSection() {
  const brandValues = [
    { id: 1, label: "Traditional Wisdom", icon: <SproutIcon size={22} color="#FFFFFF" /> },
    { id: 2, label: "Quality at Fair Prices", icon: <ScaleQualityIcon size={22} color="#FFFFFF" /> },
    { id: 3, label: "Thoughtful Ingredients", icon: <LeafIcon size={22} color="#FFFFFF" /> },
    { id: 4, label: "Family-Focused Nutrition", icon: <FamilyIcon size={22} color="#FFFFFF" /> }
  ];

  return (
    <section className="about-hero-section" aria-label="About Ammi Nutrition Story">
      {/* Wide Panoramic Facility Photograph with Brand Signage */}
      <div className="about-pano-wrapper">
        <img 
          src="/images/about/facility-panoramic.png" 
          alt="Ammi Nutrition modern food preparation facility with brand signboard in Coimbatore, Tamil Nadu"
          className="about-pano-img"
          width="1536"
          height="520"
          fetchPriority="high"
        />
      </div>

      {/* Story Section */}
      <div className="about-story-area">
        <div className="container">
          <div className="about-story-grid">
            {/* Left Story Column */}
            <div className="about-story-left">
              <span className="story-badge">Our Story</span>
              <h1 className="story-title">
                Rooted in Tradition,<br />
                Nourishing Modern Families
              </h1>
              <div className="gold-divider" style={{ width: '56px', margin: '14px 0 20px' }}></div>

              <div className="story-paragraphs">
                <p>
                  Ammi Nutrition began with a simple thought: families deserve good-quality food products at prices they can afford.
                </p>
                <p>
                  We believe quality food should be accessible without placing unnecessary pressure on a family's budget. Our aim is to bring traditional food wisdom and carefully considered preparation together, creating everyday food products that balance quality and value.
                </p>
                <p>
                  Our purpose is simple: to make good-quality food more affordable for families while keeping care and quality at the heart of what we do.
                </p>
              </div>
            </div>

            {/* Right Values Card */}
            <div className="about-story-right">
              <div className="about-values-card">
                {brandValues.map((val, idx) => (
                  <React.Fragment key={val.id}>
                    <div className="about-val-row">
                      <div className="about-val-icon-box">
                        {val.icon}
                      </div>
                      <span className="about-val-text">{val.label}</span>
                    </div>
                    {idx < brandValues.length - 1 && (
                      <div className="about-val-divider" aria-hidden="true"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-hero-section {
          background-color: var(--color-warm-ivory);
          position: relative;
        }

        .about-pano-wrapper {
          width: 100%;
          max-height: 480px;
          overflow: hidden;
          background-color: #E8EFE8;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-pano-img {
          width: 100%;
          height: 100%;
          max-height: 480px;
          object-fit: cover;
          display: block;
        }

        .about-story-area {
          background-color: var(--color-warm-ivory);
          background: linear-gradient(180deg, #FAF3E4 0%, #FFF9ED 100%);
          padding: 56px 0 60px;
        }

        .about-story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        @media (min-width: 900px) {
          .about-story-grid {
            grid-template-columns: 1.3fr 1fr;
            gap: 56px;
          }
        }

        .story-badge {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-natural-gold);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 4px;
        }

        .story-title {
          font-size: 2.35rem;
          line-height: 1.2;
          color: var(--color-forest-green);
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        @media (min-width: 768px) {
          .story-title {
            font-size: 2.9rem;
          }
        }

        .story-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .story-paragraphs p {
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--color-body-charcoal);
        }

        /* Values Card on Right */
        .about-values-card {
          background-color: var(--color-deep-green);
          background: linear-gradient(145deg, #073D25 0%, #064C2D 100%);
          border-radius: var(--radius-xl);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 16px 38px rgba(6, 76, 45, 0.2);
          border: 1px solid rgba(212, 163, 65, 0.3);
        }

        .about-val-row {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 14px 0;
        }

        .about-val-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .about-val-text {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          color: #FFFDF8;
          letter-spacing: 0.01em;
        }

        .about-val-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 163, 65, 0.35), transparent);
        }
      `}</style>
    </section>
  );
}
