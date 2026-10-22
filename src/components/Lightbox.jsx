import React, { useEffect } from 'react';

export default function Lightbox({ isOpen, images, activeIndex, onSelectIndex, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectIndex((activeIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onSelectIndex((activeIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, images.length, onSelectIndex, onClose]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImg = images[activeIndex] || images[0];

  return (
    <div className="overlay-backdrop lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Product Image Lightbox">
      <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
          ✕
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button 
            type="button" 
            className="lightbox-arrow lightbox-prev"
            onClick={() => onSelectIndex((activeIndex - 1 + images.length) % images.length)}
            aria-label="Previous image"
          >
            ‹
          </button>
        )}

        {/* Main Lightbox Image */}
        <div className="lightbox-image-wrapper">
          <img 
            src={currentImg.src} 
            alt={currentImg.alt} 
            className="lightbox-img" 
          />
          <p className="lightbox-caption">{currentImg.label}</p>
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button 
            type="button" 
            className="lightbox-arrow lightbox-next"
            onClick={() => onSelectIndex((activeIndex + 1) % images.length)}
            aria-label="Next image"
          >
            ›
          </button>
        )}

        {/* Thumbnails row */}
        {images.length > 1 && (
          <div className="lightbox-thumbs">
            {images.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                className={`lightbox-thumb-btn ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => onSelectIndex(idx)}
                aria-label={`View ${img.label}`}
              >
                <img src={img.thumb || img.src} alt={img.label} width="48" height="48" />
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .lightbox-backdrop {
          background-color: rgba(6, 76, 45, 0.88);
          padding: 20px;
          z-index: 2000;
        }

        .lightbox-dialog {
          position: relative;
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close-btn {
          position: absolute;
          top: -46px;
          right: 0;
          color: #FFFFFF;
          font-size: 1.8rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          cursor: pointer;
        }

        .lightbox-image-wrapper {
          position: relative;
          max-height: 75vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img {
          max-height: 68vh;
          max-width: 90vw;
          object-fit: contain;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          background-color: #FFFDF9;
          padding: 12px;
        }

        .lightbox-caption {
          color: #FFF9ED;
          font-family: var(--font-serif);
          font-size: 1.15rem;
          margin-top: 12px;
          text-align: center;
        }

        .lightbox-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: var(--color-forest-green);
          font-size: 2.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
          transition: transform var(--transition-fast), background-color var(--transition-fast);
          z-index: 10;
        }

        .lightbox-prev {
          left: -20px;
        }

        .lightbox-next {
          right: -20px;
        }

        @media (max-width: 768px) {
          .lightbox-prev {
            left: 0;
          }
          .lightbox-next {
            right: 0;
          }
        }

        .lightbox-arrow:hover {
          background-color: #FFFFFF;
          transform: translateY(-50%) scale(1.08);
        }

        .lightbox-thumbs {
          display: flex;
          gap: 10px;
          margin-top: 16px;
        }

        .lightbox-thumb-btn {
          width: 54px;
          height: 54px;
          border-radius: 8px;
          border: 2px solid transparent;
          overflow: hidden;
          background: #FFFFFF;
          padding: 2px;
          cursor: pointer;
          transition: border-color var(--transition-fast);
        }

        .lightbox-thumb-btn.active {
          border-color: var(--color-natural-gold);
        }

        .lightbox-thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}
