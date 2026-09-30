function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-content">
        <div className="eyebrow">
          DEVELOP <span>·</span> AUTOMATE <span>·</span> SECURE
        </div>

        <h1>
          Your idea.
          <br />
          Built into a
          <br />
          <span>real solution.</span>
        </h1>

        <p className="hero-description">
          I’m Meli, a software and network engineer building custom websites,
          web applications and automation solutions tailored to real ideas,
          workflows and business needs.
        </p>

        <div className="hero-buttons">
          <a className="primary-button" href="/contact">
            Start a project <span>→</span>
          </a>

          <a className="secondary-button" href="/projects">
            Explore my work <span>↓</span>
          </a>
        </div>
      </div>

      <div className="hero-visual solution-visual">
        <div className="visual-orbit orbit-one"></div>
        <div className="visual-orbit orbit-two"></div>

        <div className="solution-window">
          <div className="solution-window-header">
            <div className="solution-window-title">
              <span className="solution-logo">M</span>
              Custom Solution
            </div>

            <div className="window-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>

          <div className="solution-body">
            <div className="solution-kicker">YOUR IDEA</div>

            <h3>
              From concept to <span>working product.</span>
            </h3>

            <div className="solution-flow">
              <div className="flow-node">
                <small>01</small>
                <strong>Idea</strong>
                <span>Goals & needs</span>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-node flow-node-active">
                <small>02</small>
                <strong>Build</strong>
                <span>Design & code</span>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-node">
                <small>03</small>
                <strong>Launch</strong>
                <span>Ready to use</span>
              </div>
            </div>

            <div className="solution-options">
              <span>Web Application</span>
              <span>Business Website</span>
              <span>Automation</span>
            </div>

            <div className="solution-capabilities">
              <div className="capability-item">
                <div className="capability-icon">⌘</div>

                <div>
                  <small>WEB APPLICATION</small>
                  <span>Interface → API → Data</span>
                </div>
              </div>

              <div className="capability-item">
                <div className="capability-icon">⚙</div>

                <div>
                  <small>AUTOMATION</small>
                  <span>Trigger → Process → Result</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-skills">
        <div>
          <span className="skill-icon">⌘</span>
          Web Development
        </div>

        <div>
          <span className="skill-icon">⚙</span>
          Automation
        </div>

        <div>
          <span className="skill-icon">◇</span>
          Cybersecurity
        </div>

        <div>
          <span className="skill-icon">◎</span>
          Infrastructure
        </div>
      </div>
    </section>
  )
}

export default Home