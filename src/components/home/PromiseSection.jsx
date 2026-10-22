import React from 'react';
import { 
  LeafIcon, 
  FlaskIcon, 
  FssaiSymbolIcon, 
  HygieneGearIcon, 
  ShieldCheckIcon,
  BotanicalLeafDecor 
} from '../Icons';

export default function PromiseSection() {
  const promises = [
    { id: 'natural', label: '100% Natural', icon: <LeafIcon size={26} color="#064C2D" /> },
    { id: 'preservatives', label: 'No Preservatives', icon: <FlaskIcon size={26} color="#064C2D" /> },
    { id: 'fssai', label: 'FSSAI Certified', icon: <FssaiSymbolIcon size={30} /> },
    { id: 'hygiene', label: 'Hygienically Processed', icon: <HygieneGearIcon size={26} color="#064C2D" /> },
    { id: 'quality', label: 'Quality Checked', icon: <ShieldCheckIcon size={26} color="#064C2D" /> }
  ];

  return (
    <section className="promise-section" aria-label="Our Promise of Purity">
      {/* Botanical Decorative Leaves */}
      <div className="promise-leaf-left" aria-hidden="true">
        <BotanicalLeafDecor />
      </div>
      <div className="promise-leaf-right" aria-hidden="true">
        <BotanicalLeafDecor style={{ transform: 'scaleX(-1)' }} />
      </div>

      <div className="container promise-container">
        <div className="promise-header">
          <h2 className="section-title">Our Promise of Purity</h2>
          <div className="gold-divider gold-divider-center" style={{ width: '48px' }}></div>
        </div>

        <div className="promise-grid">
          {promises.map((p, index) => (
            <React.Fragment key={p.id}>
              <div className="promise-item">
                <div className="promise-circle">
                  {p.icon}
                </div>
                <span className="promise-label">{p.label}</span>
              </div>
              {index < promises.length - 1 && (
                <div className="promise-divider" aria-hidden="true"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .promise-section {
          position: relative;
          background-color: var(--color-warm-ivory);
          background: linear-gradient(180deg, #FFF9ED 0%, #FFF3DD 100%);
          padding: 56px 0;
          overflow: hidden;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .promise-leaf-left {
          position: absolute;
          top: 10px;
          left: 10px;
          opacity: 0.65;
          pointer-events: none;
        }

        .promise-leaf-right {
          position: absolute;
          top: 10px;
          right: 10px;
          opacity: 0.65;
          pointer-events: none;
        }

        .promise-container {
          position: relative;
          z-index: 2;
        }

        .promise-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .promise-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px 16px;
          justify-items: center;
          align-items: center;
        }

        @media (max-width: 599px) {
          .promise-grid .promise-item:nth-child(9) {
            grid-column: span 2;
          }
        }

        @media (min-width: 860px) {
          .promise-grid {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
          }
        }

        .promise-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          flex: 1;
          min-width: 110px;
          transition: transform var(--transition-fast);
        }

        .promise-item:hover {
          transform: translateY(-3px);
        }

        .promise-circle {
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

        .promise-item:hover .promise-circle {
          border-color: var(--color-forest-green);
          box-shadow: 0 6px 18px rgba(6, 76, 45, 0.12);
          background-color: var(--color-soft-cream);
        }

        .promise-label {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-forest-green);
          line-height: 1.25;
        }

        .promise-divider {
          width: 1px;
          height: 52px;
          background-color: var(--color-natural-gold);
          opacity: 0.45;
          display: none;
        }

        @media (min-width: 860px) {
          .promise-divider {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
