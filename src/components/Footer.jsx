import React from 'react';
import { 
  BRAND_NAME, 
  BRAND_TAGLINE, 
  WHATSAPP_NUMBER, 
  CALL_PHONE, 
  INSTAGRAM_URL, 
  EMAIL_ADDRESS 
} from '../constants';
import { 
  WhatsAppIcon, 
  InstagramIcon, 
  MailIcon, 
  PhoneCallIcon,
  BotanicalLeafDecor 
} from './Icons';

export default function Footer({ onNavigate, onOpenPolicy }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, path, sectionId) => {
    e.preventDefault();
    if (sectionId) {
      if (window.location.pathname !== path) {
        onNavigate(path);
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" id="contact">
      {/* Subtle Top Gold Border */}
      <div className="footer-top-border"></div>

      <div className="container footer-container">
        {/* Decorative corner leaves */}
        <div className="footer-leaf-left" aria-hidden="true">
          <BotanicalLeafDecor />
        </div>
        <div className="footer-leaf-right" aria-hidden="true">
          <BotanicalLeafDecor style={{ transform: 'scaleX(-1)' }} />
        </div>

        <div className="footer-grid">
          {/* Column 1: Brand Logo & Tagline */}
          <div className="footer-col footer-col-brand">
            <a 
              href="/" 
              className="footer-logo-link"
              onClick={(e) => handleNavClick(e, '/')}
              aria-label="Ammi Nutrition"
            >
              <img 
                src="/images/logo.png" 
                alt="Ammi Nutrition Logo" 
                className="footer-logo-img"
                width="110"
                height="110"
                loading="lazy"
              />
            </a>
            <p className="footer-tagline">{BRAND_TAGLINE}</p>
            <p className="footer-location">Coimbatore, Tamil Nadu, India</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-gold-line"></div>
            <ul className="footer-links-list">
              <li>
                <a href="/" onClick={(e) => handleNavClick(e, '/')}>Home</a>
              </li>
              <li>
                <a href="/#product" onClick={(e) => handleNavClick(e, '/', 'product')}>Product</a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleNavClick(e, '/about')}>About Us</a>
              </li>
              <li>
                <a href="/#reviews" onClick={(e) => handleNavClick(e, '/', 'reviews')}>Reviews</a>
              </li>
              <li>
                <a href="/#faqs" onClick={(e) => handleNavClick(e, '/', 'faqs')}>FAQs</a>
              </li>
              <li>
                <a href="/#contact" onClick={(e) => handleNavClick(e, '/', 'contact')}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Policies */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Policies</h4>
            <div className="footer-gold-line"></div>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onOpenPolicy('shipping')}>
                  Shipping Policy
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onOpenPolicy('returns')}>
                  Returns & Refunds
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onOpenPolicy('privacy')}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onOpenPolicy('terms')}>
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div className="footer-col footer-col-connect">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-gold-line"></div>
            
            <div className="footer-social-icons">
              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-item"
                aria-label="Chat on WhatsApp with Ammi Nutrition at 9043218081"
              >
                <div className="social-icon-circle">
                  <WhatsAppIcon size={22} color="#064C2D" />
                </div>
                <span className="social-label">WhatsApp</span>
              </a>

              {/* Instagram */}
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-item"
                aria-label="Follow Ammi Nutrition on Instagram"
              >
                <div className="social-icon-circle">
                  <InstagramIcon size={22} color="#064C2D" />
                </div>
                <span className="social-label">Instagram</span>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${EMAIL_ADDRESS}`} 
                className="social-icon-item"
                aria-label={`Send email to ${EMAIL_ADDRESS}`}
              >
                <div className="social-icon-circle">
                  <MailIcon size={22} color="#064C2D" />
                </div>
                <span className="social-label">Email</span>
              </a>

              {/* Call */}
              <a 
                href={`tel:${CALL_PHONE}`} 
                className="social-icon-item"
                aria-label={`Call Ammi Nutrition at ${CALL_PHONE}`}
              >
                <div className="social-icon-circle">
                  <PhoneCallIcon size={22} color="#064C2D" />
                </div>
                <span className="social-label">Call</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Copyright */}
        <div className="footer-bottom">
          <p>© {currentYear} {BRAND_NAME}. All rights reserved.</p>
          <p className="footer-bottom-note">Natural Nutrition for Every Family • Crafted with Care</p>
        </div>
      </div>

      <style>{`
        .site-footer {
          position: relative;
          background-color: var(--color-warm-ivory);
          padding-top: 56px;
          padding-bottom: 32px;
          overflow: hidden;
        }

        .footer-top-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--color-natural-gold), transparent);
        }

        .footer-container {
          position: relative;
        }

        .footer-leaf-left {
          position: absolute;
          top: -20px;
          left: -10px;
          pointer-events: none;
          opacity: 0.6;
        }

        .footer-leaf-right {
          position: absolute;
          top: -20px;
          right: -10px;
          pointer-events: none;
          opacity: 0.6;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (min-width: 992px) {
          .footer-grid {
            grid-template-columns: 1.3fr 1fr 1fr 1.2fr;
            gap: 48px;
          }
        }

        .footer-col-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 639px) {
          .footer-col-brand {
            align-items: center;
            text-align: center;
          }
        }

        .footer-logo-img {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-fast);
        }

        .footer-logo-img:hover {
          transform: scale(1.04);
        }

        .footer-tagline {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--color-forest-green);
          font-weight: 700;
          margin-top: 14px;
        }

        .footer-location {
          font-size: 0.88rem;
          color: var(--color-body-muted);
          margin-top: 4px;
        }

        .footer-heading {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: var(--color-forest-green);
          font-weight: 700;
          margin-bottom: 8px;
        }

        .footer-gold-line {
          width: 38px;
          height: 2px;
          background-color: var(--color-natural-gold);
          border-radius: 2px;
          margin-bottom: 16px;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-list a, .footer-link-btn {
          font-size: 0.95rem;
          color: var(--color-body-charcoal);
          transition: color var(--transition-fast), transform var(--transition-fast);
          display: inline-block;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
        }

        .footer-links-list a:hover, .footer-link-btn:hover {
          color: var(--color-forest-green);
          transform: translateX(3px);
        }

        /* Social connect */
        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .social-icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          transition: transform var(--transition-fast);
        }

        .social-icon-item:hover {
          transform: translateY(-2px);
        }

        .social-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--color-white);
          border: 1.5px solid var(--color-border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(6, 76, 45, 0.05);
          transition: all var(--transition-fast);
        }

        .social-icon-item:hover .social-icon-circle {
          border-color: var(--color-natural-gold);
          background-color: var(--color-soft-cream);
          box-shadow: 0 4px 12px rgba(6, 76, 45, 0.12);
        }

        .social-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-forest-green);
        }

        .footer-bottom {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid var(--color-border-subtle);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          text-align: center;
          font-size: 0.88rem;
          color: var(--color-body-muted);
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
          }
        }
      `}</style>
    </footer>
  );
}
