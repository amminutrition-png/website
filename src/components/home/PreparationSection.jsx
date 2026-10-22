import React from 'react';
import { productData } from '../../data/productData';

export default function PreparationSection() {
  return (
    <section className="prep-section" id="how-to-prepare" aria-label="How to Prepare">
      <div className="container prep-container">
        {/* Centered Heading & Subtitle */}
        <div className="prep-header">
          <h2 className="prep-title">How to Prepare</h2>
          <p className="prep-subtitle">A delicious malt drink in 5 simple steps</p>
        </div>

        {/* 5 Steps Grid (Arched Photo Cards) */}
        <div className="prep-steps-grid">
          {productData.prepSteps.map((step) => (
            <div key={step.step} className="prep-step-card">
              <div className="prep-step-img-box">
                <img 
                  src={step.image} 
                  alt={step.alt}
                  className="prep-step-img"
                  width="220"
                  height="220"
                  loading="lazy"
                />
                <div className="prep-step-badge" aria-label={`Step ${step.step}`}>
                  {step.step}
                </div>
              </div>
              <p className="prep-step-caption">{step.caption}</p>
            </div>
          ))}
        </div>

        {/* Centered Bottom Tip Bar */}
        <div className="prep-tip-container">
          <div className="prep-tip-bar" role="note">
            <span className="prep-tip-icon" aria-hidden="true">💡</span>
            <div className="prep-tip-divider" aria-hidden="true"></div>
            <p className="prep-tip-text">
              <strong>Tip:</strong> Remove from stove. You can add sugar, palm jaggery, honey, or salt to suit your taste!
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .prep-section {
          position: relative;
          background-color: var(--color-prep-dark);
          background: radial-gradient(circle at 80% 50%, #683416 0%, #4D250E 60%, #3B1B09 100%);
          padding: 64px 0 60px;
          color: #FFF9ED;
          overflow: hidden;
        }

        .prep-container {
          position: relative;
          z-index: 2;
        }

        .prep-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .prep-title {
          font-family: var(--font-serif);
          font-size: 2.6rem;
          color: #FFFFFF;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        @media (max-width: 600px) {
          .prep-title {
            font-size: 2rem;
          }
        }

        .prep-subtitle {
          font-size: 1.15rem;
          color: #E8D5B5;
          font-weight: 400;
        }

        /* 5 Steps Responsive Grid */
        .prep-steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          justify-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 480px) {
          .prep-steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (min-width: 768px) {
          .prep-steps-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        @media (min-width: 1080px) {
          .prep-steps-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
          }
        }

        .prep-step-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          width: 100%;
          max-width: 220px;
        }

        .prep-step-img-box {
          position: relative;
          width: 100%;
          max-width: 200px;
          aspect-ratio: 1 / 1;
          border-radius: 50% 50% var(--radius-md) var(--radius-md);
          overflow: visible;
        }

        .prep-step-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50% 50% var(--radius-md) var(--radius-md);
          border: 1.5px solid var(--color-natural-gold);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          transition: transform var(--transition-normal), border-color var(--transition-normal);
        }

        .prep-step-card:hover .prep-step-img {
          transform: translateY(-4px);
          border-color: #F8D98C;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.55);
        }

        .prep-step-badge {
          position: absolute;
          bottom: -8px;
          left: 12px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: var(--color-warm-ivory);
          color: var(--color-forest-green);
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--color-natural-gold);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          z-index: 2;
        }

        .prep-step-caption {
          font-size: 0.95rem;
          line-height: 1.45;
          color: #FFF2DD;
          font-weight: 500;
          margin: 0;
          max-width: 210px;
        }

        /* Tip Bar Container */
        .prep-tip-container {
          display: flex;
          justify-content: center;
          margin-top: 40px;
          padding: 0 16px;
        }

        .prep-tip-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: #FFF4DD;
          border: 1.5px solid var(--color-natural-gold);
          border-radius: var(--radius-full);
          padding: 12px 24px;
          color: var(--color-body-charcoal);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
          max-width: 680px;
        }

        @media (max-width: 600px) {
          .prep-tip-bar {
            border-radius: var(--radius-md);
            padding: 10px 16px;
          }
        }

        .prep-tip-icon {
          font-size: 1.35rem;
          flex-shrink: 0;
        }

        .prep-tip-divider {
          width: 1px;
          height: 20px;
          background-color: var(--color-natural-gold);
          opacity: 0.5;
        }

        .prep-tip-text {
          font-size: 0.92rem;
          color: var(--color-body-charcoal);
          line-height: 1.4;
          margin: 0;
        }

        .prep-tip-text strong {
          color: var(--color-prep-dark);
        }
      `}</style>
    </section>
  );
}
