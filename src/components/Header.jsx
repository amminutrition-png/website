import React, { useState, useEffect } from 'react';

export default function Header({ currentPath, onNavigate, onOpenOrder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, path, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (path === '/' && sectionId) {
      if (currentPath !== '/') {
        onNavigate('/');
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
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a 
          href="/" 
          className="brand-logo-link"
          onClick={(e) => handleNavClick(e, '/')}
          aria-label="Ammi Nutrition Home"
        >
          <img 
            src="/images/logo.png" 
            alt="Ammi Nutrition Logo" 
            className="brand-logo-img" 
            width="64"
            height="64"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <a 
                href="/" 
                className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '/')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/#product" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, '/', 'product')}
              >
                Product
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className={`nav-link ${currentPath === '/about' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '/about')}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/#reviews" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, '/', 'reviews')}
              >
                Reviews
              </a>
            </li>
            <li>
              <a 
                href="/#faqs" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, '/', 'faqs')}
              >
                FAQs
              </a>
            </li>
            <li>
              <a 
                href="/#contact" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, '/', 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right CTA Button */}
        <div className="header-actions">
          <button 
            type="button" 
            className="btn btn-primary btn-header-order"
            onClick={onOpenOrder}
            id="header-order-btn"
          >
            Order Now
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-header">
            <img src="/images/logo.png" alt="Ammi Nutrition" className="mobile-logo" width="48" height="48" />
            <button 
              type="button" 
              className="mobile-close-btn" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <ul className="mobile-nav-list">
            <li>
              <a 
                href="/" 
                className={`mobile-nav-link ${currentPath === '/' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '/')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/#product" 
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, '/', 'product')}
              >
                Product
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className={`mobile-nav-link ${currentPath === '/about' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '/about')}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/#reviews" 
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, '/', 'reviews')}
              >
                Reviews
              </a>
            </li>
            <li>
              <a 
                href="/#faqs" 
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, '/', 'faqs')}
              >
                FAQs
              </a>
            </li>
            <li>
              <a 
                href="/#contact" 
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, '/', 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-cta">
            <button 
              type="button" 
              className="btn btn-primary btn-block"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
            >
              Order Now →
            </button>
          </div>
        </div>
      </div>

      {/* Header CSS */}
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background-color: var(--color-warm-ivory);
          border-bottom: 1px solid var(--color-border-subtle);
          transition: background-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .header-scrolled {
          background-color: rgba(255, 249, 237, 0.96);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 4px 16px rgba(6, 76, 45, 0.06);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 74px;
        }

        .brand-logo-link {
          display: flex;
          align-items: center;
          transition: transform var(--transition-fast);
        }

        .brand-logo-link:hover {
          transform: scale(1.03);
        }

        .brand-logo-img {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
        }

        .desktop-nav {
          display: none;
        }

        @media (min-width: 900px) {
          .desktop-nav {
            display: block;
          }
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .nav-link {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          color: var(--color-body-charcoal);
          font-weight: 500;
          padding: 6px 2px;
          position: relative;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--color-forest-green);
        }

        .nav-link.active {
          color: var(--color-forest-green);
          font-weight: 700;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 2px;
          background-color: var(--color-forest-green);
          border-radius: 2px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-header-order {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: var(--radius-full);
          letter-spacing: 0.01em;
        }

        /* Mobile Hamburger */
        .mobile-menu-toggle {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 102;
        }

        @media (min-width: 900px) {
          .mobile-menu-toggle {
            display: none;
          }
        }

        .hamburger-bar {
          display: block;
          width: 100%;
          height: 2.5px;
          background-color: var(--color-forest-green);
          border-radius: 2px;
          transition: transform var(--transition-normal), opacity var(--transition-normal);
        }

        .mobile-menu-toggle.open .hamburger-bar:nth-child(1) {
          transform: translateY(8.5px) rotate(45deg);
        }

        .mobile-menu-toggle.open .hamburger-bar:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.open .hamburger-bar:nth-child(3) {
          transform: translateY(-8.5px) rotate(-45deg);
        }

        /* Mobile Nav Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(7, 61, 37, 0.5);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 200;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition-normal);
        }

        .mobile-nav-drawer.drawer-open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-nav-inner {
          position: absolute;
          top: 0;
          right: 0;
          width: 82%;
          max-width: 320px;
          height: 100%;
          background-color: var(--color-warm-ivory);
          box-shadow: -6px 0 24px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          padding: 24px 20px;
          transform: translateX(100%);
          transition: transform var(--transition-smooth);
        }

        .drawer-open .mobile-nav-inner {
          transform: translateX(0);
        }

        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .mobile-logo {
          border-radius: 50%;
        }

        .mobile-close-btn {
          font-size: 1.4rem;
          color: var(--color-forest-green);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--color-soft-cream);
        }

        .mobile-nav-list {
          list-style: none;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mobile-nav-link {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--color-body-charcoal);
          font-weight: 600;
          padding: 8px 12px;
          border-radius: 8px;
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background-color: var(--color-soft-cream);
          color: var(--color-forest-green);
        }

        .mobile-drawer-cta {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid var(--color-border-subtle);
        }

        .btn-block {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
