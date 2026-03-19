import React from 'react';

const FinalOfferSection = () => {
    return (
        <div className="final-offer-section">
            <div className="fo-image-container">
                <img src="/hero_image.png" alt="Start Transformation" className="fo-image" />
            </div>

            <h2 className="fo-title">Start Your Transformation</h2>
            <p className="fo-subtitle">Join thousands of Pakistani dads experiencing peak energy, performance, and mood with pure Himalayan Shilajit</p>

            <div className="fo-benefits-row">
                <div className="fo-benefit-item">
                    <div className="fo-benefit-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c9653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <strong>60-Day</strong>
                    <span>Guarantee</span>
                </div>
                <div className="fo-benefit-item">
                    <div className="fo-benefit-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c9653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="3" width="15" height="13"></rect>
                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                            <circle cx="5.5" cy="18.5" r="2.5"></circle>
                            <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                    </div>
                    <strong>Free</strong>
                    <span>Shipping</span>
                </div>
                <div className="fo-benefit-item">
                    <div className="fo-benefit-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c9653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="1 4 1 10 7 10"></polyline>
                            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                        </svg>
                    </div>
                    <strong>Discounted</strong>
                    <span>Subscriptions</span>
                </div>
            </div>

            <div className="fo-pricing-card">
                <div className="fo-badge-red">LIMITED TIME: 20% OFF</div>
                <div className="fo-price-row">
                    <span className="fo-price-current">Rs4,000</span>
                    <span className="fo-price-old">Rs5,000</span>
                </div>
                <p className="fo-serving-info">20g jar • 30 servings</p>

                <button className="fo-btn">Add to Cart - Rs4,000</button>

                <div className="fo-checklist">
                    <p>✓ Free shipping across Pakistan</p>
                    <p>✓ Ships within 24 hours</p>
                    <p>✓ Cash on Delivery</p>
                </div>
            </div>

            <div className="fo-trust-badges">
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="#6c9653"><circle cx="12" cy="12" r="12" /><path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" /></svg> cGMP Certified</span>
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="#6c9653"><circle cx="12" cy="12" r="12" /><path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" /></svg> Lab Tested</span>
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="#6c9653"><circle cx="12" cy="12" r="12" /><path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" /></svg> 100% Authentic</span>
            </div>

            <div className="fo-urgency-banner">
                <strong>🔥 92 orders in the last 48 hours</strong>
                <p>Don't miss out on this limited-time offer</p>
            </div>
        </div>
    );
};

export default FinalOfferSection;
