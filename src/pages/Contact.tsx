function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-content">
          <span className="section-label">LET'S CONNECT</span>

          <h1 className="contact-title">
            Have an idea?
            <br />
            Let's turn it into a
            <br />
            <span>real solution.</span>
          </h1>

          <p className="contact-description">
            Have a project, opportunity or idea in mind?
            <br />
            Let's talk about how we can turn it into something useful.
          </p>

          <a
            className="primary-button contact-button"
            href="mailto:andreeamelicazan@gmail.com"
          >
            Start a conversation
            <span>→</span>
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <span className="contact-card-label">LET'S TALK</span>
            <span className="contact-card-dot"></span>
          </div>

          <a
            className="contact-link"
            href="mailto:andreeamelicazan@gmail.com"
          >
            <div>
              <span className="contact-link-label">EMAIL</span>
              <strong>andreeamelicazan@gmail.com</strong>
            </div>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            className="contact-link"
            href="https://github.com/MeLi-afkl"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <span className="contact-link-label">GITHUB</span>
              <strong>github.com/MeLi-afkl</strong>
            </div>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            className="contact-link"
            href="https://www.linkedin.com/in/andreea-meli-c-987b42240/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <span className="contact-link-label">LINKEDIN</span>
              <strong>Connect with me</strong>
            </div>
            <span className="contact-arrow">↗</span>
          </a>

          <div className="contact-availability">
            <span className="availability-dot"></span>

            <div>
              <span>AVAILABLE FOR</span>
              <strong>Projects & opportunities</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;