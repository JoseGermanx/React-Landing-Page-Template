import React from "react";
import { PricingCard } from "./pricingCard";

export const Pricing = (props) => {
  
  return (
    
      <div className="container">
        <div className="row">
        {props.data.length > 0 ?
           props.data.map((e) => {
              return (
                <div key={e.id} className="col-sm-6 col-md-4 col-lg-4">
                  <PricingCard
                  className="pricingCard"
                  title={e.title}
                  normal_price={e.normal_price}
                  promo_price={e.promo_price}
                  include={e.include}
                  channels={e.channels}
                  extra={e.extra} />
                </div>
              );
            }): "Loading..."}
            </div>
      </div>
  );
};
