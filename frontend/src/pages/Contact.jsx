import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      interest: form.interest.value,
    };

    try {
      const res = await fetch("http://192.168.11.41:5000/api/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Unable to connect to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container compact">
      <h1>Let’s work together</h1>

      <div className="contact-layout">

        {/* FORM / SUCCESS */}
        {!sent ? (
          <form className="contact-form" onSubmit={submit}>
            <div className="form-grid">
              <input
                name="name"
                placeholder="Name"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <input
              name="company"
              placeholder="Company Information"
            />

            <input
              name="interest"
              placeholder="Specific Area of Interest / Concern"
            />

            <button className="btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        ) : (
          <div className="success-box">
            <h2>Message Sent</h2>
            <p>
              Thank you for reaching out. We’ll be in touch shortly.
            </p>
          </div>
        )}

        {/* CONTACT INFO PANEL */}
        <div className="contact-side">
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <h4>Email</h4>
              <p>contact@archonik.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>
                Archonik Consulting business address<br />
                4-285K, Manipal - Alevoor Road,<br />
                Shanthi Nagar, Manipal,<br />
                Karnataka 576104
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
