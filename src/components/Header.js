import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
      <nav
        className="navbar navbar-expand-lg shadow-sm"
        aria-label="Main navigation"
      >
        <div className="container">
          <NavLink to="/" className="fs-3 fw-bold">
            Kelsey White
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/" end>
                  <i className="ri-home-2-fill"></i> Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/about">
                  <i className="ri-user-fill"></i> About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/projects">
                  <i className="ri-mac-line"></i> Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    );
}