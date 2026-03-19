import React from 'react';

const ComparisonSection = () => {
    const features = [
        { name: "High Altitude", josh: true, other: false },
        { name: "Triple Purified", josh: true, other: false },
        { name: "Third-Party Lab Tested", josh: true, other: "Sometimes" },
        { name: "No Fillers or Additives", josh: true, other: false },
        { name: "60-Day Guarantee", josh: true, other: false },
        { name: "2 Day Shipping", josh: true, other: false },
    ];

    const CheckIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c9653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="comp-check">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );

    const CrossIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="comp-cross">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );

    return (
        <div className="comp-section">
            <div className="comp-header">
                <h2 className="comp-title">Not All Shilajit Is Equal</h2>
                <p className="comp-subtitle">See why Jōsh Nutrition stands apart</p>
            </div>

            <div className="comp-card">
                <div className="comp-table-header">
                    <div className="comp-col-feature"></div>
                    <div className="comp-col-josh">Jōsh<br />Nutrition</div>
                    <div className="comp-col-other">Other<br />Brands</div>
                </div>

                <div className="comp-table-body">
                    {features.map((item, index) => (
                        <div className="comp-row" key={index}>
                            <div className="comp-col-feature">{item.name}</div>
                            <div className="comp-col-josh">
                                {item.josh === true ? <CheckIcon /> : (item.josh === false ? <CrossIcon /> : item.josh)}
                            </div>
                            <div className="comp-col-other">
                                {item.other === true ? <CheckIcon /> : (item.other === false ? <CrossIcon /> : <span className="comp-text-val">{item.other}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="comp-btn">Get Premium Quality - Rs4,000</button>
        </div>
    );
};

export default ComparisonSection;
