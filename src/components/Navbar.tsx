import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <NavLink className="brand" to="/" onClick={closeMenu}>
        <span className="brand-name">MELI</span>
      </NavLink>

      <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink
          className="mobile-contact-link"
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </nav>

      <NavLink className="nav-cta" to="/contact" onClick={closeMenu}>
        Let's build <span>→</span>
      </NavLink>

      <button
        className={`menu-toggle ${menuOpen ? 'menu-toggle-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Navbar