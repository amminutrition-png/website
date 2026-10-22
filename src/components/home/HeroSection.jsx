import React from 'react';
import { BowlIcon, LeafIcon, FamilyIcon } from '../Icons';

export default function HeroSection({ onOpenOrder, onDiscoverProduct }) {
  return (
    <section className="hero-section" aria-label="Hero Section">
      {/* Background with warm natural lighting */}
      <div className="hero-bg-overlay" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Content Column */}
          <div className="hero-content">
            <h1 className="hero-title">
              Traditional Goodness,<br />
              <span className="hero-title-highlight">Everyday Nutrition</span>
            </h1>

            <div className="gold-divider" style={{ width: '64px', margin: '14px 0 20px' }}></div>

            <p className="hero-description">
              Meet Ammi Nutrition Protein Malt — a comforting malt mix made for your family’s daily routine.
            </p>

            {/* 3 Compact Benefit Items */}
            <div className="hero-features-row">
              <div className="hero-feature-item">
                <div className="feature-circle">
                  <BowlIcon size={22} color="#064C2D" />
                </div>
                <span className="hero-feature-label">Easy to Prepare</span>
              </div>

              <div className="hero-feature-divider" aria-hidden="true"></div>

              <div className="hero-feature-item">
                <div className="feature-circle">
                  <LeafIcon size={22} color="#064C2D" />
                </div>
                <span className="hero-feature-label">Everyday Comfort</span>
              </div>

              <div className="hero-feature-divider" aria-hidden="true"></div>

              <div className="hero-feature-item">
                <div className="feature-circle">
                  <FamilyIcon size={22} color="#064C2D" />
                </div>
                <span className="hero-feature-label">Made for Family Moments</span>
              </div>
            </div>

            {/* Calls to Action */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                className="btn btn-primary btn-hero-order"
                onClick={onOpenOrder}
                id="hero-order-now-btn"
              >
                Order Now →
              </button>
              <button 
                type="button" 
                className="btn btn-secondary btn-hero-discover"
                onClick={onDiscoverProduct}
                id="hero-discover-malt-btn"
              >
                Discover Protein Malt →
              </button>
            </div>
          </div>

          {/* Right Product Still Life Presentation */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img 
                src="/images/hero/hero-still-life.png" 
                alt="Ammi Nutrition Protein Malt 500g pouch surrounded by natural grains, almonds and a glass of creamy malt drink"
                className="hero-still-life-img"
                width="720"
                height="620"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background-color: var(--color-warm-ivory);
          background: radial-gradient(circle at 75% 40%, #FFF4DF 0%, #FFF9ED 65%, #F7EEDB 100%);
          padding-top: 40px;
          padding-bottom: 50px;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        @media (min-width: 992px) {
          .hero-section {
            padding-top: 56px;
            padding-bottom: 64px;
          }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.05fr 1.15fr;
            gap: 48px;
          }
        }

        .hero-content {
          z-index: 2;
        }

        .hero-title {
          font-size: 2.35rem;
          line-height: 1.18;
          color: var(--color-forest-green);
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.1rem;
          }
        }

        @media (min-width: 1200px) {
          .hero-title {
            font-size: 3.65rem;
          }
        }

        .hero-description {
          font-size: 1.12rem;
          line-height: 1.6;
          color: var(--color-body-charcoal);
          margin-bottom: 28px;
          max-width: 480px;
        }

        @media (min-width: 768px) {
          .hero-description {
            font-size: 1.25rem;
          }
        }

        /* 3 Features Row */
        .hero-features-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 34px;
          flex-wrap: wrap;
        }

        @media (min-width: 600px) {
          .hero-features-row {
            flex-wrap: nowrap;
            gap: 20px;
          }
        }

        .hero-feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          flex: 1;
          min-width: 0;
        }

        .hero-feature-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-forest-green);
          line-height: 1.3;
        }

        .hero-feature-divider {
          width: 1px;
          height: 38px;
          background-color: var(--color-natural-gold);
          opacity: 0.6;
          display: none;
        }

        @media (min-width: 600px) {
          .hero-feature-divider {
            display: block;
          }
        }

        /* CTA Group */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .btn-hero-order {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          padding: 14px 34px;
          border-radius: var(--radius-full);
          letter-spacing: 0.02em;
        }

        .btn-hero-discover {
          font-size: 1.12rem;
          cursor: pointer;
        }

        /* Right Visual */
        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 640px;
          display: flex;
          justify-content: center;
        }

        .hero-still-life-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 14px 28px rgba(6, 76, 45, 0.12));
          transition: transform var(--transition-normal);
        }

        .hero-still-life-img:hover {
          transform: scale(1.015);
        }

        @media (max-width: 991px) {
          .hero-visual {
            order: 2;
          }
          .hero-content {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
