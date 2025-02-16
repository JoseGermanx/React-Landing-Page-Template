import React from "react";

export const HeaderLanding = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-md-offset-2 intro-text">
                <h1 className="titulo">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
