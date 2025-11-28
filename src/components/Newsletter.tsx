import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="newsletter-content">
                <h2>JOIN THE <span className="highlight">MOVEMENT</span></h2>
                <p>Get the latest updates, behind-the-scenes content, and creative insights.</p>

                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="ENTER YOUR EMAIL" />
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
