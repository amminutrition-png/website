import React from 'react';
import { LeafIcon, ShieldCheckIcon, BowlIcon, FamilyIcon, ScaleQualityIcon } from '../Icons';

export default function OurValuesSection() {
  const values = [
    { id: 1, label: "Purity", icon: <LeafIcon size={26} color="#064C2D" /> },
    { id: 2, label: "Quality", icon: <ShieldCheckIcon size={26} color="#064C2D" /> },
    { id: 3, label: "Tradition", icon: <BowlIcon size={26} color="#064C2D" /> },
    { id: 4, label: "Transparency", icon: <ScaleQualityIcon size={26} color="#064C2D" /> },
    { id: 5, label: "Customer First", icon: <FamilyIcon size={26} color="#064C2D" /> }
  ];

  return (
    <section className="about-values-section" aria-label="Our Core Brand Values">
      <div className="container">
        <div className="about-values-header">
          <h2 className="section-title">Our Values</h2>
          <div className="gold-divider gold-divider-center" style={{ width: '48px' }}></div>
        </div>

        <div className="about-values-grid">
          {values.map((val, idx) => (
            <React.Fragment key={val.id}>
              <div className="value-pillar-item">
                <div className="value-pillar-circle">
                  {val.icon}
                </div>
                <span className="value-pillar-label">{val.label}</span>
              </div>
              {idx < values.length - 1 && (
                <div className="value-pillar-divider" aria-hidden="true"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .about-values-section {
          background-color: var(--color-warm-ivory);
          padding: 40px 0 60px;
        }

        .about-values-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px 16px;
          justify-items: center;
          align-items: center;
        }

        @media (max-width: 599px) {
          .about-values-grid .value-pillar-item:nth-child(9) {
            grid-column: span 2;
          }
        }

        @media (min-width: 860px) {
          .about-values-grid {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
          }
        }

        .value-pillar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          flex: 1;
          transition: transform var(--transition-fast);
        }

        .value-pillar-item:hover {
          transform: translateY(-3px);
        }

        .value-pillar-circle {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 1.5px solid var(--color-natural-gold);
          background-color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(6, 76, 45, 0.05);
          transition: all var(--transition-fast);
        }

        .value-pillar-item:hover .value-pillar-circle {
          border-color: var(--color-forest-green);
          background-color: var(--color-soft-cream);
          box-shadow: 0 6px 18px rgba(6, 76, 45, 0.12);
        }

        .value-pillar-label {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-forest-green);
          line-height: 1.25;
        }

        .value-pillar-divider {
          width: 1px;
          height: 50px;
          background-color: var(--color-natural-gold);
          opacity: 0.45;
          display: none;
        }

        @media (min-width: 860px) {
          .value-pillar-divider {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
