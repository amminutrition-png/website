import React from 'react';
import { BotanicalLeafDecor } from '../Icons';

export default function TraditionalProcessSection() {
  return (
    <section className="process-section" aria-label="The Traditional Process">
      {/* Decorative Botanical Leaves */}
      <div className="process-leaf-left" aria-hidden="true">
        <BotanicalLeafDecor />
      </div>
      <div className="process-leaf-right" aria-hidden="true">
        <BotanicalLeafDecor style={{ transform: 'scaleX(-1)' }} />
      </div>

      <div className="container process-container">
        {/* Section Header */}
        <div className="process-header">
          <h2 className="section-title">The Traditional Process</h2>
          <div className="gold-divider gold-divider-center" style={{ width: '56px' }}></div>
          <p className="section-subtitle">
            Inspired by the traditional Ammikal (stone grinder), a time-honoured part of food preparation.
          </p>
        </div>

        {/* 3 Visual Showcase Areas */}
        <div className="process-showcase-grid">
          {/* Main Large Ammikal Photograph */}
          <div className="process-large-box">
            <img 
              src="/images/about/ammikal-main.png" 
              alt="Traditional South Indian Ammikal granite stone grinding implement with natural grains"
              className="process-large-img"
              width="680"
              height="380"
              loading="lazy"
            />
          </div>

          {/* Right Side Two Supporting Process Photos */}
          <div className="process-side-group">
            {/* Step A: Grinding Close-up */}
            <div className="process-sub-item">
              <div className="process-sub-img-box">
                <img 
                  src="/images/about/process-grinding.png" 
                  alt="Traditional stone grinding process close-up"
                  className="process-sub-img"
                  width="320"
                  height="220"
                  loading="lazy"
                />
              </div>
              <p className="process-sub-caption">Traditional stone grinding</p>
            </div>

            {/* Step B: Fine Texture Bowl */}
            <div className="process-sub-item">
              <div className="process-sub-img-box">
                <img 
                  src="/images/about/process-texture.png" 
                  alt="A fine, even texture of natural malt powder in wooden bowl"
                  className="process-sub-img"
                  width="320"
                  height="220"
                  loading="lazy"
                />
              </div>
              <p className="process-sub-caption">A fine, even texture</p>
            </div>
          </div>
        </div>

        {/* 3 Bottom Information Cards */}
        <div className="process-cards-grid">
          {/* Card 1: Ingredients */}
          <div className="proc-info-card card-ivory">
            <h3 className="proc-card-heading">Carefully Selected Ingredients</h3>
            <div className="proc-card-img-box">
              <img 
                src="/images/about/card-ingredients.png" 
                alt="Carefully selected grains, pulses and nuts in wooden bowls"
                className="proc-card-img"
                width="340"
                height="190"
                loading="lazy"
              />
            </div>
            <p className="proc-card-desc">
              We choose ingredients thoughtfully, with quality and consistency in mind.
            </p>
          </div>

          {/* Card 2: Facility */}
          <div className="proc-info-card card-ivory">
            <h3 className="proc-card-heading">Hygienic & Modern Facility</h3>
            <div className="proc-card-img-box">
              <img 
                src="/images/about/card-facility.png" 
                alt="Clean food processing environment with staff following strict hygiene practices"
                className="proc-card-img"
                width="340"
                height="190"
                loading="lazy"
              />
            </div>
            <p className="proc-card-desc">
              Prepared and handled with care in a clean, organised environment.
            </p>
          </div>

          {/* Card 3: Packaging */}
          <div className="proc-info-card card-ivory">
            <h3 className="proc-card-heading">Packed with Care</h3>
            <div className="proc-card-img-box">
              <img 
                src="/images/about/card-packing.png" 
                alt="Ammi Nutrition Protein Malt gold pouches neatly packed"
                className="proc-card-img"
                width="340"
                height="190"
                loading="lazy"
              />
            </div>
            <p className="proc-card-desc">
              Packed neatly to help protect product freshness on its way to your home.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .process-section {
          position: relative;
          background-color: var(--color-warm-ivory);
          background: linear-gradient(180deg, #FFF9ED 0%, #FFF3DE 100%);
          padding: 60px 0 68px;
          overflow: hidden;
        }

        .process-leaf-left {
          position: absolute;
          top: 30px;
          left: 10px;
          opacity: 0.7;
          pointer-events: none;
        }

        .process-leaf-right {
          position: absolute;
          top: 30px;
          right: 10px;
          opacity: 0.7;
          pointer-events: none;
        }

        .process-container {
          position: relative;
          z-index: 2;
        }

        .process-header {
          text-align: center;
          margin-bottom: 40px;
        }

        /* Showcase Grid */
        .process-showcase-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 50px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .process-showcase-grid {
            grid-template-columns: 1.35fr 1fr;
            gap: 28px;
          }
        }

        .process-large-box {
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1.5px solid var(--color-natural-gold);
          box-shadow: 0 10px 28px rgba(6, 76, 45, 0.12);
        }

        .process-large-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .process-large-box:hover .process-large-img {
          transform: scale(1.02);
        }

        .process-side-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .process-sub-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
        }

        .process-sub-img-box {
          width: 100%;
          aspect-ratio: 16 / 11;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1.5px solid var(--color-natural-gold);
          box-shadow: 0 6px 18px rgba(6, 76, 45, 0.08);
        }

        .process-sub-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform var(--transition-normal);
        }

        .process-sub-item:hover .process-sub-img {
          transform: scale(1.04);
        }

        .process-sub-caption {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-forest-green);
          line-height: 1.25;
        }

        /* 3 Bottom Cards */
        .process-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .process-cards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        .proc-info-card {
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background-color: #FFFDF9;
        }

        .proc-card-heading {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: var(--color-forest-green);
          font-weight: 700;
          line-height: 1.25;
          text-align: center;
        }

        .proc-card-img-box {
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--color-border-subtle);
        }

        .proc-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform var(--transition-normal);
        }

        .proc-info-card:hover .proc-card-img {
          transform: scale(1.04);
        }

        .proc-card-desc {
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--color-body-charcoal);
          text-align: center;
        }
      `}</style>
    </section>
  );
}
