import React from "react";
import { Link } from "react-router-dom";


function Navbar2() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Categories
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brands
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item " to="/mercedes">
                      Mercedes-benz
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="/audi">
                      Audi
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item " to="/tata">
                      Tata
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="/lam">
                      Lamborghini
                    </Link>
                  </li> <li>
                    <Link className="dropdown-item " to="/honda">
                      Honda
                    </Link>
                  </li> <li>
                    <Link className="dropdown-item " to="/ford">
                      Ford
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="/tesla">
                      Tesla
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Luxury Cars
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/bent">
                    BENTLEY CONTINENTAL GT
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mayb">
                    2004 MAYBACH 62
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/bmwsports">
                    BMW 740LI M
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/rghst">
                    2013 ROLLS-ROYCE GHOST
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Super Cars
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/ferraric">
                    2011 FERRARI CALIFORNIA
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pors">
                    2015 PORSCHE 911 GT3
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mcl">
                    2017 MCLAREN 570S COUPE
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/bmwm5">
                    2018 BMW M5
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vintage cars
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/cardillac">
                      1931 Cardillac v12
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/markv">
                    1952 Jaguar Mark V
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/rolls">
                    1937 ROLLS ROYCE PHANTOM III
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
