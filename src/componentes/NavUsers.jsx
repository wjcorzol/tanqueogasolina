import React from "react";
import { Link } from "react-router-dom";

export default function NavUsers() {
    return (
    <div className="navbar bg-primary container-fluid justify-content-center">

        <nav className= "wrapper">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/registrarVehiculo" className="nav-link px-2 text-white">Registro de Vehiculos</Link></li>
                <div className="nav-link px-2 text-white">|</div>
                <li><Link to="/gestionarSaldo" className="nav-link px-2 text-white">Agregar Saldo</Link></li>
                <div className="nav-link px-2 text-white">|</div>
                <li><Link to="/tanquearCliente" className="nav-link px-2 text-white">Tanquear Vehiculo</Link></li>
            </ul>
        </nav>
    </div>      
    );
}