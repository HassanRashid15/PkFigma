import React from 'react';

const reviews = [
    { title: "\"Energy levels through the roof!\"", author: "Bilal B." },
    { title: "\"Best supplement I've ever tried\"", author: "Usman L." },
    { title: "\"Feel like I'm 25 again\"", author: "Naveed H." },
    { title: "\"My testosterone went up 28%!\"", author: "Faisal W." },
    { title: "\"Worth every single rupee\"", author: "Tariq S." },
    { title: "\"Life-changing results\"", author: "Shahid P." }
];

const CustomerReviews = () => {
    return (
        <div className="cr-section">
            <div className="cr-header">
                <h2 className="cr-title">What Customers Are Saying Right Now</h2>
                <p className="cr-subtitle">Real reviews from the past 96 hours</p>
            </div>
            <div className="cr-grid">
                {reviews.map((r, index) => (
                    <div className="cr-card" key={index}>
                        <div className="cr-stars">★★★★★</div>
                        <h4 className="cr-review-title">{r.title}</h4>
                        <p className="cr-author">- {r.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviews;
