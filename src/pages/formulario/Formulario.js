import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export const Formulario = () => {
  const [formularioenviado, cambiarformulario] = useState(false);
  return (
    
    <div className="container mt-5 mb-5">
      <Navbar/>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          numero: "",
          tema: "",
          descripcion: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacio.";
          }

          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo.";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "Por favor ingresa una dirección de correo valida.";
          }

          if (!valores.numero) {
            errores.numero = "Por favor digita el numero contacto.";
          } else if (
            !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(valores.numero)
          ) {
            errores.numero =
              "Por favor ingresa un número telefonico valido en formato (000-000-0000)";
          }

          if (!valores.tema) {
            errores.tema = "Por favor digita el tema principal.";
          }
          if (!valores.descripcion) {
            errores.descripcion = "Por favor ingresa un descripcion.";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var requestOptions = {
              method: "post",
              headers: myHeaders,
              redirect: "follow",
              body: JSON.stringify([{"Nombre":valores.nombre,"Correo":valores.correo,"Telefono":valores.numero,"Tema":valores.tema,"Descripcion":valores.descripcion}])          
            };

            const API = process.env.REACT_APP_API

          fetch(API, requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));

          resetForm();
          console.log(valores);
          cambiarformulario(true);
          setTimeout(() => cambiarformulario(false), 5000);
          console.log("formulario enviado");





        }}
      >
        {({ errors, touched }) => (
          <Form>
            <fieldset>
              <legend className="text-center">Formulario</legend>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Nombre
                </label>
                <Field
                  name="nombre"
                  type="text"
                  className="form-control"
                  id="nombre"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su nombre"
                />
              </div>

              {touched.nombre && errors.nombre && (
                <div className="alert alert-dismissible alert-danger">
                  {" "}
                  <strong>{errors.nombre}</strong>{" "}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Correo
                </label>
                <Field
                  name="correo"
                  type="email"
                  className="form-control"
                  id="correo"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su correo"
                />
                <small id="correo" className="form-text text-muted">
                  Nunca compartiremos su correo electrónico con nadie más.
                </small>
              </div>

              {touched.correo && errors.correo && (
                <div className="alert alert-dismissible alert-danger">
                  {" "}
                  <strong>{errors.correo}</strong>{" "}
                </div>
              )}

              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4"
                >
                  Numero de contacto
                </label>
                <Field
                  name="numero"
                  type="tel"
                  className="form-control"
                  id="numero"
                  placeholder="Ingrese su telefono"
                />
              </div>

              {touched.numero && errors.numero && (
                <div className="alert alert-dismissible alert-danger">
                  {" "}
                  <strong>{errors.numero}</strong>{" "}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Tema principal del contenido
                </label>
                <Field
                  name="tema"
                  type="text"
                  className="form-control"
                  id="tema"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese la idea principal"
                />
              </div>

              {touched.tema && errors.tema && (
                <div className="alert alert-dismissible alert-danger">
                  {" "}
                  <strong>{errors.tema}</strong>{" "}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label mt-4">
                  Descripcion del tema
                </label>
                <Field
                  as="textarea"
                  name="descripcion"
                  className="form-control"
                  id="descripcion"
                  rows={3}
                />
              </div>

              {touched.descripcion && errors.descripcion && (
                <div className="alert alert-dismissible alert-danger">
                  {" "}
                  <strong>
                    {"Por favor ingresa la descripción del proyecto."}
                  </strong>{" "}
                </div>
              )}

              <button type="submit" className="btn btn-primary mb-3">
                Enviar
              </button>

              {formularioenviado && (
                <div className="alert alert-dismissible alert-success">
                  <strong>Formulario enviado con éxito!</strong>
                </div>
              )}
            </fieldset>
          </Form>
        )}
      </Formik>

    </div>

  );
};

export default Formulario;
