import React, { useEffect } from 'react';
import { policiesData } from '../data/policiesData';

export default function PolicyModal({ policyKey, onClose }) {
  useEffect(() => {
    if (policyKey) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [policyKey]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && policyKey) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [policyKey, onClose]);

  if (!policyKey || !policiesData[policyKey]) return null;

  const policy = policiesData[policyKey];

  return (
    <div className="overlay-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="policy-modal-title">
      <div 
        className="policy-modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button" 
          className="policy-modal-close" 
          onClick={onClose}
          aria-label="Close policy modal"
        >
          ✕
        </button>

        <div className="policy-modal-header">
          <h2 id="policy-modal-title" className="policy-modal-title">{policy.title}</h2>
          <div className="gold-divider" style={{ margin: '8px 0 12px' }}></div>
          <span className="policy-update-badge">Last Updated: {policy.lastUpdated}</span>
        </div>

        <div className="policy-modal-content">
          {policy.sections.map((sec, idx) => (
            <div key={idx} className="policy-section-item">
              <h3 className="policy-section-heading">{sec.heading}</h3>
              <p className="policy-section-text">{sec.content}</p>
            </div>
          ))}
        </div>

        <div className="policy-modal-footer">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>

      <style>{`
        .policy-modal-card {
          position: relative;
          width: 100%;
          max-width: 640px;
          max-height: 85vh;
          background-color: var(--color-warm-ivory);
          border-radius: var(--radius-xl);
          border: 1.5px solid var(--color-natural-gold);
          box-shadow: var(--shadow-modal);
          display: flex;
          flex-direction: column;
          animation: slideUp 240ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          overflow: hidden;
        }

        .policy-modal-close {
          position: absolute;
          top: 14px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--color-soft-cream);
          border: 1px solid var(--color-border-subtle);
          color: var(--color-forest-green);
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }

        .policy-modal-header {
          padding: 28px 28px 16px;
          border-bottom: 1px solid var(--color-border-subtle);
          background-color: var(--color-soft-cream);
        }

        .policy-modal-title {
          font-size: 1.75rem;
          color: var(--color-forest-green);
        }

        .policy-update-badge {
          font-size: 0.82rem;
          color: var(--color-natural-gold);
          font-weight: 600;
        }

        .policy-modal-content {
          padding: 24px 28px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .policy-section-heading {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--color-forest-green);
          margin-bottom: 6px;
        }

        .policy-section-text {
          font-size: 0.95rem;
          line-height: 1.55;
          color: var(--color-body-charcoal);
        }

        .policy-modal-footer {
          padding: 16px 28px;
          border-top: 1px solid var(--color-border-subtle);
          display: flex;
          justify-content: flex-end;
          background-color: var(--color-soft-cream);
        }
      `}</style>
    </div>
  );
}
