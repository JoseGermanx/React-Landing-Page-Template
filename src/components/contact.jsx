
import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const CODE_1 = process.env.REACT_APP_NOT_SECRET_CODE1;
const CODE_2 = process.env.REACT_APP_NOT_SECRET_CODE2;
const CODE_3 = process.env.REACT_APP_NOT_SECRET_CODE3;

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  const clearInputs = () => { 
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(CODE_1, CODE_2, e.target, CODE_3)
      .then(
        (result) => {
          console.log(result.text);
          clearInputs();
          clearState();
          alert("Mensaje enviado correctamente")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="section-title">
                <h2>Envia un mensaje a RSA</h2>
                <p>
                  Por favor llena el formulario y nos pondremos en contacto a la
                  brevedad posible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar un mensaje
                </button>
              </form>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4t text-align-rigth contact-info">
              <div className="contact-item">
                <h3>Información de contacto</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Dirección
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Teléfono
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 RSA Telecomunicaciones. Implement by{" "}
            <a href="http://www.betacode.online" rel="nofollow">
              Beta Code Software
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
