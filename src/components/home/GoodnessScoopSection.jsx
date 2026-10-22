import React from 'react';
import { BowlIcon, LeafIcon, FamilyIcon, CupIcon, BotanicalLeafDecor } from '../Icons';

export default function GoodnessScoopSection() {
  const items = [
    { id: 1, label: 'Easy to Prepare', icon: <BowlIcon size={24} color="#064C2D" /> },
    { id: 2, label: 'Everyday Comfort', icon: <LeafIcon size={24} color="#064C2D" /> },
    { id: 3, label: 'Made for Family Moments', icon: <FamilyIcon size={24} color="#064C2D" /> },
    { id: 4, label: 'Enjoy Warm or Cool', icon: <CupIcon size={24} color="#064C2D" /> }
  ];

  return (
    <section className="goodness-section" aria-label="Goodness in Every Scoop">
      {/* Botanical Decorative Leaves */}
      <div className="goodness-leaf-left" aria-hidden="true">
        <BotanicalLeafDecor />
      </div>
      <div className="goodness-leaf-right" aria-hidden="true">
        <BotanicalLeafDecor style={{ transform: 'scaleX(-1)' }} />
      </div>

      <div className="container goodness-container">
        <h2 className="goodness-heading">Goodness in Every Scoop</h2>

        <div className="goodness-row">
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="goodness-item">
                <div className="goodness-icon-circle">
                  {item.icon}
                </div>
                <span className="goodness-label">{item.label}</span>
              </div>
              {index < items.length - 1 && (
                <div className="goodness-divider" aria-hidden="true"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .goodness-section {
          position: relative;
          background-color: var(--color-sage-green);
          padding: 44px 0;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          border-top: 1px solid rgba(212, 163, 65, 0.25);
          border-bottom: 1px solid rgba(212, 163, 65, 0.25);
        }

        .goodness-leaf-left {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.75;
          pointer-events: none;
        }

        .goodness-leaf-right {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.75;
          pointer-events: none;
        }

        @media (max-width: 600px) {
          .goodness-leaf-left,
          .goodness-leaf-right {
            display: none;
          }
        }

        .goodness-container {
          position: relative;
          z-index: 2;
        }

        .goodness-heading {
          text-align: center;
          font-size: 2.2rem;
          color: var(--color-forest-green);
          margin-bottom: 32px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        @media (max-width: 600px) {
          .goodness-heading {
            font-size: 1.85rem;
            margin-bottom: 24px;
          }
        }

        .goodness-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          align-items: center;
          justify-items: center;
        }

        @media (min-width: 768px) {
          .goodness-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
          }
        }

        .goodness-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          flex: 1;
        }

        .goodness-icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1.5px solid var(--color-forest-green);
          background-color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast), background-color var(--transition-fast);
        }

        .goodness-item:hover .goodness-icon-circle {
          transform: scale(1.08);
          background-color: #FFFFFF;
        }

        .goodness-label {
          font-family: var(--font-serif);
          font-size: 1.08rem;
          font-weight: 600;
          color: var(--color-forest-green);
          line-height: 1.3;
        }

        .goodness-divider {
          width: 1px;
          height: 48px;
          background-color: var(--color-natural-gold);
          opacity: 0.55;
          display: none;
        }

        @media (min-width: 768px) {
          .goodness-divider {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
