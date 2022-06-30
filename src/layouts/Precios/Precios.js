import React from 'react'
import {Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './precios.css'

export const Precios = () => {
  return (
    <div id="precios" className='container mt-5 mb-5'>
        <div id="rowprecios"className='row text-center'>
            <div className='col-lg-12'>
            <h3 className='text-white'>PRECIOS DESDE:</h3>
            </div>
            <div className='col-lg-12'>
            <h3 className='text-white'>RD$995.00</h3>             
                </div>
                <div className='col-lg-12'>
                <button onClick={BacktoTop()} className="btn btn-success my-2 my-sm-0" type="submit">
        <Link  to="/formulario" className='nav-link text-white'>Cotizar</Link> 
        </button>
                </div>
        </div>
    </div>
    
  )
}

export default Precios


function BacktoTop () {
  
  const [BacktoTop,setBacktoTop] = useState(false)
 
     useEffect(()=>{
         window.addEventListener("scroll",()=>{
             if(Window.scrollY > 100) {
                 setBacktoTop(true)
             } else{
                 setBacktoTop(false)
             }
         })
 
     },[])
 
     const scrollUp = ()=>{
         window.scrollTo({
             top:0,
             behavior: "smooth"
         })
     }
 
  return scrollUp
 
 }

