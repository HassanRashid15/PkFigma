import React from 'react';

const WhyChooseSection = () => {
    return (
        <div className="why-section">
            <div className="why-header">
                <h2 className="why-title">Why Men Choose Shilajit</h2>
                <p className="why-subtitle">Backed by ancient wisdom and modern science</p>
            </div>

            <div className="why-cards">
                <div className="why-card">
                    <div className="why-icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                    </div>
                    <div className="why-card-text">
                        <h4 className="why-card-title">Explosive Energy</h4>
                        <p className="why-card-desc">Natural ATP production for sustained energy without jitters or crashes</p>
                    </div>
                </div>

                <div className="why-card">
                    <div className="why-icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="6"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                    </div>
                    <div className="why-card-text">
                        <h4 className="why-card-title">Mental Clarity</h4>
                        <p className="why-card-desc">Enhanced focus, memory, and cognitive performance</p>
                    </div>
                </div>

                <div className="why-card">
                    <div className="why-icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2c0 0-7 5.4-7 11.5A7.5 7.5 0 0 0 12 21a7.5 7.5 0 0 0 7-7.5C19 7.4 12 2 12 2z"></path>
                        </svg>
                    </div>
                    <div className="why-card-text">
                        <h4 className="why-card-title">Peak Performance</h4>
                        <p className="why-card-desc">Increased stamina and endurance for workouts and daily activities</p>
                    </div>
                </div>

                <div className="why-card">
                    <div className="why-icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </div>
                    <div className="why-card-text">
                        <h4 className="why-card-title">Testosterone Support</h4>
                        <p className="why-card-desc">Naturally supports healthy testosterone levels and male vitality</p>
                    </div>
                </div>

                <div className="why-card">
                    <div className="why-icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 21h8M12 17v4M7 4h10M17 4v3.5A6.5 6.5 0 0 1 10.5 14h-1A6.5 6.5 0 0 1 3 7.5V4h14z"></path>
                        </svg>
                    </div>
                    <div className="why-card-text">
                        <h4 className="why-card-title">Anti-Aging Power</h4>
                        <p className="why-card-desc">Powerful antioxidants combat cellular aging and oxidative stress</p>
                    </div>
                </div>
            </div>

            <button className="why-btn">Claim Your 20% Discount</button>
        </div>
    );
};

export default WhyChooseSection;
