import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact">
      <div className="contactContainer">
        <div className="contactHeader">
          <div className="contactTag">
            <span>✨</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="sectionTitle">
            Contact <span className="highlight">Me</span>
          </h2>
          <p className="sectionSubtitle">
            Get in touch with me for any inquiries or opportunities
          </p>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name" className="formLabel">
              <span>👤</span> Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="formInput"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email" className="formLabel">
              <span>✉️</span> Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="formInput"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message" className="formLabel">
              <span>💬</span> Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Enter your message"
              className="formTextarea"
            />
          </div>

          <button type="submit" className="submitBtn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="spinner" />
                Sending...
              </>
            ) : (
              <>
                📤 Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
