import React from 'react';
import { productData } from '../../data/productData';
import { BotanicalLeafDecor } from '../Icons';

export default function DeliveryJourneySection() {
  const stages = productData.factoryJourney;

  return (
    <section className="factory-section" aria-label="From Our Factory to Your Family">
      {/* Decorative Botanical Leaves */}
      <div className="factory-leaf-left" aria-hidden="true">
        <BotanicalLeafDecor />
      </div>
      <div className="factory-leaf-right" aria-hidden="true">
        <BotanicalLeafDecor style={{ transform: 'scaleX(-1)' }} />
      </div>

      <div className="container factory-container">
        {/* Section Header */}
        <div className="factory-header">
          <h2 className="section-title">From Our Factory to Your Family</h2>
          <p className="section-subtitle">A journey of trust, delivered to every corner of India</p>
          <div className="gold-divider gold-divider-center" style={{ width: '56px', margin: '12px auto 0' }}></div>
        </div>

        {/* 4-Stage Visual Journey */}
        <div className="factory-journey-row">
          {stages.map((stage, idx) => (
            <React.Fragment key={stage.step}>
              <div className="factory-stage-card">
                <div className="factory-stage-img-box">
                  <img 
                    src={stage.image} 
                    alt={stage.alt}
                    className="factory-stage-img"
                    width="320"
                    height="210"
                    loading="lazy"
                  />
                </div>
                <div className="factory-stage-caption-box">
                  <span className="stage-leaf-icon" aria-hidden="true">🍃</span>
                  <p className="factory-stage-caption">{stage.caption}</p>
                </div>
              </div>

              {/* Green Dashed Arrow between stages */}
              {idx < stages.length - 1 && (
                <div className="journey-arrow-box" aria-hidden="true">
                  <svg className="journey-arrow-svg" viewBox="0 0 48 24" fill="none">
                    <line x1="2" y1="12" x2="40" y2="12" stroke="#064C2D" strokeWidth="2.2" strokeDasharray="4 4" />
                    <polyline points="34,6 42,12 34,18" stroke="#064C2D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .factory-section {
          position: relative;
          background-color: var(--color-sage-green);
          background: linear-gradient(180deg, #EFF4DB 0%, #E6EFCB 100%);
          padding: 64px 0 60px;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .factory-leaf-left {
          position: absolute;
          top: 20px;
          left: 10px;
          opacity: 0.7;
          pointer-events: none;
        }

        .factory-leaf-right {
          position: absolute;
          top: 20px;
          right: 10px;
          opacity: 0.7;
          pointer-events: none;
        }

        @media (max-width: 600px) {
          .factory-leaf-left,
          .factory-leaf-right {
            display: none;
          }
        }

        .factory-container {
          position: relative;
          z-index: 2;
        }

        .factory-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .factory-journey-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
        }

        @media (min-width: 600px) and (max-width: 991px) {
          .factory-journey-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (min-width: 992px) {
          .factory-journey-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
          }
        }

        .factory-stage-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          flex: 1;
        }

        .factory-stage-img-box {
          width: 100%;
          max-width: 270px;
          aspect-ratio: 16 / 10.5;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 2px solid var(--color-natural-gold);
          box-shadow: 0 8px 22px rgba(6, 76, 45, 0.12);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .factory-stage-card:hover .factory-stage-img-box {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(6, 76, 45, 0.18);
        }

        .factory-stage-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .factory-stage-caption-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          max-width: 240px;
        }

        .stage-leaf-icon {
          font-size: 1.1rem;
          color: var(--color-forest-green);
          flex-shrink: 0;
        }

        .factory-stage-caption {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-forest-green);
          line-height: 1.35;
        }

        /* Connecting Dashed Arrows */
        .journey-arrow-box {
          display: none;
        }

        @media (min-width: 992px) {
          .journey-arrow-box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            margin-top: 50px;
            flex-shrink: 0;
          }

          .journey-arrow-svg {
            width: 44px;
            height: 24px;
          }
        }
      `}</style>
    </section>
  );
}
