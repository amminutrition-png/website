import React from 'react';
import { BotanicalLeafDecor } from '../Icons';

export default function OurGoalSection() {
  return (
    <section className="our-goal-section" aria-label="Our Goal is Simple">
      <div className="container">
        <div className="our-goal-card card-ivory">
          {/* Decorative Corner Leaves */}
          <div className="goal-leaf-right" aria-hidden="true">
            <BotanicalLeafDecor style={{ transform: 'scaleX(-1)' }} />
          </div>

          <div className="our-goal-grid">
            {/* Left Column: Family Lifestyle Photograph */}
            <div className="our-goal-visual">
              <img 
                src="/images/about/family-lifestyle.png" 
                alt="Indian family with parents and children happily enjoying a comforting malt drink at their home"
                className="family-lifestyle-img"
                width="640"
                height="420"
                loading="lazy"
              />
            </div>

            {/* Right Column: Goal Headline & Copy */}
            <div className="our-goal-content">
              <span className="goal-kicker">Our Goal is Simple</span>
              <h2 className="goal-main-title">
                Healthier Families<br />
                Happier Tomorrows
              </h2>
              <div className="gold-divider" style={{ width: '50px', margin: '14px 0 18px' }}></div>
              <p className="goal-description">
                “From our family to yours, we aim to offer good-quality food products at affordable prices, with care and honesty.”
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .our-goal-section {
          background-color: var(--color-warm-ivory);
          padding: 30px 0 50px;
        }

        .our-goal-card {
          position: relative;
          background-color: #FFFDF8;
          border: 1.5px solid var(--color-natural-gold);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(6, 76, 45, 0.08);
        }

        .goal-leaf-right {
          position: absolute;
          top: 14px;
          right: 14px;
          opacity: 0.6;
          pointer-events: none;
        }

        .our-goal-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
        }

        @media (min-width: 900px) {
          .our-goal-grid {
            grid-template-columns: 1.15fr 1fr;
          }
        }

        .our-goal-visual {
          width: 100%;
          height: 100%;
          min-height: 280px;
          overflow: hidden;
        }

        .family-lifestyle-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform var(--transition-normal);
        }

        .our-goal-card:hover .family-lifestyle-img {
          transform: scale(1.02);
        }

        .our-goal-content {
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (min-width: 900px) {
          .our-goal-content {
            padding: 44px 40px;
          }
        }

        .goal-kicker {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--color-natural-gold);
          font-weight: 700;
          letter-spacing: 0.03em;
          margin-bottom: 6px;
        }

        .goal-main-title {
          font-size: 2.3rem;
          line-height: 1.2;
          color: var(--color-forest-green);
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        @media (min-width: 768px) {
          .goal-main-title {
            font-size: 2.7rem;
          }
        }

        .goal-description {
          font-size: 1.12rem;
          line-height: 1.6;
          color: var(--color-body-charcoal);
        }
      `}</style>
    </section>
  );
}
