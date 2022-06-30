import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./navbar.css";


export const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ">
        <div className="container  ">
          <a className="navbar-brand text-warning" href="/">
            CrearDom
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarColor02">
            
            <ul className="navbar-nav ml-auto ">
              <li onClick={BacktoTop()} className="nav-item" >
                <Link  to="/" className="nav-link">
                  Inicio
                </Link>
              </li >
  
              <li className="nav-item">
              <a className="nav-link" href="#servicios">Servicios</a>    
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#precios">Precios</a>    
              </li>
              <li  className="nav-item">
                <a className="nav-link" href="#nosotros">Nosotros</a>           
              </li>
            </ul>

            <button onClick={BacktoTop()} className="btn btn-success my-2 my-sm-0" type="submit">
              <Link to="/formulario" className="nav-link text-white">
                Cotizar
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};




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

export default Navbar;
