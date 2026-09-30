function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <p className="services-label">SERVICES</p>

        <h2>
          What I can build
          <br />
          for your <span>business.</span>
        </h2>

        <p className="services-intro">
          From modern websites to custom applications and automation, I build
          practical digital solutions designed around real business needs.
        </p>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <div className="service-top">
            <span className="service-number">01</span>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-content">
            <h3>Web Applications</h3>

            <p>
              Custom web applications, dashboards and internal tools built
              around your workflows and business requirements.
            </p>
          </div>

          <div className="service-tags">
            <span>React</span>
            <span>FastAPI</span>
            <span>APIs</span>
            <span>Databases</span>
          </div>
        </article>

        <article className="service-card service-offset">
          <div className="service-top">
            <span className="service-number">02</span>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-content">
            <h3>Business Websites</h3>

            <p>
              Modern, responsive and performance-focused websites designed to
              give your business a professional online presence.
            </p>
          </div>

          <div className="service-tags">
            <span>React</span>
            <span>Responsive</span>
            <span>SEO</span>
            <span>Analytics</span>
          </div>
        </article>

        <article className="service-card">
          <div className="service-top">
            <span className="service-number">03</span>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-content">
            <h3>Automation & Integrations</h3>

            <p>
              Automate repetitive processes and connect systems through APIs,
              scripts and custom workflow solutions.
            </p>
          </div>

          <div className="service-tags">
            <span>Python</span>
            <span>APIs</span>
            <span>Automation</span>
            <span>Integrations</span>
          </div>
        </article>

        <article className="service-card service-offset">
          <div className="service-top">
            <span className="service-number">04</span>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-content">
            <h3>Monitoring & Technical Solutions</h3>

            <p>
              Monitoring, alerting and infrastructure-oriented solutions that
              help teams understand systems and react to problems faster.
            </p>
          </div>

          <div className="service-tags">
            <span>Docker</span>
            <span>Prometheus</span>
            <span>Grafana</span>
            <span>Alerting</span>
          </div>
        </article>
      </div>

      <div className="services-cta">
        <div>
          <p>HAVE A PROJECT IN MIND?</p>
          <h3>Let's build something useful.</h3>
        </div>

        <a href="/contact">
          Tell me about it <span>→</span>
        </a>
      </div>
    </section>
  )
}

export default Services