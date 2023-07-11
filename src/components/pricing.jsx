import React from "react";
import { PricingCard } from "./pricingCard";

export const Pricing = (props) => {
  return (
    <div className="container my-sm-5 my-md-5 my-lg-5">
      <div className="row">
        {props.data.length > 0
          ? props.data.map((e, id) => {
              return (
                <div key={id} className="col-sm-12 col-md-12 col-lg-4 my-sm-3 my-md-3 my-lg-5 my-3">
                  <PricingCard
                    title={e.title}
                    normal_price={e.normal_price}
                    promo_price={e.promo_price}
                    include={e.include}
                    channels={e.channels}
                    extra={e.extra}
                    id={id}
                    mas={e.mas}
                    contacto={e.contacto}
                  />
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
};
