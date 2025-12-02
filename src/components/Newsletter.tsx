import { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Sending...');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            // Use the AJAX endpoint for FormSubmit
            const response = await fetch('https://formsubmit.co/ajax/giftpaynekenya@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                    _captcha: 'false',
                    _subject: 'New Contact Form Submission - Gift Payne Creative'
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('✅ Message sent successfully! We\'ll get back to you soon.');
                form.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('❌ Failed to send. Please try emailing us directly at giftpaynekenya@gmail.com');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('❌ Error sending message. Please email us at giftpaynekenya@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="newsletter" id="contact">
            <div className="newsletter-content">
                <h2>GET IN <span className="highlight">TOUCH</span></h2>
                <p>Have a project in mind? Let's create something amazing together.</p>

                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="YOUR NAME"
                        required
                        disabled={isSubmitting}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="YOUR EMAIL"
                        required
                        disabled={isSubmitting}
                    />
                    <textarea
                        name="message"
                        placeholder="YOUR MESSAGE"
                        rows={4}
                        required
                        disabled={isSubmitting}
                    />
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                    {status && <p className="form-status">{status}</p>}
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.8 }}>
                    <p>Or email us directly at: <a href="mailto:giftpaynekenya@gmail.com" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>giftpaynekenya@gmail.com</a></p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;