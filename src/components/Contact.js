import React from 'react';


const Contact = ({ email, phone, location, linkedin, github }) => {
  const hasContact = email || phone || location || linkedin || github;
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title scroll-reveal">Let's Work Together</h2>
          <p className="scroll-reveal">Have a project in mind? I'd love to hear about it. Let's create something amazing together.</p>
          {hasContact ? (
            <div className="contact-details scroll-reveal">
              {email && <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>}
              {phone && <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>}
              {location && <p><strong>Location:</strong> {location}</p>}
              {linkedin && <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>}
              {github && <p><strong>GitHub:</strong> <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>}
            </div>
          ) : (
            <p style={{ color: 'red' }}>No contact details to display.</p>
          )}
          <form className="contact-form">
            <div className="form-group scroll-reveal">
              <input type="text" className="form-input" placeholder="Your Name" required />
            </div>
            <div className="form-group scroll-reveal">
              <input type="email" className="form-input" placeholder="Your Email" required />
            </div>
            <div className="form-group scroll-reveal">
              <input type="text" className="form-input" placeholder="Project Subject" required />
            </div>
            <div className="form-group scroll-reveal">
              <textarea className="form-input" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="submit-btn scroll-reveal">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
