import React from "react";
import { PricingCard } from "./pricingCard";

export const Pricing = (props) => {
  
  return (
    <section>
      <div className="container">
        {props.data.length > 0 ?
           props.data.map((e) => {
              return (
                <div key={e.id}>
                  <PricingCard
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
    </section>
  );
};
