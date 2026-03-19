import React from 'react';

const JoinMovementSection = () => {
    return (
        <div className="jm-section">
            <h2 className="jm-title">Join The Movement</h2>
            <p className="jm-subtitle">Thousands of Pakistani men are transforming their lives</p>

            <div className="jm-stats-grid">
                <div className="jm-stat-card">
                    <div className="jm-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3>5,000+</h3>
                    <p>Happy Customers</p>
                </div>
                <div className="jm-stat-card">
                    <div className="jm-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </div>
                    <h3>92%</h3>
                    <p>Satisfaction Rate</p>
                </div>
                <div className="jm-stat-card">
                    <div className="jm-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                    </div>
                    <h3>700+</h3>
                    <p>5-Star Reviews</p>
                </div>
                <div className="jm-stat-card">
                    <div className="jm-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                    </div>
                    <h3>4.9/5</h3>
                    <p>Average Rating</p>
                </div>
            </div>

            <div className="jm-quotes-container">
                <div className="jm-quote-card">
                    <p>"Best all natural supplement I've ever taken"</p>
                    <span>— Ahmed H., Karachi</span>
                </div>
                <div className="jm-quote-card">
                    <p>"Clean, consistent energy"</p>
                    <span>— Tariq M., Lahore</span>
                </div>
            </div>
        </div>
    );
};

export default JoinMovementSection;
