import React, { useState } from 'react';
import { productData } from '../../data/productData';

export default function ProductSection({ quantity, setQuantity, onBuyNow, onOpenLightbox }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = productData.gallery;
  const currentImg = gallery[activeIndex] || gallery[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  };

  return (
    <section className="product-section" id="product" aria-label="Product Details and Purchase">
      <div className="container product-container">
        <div className="product-layout-grid">
          {/* Column A: Thumbnail Gallery (Vertical on Desktop, Horizontal on Mobile) */}
          <div className="product-thumb-column" role="tablist" aria-label="Product Image Views">
            {gallery.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={idx === activeIndex}
                className={`product-thumb-card ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View ${item.label}`}
              >
                <img 
                  src={item.thumb} 
                  alt={item.label}
                  className="thumb-card-img"
                  width="78"
                  height="78"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Column B: Large Main Product Display with Lightbox & Arrow Controls */}
          <div className="product-main-visual">
            <div className="main-image-card">
              <button 
                type="button" 
                className="image-zoom-trigger"
                onClick={() => onOpenLightbox(activeIndex)}
                aria-label="Click to enlarge product photograph"
              >
                <img 
                  src={currentImg.src} 
                  alt={currentImg.alt}
                  className="product-large-img"
                  width="460"
                  height="520"
                />
              </button>

              {/* Prev & Next Navigation Arrows */}
              {gallery.length > 1 && (
                <>
                  <button 
                    type="button" 
                    className="gallery-nav-btn btn-prev"
                    onClick={handlePrev}
                    aria-label="Previous product image"
                  >
                    ‹
                  </button>
                  <button 
                    type="button" 
                    className="gallery-nav-btn btn-next"
                    onClick={handleNext}
                    aria-label="Next product image"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Column C: Cream Product Purchase Card */}
          <div className="product-info-panel">
            <div className="product-info-card card-ivory">
              <h2 className="product-card-title">{productData.name}</h2>
              <p className="product-pack-size">{productData.packSize}</p>

              <p className="product-card-desc">
                {productData.shortDescription}
              </p>

              <div className="gold-divider" style={{ width: '48px', margin: '14px 0 20px' }}></div>

              {/* Elegant Pricing Showcase Card */}
              <div className="product-pricing-card" aria-label="Product Pricing and Delivery Breakdown">
                <div className="pricing-header">
                  <div className="pricing-main-rate">
                    <span className="price-currency">₹</span>
                    <span className="price-val">250</span>
                    <span className="price-unit">/ 500g pouch</span>
                  </div>
                  <div className="purity-badge">
                    <span className="purity-dot" aria-hidden="true"></span>
                    <span>100% Natural</span>
                  </div>
                </div>

                <div className="pricing-breakdown-box">
                  <div className="breakdown-item">
                    <span className="breakdown-name">
                      {quantity > 1 ? `500g Malt (${quantity} packs × ₹250)` : 'Protein Malt (500g pouch)'}
                    </span>
                    <span className="breakdown-amount">₹{quantity * 250}</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="breakdown-name">
                      <span className="breakdown-delivery-badge">🚚 Courier</span>
                      <span>Shipping Charges</span>
                    </span>
                    <span className="breakdown-amount">+ ₹50</span>
                  </div>
                  
                  <div className="breakdown-line"></div>
                  
                  <div className="breakdown-item breakdown-total-item">
                    <div className="total-title-group">
                      <span className="total-label">Total Payable</span>
                      <span className="total-subtext">Doorstep delivery across India</span>
                    </div>
                    <span className="total-highlight-price">₹{quantity * 250 + 50}</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="product-qty-row">
                <span className="qty-label-text">Select Quantity</span>
                <div className="qty-control" aria-label="Product Quantity Selector">
                  <button 
                    type="button" 
                    className="qty-btn"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="qty-val" aria-live="polite">{quantity}</span>
                  <button 
                    type="button" 
                    className="qty-btn"
                    onClick={() => setQuantity(q => q + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Primary Buy Now Action with Total */}
              <button 
                type="button" 
                className="btn btn-primary btn-product-buy"
                onClick={onBuyNow}
                id="product-buy-now-btn"
              >
                Buy Now • ₹{quantity * 250 + 50}
              </button>

              {/* Certified Lab Results Quick Anchor */}
              <a 
                href="#nutrition-facts" 
                className="product-lab-link"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('nutrition-facts');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                🔬 View Certified Lab Results & Nutritional Values →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .product-section {
          position: relative;
          background-color: var(--color-warm-ivory);
          background: linear-gradient(180deg, #FFF9ED 0%, #FAF3E4 100%);
          padding-top: 50px;
          padding-bottom: 50px;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .product-layout-grid {
          display: flex;
          flex-direction: column;
          gap: 28px;
          align-items: center;
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        @media (min-width: 900px) {
          .product-layout-grid {
            display: grid;
            grid-template-columns: 100px 1.25fr 1fr;
            gap: 36px;
            align-items: center;
          }
        }

        @media (min-width: 1100px) {
          .product-layout-grid {
            grid-template-columns: 110px 1.35fr 1fr;
            gap: 48px;
          }
        }

        /* Column A: Thumbnails */
        .product-thumb-column {
          display: flex;
          gap: 12px;
          order: 2;
          overflow-x: auto;
          max-width: 100%;
          padding: 4px;
        }

        @media (min-width: 900px) {
          .product-thumb-column {
            order: 1;
            flex-direction: column;
            overflow-x: visible;
          }
        }

        .product-thumb-card {
          width: 78px;
          height: 78px;
          border-radius: var(--radius-md);
          background-color: var(--color-white);
          border: 1.5px solid var(--color-border-subtle);
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }

        .product-thumb-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-natural-gold);
        }

        .product-thumb-card.active {
          border-color: var(--color-natural-gold);
          box-shadow: 0 0 0 2px var(--color-natural-gold), 0 4px 12px rgba(212, 163, 65, 0.25);
          background-color: #FFFDF7;
        }

        .thumb-card-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 6px;
        }

        /* Column B: Main Image */
        .product-main-visual {
          order: 1;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        @media (min-width: 900px) {
          .product-main-visual {
            order: 2;
          }
        }

        .main-image-card {
          position: relative;
          width: 100%;
          max-width: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-zoom-trigger {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          background: transparent;
          cursor: zoom-in;
        }

        .product-large-img {
          width: 100%;
          max-height: 480px;
          object-fit: contain;
          filter: drop-shadow(0 14px 28px rgba(6, 76, 45, 0.14));
          transition: transform var(--transition-normal);
        }

        .product-large-img:hover {
          transform: scale(1.02);
        }

        .gallery-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--color-border-subtle);
          color: var(--color-forest-green);
          font-size: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(6, 76, 45, 0.1);
          transition: all var(--transition-fast);
          z-index: 5;
        }

        .gallery-nav-btn:hover {
          background-color: #FFFFFF;
          border-color: var(--color-natural-gold);
          transform: translateY(-50%) scale(1.08);
        }

        .btn-prev {
          left: 4px;
        }

        .btn-next {
          right: 4px;
        }

        /* Column C: Information Card */
        .product-info-panel {
          order: 3;
          width: 100%;
          max-width: 440px;
        }

        .product-info-card {
          padding: 36px 32px;
        }

        @media (max-width: 600px) {
          .product-info-card {
            padding: 24px 20px;
          }
        }

        .product-card-title {
          font-size: 2.3rem;
          color: var(--color-forest-green);
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }

        .product-pack-size {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--color-forest-green);
          font-weight: 600;
          margin-bottom: 14px;
        }

        .product-card-desc {
          font-size: 1.05rem;
          color: var(--color-body-charcoal);
          line-height: 1.5;
        }

        /* Elegant Product Pricing Showcase */
        .product-pricing-card {
          background: linear-gradient(145deg, #FCFAF6 0%, #F5ECE0 100%);
          border: 1.5px solid #E4D5BE;
          border-radius: 16px;
          padding: 18px 20px;
          margin: 16px 0 20px;
          box-shadow: 0 8px 20px rgba(6, 76, 45, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8);
          position: relative;
          overflow: hidden;
        }

        .product-pricing-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #D69E2E 0%, #F4C469 50%, #D69E2E 100%);
        }

        .pricing-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 14px;
        }

        .pricing-main-rate {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .price-currency {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: #064C2D;
          line-height: 1;
        }

        .price-val {
          font-family: var(--font-serif);
          font-size: 2.35rem;
          font-weight: 800;
          color: #064C2D;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .price-unit {
          font-size: 0.92rem;
          font-weight: 600;
          color: #64746A;
          margin-left: 6px;
        }

        .purity-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #EBF3E6;
          color: #1F5529;
          border: 1px solid #CDE2C4;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .purity-dot {
          width: 7px;
          height: 7px;
          background-color: #2E7D32;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
        }

        /* Structured Breakdown Box */
        .pricing-breakdown-box {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #EAE0CE;
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: 0 2px 6px rgba(6, 76, 45, 0.03);
        }

        .breakdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.88rem;
          color: #4A5568;
        }

        .breakdown-name {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }

        .breakdown-delivery-badge {
          background: #F4EEDF;
          color: #7A5310;
          font-size: 0.74rem;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .breakdown-amount {
          font-weight: 600;
          color: #2D3748;
        }

        .breakdown-line {
          height: 1px;
          background: #E8DDCA;
          margin: 2px 0;
        }

        .breakdown-total-item {
          padding-top: 2px;
          color: #064C2D;
        }

        .total-title-group {
          display: flex;
          flex-direction: column;
        }

        .total-label {
          font-weight: 700;
          font-size: 0.98rem;
          color: #064C2D;
        }

        .total-subtext {
          font-size: 0.74rem;
          color: #6C7A70;
          font-weight: 500;
        }

        .total-highlight-price {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 800;
          color: #064C2D;
        }

        .product-qty-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .qty-label-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-forest-green);
        }

        .btn-product-buy {
          width: 100%;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          padding: 14px 20px;
          letter-spacing: 0.02em;
          border-radius: 12px;
          box-shadow: 0 8px 22px rgba(6, 76, 45, 0.28);
          transition: all 0.2s ease;
        }

        .btn-product-buy:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(6, 76, 45, 0.38);
        }

        .product-lab-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 14px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-forest-green);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color var(--transition-fast);
          cursor: pointer;
          text-align: center;
          width: 100%;
        }

        .product-lab-link:hover {
          color: var(--color-natural-gold);
        }
      `}</style>
    </section>
  );
}
