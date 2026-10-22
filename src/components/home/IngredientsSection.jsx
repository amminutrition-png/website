import React from 'react';
import { productData } from '../../data/productData';

export default function IngredientsSection() {
  return (
    <section className="ingredients-section" id="ingredients" aria-label="Wholesome Ingredients">
      <div className="container ingredients-container">
        {/* Section Header */}
        <div className="ingredients-header">
          <h2 className="section-title">Wholesome Ingredients</h2>
          <div className="gold-divider gold-divider-center" style={{ width: '50px' }}></div>
          <p className="section-subtitle">
            Made with carefully selected natural ingredients
          </p>
        </div>

        {/* 6 Ingredient Items Row */}
        <div className="ingredients-grid">
          {productData.ingredients.map((item) => (
            <div key={item.id} className="ingredient-item">
              <div className="ingredient-img-box">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="ingredient-photo"
                  width="180"
                  height="130"
                  loading="lazy"
                />
              </div>
              <div className="ingredient-labels">
                <span className="ingredient-name">{item.name}</span>
                {item.subtitle && (
                  <span className="ingredient-sub">{item.subtitle}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ingredients-section {
          background-color: var(--color-warm-ivory);
          background: linear-gradient(180deg, #FFF9ED 0%, #FFF4DF 100%);
          padding: 60px 0;
          position: relative;
        }

        .ingredients-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px 16px;
        }

        @media (min-width: 900px) {
          .ingredients-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 20px;
          }
        }

        .ingredient-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          transition: transform var(--transition-fast);
        }

        .ingredient-item:hover {
          transform: translateY(-4px);
        }

        .ingredient-img-box {
          width: 100%;
          max-width: 160px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ingredient-photo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 6px 12px rgba(6, 76, 45, 0.08));
          transition: transform var(--transition-normal);
        }

        .ingredient-item:hover .ingredient-photo {
          transform: scale(1.05);
        }

        .ingredient-labels {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ingredient-name {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-forest-green);
          line-height: 1.25;
        }

        .ingredient-sub {
          font-size: 0.82rem;
          color: var(--color-body-muted);
          font-weight: 500;
          margin-top: 2px;
        }
      `}</style>
    </section>
  );
}
