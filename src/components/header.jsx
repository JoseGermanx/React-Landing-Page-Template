import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="overlay">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 p-0 m-0">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../img/CARR_BANNER-DESK2.png"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h2>Tus series y películas favoritas On Demand</h2>
                      <p>Lo mejor del cine es todas tus pantallas.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../img/CARR_BANNER-DESK.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h2>Deporte en exclusiva</h2>
                      <p>El mundial de fúlbol femenino se vive por DIRECTV.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../img/dgo_futbol.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h2>Deportes en exclusiva</h2>
                      <p>Copa Comebol Sudamericana.</p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row"> 
          <div className="col-md-12">
            <h1>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            <Link to="/contrata" className="btn btn-custom btn-lg">
              Contrata ahora
            </Link>{" "}
          </div>
        </div>
      </div>
    </header>
  );
};
