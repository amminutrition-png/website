import React, { useState } from 'react';
import { LeafIcon, ShieldCheckIcon, AwardRibbonIcon, BotanicalLeafDecor } from '../Icons';

export default function LabResultsSection() {
  const [reportModalOpen, setReportModalOpen] = useState(false);

  // Exact certified results from Alpha Labs & Technologies Test Report (Report No: ALT/FA-0250/2026)
  const nutritionalData = [
    {
      nutrient: "Plant Protein",
      per100g: "19.76 g",
      perServing: "~4.94 g",
      method: "IS 7219: 1973",
      source: "Whole Green Gram, Soybeans, Almonds & Millets",
      highlight: true,
      badge: "Muscle & Growth"
    },
    {
      nutrient: "Dietary Fiber",
      per100g: "22.4 g",
      perServing: "~5.6 g",
      method: "ALT-CH-SOP-001",
      source: "Whole Grains & Pulses (High Natural Fiber)",
      highlight: true,
      badge: "Gut & Digestion"
    },
    {
      nutrient: "Energy / Calories",
      per100g: "377.62 kcal",
      perServing: "~94.4 kcal",
      method: "ALT/SOP/03/01",
      source: "Sustained natural energy from whole grains",
      highlight: false
    },
    {
      nutrient: "Total Carbohydrates",
      per100g: "70.10 g",
      perServing: "~17.5 g",
      method: "IS 1656: 2022",
      source: "Complex low-GI whole food carbohydrates",
      highlight: false
    },
    {
      nutrient: "Total Natural Fat",
      per100g: "2.02 g",
      perServing: "~0.5 g",
      method: "AOAC 22nd Ed 920.85",
      source: "Healthy natural oils from Almonds & Soybeans",
      highlight: false
    },
    {
      nutrient: "Calcium",
      per100g: "26.7 mg",
      perServing: "~6.7 mg",
      method: "Lab Tested (267 mg/kg)",
      source: "Natural Ragi & Finger Millet minerals",
      highlight: true,
      badge: "Bone Health"
    },
    {
      nutrient: "Iron (as Fe)",
      per100g: "0.53 mg",
      perServing: "~0.13 mg",
      method: "Lab Tested (5.26 mg/kg)",
      source: "Natural iron for active red blood cells",
      highlight: true,
      badge: "Daily Vitality"
    },
    {
      nutrient: "Natural Ash (Minerals)",
      per100g: "3.43 g",
      perServing: "~0.86 g",
      method: "IS 14613: 1998",
      source: "Essential trace minerals from soil & grains",
      highlight: false
    },
    {
      nutrient: "Moisture Content",
      per100g: "4.69 g",
      perServing: "—",
      method: "IS 18140: 2023",
      source: "Properly roasted & dried for crisp shelf-life",
      highlight: false
    },
    {
      nutrient: "Added / Refined Sugar",
      per100g: "0 g (Zero)",
      perServing: "0 g",
      method: "100% Free",
      source: "Zero white sugar, syrup, or chemical sweeteners",
      highlight: true,
      badge: "100% Clean"
    },
    {
      nutrient: "Artificial Preservatives",
      per100g: "0%",
      perServing: "0%",
      method: "Zero Additives",
      source: "No artificial colors, flavors or MSG",
      highlight: true,
      badge: "Pure & Safe"
    }
  ];

  return (
    <section className="lab-results-section" id="nutrition-facts" aria-label="Nutritional Facts and Certified Lab Results">
      {/* Decorative Botanical Leaves */}
      <div className="lab-leaf-decor lab-leaf-left" aria-hidden="true">
        <BotanicalLeafDecor />
      </div>
      <div className="lab-leaf-decor lab-leaf-right" aria-hidden="true">
        <BotanicalLeafDecor style={{ transform: 'scaleX(-1)' }} />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="lab-header">
          <div className="lab-pill-badge">
            <span className="lab-badge-icon" aria-hidden="true">🔬</span>
            <span>VERIFIED NUTRITION & INDEPENDENT LAB REPORT</span>
          </div>
          <h2 className="section-title">Nutritional Facts & Lab Verified Purity</h2>
          <div className="gold-divider gold-divider-center" style={{ width: '60px', margin: '14px auto 16px' }}></div>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
            Complete transparency for your family's health. Ammi Nutrition Protein Malt is tested and certified by <strong>Alpha Labs & Technologies</strong>, an ISO 17025 (NABL) Accredited & ISO 9001 Certified Laboratory.
          </p>
        </div>

        {/* Dual Column Showcase Grid */}
        <div className="lab-grid-layout">
          {/* Left Column: Demonstration Table Card */}
          <div className="lab-table-card">
            <div className="table-card-top">
              <div className="table-card-title-group">
                <h3 className="table-card-heading">Nutritional Value Demonstration</h3>
                <span className="table-pack-note">Tested per 100g powder (approx. 4 daily servings of 25g)</span>
              </div>
              <span className="table-certified-tag">✓ ISO Tested</span>
            </div>

            {/* Mobile swipe helper text */}
            <div className="mobile-scroll-indicator" aria-hidden="true">
              <span>👉 Swipe left/right to view full testing parameters</span>
            </div>

            <div className="table-responsive-wrapper">
              <table className="nutrition-demo-table">
                <thead>
                  <tr>
                    <th scope="col" className="th-nutrient">Nutrient Parameter</th>
                    <th scope="col" className="th-per100">Per 100 g</th>
                    <th scope="col" className="th-serving">Per Scoop (25g)</th>
                    <th scope="col" className="th-method">Testing Method</th>
                    <th scope="col" className="th-source">Natural Source & Quality Note</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionalData.map((row, idx) => (
                    <tr key={idx} className={row.highlight ? 'tr-highlighted' : ''}>
                      <td className="td-nutrient">
                        <div className="nutrient-name-cell">
                          <span className="nutrient-text">{row.nutrient}</span>
                          {row.badge && (
                            <span className="nutrient-badge">{row.badge}</span>
                          )}
                        </div>
                      </td>
                      <td className="td-per100">
                        <strong className="nutrient-val-strong">{row.per100g}</strong>
                      </td>
                      <td className="td-serving">{row.perServing}</td>
                      <td className="td-method">
                        <span className="method-pill">{row.method}</span>
                      </td>
                      <td className="td-source">{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-footer-note">
              <span className="info-icon" aria-hidden="true">💡</span>
              <p>
                <strong>Serving Recommendation:</strong> Mix 2 to 3 spoonfuls (~25g) with 200 ml of warm or cold milk for a wholesome, comforting, nutrient-dense breakfast or evening energizer.
              </p>
            </div>
          </div>

          {/* Right Column: Lab Certificate & Trust Card */}
          <div className="lab-cert-card">
            <div className="cert-card-header">
              <div className="cert-header-icon-box">
                <ShieldCheckIcon size={26} color="#064C2D" />
              </div>
              <div className="cert-header-text">
                <h3 className="cert-heading">Official Laboratory Report</h3>
                <span className="cert-sub">Alpha Labs & Technologies (NABL / ISO 9001:2015)</span>
              </div>
            </div>

            {/* Certificate Meta Details */}
            <div className="cert-meta-list">
              <div className="cert-meta-item">
                <span className="cert-meta-label">Test Report No.:</span>
                <span className="cert-meta-val">ALT/FA-0250/2026</span>
              </div>
              <div className="cert-meta-item">
                <span className="cert-meta-label">ULR Registration:</span>
                <span className="cert-meta-val">NABLT0826TN191272600000240</span>
              </div>
              <div className="cert-meta-item">
                <span className="cert-meta-label">Sample Description:</span>
                <span className="cert-meta-val">Protein Malt</span>
              </div>
              <div className="cert-meta-item">
                <span className="cert-meta-label">Testing Laboratory:</span>
                <span className="cert-meta-val">Alpha Labs, Coimbatore - 641 025</span>
              </div>
              <div className="cert-meta-item">
                <span className="cert-meta-label">Accreditation:</span>
                <span className="cert-meta-val">ISO 17025 (NABL) & ISO 9001:2015</span>
              </div>
              <div className="cert-meta-item">
                <span className="cert-meta-label">Sample Condition:</span>
                <span className="cert-meta-val cert-val-good">Fit for Analysis ✓</span>
              </div>
            </div>

            {/* Certificate Interactive Preview Frame */}
            <div className="cert-preview-box" onClick={() => setReportModalOpen(true)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setReportModalOpen(true); }}>
              <div className="cert-img-wrapper">
                <img 
                  src="/images/alpha-lab-report.jpg" 
                  alt="Alpha Labs official test report document for Ammi Nutrition Protein Malt"
                  className="cert-doc-img"
                  loading="lazy"
                />
              </div>
              <div className="cert-preview-overlay">
                <span className="cert-zoom-btn">
                  🔍 View Full Lab Certificate
                </span>
              </div>
            </div>

            {/* Trust Highlights */}
            <div className="cert-trust-pills">
              <div className="cert-trust-pill">
                <LeafIcon size={16} color="#064C2D" />
                <span>6 Pure Grains</span>
              </div>
              <div className="cert-trust-pill">
                <AwardRibbonIcon size={16} color="#064C2D" />
                <span>Zero Chemicals</span>
              </div>
              <div className="cert-trust-pill">
                <span className="pill-check">✓</span>
                <span>FSSAI Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Certificate Modal Lightbox */}
      {reportModalOpen && (
        <div className="cert-lightbox-backdrop" onClick={() => setReportModalOpen(false)}>
          <div className="cert-lightbox-modal" onClick={e => e.stopPropagation()}>
            <button 
              type="button" 
              className="cert-modal-close" 
              onClick={() => setReportModalOpen(false)}
              aria-label="Close certificate"
            >
              ✕
            </button>
            <div className="cert-modal-header">
              <h3 className="cert-modal-title">Official Laboratory Test Report Certificate</h3>
              <p className="cert-modal-desc">
                Report No: <strong>ALT/FA-0250/2026</strong> • Issued by Alpha Labs & Technologies, Coimbatore
              </p>
            </div>
            <div className="cert-modal-body">
              <div className="cert-scroll-container">
                <img 
                  src="/images/alpha-lab-report.jpg" 
                  alt="Official Alpha Labs Test Report ALT/FA-0250/2026"
                  className="cert-full-img"
                />
              </div>
            </div>
            <div className="cert-modal-footer">
              <span className="cert-modal-badge">✓ ISO 17025 (NABL) Verified</span>
              <a 
                href="/images/alpha-lab-report.jpg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-open-original-btn"
              >
                Open Original Image ↗
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .lab-results-section {
          position: relative;
          background: linear-gradient(180deg, #FFFDF8 0%, #FBF6E9 50%, #F5ECDA 100%);
          padding: 60px 0;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          border-top: 1px solid #EBE1CE;
          border-bottom: 1px solid #E8DCBE;
          box-sizing: border-box;
        }

        @media (min-width: 768px) {
          .lab-results-section {
            padding: 80px 0;
          }
        }

        .lab-leaf-decor {
          position: absolute;
          opacity: 0.45;
          pointer-events: none;
          z-index: 1;
        }

        .lab-leaf-left {
          top: 30px;
          left: 0;
        }

        .lab-leaf-right {
          top: 30px;
          right: 0;
        }

        @media (max-width: 600px) {
          .lab-leaf-decor {
            display: none;
          }
        }

        .lab-header {
          text-align: center;
          margin-bottom: 36px;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .lab-header {
            margin-bottom: 48px;
          }
        }

        .lab-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #EBF4E5;
          color: #064C2D;
          border: 1px solid #CDE2BF;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 6px 14px;
          border-radius: 9999px;
          margin-bottom: 14px;
          max-width: 100%;
          text-align: center;
        }

        @media (min-width: 600px) {
          .lab-pill-badge {
            font-size: 0.8rem;
            padding: 6px 16px;
          }
        }

        /* Dual Column Layout with minmax(0, 1fr) to prevent CSS Grid blow-out */
        .lab-grid-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 100%;
          position: relative;
          z-index: 2;
          box-sizing: border-box;
        }

        @media (min-width: 992px) {
          .lab-grid-layout {
            grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
            gap: 32px;
            align-items: stretch;
          }
        }

        /* Left Column: Table Card */
        .lab-table-card {
          background-color: #FFFFFF;
          border-radius: 16px;
          border: 1.5px solid #E2D3B8;
          box-shadow: 0 8px 24px rgba(6, 76, 45, 0.06);
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
          overflow: hidden;
        }

        @media (min-width: 600px) {
          .lab-table-card {
            padding: 26px 22px;
            border-radius: 20px;
          }
        }

        @media (min-width: 900px) {
          .lab-table-card {
            padding: 32px 28px;
          }
        }

        .table-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 14px;
          border-bottom: 1.5px solid #F1E5CC;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .table-card-heading {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: #064C2D;
          font-weight: 700;
          margin: 0 0 4px 0;
          line-height: 1.25;
        }

        @media (min-width: 600px) {
          .table-card-heading {
            font-size: 1.45rem;
          }
        }

        .table-pack-note {
          font-size: 0.8rem;
          color: #666666;
          display: block;
        }

        .table-certified-tag {
          background: #064C2D;
          color: #FFFFFF;
          font-size: 0.76rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 6px;
          white-space: nowrap;
          align-self: flex-start;
        }

        /* Mobile Scroll Hint Banner */
        .mobile-scroll-indicator {
          display: block;
          font-size: 0.74rem;
          color: #7A5310;
          background-color: #FDF4DF;
          padding: 5px 10px;
          border-radius: 6px;
          margin-bottom: 10px;
          border: 1px dashed #E2C98A;
          text-align: center;
          font-weight: 600;
        }

        @media (min-width: 768px) {
          .mobile-scroll-indicator {
            display: none;
          }
        }

        /* Table Responsive Horizontal Scroll Wrapper */
        .table-responsive-wrapper {
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-bottom: 16px;
          border: 1px solid #EFE4CE;
          border-radius: 10px;
          box-sizing: border-box;
        }

        .nutrition-demo-table {
          width: 100%;
          min-width: 520px;
          border-collapse: collapse;
          text-align: left;
        }

        .nutrition-demo-table th {
          background-color: #F8F3E8;
          color: #064C2D;
          font-family: var(--font-serif);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 10px 10px;
          border-bottom: 2px solid #D69E2E;
          white-space: nowrap;
        }

        .nutrition-demo-table td {
          padding: 9px 10px;
          font-size: 0.84rem;
          color: #333333;
          border-bottom: 1px solid #F1E9DA;
          vertical-align: middle;
        }

        /* Mobile Sticky 1st column so nutrient name remains visible during horizontal scroll */
        @media (max-width: 600px) {
          .nutrition-demo-table th:first-child,
          .nutrition-demo-table td:first-child {
            position: sticky;
            left: 0;
            z-index: 2;
            background-color: #FFFFFF;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
            border-right: 1px solid #ECE0CA;
          }
          .nutrition-demo-table th:first-child {
            background-color: #F8F3E8;
          }
          .nutrition-demo-table tr.tr-highlighted td:first-child {
            background-color: #FDFAF4;
          }
        }

        .tr-highlighted {
          background-color: #FDFAF4;
        }

        .tr-highlighted:hover,
        .nutrition-demo-table tbody tr:hover {
          background-color: #F5EEDD;
        }

        .nutrient-name-cell {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .nutrient-text {
          font-weight: 600;
          color: #064C2D;
        }

        .nutrient-badge {
          font-size: 0.68rem;
          font-weight: 700;
          color: #8C6207;
          background: #FFF3D6;
          padding: 1px 6px;
          border-radius: 4px;
          border: 1px solid #E8CD8A;
          white-space: nowrap;
        }

        .nutrient-val-strong {
          color: #064C2D;
          font-size: 0.95rem;
        }

        .td-per100 {
          white-space: nowrap;
        }

        .td-serving {
          color: #555555;
          white-space: nowrap;
        }

        .method-pill {
          font-size: 0.72rem;
          font-weight: 600;
          color: #555555;
          background: #F4EEDF;
          padding: 2px 6px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .td-source {
          font-size: 0.78rem;
          color: #666666;
          line-height: 1.35;
        }

        .table-footer-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background-color: #FAF4E5;
          border: 1px solid #EADBBA;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 0.8rem;
          color: #4A4A4A;
          line-height: 1.45;
        }

        .info-icon {
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Right Column: Lab Cert Card */
        .lab-cert-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1.5px solid #E2D3B8;
          box-shadow: 0 8px 24px rgba(6, 76, 45, 0.06);
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
          overflow: hidden;
        }

        @media (min-width: 600px) {
          .lab-cert-card {
            padding: 26px 22px;
            border-radius: 20px;
            gap: 18px;
          }
        }

        @media (min-width: 900px) {
          .lab-cert-card {
            padding: 32px 28px;
          }
        }

        .cert-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 12px;
          border-bottom: 1.5px solid #F1E5CC;
        }

        .cert-header-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background-color: #EFF5E9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid #CDE2BF;
        }

        .cert-heading {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: #064C2D;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }

        @media (min-width: 600px) {
          .cert-heading {
            font-size: 1.35rem;
          }
        }

        .cert-sub {
          font-size: 0.78rem;
          color: #666666;
          display: block;
          margin-top: 2px;
        }

        .cert-meta-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
          background-color: #FBF7EE;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #EFE4CE;
          box-sizing: border-box;
          width: 100%;
        }

        .cert-meta-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          font-size: 0.78rem;
          gap: 8px;
          padding-bottom: 5px;
          border-bottom: 1px dashed #EAE0C8;
          box-sizing: border-box;
          width: 100%;
        }

        .cert-meta-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .cert-meta-label {
          color: #666666;
          font-weight: 500;
          flex-shrink: 0;
        }

        .cert-meta-val {
          color: #064C2D;
          font-weight: 700;
          text-align: right;
          word-break: break-word;
        }

        .cert-val-good {
          color: #15803D;
        }

        /* Certificate Document Frame */
        .cert-preview-box {
          position: relative;
          width: 100%;
          max-width: 100%;
          border-radius: 12px;
          overflow: hidden;
          border: 1.5px solid #D69E2E;
          box-shadow: 0 6px 16px rgba(6, 76, 45, 0.08);
          cursor: pointer;
          background-color: #F5EFE4;
          box-sizing: border-box;
        }

        .cert-img-wrapper {
          width: 100%;
          max-height: 320px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FAF7F2;
        }

        @media (min-width: 900px) {
          .cert-img-wrapper {
            max-height: 380px;
          }
        }

        .cert-doc-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          object-position: top center;
          display: block;
          transition: transform 0.3s ease;
        }

        .cert-preview-box:hover .cert-doc-img {
          transform: scale(1.02);
        }

        .cert-preview-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 76, 45, 0.08) 0%, rgba(6, 40, 24, 0.65) 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 14px;
          transition: background 0.25s ease;
        }

        .cert-preview-box:hover .cert-preview-overlay {
          background: linear-gradient(180deg, rgba(6, 76, 45, 0.15) 0%, rgba(6, 40, 24, 0.78) 100%);
        }

        .cert-zoom-btn {
          background-color: #D69E2E;
          color: #FFFFFF;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 7px 16px;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s ease, background-color 0.2s ease;
          text-align: center;
          max-width: 90%;
        }

        .cert-preview-box:hover .cert-zoom-btn {
          transform: translateY(-2px);
          background-color: #E2AC3E;
        }

        /* Trust Pills */
        .cert-trust-pills {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 440px) {
          .cert-trust-pills {
            grid-template-columns: 1fr;
            gap: 6px;
          }
        }

        .cert-trust-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 4px;
          background-color: #F8F3E8;
          border: 1px solid #E8DCBE;
          border-radius: 8px;
          padding: 8px 4px;
          font-size: 0.74rem;
          font-weight: 700;
          color: #064C2D;
          box-sizing: border-box;
        }

        @media (max-width: 440px) {
          .cert-trust-pill {
            flex-direction: row;
            padding: 8px 12px;
            gap: 8px;
          }
        }

        .pill-check {
          color: #064C2D;
          font-weight: 900;
          font-size: 0.88rem;
        }

        /* Fullscreen Lightbox Modal */
        .cert-lightbox-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.86);
          backdrop-filter: blur(6px);
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          animation: modalFadeIn 0.2s ease;
        }

        .cert-lightbox-modal {
          position: relative;
          background: #FFFFFF;
          border-radius: 14px;
          max-width: 640px;
          width: 100%;
          max-height: 94vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
          animation: modalPopUp 0.25s ease;
        }

        .cert-modal-close {
          position: absolute;
          top: 10px;
          right: 12px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #F4EAD3;
          border: 1px solid #D69E2E;
          color: #064C2D;
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }

        .cert-modal-close:hover {
          background: #E8D8BA;
        }

        .cert-modal-header {
          padding: 16px 20px;
          background: #F8F3E8;
          border-bottom: 1.5px solid #E2D3B8;
        }

        .cert-modal-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: #064C2D;
          margin: 0;
          padding-right: 30px;
        }

        .cert-modal-desc {
          font-size: 0.78rem;
          color: #666666;
          margin: 3px 0 0 0;
        }

        .cert-modal-body {
          padding: 10px;
          overflow-y: auto;
          display: flex;
          justify-content: center;
          background: #232323;
          -webkit-overflow-scrolling: touch;
        }

        .cert-scroll-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .cert-full-img {
          width: 100%;
          max-height: 72vh;
          object-fit: contain;
          border-radius: 6px;
        }

        .cert-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: #F8F3E8;
          border-top: 1px solid #E2D3B8;
          flex-wrap: wrap;
          gap: 8px;
        }

        .cert-modal-badge {
          font-size: 0.78rem;
          font-weight: 700;
          color: #064C2D;
        }

        .cert-open-original-btn {
          font-size: 0.78rem;
          font-weight: 700;
          color: #064C2D;
          background: #E2D3B8;
          padding: 4px 10px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.15s ease;
        }

        .cert-open-original-btn:hover {
          background: #D69E2E;
          color: #FFFFFF;
        }
      `}</style>
    </section>
  );
}
