import React from 'react';

const ReviewSummaryBox = () => {
    return (
        <div className="lr-summary-box">
            <div className="lr-summary-top">
                <div className="lr-summary-item">
                    <div className="lr-summary-value">96%</div>
                    <div className="lr-summary-label">Would Recommend</div>
                </div>
                <div className="lr-summary-item">
                    <div className="lr-summary-value">4.9★</div>
                    <div className="lr-summary-label">Average Rating</div>
                </div>
            </div>
            <div className="lr-summary-divider"></div>
            <div className="lr-summary-bottom">
                <div className="lr-summary-reviews">732 Reviews</div>
                <div className="lr-summary-verified">From verified customers</div>
            </div>
        </div>
    );
};

export default ReviewSummaryBox;
