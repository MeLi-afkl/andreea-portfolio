function Projects() {
  const openProject = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="section-label">FEATURED WORK</p>
          <h2>Selected projects</h2>
        </div>
      </div>

      <div className="project-grid">

        {/* 01 — VERILENS */}
        <article className="project-card">
          <div className="project-preview veriliens-preview">
            <span className="project-number">01</span>

            <div className="mini-interface">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="project-info">
            <p>IMAGE FORENSICS · AI</p>

            <h3>VeriLens</h3>

            <span>
              Image forensics platform combining multiple analysis methods and
              AI-assisted detection.
            </span>

            <div className="project-footer">
              <div>
                <small>React</small>
                <small>FastAPI</small>
                <small>Python</small>
              </div>

              <button
                className="project-button disabled"
                aria-label="VeriLens project"
                title="Private project"
              >
                ↗
              </button>
            </div>
          </div>
        </article>

        {/* 02 — STEGACRYPT */}
        <article className="project-card">
          <div className="project-preview stega-preview">
            <span className="project-number">02</span>

            <div className="lock">
              <div className="lock-top"></div>
              <div className="lock-body">◆</div>
            </div>
          </div>

          <div className="project-info">
            <p>CRYPTOGRAPHY · SECURITY</p>

            <h3>StegaCrypt AES</h3>

            <span>
              Secure image steganography combining LSB data hiding with
              AES-256-GCM encryption.
            </span>

            <div className="project-footer">
              <div>
                <small>React</small>
                <small>AES-GCM</small>
                <small>Security</small>
              </div>

              <button
                className="project-button"
                aria-label="View StegaCrypt project"
                onClick={() =>
                  openProject(
                    "https://github.com/MeLi-afkl/StegaCrypt-AES"
                  )
                }
              >
                ↗
              </button>
            </div>
          </div>
        </article>

        {/* 03 — MONITORING STACK */}
        <article className="project-card">
          <div className="project-preview monitoring-preview">
            <span className="project-number">03</span>

            <div className="monitor-chart">
              <span></span>
            </div>
          </div>

          <div className="project-info">
            <p>DEVOPS · OBSERVABILITY</p>

            <h3>Monitoring Stack</h3>

            <span>
              Self-hosted infrastructure monitoring stack with Prometheus,
              Grafana, Alertmanager and Discord alerts, fully containerized
              with Docker Compose.
            </span>

            <div className="project-footer">
              <div>
                <small>Docker</small>
                <small>Prometheus</small>
                <small>Grafana</small>
              </div>

              <button
                className="project-button"
                aria-label="View Monitoring Stack project"
                onClick={() =>
                  openProject(
                    "https://github.com/MeLi-afkl/monitoring-stack"
                  )
                }
              >
                ↗
              </button>
            </div>
          </div>
        </article>

        {/* 04 — CLOUD NATIVE APP */}
        <article className="project-card">
          <div className="project-preview cloud-preview">
            <span className="project-number">04</span>

            <div className="cloud-visual">
              <div className="cloud-node cloud-node-top">
                ☁
              </div>

              <div className="cloud-line"></div>

              <div className="cloud-nodes-bottom">
                <div>K8s</div>
                <div>API</div>
                <div>CI</div>
              </div>
            </div>
          </div>

          <div className="project-info">
            <p>CLOUD · DEVOPS</p>

            <h3>Cloud Native App</h3>

            <span>
              Cloud-native FastAPI application containerized with Docker,
              published to AWS ECR, deployed on Kubernetes and monitored with
              Prometheus and Grafana.
            </span>

            <div className="project-footer">
              <div>
                <small>FastAPI</small>
                <small>Docker</small>
                <small>Kubernetes</small>
                <small>AWS</small>
              </div>

              <button
                className="project-button"
                aria-label="View Cloud Native App project"
                onClick={() =>
                  openProject(
                    "https://github.com/MeLi-afkl/cloud-native-app"
                  )
                }
              >
                ↗
              </button>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Projects