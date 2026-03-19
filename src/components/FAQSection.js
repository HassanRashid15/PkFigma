import React, { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is Shilajit and how does it work?",
            answer: "Shilajit is a natural substance found primarily in the rocks of the Himalayas. It develops over centuries from the slow decomposition of plants. It works by delivering essential minerals and fulvic acid directly to your cells, supporting energy production and overall vitality."
        },
        {
            question: "How long until I see results?",
            answer: "Many customers report feeling a noticeable increase in energy and mental clarity within the first 1 to 2 weeks of consistent use. For optimal, long-term benefits, we recommend taking it daily for at least 60 days."
        },
        {
            question: "How do I take it?",
            answer: "Take a pea-sized amount (approx. 300-500mg) using the included spoon. Dissolve it in warm water, tea, or milk and drink it on an empty stomach every morning."
        },
        {
            question: "Is it safe? Any side effects?",
            answer: "Yes, our Shilajit is 100% natural, triple-purified, and third-party lab tested for heavy metals and contaminants. When taken at the recommended dosage, side effects are extremely rare."
        },
        {
            question: "How is your Shilajit different?",
            answer: "We source our Shilajit from high-altitude regions (16,000+ ft) in the Himalayas, ensuring the highest grade (Gold Grade). It is purely resin form, sun-dried, and never subjected to high heat or chemical extraction."
        },
        {
            question: "Can I take it with other supplements?",
            answer: "Yes, Shilajit is generally safe to take alongside other natural supplements. In fact, due to its fulvic acid content, it can actually enhance the absorption of other nutrients. However, consult your doctor if you have specific medical conditions."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <h2 className="faq-title">Common Questions</h2>
            <p className="faq-subtitle">Everything you need to know</p>

            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <div className="faq-answer-wrapper" style={{ maxHeight: openIndex === index ? '200px' : '0' }}>
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="faq-support-card">
                <p>Still have questions? Our customer support team is here to help.</p>
                <a href="#support" className="faq-support-link">Contact Support &rarr;</a>
            </div>
        </div>
    );
};

export default FAQSection;
