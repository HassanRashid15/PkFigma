import React from 'react';

const WhyTrustUsSection = () => {
    return (
        <div className="wtu-section">
            <h2 className="wtu-title">Why 10,000+ Men Trust Us</h2>
            <p className="wtu-subtitle">Here's what they tell us matters most</p>

            <div className="wtu-card">
                <div className="wtu-quote-icon">❞</div>
                <h4 className="wtu-card-title">Real, Measurable Results</h4>
                <p className="wtu-card-text">"I was struggling. This is the first supplement where I actually felt more mentally awake."</p>
                <p className="wtu-author">— Farhan K., verified customer</p>

                <div className="wtu-stat-box">
                    <strong>Customer Stat:</strong>
                    <p><span>89%</span> of customers report noticeable energy increase within first week.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyTrustUsSection;
