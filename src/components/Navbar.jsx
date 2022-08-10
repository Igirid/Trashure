import { Link } from "react-router-dom";
import Logo from "../imgs/trashure-logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light mx-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Trashure" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown mx-3">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/about">
                  Donation
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link className="nav-link" to="/about">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mx-3">
                <button type="button" className="btn btn-outline-secondary rounded-4">
                  Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
