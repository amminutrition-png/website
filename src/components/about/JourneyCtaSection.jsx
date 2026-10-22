import React from 'react';

export default function JourneyCtaSection({ onExploreProduct }) {
  return (
    <section className="journey-cta-section" aria-label="Be a Part of Our Journey">
      <div className="container">
        <div className="journey-cta-card">
          <div className="journey-cta-grid">
            {/* Left Column: Headline, text and button */}
            <div className="journey-cta-left">
              <h2 className="journey-cta-title">Be a Part of Our Journey</h2>
              <p className="journey-cta-desc">
                Discover traditional inspiration and good-quality food at an affordable price.
              </p>
              <button 
                type="button" 
                className="btn btn-primary btn-journey-explore"
                onClick={onExploreProduct}
                id="about-explore-product-btn"
              >
                Explore Our Product →
              </button>
            </div>

            {/* Right Column: Still life arrangement of grains & wooden bowl */}
            <div className="journey-cta-right">
              <img 
                src="/images/about/journey-still-life.png" 
                alt="Natural grains, seeds, pulses and wholesome ingredients in a wooden bowl"
                className="journey-still-life-img"
                width="640"
                height="320"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .journey-cta-section {
          background-color: var(--color-warm-ivory);
          padding: 20px 0 60px;
        }

        .journey-cta-card {
          background-color: #6C4022;
          background: linear-gradient(135deg, #5A3218 0%, #6E4022 50%, #4D260E 100%);
          border-radius: var(--radius-xl);
          border: 1.5px solid var(--color-natural-gold);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
          overflow: hidden;
          position: relative;
        }

        .journey-cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
        }

        @media (min-width: 900px) {
          .journey-cta-grid {
            grid-template-columns: 1.15fr 1fr;
          }
        }

        .journey-cta-left {
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          z-index: 2;
        }

        @media (min-width: 900px) {
          .journey-cta-left {
            padding: 48px 44px;
          }
        }

        .journey-cta-title {
          font-family: var(--font-serif);
          font-size: 2.25rem;
          color: #FFFFFF;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        @media (min-width: 768px) {
          .journey-cta-title {
            font-size: 2.65rem;
          }
        }

        .journey-cta-desc {
          font-size: 1.12rem;
          color: #F7E5CA;
          line-height: 1.55;
          max-width: 480px;
        }

        .btn-journey-explore {
          margin-top: 8px;
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          padding: 14px 32px;
          background-color: var(--color-forest-green);
          color: #FFFFFF;
          border: 1px solid var(--color-natural-gold);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }

        .btn-journey-explore:hover {
          background-color: var(--color-dark-green-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .journey-cta-right {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .journey-still-life-img {
          width: 100%;
          height: auto;
          max-height: 340px;
          object-fit: cover;
          display: block;
          transition: transform var(--transition-normal);
        }

        .journey-cta-card:hover .journey-still-life-img {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}
