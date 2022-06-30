import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Hero,Nosotros,Ofrecimientos,Precios,Servicios } from '../../layouts'

export const Inicio = () => {
  return (

   <>
   <Navbar/>
   <Hero/>
   <Servicios/>
   <Ofrecimientos/>
   <Precios/>
   <Nosotros/>

   </>
  )
}

export default Inicio