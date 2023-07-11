import React from "react";
import "./pricing.css";

export const PricingCard = ({
  title,
  normal_price,
  promo_price,
  include,
  channels,
  extra,
  id,
  mas,
  contacto,
}) => {
  return (
    <div className="text-center d-flex flex-column align-content-between">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="card">
        <h2 className="price">
          <span className="price__currency">$</span>
          <span className="price__dollar">{promo_price}</span>
        </h2>
        <p className="price-desc">Precio normal: ${normal_price}</p>
        <p className="price-overview">{include}</p>
        <p className="description">{extra}</p>
      </div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${
                id === 0 ? "One" : id === 1 ? "Two" : id === 2 && "Three"
              }`}
              aria-expanded="false"
              aria-controls={`flush-collapse${
                id === 0 ? "One" : id === 1 ? "Two" : id === 2 && "Three"
              }`}
            >
              Mas detalles del plan
            </button>
          </h4>
          <div
            id={`flush-collapse${
              id === 0 ? "One" : id === 1 ? "Two" : id === 2 && "Three"
            }`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>{mas}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn btn-success w-50 align-self-center">
      <i className="fa fa-whatsapp" aria-hidden="true"></i>
      <a
        className="text-white text-decoration-none px-2"
        type="button"
        href={`https://api.whatsapp.com/send?phone=${contacto}&text=Hola%2C%20quiero%20más%20información%20sobre%20el%20plan%20${title}`}
        target="blank"
      >
        Contrata ahora
      </a>
      </div>
    </div>
  );
};
