import * as React from "react";
import "./footer.css";

const Footer = () => (
  <div className="text-center text-lg-start bg-light text-muted">
    <section>
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="footer col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Aventuras</h6>
            <p>
              <a href="#" className="text-reset">
                Trekking
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Parapente
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Kite Surf
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Descenso Extremo
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Mapa de sitio</h6>
            <p>
              <a href="#" className="text-reset">
                Home
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Aventuras
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Precios
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Contacto
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="text-center p-4">
      © 2022 Copyright - Javier Ruda Bart Coder House -
    </div>
  </div>
);

export default Footer;
