import React from 'react';
import { SproutIcon, EyeVisionIcon } from '../Icons';

export default function MissionVisionSection() {
  return (
    <section className="mission-vision-section" aria-label="Our Mission and Vision">
      <div className="container">
        <div className="mission-vision-card card-ivory">
          {/* Column 1: Our Mission */}
          <div className="mv-col">
            <div className="mv-icon-circle">
              <SproutIcon size={28} color="#064C2D" />
            </div>
            <div className="mv-text-content">
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-copy">
                “To make good-quality food products accessible to families at affordable prices.”
              </p>
            </div>
          </div>

          {/* Central Gold Divider */}
          <div className="mv-divider" aria-hidden="true"></div>

          {/* Column 2: Our Vision */}
          <div className="mv-col">
            <div className="mv-icon-circle">
              <EyeVisionIcon size={28} color="#064C2D" />
            </div>
            <div className="mv-text-content">
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-copy">
                “To bring traditional food wisdom into everyday family life with care, quality, and value.”
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mission-vision-section {
          background-color: var(--color-warm-ivory);
          padding: 20px 0 50px;
        }

        .mission-vision-card {
          padding: 36px 40px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          background-color: #FFFDF8;
          border: 1.5px solid var(--color-natural-gold);
          border-radius: var(--radius-xl);
          box-shadow: 0 8px 24px rgba(6, 76, 45, 0.06);
        }

        @media (min-width: 860px) {
          .mission-vision-card {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            padding: 44px 48px;
          }
        }

        .mv-col {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          flex: 1;
        }

        .mv-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: var(--color-soft-cream);
          border: 1.5px solid var(--color-natural-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(212, 163, 65, 0.2);
        }

        .mv-text-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mv-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          color: var(--color-forest-green);
          font-weight: 700;
        }

        .mv-copy {
          font-size: 1.05rem;
          line-height: 1.55;
          color: var(--color-body-charcoal);
        }

        .mv-divider {
          width: 1px;
          height: 90px;
          background-color: var(--color-natural-gold);
          opacity: 0.6;
          display: none;
        }

        @media (min-width: 860px) {
          .mv-divider {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
