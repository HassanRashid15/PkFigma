import React from 'react';
import ReviewSummaryBox from './ReviewSummaryBox';
import ReviewCardsList from './ReviewCardsList';

const LongReviewsSection = () => {
    return (
        <div className="lr-section">
            <div className="lr-header">
                <div className="badge-light">⭐ 1000+ 5-STAR REVIEWS</div>
                <h2 className="lr-title">What Our Customers Say</h2>
                <p className="lr-subtitle">Don't just take our word for it</p>
                <div className="lr-rating">★★★★★ <strong>4.9</strong> <span className="out-of-5">out of 5</span></div>
            </div>

            <ReviewCardsList />

            <div className="lr-summary-wrapper">
                <ReviewSummaryBox />
            </div>
        </div>
    );
};

export default LongReviewsSection;

