import React, { useState, useEffect, useRef } from 'react';
import { WHATSAPP_NUMBER, INDIAN_STATES, BRAND_TAGLINE } from '../constants';
import { WhatsAppIcon, BowlIcon, LeafIcon, SproutIcon, ScaleQualityIcon } from './Icons';

export default function OrderModal({ isOpen, onClose, initialQuantity = 1 }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    street: '',
    area: '',
    city: '',
    state: 'Tamil Nadu',
    pincode: '',
    landmark: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Sync quantity when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuantity(initialQuantity || 1);
      setErrors({});
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (firstInputRef.current) firstInputRef.current.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialQuantity]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.mobileNumber.replace(/[\s\-\+\(\)]/g, '');
    const phoneDigits = cleanPhone.startsWith('91') && cleanPhone.length === 12
      ? cleanPhone.slice(2)
      : cleanPhone.startsWith('0') && cleanPhone.length === 11
        ? cleanPhone.slice(1)
        : cleanPhone;

    if (!phoneDigits) {
      newErrors.mobileNumber = 'Please enter your mobile number';
    } else if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData.street.trim()) {
      newErrors.street = 'Please enter your house/flat number and street';
    }

    if (!formData.area.trim()) {
      newErrors.area = 'Please enter your area or locality';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city or town';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'Please select your state';
    }

    const cleanPin = formData.pincode.trim();
    if (!cleanPin) {
      newErrors.pincode = 'Please enter your 6-digit PIN code';
    } else if (!/^\d{6}$/.test(cleanPin)) {
      newErrors.pincode = 'PIN code must be exactly 6 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setSubmitting(true);

    const landmarkLine = formData.landmark.trim()
      ? `\nLandmark/Instructions: ${formData.landmark.trim()}`
      : '';

    const subtotal = quantity * 250;
    const shipping = 50;
    const grandTotal = subtotal + shipping;

    const message = `Hello Ammi Nutrition! I would like to place an order.

*ORDER DETAILS*
Product: Ammi Nutrition Protein Malt
Pack Size: 500 g pouch
Quantity: ${quantity}
Price: ₹250 × ${quantity} = ₹${subtotal}
Shipping Charges: ₹${shipping}
*Total Amount Payable: ₹${grandTotal}*

*CUSTOMER DETAILS*
Full Name: ${formData.fullName.trim()}
Mobile Number: ${formData.mobileNumber.trim()}

*DELIVERY ADDRESS*
House/Flat and Street: ${formData.street.trim()}
Area/Locality: ${formData.area.trim()}
City/Town: ${formData.city.trim()}
State: ${formData.state.trim()}
PIN Code: ${formData.pincode.trim()}${landmarkLine}

Please confirm the order and share payment and dispatch details.

Thank you!`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 500);
  };

  return (
    <div className="order-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
      <div 
        className="order-modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {/* Close Button */}
        <button 
          type="button" 
          className="order-modal-close-btn"
          onClick={onClose}
          aria-label="Close order form"
        >
          ✕
        </button>

        <div className="order-modal-layout">
          {/* Left Column: Brand & Product Showcase (Desktop/Large Tablet) */}
          <aside className="order-modal-aside">
            <div className="aside-brand-header">
              <img 
                src="/images/logo.png" 
                alt="Ammi Nutrition Logo" 
                className="aside-brand-logo"
                width="64"
                height="64"
              />
              <div className="aside-brand-titles">
                <span className="aside-brand-name">Ammi Nutrition</span>
                <span className="aside-brand-tagline">{BRAND_TAGLINE}</span>
              </div>
            </div>

            <div className="aside-showcase">
              <h3 className="aside-showcase-title">Nutritious Goodness for Your Family</h3>
              <p className="aside-showcase-desc">
                Traditional protein malt made with carefully selected whole grains and pulses.
              </p>

              <div className="aside-pouch-box">
                <img 
                  src="/product images/main-pouch.png" 
                  alt="Ammi Nutrition Protein Malt 500g pouch"
                  className="aside-pouch-img"
                  width="260"
                  height="310"
                />
              </div>

              {/* Trust Badges */}
              <div className="aside-features-grid">
                <div className="aside-feat-card">
                  <span className="aside-feat-icon"><LeafIcon size={16} color="#064C2D" /></span>
                  <span>100% Natural Grains</span>
                </div>
                <div className="aside-feat-card">
                  <span className="aside-feat-icon"><BowlIcon size={16} color="#064C2D" /></span>
                  <span>Traditional Goodness</span>
                </div>
                <div className="aside-feat-card">
                  <span className="aside-feat-icon"><ScaleQualityIcon size={16} color="#064C2D" /></span>
                  <span>FSSAI Certified</span>
                </div>
                <div className="aside-feat-card">
                  <span className="aside-feat-icon"><SproutIcon size={16} color="#064C2D" /></span>
                  <span>Hygienically Packed</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Order Form Content */}
          <div className="order-modal-main">
            {/* Tablet/Mobile Header Banner */}
            <div className="compact-brand-banner">
              <img 
                src="/images/logo.png" 
                alt="Ammi Nutrition Logo" 
                className="compact-brand-logo"
                width="46"
                height="46"
              />
              <div className="compact-brand-text">
                <span className="compact-brand-name">Ammi Nutrition</span>
                <span className="compact-brand-tagline">{BRAND_TAGLINE}</span>
              </div>
            </div>

            {/* Form Title */}
            <div className="form-header-area">
              <h2 id="order-modal-title" className="form-heading">Place Your Order</h2>
              <div className="form-gold-divider"></div>
              <p className="form-intro-desc">
                Fill in your delivery address below to continue to WhatsApp. Our team will assist with confirmation and courier dispatch.
              </p>
            </div>

            {/* Product Summary Card */}
            <div className="order-product-card">
              <div className="order-prod-thumb">
                <img 
                  src="/product images/front-pouch.png" 
                  alt="Ammi Nutrition Protein Malt 500g" 
                  className="order-prod-img"
                  width="52"
                  height="62"
                />
              </div>
              <div className="order-prod-details">
                <h4 className="order-prod-title">Ammi Nutrition Protein Malt</h4>
                <div className="order-prod-badge-row">
                  <span className="order-pack-tag">500 g pouch</span>
                  <span className="order-pure-tag">100% Natural</span>
                </div>
              </div>
              <div className="order-qty-stepper">
                <span className="qty-label-text">Qty</span>
                <div className="qty-button-group">
                  <button 
                    type="button" 
                    className="qty-step-btn"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="qty-number-display" aria-live="polite">{quantity}</span>
                  <button 
                    type="button" 
                    className="qty-step-btn"
                    onClick={() => setQuantity(q => q + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Elegant Order Price Breakdown */}
            <div className="modal-price-breakdown-box" aria-label="Order cost breakdown">
              <div className="modal-price-row">
                <span className="modal-price-label">
                  {quantity > 1 ? `500g Malt (${quantity} packs × ₹250)` : 'Protein Malt (500g pouch)'}
                </span>
                <span className="modal-price-num">₹{quantity * 250}</span>
              </div>
              <div className="modal-price-row">
                <span className="modal-price-label">
                  <span className="modal-shipping-tag">🚚 Courier</span>
                  <span>Standard Shipping Charges</span>
                </span>
                <span className="modal-price-num">+ ₹50</span>
              </div>
              <div className="modal-price-divider"></div>
              <div className="modal-price-row modal-price-total-row">
                <div className="modal-total-titles">
                  <span className="modal-total-text">Total Payable</span>
                  <span className="modal-total-sub">Includes doorstep shipping across India</span>
                </div>
                <span className="modal-total-num">₹{quantity * 250 + 50}</span>
              </div>
            </div>

            {/* Customer Details & Address Form */}
            <form onSubmit={handleSubmit} className="order-input-form" noValidate>
              {/* Row 1: Full Name */}
              <div className="field-group">
                <label htmlFor="order-fullname" className="field-label">
                  Full Name <span className="field-required">*</span>
                </label>
                <input
                  type="text"
                  id="order-fullname"
                  name="fullName"
                  ref={firstInputRef}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`field-input ${errors.fullName ? 'field-error' : ''}`}
                  autoComplete="name"
                />
                {errors.fullName && <p className="field-error-msg">{errors.fullName}</p>}
              </div>

              {/* Row 2: Mobile Number */}
              <div className="field-group">
                <label htmlFor="order-mobile" className="field-label">
                  Mobile Number (WhatsApp) <span className="field-required">*</span>
                </label>
                <div className="phone-input-wrapper">
                  <span className="phone-prefix">+91</span>
                  <input
                    type="tel"
                    id="order-mobile"
                    name="mobileNumber"
                    maxLength="10"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    className={`field-input phone-field ${errors.mobileNumber ? 'field-error' : ''}`}
                    autoComplete="tel-national"
                  />
                </div>
                {errors.mobileNumber && <p className="field-error-msg">{errors.mobileNumber}</p>}
              </div>

              {/* Row 3: Street Address */}
              <div className="field-group">
                <label htmlFor="order-street" className="field-label">
                  House / Flat Number and Street <span className="field-required">*</span>
                </label>
                <input
                  type="text"
                  id="order-street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Door/Flat No., Building name, Street name"
                  className={`field-input ${errors.street ? 'field-error' : ''}`}
                  autoComplete="street-address"
                />
                {errors.street && <p className="field-error-msg">{errors.street}</p>}
              </div>

              {/* Row 4: Area & City (2-column on tablet & desktop) */}
              <div className="fields-grid-2">
                <div className="field-group">
                  <label htmlFor="order-area" className="field-label">
                    Area / Locality <span className="field-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="order-area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Enter area or locality"
                    className={`field-input ${errors.area ? 'field-error' : ''}`}
                  />
                  {errors.area && <p className="field-error-msg">{errors.area}</p>}
                </div>

                <div className="field-group">
                  <label htmlFor="order-city" className="field-label">
                    City / Town <span className="field-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="order-city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city or town"
                    className={`field-input ${errors.city ? 'field-error' : ''}`}
                    autoComplete="address-level2"
                  />
                  {errors.city && <p className="field-error-msg">{errors.city}</p>}
                </div>
              </div>

              {/* Row 5: State & PIN Code (2-column on tablet & desktop) */}
              <div className="fields-grid-2">
                <div className="field-group">
                  <label htmlFor="order-state" className="field-label">
                    State <span className="field-required">*</span>
                  </label>
                  <select
                    id="order-state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`field-input field-select ${errors.state ? 'field-error' : ''}`}
                    autoComplete="address-level1"
                  >
                    {INDIAN_STATES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.state && <p className="field-error-msg">{errors.state}</p>}
                </div>

                <div className="field-group">
                  <label htmlFor="order-pincode" className="field-label">
                    6-Digit PIN Code <span className="field-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="order-pincode"
                    name="pincode"
                    maxLength="6"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6-digit PIN code"
                    className={`field-input ${errors.pincode ? 'field-error' : ''}`}
                    autoComplete="postal-code"
                  />
                  {errors.pincode && <p className="field-error-msg">{errors.pincode}</p>}
                </div>
              </div>

              {/* Row 6: Landmark (Optional) */}
              <div className="field-group">
                <label htmlFor="order-landmark" className="field-label">
                  Landmark / Delivery Instructions <span className="field-optional">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="order-landmark"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="E.g. Near bus stop, temple, school, apartment landmark"
                  className="field-input"
                />
              </div>

              {/* Submit CTA Area */}
              <div className="form-submit-area">
                <button 
                  type="submit" 
                  className="order-whatsapp-submit-btn"
                  disabled={submitting}
                  id="modal-submit-whatsapp-btn"
                >
                  <WhatsAppIcon size={24} color="#FFFFFF" />
                  <span className="submit-btn-text">
                    {submitting ? 'Connecting to WhatsApp...' : `Continue to WhatsApp • Total ₹${quantity * 250 + 50} →`}
                  </span>
                </button>

                <div className="order-security-note">
                  <span className="security-icon" aria-hidden="true">🔒</span>
                  <span>We keep your information safe. You will be redirected to WhatsApp to confirm details with our official support team.</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        /* Backdrop */
        .order-modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(6, 40, 24, 0.72);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 16px;
          overflow-y: auto;
          animation: modalFadeIn 220ms ease-out forwards;
        }

        @media (max-height: 850px) {
          .order-modal-backdrop {
            align-items: flex-start;
          }
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Modal Dialog Box */
        .order-modal-dialog {
          position: relative;
          width: 100%;
          max-width: 960px;
          height: 88vh;
          max-height: 840px;
          min-height: 520px;
          background-color: #FFFDF9;
          border-radius: 20px;
          border: 1.5px solid #D69E2E;
          box-shadow: 0 24px 60px rgba(6, 40, 24, 0.32);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: modalPopUp 260ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (max-width: 899px) {
          .order-modal-dialog {
            height: auto;
            max-height: 92vh;
            min-height: 0;
          }
        }

        @keyframes modalPopUp {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Close Button */
        .order-modal-close-btn {
          position: absolute;
          top: 14px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #F4EAD3;
          border: 1px solid #E2D3B8;
          color: #064C2D;
          font-size: 1.15rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 30;
          transition: all 0.18s ease;
        }

        .order-modal-close-btn:hover {
          background-color: #E6D4B2;
          transform: rotate(90deg);
        }

        /* Layout Grid */
        .order-modal-layout {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          height: 100%;
          overflow-y: auto;
        }

        @media (min-width: 900px) {
          .order-modal-layout {
            display: grid;
            grid-template-columns: 360px 1fr;
            grid-template-rows: 100%;
            flex: 1;
            min-height: 0;
            height: 100%;
            overflow: hidden;
          }
        }

        /* Left Column (Desktop / Wide Tablet) */
        .order-modal-aside {
          display: none;
          background: linear-gradient(180deg, #F9F3E5 0%, #F1E5CD 100%);
          padding: 30px 24px;
          border-right: 1.5px solid #E4D8C3;
          flex-direction: column;
          justify-content: space-between;
          overflow-y: auto;
          min-height: 0;
          height: 100%;
        }

        @media (min-width: 900px) {
          .order-modal-aside {
            display: flex;
          }
        }

        .aside-brand-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .aside-brand-logo {
          border-radius: 50%;
          border: 1.5px solid #D69E2E;
          background: #FFFFFF;
          padding: 2px;
          box-shadow: 0 4px 12px rgba(6, 76, 45, 0.08);
        }

        .aside-brand-titles {
          display: flex;
          flex-direction: column;
        }

        .aside-brand-name {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: #064C2D;
          line-height: 1.2;
        }

        .aside-brand-tagline {
          font-size: 0.82rem;
          color: #555555;
          font-weight: 500;
        }

        .aside-showcase {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .aside-showcase-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: #064C2D;
          line-height: 1.3;
          margin-bottom: 6px;
        }

        .aside-showcase-desc {
          font-size: 0.88rem;
          color: #4A4A4A;
          line-height: 1.45;
          margin-bottom: 12px;
        }

        .aside-pouch-box {
          display: flex;
          justify-content: center;
          margin: 8px 0 16px;
        }

        .aside-pouch-img {
          max-height: 220px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 12px 24px rgba(6, 76, 45, 0.18));
          transition: transform 0.3s ease;
        }

        .aside-pouch-box:hover .aside-pouch-img {
          transform: scale(1.03);
        }

        .aside-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          width: 100%;
          background: rgba(255, 255, 255, 0.75);
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #E2D3B8;
        }

        .aside-feat-card {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #064C2D;
          text-align: left;
        }

        .aside-feat-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #EFF4DB;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Right Column (Main Form Container) */
        .order-modal-main {
          background-color: #FFFDF9;
          padding: 28px 24px 36px;
          overflow-y: auto;
          min-height: 0;
          height: 100%;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        @media (min-width: 600px) {
          .order-modal-main {
            padding: 34px 34px 40px;
          }
        }

        /* Visible and elegant custom scrollbar */
        .order-modal-main::-webkit-scrollbar {
          width: 8px;
        }

        .order-modal-main::-webkit-scrollbar-track {
          background: #F7EFE1;
          border-radius: 4px;
        }

        .order-modal-main::-webkit-scrollbar-thumb {
          background: #D2C0A2;
          border-radius: 4px;
        }

        .order-modal-main::-webkit-scrollbar-thumb:hover {
          background: #064C2D;
        }

        /* Compact Brand Banner (Mobile & Tablet) */
        .compact-brand-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 16px;
          margin-bottom: 18px;
          border-bottom: 1px solid #EBE1CC;
        }

        @media (min-width: 900px) {
          .compact-brand-banner {
            display: none;
          }
        }

        .compact-brand-logo {
          border-radius: 50%;
          border: 1.5px solid #D69E2E;
          background: #FFFFFF;
          padding: 2px;
          flex-shrink: 0;
        }

        .compact-brand-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .compact-brand-name {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #064C2D;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .compact-brand-tagline {
          font-size: 0.82rem;
          color: #666666;
          font-weight: 500;
          line-height: 1.2;
        }

        /* Form Header */
        .form-header-area {
          margin-bottom: 20px;
        }

        .form-heading {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          color: #064C2D;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 6px 0;
        }

        @media (min-width: 600px) {
          .form-heading {
            font-size: 2.1rem;
          }
        }

        .form-gold-divider {
          width: 50px;
          height: 3px;
          background: #D69E2E;
          border-radius: 2px;
          margin-bottom: 10px;
        }

        .form-intro-desc {
          font-size: 0.92rem;
          color: #555555;
          line-height: 1.45;
          margin: 0;
        }

        /* Order Product Summary Card */
        .order-product-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FDF9EE;
          border: 1.5px solid #E2D3B8;
          border-radius: 14px;
          padding: 12px 16px;
          margin-bottom: 12px;
          gap: 12px;
          box-shadow: 0 4px 14px rgba(6, 76, 45, 0.05);
        }

        .order-prod-thumb {
          width: 48px;
          height: 58px;
          border-radius: 8px;
          background: #FFFFFF;
          border: 1px solid #E8DCBE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .order-prod-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .order-prod-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .order-prod-title {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 700;
          color: #064C2D;
          margin: 0;
          line-height: 1.25;
        }

        .order-prod-badge-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .order-pack-tag {
          font-size: 0.78rem;
          font-weight: 700;
          color: #8C6207;
          background: #FFF3D6;
          padding: 2px 8px;
          border-radius: 6px;
          border: 1px solid #E8CD8A;
        }

        .order-pure-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: #064C2D;
          background: #E8F2E2;
          padding: 2px 8px;
          border-radius: 6px;
        }

        /* Quantity Stepper */
        .order-qty-stepper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
        }

        .qty-label-text {
          font-size: 0.72rem;
          font-weight: 600;
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .qty-button-group {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1.5px solid #D69E2E;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .qty-step-btn {
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          color: #064C2D;
          font-size: 1.15rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .qty-step-btn:hover:not(:disabled) {
          background-color: #F4EAD3;
        }

        .qty-step-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .qty-number-display {
          min-width: 28px;
          text-align: center;
          font-size: 1rem;
          font-weight: 700;
          color: #064C2D;
        }

        /* Modal Price Breakdown Card */
        .modal-price-breakdown-box {
          background: linear-gradient(145deg, #FCFAF6 0%, #F5EDE0 100%);
          border: 1.5px solid #E2D3B8;
          border-radius: 14px;
          padding: 14px 18px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 4px 12px rgba(6, 76, 45, 0.04);
        }

        .modal-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.88rem;
          color: #4A5568;
        }

        .modal-price-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }

        .modal-shipping-tag {
          background: #F4EEDF;
          color: #7A5310;
          font-size: 0.74rem;
          font-weight: 600;
          padding: 2px 7px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .modal-price-num {
          font-weight: 600;
          color: #2D3748;
        }

        .modal-price-divider {
          height: 1px;
          background: #E4D7C0;
          margin: 1px 0;
        }

        .modal-price-total-row {
          padding-top: 2px;
          color: #064C2D;
        }

        .modal-total-titles {
          display: flex;
          flex-direction: column;
        }

        .modal-total-text {
          font-weight: 700;
          font-size: 0.98rem;
          color: #064C2D;
        }

        .modal-total-sub {
          font-size: 0.74rem;
          color: #6C7A70;
          font-weight: 500;
        }

        .modal-total-num {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 800;
          color: #064C2D;
        }

        /* Form Layout */
        .order-input-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .fields-grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        @media (min-width: 600px) {
          .fields-grid-2 {
            grid-template-columns: 1fr 1fr;
          }
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
        }

        .field-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #064C2D;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .field-required {
          color: #D32F2F;
          font-weight: 700;
        }

        .field-optional {
          font-size: 0.78rem;
          font-weight: 400;
          color: #777777;
        }

        /* Inputs & Selects */
        .field-input {
          width: 100%;
          height: 48px;
          padding: 0 14px;
          background-color: #FFFFFF;
          border: 1.5px solid #D8CBB2;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.95rem;
          color: #2D3748;
          box-sizing: border-box;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease;
        }

        .field-input:focus {
          outline: none;
          border-color: #064C2D;
          box-shadow: 0 0 0 3.5px rgba(6, 76, 45, 0.14);
          background-color: #FFFFFF;
        }

        .field-input.field-error {
          border-color: #D32F2F;
          background-color: #FFF9F9;
        }

        .field-input.field-error:focus {
          box-shadow: 0 0 0 3.5px rgba(211, 47, 47, 0.14);
        }

        .field-select {
          cursor: pointer;
          appearance: auto;
          background-color: #FFFFFF;
        }

        /* Phone Input with +91 Prefix */
        .phone-input-wrapper {
          display: flex;
          align-items: center;
          width: 100%;
          border: 1.5px solid #D8CBB2;
          border-radius: 10px;
          background-color: #FFFFFF;
          overflow: hidden;
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }

        .phone-input-wrapper:focus-within {
          border-color: #064C2D;
          box-shadow: 0 0 0 3.5px rgba(6, 76, 45, 0.14);
        }

        .phone-prefix {
          padding: 0 12px 0 14px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #064C2D;
          background-color: #F8F3E8;
          height: 48px;
          display: flex;
          align-items: center;
          border-right: 1px solid #D8CBB2;
          user-select: none;
        }

        .phone-field {
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          height: 46px;
        }

        .field-error-msg {
          font-size: 0.78rem;
          color: #D32F2F;
          font-weight: 600;
          margin: 2px 0 0 0;
        }

        /* Submit Area */
        .form-submit-area {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .order-whatsapp-submit-btn {
          width: 100%;
          height: 54px;
          background: linear-gradient(135deg, #25D366 0%, #1EBE5D 100%);
          color: #FFFFFF;
          border: none;
          border-radius: 12px;
          font-family: inherit;
          font-size: 1.08rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.32);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .order-whatsapp-submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #22C55E 0%, #16A34A 100%);
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(37, 211, 102, 0.42);
        }

        .order-whatsapp-submit-btn:disabled {
          opacity: 0.7;
          cursor: wait;
        }

        .order-security-note {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.8rem;
          color: #555555;
          line-height: 1.4;
          text-align: center;
          justify-content: center;
          padding: 0 8px;
        }

        .security-icon {
          flex-shrink: 0;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
