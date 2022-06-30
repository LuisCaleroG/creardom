import React from 'react'
import Grabar from '../../../src/assets/img/grabar.png'
import Editar from '../../../src/assets/img/editar.png'
import Planificar from '../../../src/assets/img/planificar.png'
import './servicios.css'

export const Servicios = () => {
  return (
    <div className='container'>
        <h2 id="servicios" className='text-center mt-5'>Nuestros servicios</h2>

        <div className='row mt-3'>
            <div className='col-md-4'>
                <div className='titulo d-flex '>
                    <img src={Grabar} alt='' />
                    <h4>Grabación</h4>
                </div>
                    <p>
                    Nos encargamos del proceso completo de grabacion.
                    </p>
            </div>
            <div className='col-md-4'>
            <div className='titulo d-flex'>
                    <img src={Editar} alt='' />
                    <h4>Edicion</h4>
                </div>
                    <p>
                    Editamos todo tu contenido, independientemente de que no hayamos colaborado en la gracbacion del mismo.
                    </p>
            </div>
            <div className='col-md-4'>
            <div className='titulo d-flex'>
                    <img src={Planificar} alt='' />
                    <h4>Planificación</h4>
                </div>
                    <p>
                    Solo debes contar una idea de lo que deseas y nosotros la planificamos por ti.
                    </p>
            </div>
        </div>

    </div>


  )
}

export default Servicios;