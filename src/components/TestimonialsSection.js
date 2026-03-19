import React from 'react';

const testimonials = [
    {
        name: "Ahmed Hassan",
        details: "42 years old • Karachi",
        image: "/hero_image.png", // reusing hero image as placeholder
        title: "\"Lost 5 kg, regained my energy\"",
        review: "After my 2nd baby, I was constantly exhausted, struggling at work, and had zero motivation. After just 8 weeks on Josh's Shilajit, I feel like a new man. I have the energy to work out 3-4x a week and take my kids to the park every day."
    },
    {
        name: "Farhan Khan",
        details: "38 years old • Lahore",
        image: "/hero_image.png",
        title: "\"Best investment in my family\"",
        review: "As a finance director, I need razor sharp focus during work and not falling asleep by 3pm. Since my son was born, sleepless nights became part of the daily routine. Until I started taking Josh. One scoop before breakfast and I feel more awake and more energized through-out the day."
    },
    {
        name: "Imran Malik",
        details: "51 years old • Islamabad",
        image: "/hero_image.png",
        title: "\"Feel 30 again at 51\"",
        review: "I thought low energy was just part of aging. Wrong. Shilajit brought back my vitality, strength, and focus. Every day starts with Shilajit and my morning walk. It takes a few weeks to really start working but when it does... you'll wonder why you didn't start sooner."
    }
];

const TestimonialsSection = () => {
    return (
        <div className="testimonials-section">
            <div className="testimonials-header">
                <div className="badge-light">⭐ FEATURED SUCCESS STORIES</div>
                <h2 className="testimonials-title">Real Men, Real Results</h2>
                <p className="testimonials-subtitle">See why thousands of Pakistani men<br />are choosing Josh Shilajit</p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((t, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="tc-image-container">
                            <img src={t.image} alt={t.name} className="tc-image" />
                            <div className="tc-image-overlay">
                                <div className="tc-info">
                                    <h3 className="tc-name">{t.name}</h3>
                                    <p className="tc-details">{t.details}</p>
                                </div>
                                <div className="tc-verified">✓ VERIFIED</div>
                            </div>
                        </div>
                        <div className="tc-content">
                            <div className="tc-stars">★★★★★</div>
                            <div className="tc-quote-icon">❞</div>
                            <h4 className="tc-review-title">{t.title}</h4>
                            <p className="tc-review-body">{t.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;
