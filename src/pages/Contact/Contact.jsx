import { useState } from 'react';

import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main className="contact">
      <div className="contact__container">

        <header className="contact__header">
          <span className="contact__eyebrow">
            Get In Touch
          </span>

          <h1>Contact Us</h1>

          <p>
            Have a question about a market, produce, or
            something else? We'd love to hear from you.
          </p>
        </header>

        <div className="contact__content">

          <section className="contact__info">
            <h2>Let's talk</h2>

            <p>
              Whether you need help finding a local market
              or want to share feedback, you can reach out
              using the form.
            </p>

            <div className="contact__details">

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <i
                    className="bi bi-envelope"
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <span>Email</span>
                  <a href="mailto:hello@localmarkets.com">
                    hello@localmarkets.com
                  </a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <i
                    className="bi bi-geo-alt"
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <span>Location</span>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <i
                    className="bi bi-clock"
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <span>Response Time</span>
                  <p>Within 1–2 business days</p>
                </div>
              </div>

            </div>
          </section>

          <section className="contact__form-wrapper">

            {submitted && (
              <div
                className="contact__success"
                role="status"
              >
                <i
                  className="bi bi-check-circle"
                  aria-hidden="true"
                ></i>

                <span>
                  Thank you! Your message has been received.
                </span>
              </div>
            )}

            <form
              className="contact__form"
              onSubmit={handleSubmit}
            >

              <div className="contact__field">
                <label htmlFor="contact-name">
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-subject">
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact__submit"
              >
                Send Message

                <i
                  className="bi bi-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>

            </form>

          </section>

        </div>

      </div>
    </main>
  );
}

export default Contact;