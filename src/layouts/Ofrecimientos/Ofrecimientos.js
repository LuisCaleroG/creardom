import React from "react";
import Planificamos from "../../../src/assets/img/planificamos.jpg";
import Grabamos from "../../../src/assets/img/grabamos.jpg";
import Publicamos from "../../../src/assets/img/publicamos.jpg";
import Editamos from "../../../src/assets/img/editamos.jpg";
import Ahorro from "../../../src/assets/img/ahorro.jpg";
import Servicio from "../../../src/assets/img/servicio.jpg";
import Equipos from "../../../src/assets/img/equipos.jpg";
import "./ofrecimientos.css";

export const Ofrecimientos = () => {
  return (
    <section id="galeria" className="container">
      <div className="text-center">
        <h2 className="mt-5 text-center">¿Qué podemos realizar por ti?</h2>
      </div>

      <div className="row ">
        <div className="col-lg-6 col-sm-12 p-3">
          <figcaption className="figure-caption">
            <h5 className="text-success fw-bold">Planificación</h5>.
          </figcaption>
          <img
            className="figure-img img-fluid rounded"
            src={Planificamos}
            alt=""
          />
        </div>
        <div className="col-lg-6 col-sm-12 p-3">
          <figcaption className="figure-caption">
            <h5 className="text-success fw-bold">Grabación</h5>.
          </figcaption>
          <img className="figure-img img-fluid rounded" src={Grabamos} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 p-3">
          <figcaption className="figure-caption">
            <h5 className="text-success fw-bold">Edición</h5>.
          </figcaption>
          <img className="figure-img img-fluid rounded" src={Editamos} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 p-3">
          <figcaption className="figure-caption">
            <h5 className="text-success fw-bold">Publicación</h5>.
          </figcaption>
          <img
            className="figure-img img-fluid rounded"
            src={Publicamos}
            alt=""
          />
        </div>
      </div>

      <div className="container text-center pt-5">
        <h2 className="mt-3  text-center">¿Qué te ofrecemos?</h2>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-4 ">
            <figure className="figure mb-5">
            <figcaption className="figure-caption"><h5 id='h5ofrecimiento' className="text-success">Excelente Servicio Al Cliente</h5></figcaption>
              <img             
                src={Servicio}
                className="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption  id="figure"  className="figure-caption">
                Contamos con un personal altamente calificado, sumamente
                colaborador, creativo y siempre buscando complacer tus
                necesidades. De igual forma cuentan con la capacitacion
                necesaria para transformar tus ideas en realidad.
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 ">
            <figure className="figure mb-5">
            <figcaption figcaption="figure-caption"><h5 id='h5ofrecimiento' className="text-success">Equipos de calidad</h5></figcaption>
              <img
                src={Equipos}
                className="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption id="figure" className="figure-caption">
                Nuestros estudios de grabacion cuenta con los ultimos equipos
                tecnologicos del mercado, brindando asi la oportunidad de que tu
                contenido salga con una calidad que cumple con todos los
                estandares de la industria del contenido digital.
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 ">
            <figure className="figure">
            <figcaption className="figure-caption"><h5 id='h5ofrecimiento' className="text-success">Ahorro en dinero y tiempo</h5></figcaption>
              <img
                id="imagencard"
                src={Ahorro}
                className="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption id="figure" className="figure-caption">
                Te ahorramos esa primera inversion de prueba, es decir, con
                nosotros no tienes el temor a comprar equipos que luego mas
                tarde ya no vas a poder utilizar, ademas te brindamos la
                oportunidad de editar y publicar tu contenido si asi lo
                requieres.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ofrecimientos;
