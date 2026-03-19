import React from 'react';

const TrustSection = () => {
    return (
        <div className="trust-section">
            <div className="trust-stars">
                ★★★★★ <span className="trust-score">4.9/5</span>
            </div>
            <h2 className="trust-headline">Over 5,000+ Men Trust Jōsh Nutrition</h2>
            <p className="trust-subtext">Lab-Tested | GMP Certified | US Export Grade</p>

            <div className="trust-stats-grid">
                <div className="trust-stat-item">
                    <span className="trust-stat-number">732</span>
                    <span className="trust-stat-label">Reviews</span>
                </div>
                <div className="trust-stat-item">
                    <span className="trust-stat-number">92%</span>
                    <span className="trust-stat-label">Recommend</span>
                </div>
                <div className="trust-stat-item">
                    <span className="trust-stat-number">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        15
                    </span>
                    <span className="trust-stat-label">Bought Today</span>
                </div>
            </div>
        </div>
    );
};

export default TrustSection;
