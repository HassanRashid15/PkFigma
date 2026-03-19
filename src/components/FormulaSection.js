import React from 'react';

const FormulaSection = () => {
    return (
        <div className="formula-section">
            <div className="formula-header">
                <h2 className="formula-title">Pure & Potent Formula</h2>
                <p className="formula-subtitle">One ingredient. Maximum results.</p>
            </div>

            <div className="formula-image-container">
                {/* Reusing hero image as a placeholder for the resin photo */}
                <img src="/hero_image.png" alt="Pure Shilajit Resin" className="formula-image" />
            </div>

            <div className="formula-details-card">
                <h3 className="formula-details-title">What's Inside:</h3>

                <div className="formula-inner-card">
                    <div className="formula-circle-icon">1</div>
                    <div className="formula-inner-text">
                        <h4>100% Pure Shilajit Resin</h4>
                        <p>Harvested from 16,000+ ft Himalayan elevations. No fillers, binders, or additives of any kind.</p>
                    </div>
                </div>

                <div className="formula-inner-card formula-contains">
                    <h4>Contains naturally:</h4>
                    <div className="formula-bullets">
                        <ul>
                            <li><span></span>Fulvic Acid 70%+</li>
                            <li><span></span>Iron</li>
                            <li><span></span>Zinc</li>
                            <li><span></span>Selenium</li>
                        </ul>
                        <ul>
                            <li><span></span>Humic Acid</li>
                            <li><span></span>Magnesium</li>
                            <li><span></span>Calcium</li>
                            <li><span></span>+ 78 More</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="formula-badges-grid">
                <div className="formula-badge">
                    <span className="formula-badge-icon">🧪</span>
                    <strong>Third-Party</strong>
                    <p>Lab Tested</p>
                </div>
                <div className="formula-badge">
                    <span className="formula-badge-icon">🌿</span>
                    <strong>100%</strong>
                    <p>Natural</p>
                </div>
                <div className="formula-badge">
                    <span className="formula-badge-icon">🚫</span>
                    <strong>No GMOs</strong>
                    <p>or Gluten</p>
                </div>
                <div className="formula-badge">
                    <span className="formula-badge-icon">🇺🇸</span>
                    <strong>Sold in</strong>
                    <p>USA</p>
                </div>
            </div>
        </div>
    );
};

export default FormulaSection;
