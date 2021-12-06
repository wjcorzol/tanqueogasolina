import React, { useState} from "react";
import { Link } from "react-router-dom";

export default function NavAdmin() {
    return (
    <div classname="navbar">
        <hr style={{border:'2px'}}/>

        <nav className= "container">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/gestionarPrecio" className="nav-link px-2 text-white">Ingreso de combustibles</Link></li>
                <div className="nav-link px-2 text-white">|</div>
                <li><Link to="/tanquearClienteAdmin" className="nav-link px-2 text-white">Tanquear Cliente</Link></li>
                <div className="nav-link px-2 text-white">|</div>
                <li><Link to="/gestionarCliente" className="nav-link px-2 text-white">Inhabilitar/Habilitar clientes</Link></li>
            </ul>
        </nav>
    </div>      
    );
}