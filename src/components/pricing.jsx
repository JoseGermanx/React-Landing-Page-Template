import React from "react";
import { PricingCard } from "./pricingCard";

export const Pricing = (props) => {
  return (
    <div className="container">
      <div className="grid gap-5">
        {props.data.length > 0
          ? props.data.map((e, id) => {
              return (
                <div key={id} className="col-sm-6 col-md-4 col-lg-4">
                  <PricingCard
                    className="pricingCard"
                    title={e.title}
                    normal_price={e.normal_price}
                    promo_price={e.promo_price}
                    include={e.include}
                    channels={e.channels}
                    extra={e.extra}
                  />
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${id === 0 ? "One" : id === 1 ? "Two" : id === 2 && "Three"}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${id === 0 ? "One" : id === 1 ? "Two" : id === 2 && "Three"}`}
                        >
                          Mas detalles del plan
                        </button>
                      </h4>
                      <div
                        id={`flush-collapse${id === 0 ? "One" : id === 1 ? "Two" : id === 2 && "Three"}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>{e.mas}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a type="button" className="btn btn-success" href={`https://api.whatsapp.com/send?phone=${e.contacto}&text=Hola%2C%20quiero%20más%20información%20sobre%20el%20plan%20${e.title}`} target="blank">Contrata ahora</a>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
};
