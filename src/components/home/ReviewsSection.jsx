import React, { useState, useEffect, useRef, useCallback } from 'react';
import { reviewsList, REVIEWS_CONFIG } from '../../data/reviewsData';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const totalReviews = reviewsList.length;

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 700) {
        setCardsPerView(1);
      } else if (w < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  // Autoplay timer (every 3s when idle and not paused)
  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, REVIEWS_CONFIG.autoSlideIntervalMs || 3000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40; // minimum swipe distance
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setIsPaused(false);
  };

  // Build visible cards with wrap-around
  const visibleCards = [];
  for (let i = 0; i < cardsPerView; i++) {
    const idx = (currentIndex + i) % totalReviews;
    visibleCards.push({ ...reviewsList[idx], displayIndex: idx });
  }

  return (
    <section 
      className="reviews-section" 
      id="reviews" 
      aria-label="Customer Reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container reviews-container">
        {/* Section Header */}
        <div className="reviews-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="gold-divider gold-divider-center" style={{ width: '48px' }}></div>
          <p className="section-subtitle">Real stories from our community</p>
        </div>

        {/* Carousel Container with Desktop Arrow Controls */}
        <div className="carousel-wrapper">
          {/* Desktop Previous Button */}
          <button 
            type="button" 
            className="carousel-btn carousel-prev-btn"
            onClick={handlePrev}
            aria-label="Previous customer review"
          >
            ‹
          </button>

          {/* Cards Track */}
          <div 
            className="carousel-track"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer Reviews Carousel"
          >
            {visibleCards.map((review, i) => (
              <div 
                key={`${review.id}-${currentIndex}-${i}`} 
                className="review-card card-ivory"
                role="group"
                aria-roledescription="slide"
                aria-label={`Review ${review.displayIndex + 1} of ${totalReviews}`}
              >
                {/* Decorative quote mark */}
                <span className="quote-mark" aria-hidden="true">“</span>

                <div className="review-card-header">
                  <h3 className="review-author-name">{review.name}</h3>
                  <p className="review-author-loc">{review.location}</p>
                </div>

                {/* 5 Gold Stars */}
                <div className="review-stars-row" aria-label="5 out of 5 stars">
                  {'★★★★★'}
                </div>

                {/* Review Text */}
                <p className="review-quote-text">“{review.text}”</p>
              </div>
            ))}
          </div>

          {/* Desktop Next Button */}
          <button 
            type="button" 
            className="carousel-btn carousel-next-btn"
            onClick={handleNext}
            aria-label="Next customer review"
          >
            ›
          </button>
        </div>

        {/* Pagination Dots (Desktop / Tablet) */}
        <div className="carousel-indicators" aria-hidden="true">
          {Array.from({ length: Math.min(7, totalReviews) }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`indicator-dot ${currentIndex % 7 === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx * Math.floor(totalReviews / 7))}
              aria-label={`Go to slide group ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .reviews-section {
          background-color: var(--color-warm-ivory);
          background: linear-gradient(180deg, #FFF9ED 0%, #FFF4DF 100%);
          padding: 64px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .reviews-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        /* Desktop Arrow Buttons */
        .carousel-btn {
          display: none;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background-color: var(--color-white);
          border: 1.5px solid var(--color-natural-gold);
          color: var(--color-forest-green);
          font-size: 2rem;
          line-height: 1;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(6, 76, 45, 0.08);
          transition: all var(--transition-fast);
          z-index: 10;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .carousel-btn {
            display: flex;
          }
        }

        .carousel-btn:hover {
          background-color: var(--color-soft-cream);
          border-color: var(--color-forest-green);
          transform: scale(1.08);
        }

        .carousel-prev-btn {
          margin-right: 12px;
        }

        .carousel-next-btn {
          margin-left: 12px;
        }

        /* Carousel Track */
        .carousel-track {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          width: 100%;
          max-width: 1120px;
          padding: 8px 4px;
          touch-action: pan-y;
        }

        @media (min-width: 700px) {
          .carousel-track {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .carousel-track {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        /* Review Card */
        .review-card {
          position: relative;
          background-color: var(--color-white);
          border: 1.5px solid rgba(212, 163, 65, 0.45);
          border-radius: var(--radius-lg);
          padding: 32px 26px 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-height: 200px;
          box-shadow: 0 4px 18px rgba(6, 76, 45, 0.05);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .review-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(6, 76, 45, 0.1);
          border-color: var(--color-natural-gold);
        }

        .quote-mark {
          position: absolute;
          top: 16px;
          right: 22px;
          font-family: var(--font-serif);
          font-size: 3.5rem;
          color: rgba(212, 163, 65, 0.22);
          line-height: 1;
          pointer-events: none;
        }

        .review-card-header {
          display: flex;
          flex-direction: column;
        }

        .review-author-name {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-forest-green);
          line-height: 1.25;
        }

        .review-author-loc {
          font-size: 0.88rem;
          color: var(--color-body-muted);
          margin-top: 2px;
          font-weight: 500;
        }

        .review-stars-row {
          color: var(--color-star-gold);
          font-size: 1.25rem;
          letter-spacing: 2px;
        }

        .review-quote-text {
          font-size: 1rem;
          line-height: 1.55;
          color: var(--color-body-charcoal);
          font-style: italic;
          margin-top: 4px;
        }

        /* Indicators */
        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 28px;
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-border-subtle);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          padding: 0;
        }

        .indicator-dot.active {
          width: 24px;
          border-radius: 4px;
          background-color: var(--color-forest-green);
        }
      `}</style>
    </section>
  );
}
