import React from 'react';

export default function CtaBannerSection({ onOpenOrder }) {
  return (
    <section className="cta-banner-section" aria-label="Order Ammi Protein Malt Banner">
      <div className="container">
        <div className="cta-banner-card">
          {/* Left Pouch & Food Still Life */}
          <div className="cta-banner-visual">
            <img 
              src="/images/cta/cta-pouch-grains.png" 
              alt="Ammi Nutrition Protein Malt gold pouch with grains, wheat and almonds"
              className="cta-banner-pouch-img"
              width="360"
              height="280"
              loading="lazy"
            />
          </div>

          {/* Center Headline */}
          <div className="cta-banner-text">
            <h2 className="cta-banner-title">
              Give Your Family the Goodness<br />
              of Traditional Nutrition
            </h2>
            <div className="gold-divider" style={{ width: '48px', margin: '14px 0 0' }}></div>
          </div>

          {/* Right Button */}
          <div className="cta-banner-action">
            <button 
              type="button" 
              className="btn btn-gold btn-banner-order"
              onClick={onOpenOrder}
              id="cta-banner-order-btn"
            >
              Order Now →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .cta-banner-section {
          background-color: var(--color-warm-ivory);
          padding: 30px 0 60px;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .cta-banner-card {
          background: linear-gradient(135deg, #073D25 0%, #064C2D 55%, #0B5C37 100%);
          border-radius: var(--radius-xl);
          padding: 24px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          box-shadow: 0 16px 40px rgba(6, 76, 45, 0.25);
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(212, 163, 65, 0.3);
        }

        @media (min-width: 992px) {
          .cta-banner-card {
            flex-direction: row;
            justify-content: space-between;
            padding: 20px 48px;
            gap: 32px;
          }
        }

        .cta-banner-visual {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cta-banner-pouch-img {
          max-height: 200px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4));
        }

        @media (min-width: 992px) {
          .cta-banner-pouch-img {
            max-height: 220px;
          }
        }

        .cta-banner-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        @media (min-width: 992px) {
          .cta-banner-text {
            align-items: flex-start;
            text-align: left;
          }
        }

        .cta-banner-title {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          color: #FFFFFF;
          line-height: 1.25;
          font-weight: 700;
        }

        @media (min-width: 768px) {
          .cta-banner-title {
            font-size: 2.2rem;
          }
        }

        .cta-banner-action {
          flex-shrink: 0;
        }

        .btn-banner-order {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          padding: 16px 36px;
          border-radius: var(--radius-full);
          white-space: nowrap;
          background-color: #F7EEDB;
          color: var(--color-forest-green);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }

        .btn-banner-order:hover {
          background-color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </section>
  );
}
