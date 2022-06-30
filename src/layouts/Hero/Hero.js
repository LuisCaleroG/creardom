import React from 'react'
import ImagenHero from '../../../src/assets/img/heropic.png'
import './hero.css'

export const Hero = () => {
  return (

    <div className='container'>
    <div className='row mt-5 '>
    <div className='col-lg-6 col-md-12'>

        <p id="hero" className='text-warning font-weight-bold h4 mt-2'>Impulsa tu crecimiento</p>
        <h2 className="h1">DESARROLLAMOS EL POTENCIAL DE TU CONTENIDO.</h2>
        <p className='mt-3 '>Es el momento de crear una comunidad de estudiantes basado en tus capacitaciones, esto sin la necesidad de comprar equipos caros, ni mucho menos invertir tu tiempo en esos largo periodos de edición.</p>
        <div className="input-group mb-3">
      {/* <input type="text" className="form-control" placeholder="Deja tu correo para recibir ofertas y promociones" aria-label="Deja tu correo para recibir ofertas y promociones" aria-describedby="button-addon2" />
      <button className="btn btn-dark" type="button" id="button-addon2">Enviar</button> */}
    </div>
    </div>
    <div className='col-lg-6 col-md-12'>
        <img className='img-fluid p-1' src={ImagenHero} alt=""/>
    </div>

    </div>
  

  </div>


  )
}


export default Hero