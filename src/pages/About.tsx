import meliPortrait from '../assets/meli-portrait.png'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-top">
        <div className="about-heading">
          <p className="about-label">ABOUT</p>

          <h2>
            I build with
            <br />
            more than <span>code.</span>
          </h2>
        </div>

        <div className="about-profile">
          <div className="about-photo-frame">
            <img
              src={meliPortrait}
              alt="Meli — Software & Network Engineer"
              className="about-photo"
            />

            <div className="about-photo-info">
              <strong>Meli</strong>
              <span>Software & Network Engineer</span>
            </div>
          </div>
        </div>

        <div className="about-intro">
          <p className="about-lead">
            My background combines software development, network infrastructure
            and cybersecurity.
          </p>

          <p>
            This allows me to approach digital projects from more than just a
            development perspective — considering how solutions are built, how
            systems communicate and how they can be monitored and secured.
          </p>
        </div>
      </div>

      <div className="about-expertise">
        <article className="expertise-card">
          <div className="expertise-top">
            <span>01</span>
            <div className="expertise-icon">&lt;/&gt;</div>
          </div>

          <div>
            <p className="expertise-category">DEVELOPMENT</p>
            <h3>Software Development</h3>

            <p className="expertise-description">
              Building modern web applications and practical digital tools from
              interface to backend.
            </p>
          </div>

          <div className="expertise-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>Python</span>
            <span>FastAPI</span>
            <span>APIs</span>
          </div>
        </article>

        <article className="expertise-card">
          <div className="expertise-top">
            <span>02</span>
            <div className="expertise-icon">⌁</div>
          </div>

          <div>
            <p className="expertise-category">INFRASTRUCTURE</p>
            <h3>Network & Infrastructure</h3>

            <p className="expertise-description">
              Hands-on experience with networks, monitoring and infrastructure
              gives me a systems-oriented perspective.
            </p>
          </div>

          <div className="expertise-tech">
            <span>Networking</span>
            <span>Linux</span>
            <span>Docker</span>
            <span>Monitoring</span>
            <span>Grafana</span>
          </div>
        </article>

        <article className="expertise-card">
          <div className="expertise-top">
            <span>03</span>
            <div className="expertise-icon">◇</div>
          </div>

          <div>
            <p className="expertise-category">SECURITY</p>
            <h3>Security Mindset</h3>

            <p className="expertise-description">
              Security-focused projects and continuous learning influence how I
              think about data, applications and infrastructure.
            </p>
          </div>

          <div className="expertise-tech">
            <span>Cryptography</span>
            <span>SIEM</span>
            <span>OWASP</span>
            <span>Secure Dev</span>
          </div>
        </article>
      </div>

      <div className="about-bottom">
        <div className="about-quote">
          <p>
            I like understanding how things work
            <em> beyond the interface.</em>
          </p>
        </div>

        <a href="/contact" className="about-link">
          Let's work together
          <span>→</span>
        </a>
      </div>
    </section>
  )
}

export default About