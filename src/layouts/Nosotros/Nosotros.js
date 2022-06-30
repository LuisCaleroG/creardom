import React from "react";
import './nosotros.css'

export const Nosotros = () => {
  return (
    <div className="container text-center">
      <div className="row text-center">
        <div className="col-lg-12">
          <h2 id="nosotros">Nosotros</h2>
        </div>
        <div className="col-lg-12">
          <p>
            <span className="text-warning fw-bold">CREARDOM</span> es una una
            empresa especializada en la producción de contenido digital
            educativo, esto con la finalidad de reducir costos a los creadores
            que desean emprender en esta nueva modalidad de negocio. Como
            objetivo principal tenemos el hecho de brindar esa oportunidad a
            personas que a lo mejor les gustaria producir su contenido, pero a
            su vez no cuenta con esa primera inversión que se requiere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
