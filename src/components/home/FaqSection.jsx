import React, { useState } from 'react';

export default function FaqSection({ onOpenOrder }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is Ammi Nutrition Protein Malt?",
      a: "Ammi Nutrition Protein Malt is a wholesome, traditional food mix crafted with natural grains, pulses, and nuts such as finger millet (ragi), whole wheat, green gram, soya, almonds, and aromatic green cardamom. It is formulated to be a comforting, nutritious addition to your family's daily routine."
    },
    {
      q: "How do I prepare the malt drink?",
      a: "Preparation is simple: take 1 glass of water (about 150 ml) or milk, mix with 25 g of Protein Malt powder, boil the mixture until a foam/froth appears in about 1–2 minutes, remove from stove, and enjoy with sugar or salt to suit your taste."
    },
    {
      q: "Who can enjoy Ammi Nutrition Protein Malt?",
      a: "It is designed as an everyday family nutrition drink, suitable for school-going children, busy adults, and elders looking for a comforting, natural beverage that feels homemade."
    },
    {
      q: "How does the ordering process work?",
      a: "Simply click 'Order Now' or 'Buy Now' anywhere on this site, select your quantity, fill in your delivery name, address, and mobile number, and click 'Continue to WhatsApp'. A pre-formatted order message will open directly in your WhatsApp chat with our team at 9043218081. You review and send the message, and we confirm availability, exact delivery charges, and dispatch details right in the chat."
    },
    {
      q: "Where is Ammi Nutrition based and how is delivery handled?",
      a: "Ammi Nutrition is based in Coimbatore, Tamil Nadu. We pack each 500g pouch in tamper-evident sealed packaging and dispatch via trusted courier partners to your doorstep across India."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faqs" aria-label="Frequently Asked Questions">
      <div className="container faq-container">
        <div className="faq-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="gold-divider gold-divider-center" style={{ width: '48px' }}></div>
          <p className="section-subtitle">Everything you need to know about Ammi Nutrition Protein Malt</p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-panel">
                    <p className="faq-answer-text">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-footer-help">
          <p>Have more questions? Chat with our team directly on WhatsApp.</p>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={onOpenOrder}
            style={{ marginTop: '12px' }}
          >
            Order Now via WhatsApp →
          </button>
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: var(--color-warm-ivory);
          padding: 60px 0;
          border-top: 1px solid var(--color-border-subtle);
        }

        .faq-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .faq-accordion-list {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-accordion-item {
          background-color: var(--color-white);
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .faq-accordion-item.open {
          border-color: var(--color-natural-gold);
          box-shadow: 0 4px 16px rgba(6, 76, 45, 0.06);
        }

        .faq-question-btn {
          width: 100%;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          background: transparent;
          border: none;
          cursor: pointer;
          gap: 16px;
        }

        .faq-question-text {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-forest-green);
          line-height: 1.3;
        }

        .faq-toggle-icon {
          font-size: 1.5rem;
          color: var(--color-natural-gold);
          font-weight: 700;
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--color-soft-cream);
        }

        .faq-answer-panel {
          padding: 0 24px 20px;
          border-top: 1px solid rgba(212, 163, 65, 0.15);
          background-color: var(--color-cream-card);
        }

        .faq-answer-text {
          font-size: 0.98rem;
          line-height: 1.6;
          color: var(--color-body-charcoal);
          padding-top: 14px;
        }

        .faq-footer-help {
          text-align: center;
          margin-top: 40px;
          font-size: 1.05rem;
          color: var(--color-body-muted);
        }
      `}</style>
    </section>
  );
}
