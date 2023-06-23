import React from "react";
import "./pricing.css";

export const PricingCard = ({title, normal_price, promo_price, include, channels, extra }) => {
  return (
    <div>
      <div className="title"><h1>{title}</h1></div>
      <div className="card">
        <h2 className="price">
          <span className="price__currency">$</span>
          <span className="price__dollar">{normal_price}</span>
        </h2>

        <p className="price-desc">{promo_price}</p>

        <p className="price-overview">{include}</p>

        <p className="description">{extra}</p>
      </div>
     
    </div>
  );
};
