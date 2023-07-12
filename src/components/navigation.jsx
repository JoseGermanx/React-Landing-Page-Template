import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    >
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="#page-top">
            RSA Telecomunicaciones
          </a>{" "}
        </div>
        <div className="navbar-header">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#about">
                    Acerca de RSA
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#team">
                    Trabaja con nosotros
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#contact"
                  >
                    Contactos
                  </a>
                </li>
                <li class="nav-item">
                  <Link to="/contrata" className="btn btn-custom btn-lg">
                    Contrata ahora
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
