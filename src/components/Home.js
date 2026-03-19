import React from 'react';
import TopBanner from './TopBanner';
import TrustSection from './TrustSection';
import WhyChooseSection from './WhyChooseSection';
import TestimonialsSection from './TestimonialsSection';
import CustomerReviews from './CustomerReviews';
import CTASection from './CTASection';
import LongReviewsSection from './LongReviewsSection';
import WhyTrustUsSection from './WhyTrustUsSection';
import JoinMovementSection from './JoinMovementSection';
import FormulaSection from './FormulaSection';
import ComparisonSection from './ComparisonSection';
import FinalOfferSection from './FinalOfferSection';
import FAQSection from './FAQSection';

const Home = () => {
    return (
        <div className="home-container" id="home">
            <TopBanner />

            <div className="home-content-body">
                <h1 className="home-main-title">Pure Himalayan<br />Shilajit Resin</h1>
                <p className="home-main-subtitle">
                    Ancient mineral compound scientifically proven to boost energy, brain power, and performance in men
                </p>

                <div className="home-main-grid">
                    <div className="home-left-col">
                        <div className="hero-image-wrapper">
                            <img src="/hero_image.png" alt="Happy father holding baby in nature" className="hero-image" />
                        </div>
                    </div>

                    <div className="home-right-col">
                        <div className="pricing-card">
                            <div className="price-wrap">
                                <span className="old-price">Rs5,000</span>
                                <span className="new-price">Rs4,000</span>
                            </div>
                            <p className="discount-text">20% Off - Limited Time</p>
                            <button className="btn-add-to-cart">Add to Cart - Rs4,000</button>
                            <p className="guarantee-text">✓ 60-Day "Feel The Difference" Guarantee</p>
                        </div>

                        <div className="features-grid">
                            <div className="feature-card">
                                <span className="feature-icon">⚡</span>
                                <span className="feature-text">Boost Energy</span>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">💪</span>
                                <span className="feature-text">Peak Performance</span>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">🧠</span>
                                <span className="feature-text">Mental Clarity</span>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">🔥</span>
                                <span className="feature-text">Vitality Boost</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TrustSection />
            <TestimonialsSection />
            <CTASection />
            <CustomerReviews />
            <WhyChooseSection />
            <LongReviewsSection />
            <WhyTrustUsSection />
            <JoinMovementSection />
            <FormulaSection />
            <ComparisonSection />
            <FinalOfferSection />
            <FAQSection />
        </div>
    );
};

export default Home;
