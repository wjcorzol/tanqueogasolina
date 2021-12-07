import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {


    let corriente = {"precio":"8400", "cantidad":"10489"};
return (
    <header className="bg-primary text-white">
        <div className="container-fluid">
            <div className="row">&nbsp;</div>
            <div className="d-flex flex-wrap row">            
                <div className="col-md">
                    <Link to="/" className="justify-content-left">
                        <img src="img/ExxonMobil.png" alt="ExxonMobil" className='rounded mx-auto d-block' style={{width: '200px'}}/>
                    </Link>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="card col-md-5 border rounded-lg" >
                            <h5 className="card-title">Corriente</h5>
                            <label htmlFor="cantidadCorriente" className="card-text">{corriente.cantidad+" Gal."}</label>
                            <label htmlFor="precioCorriente" className="card-text">{"$"+corriente.precio}</label>
                        </div>
                        <div className="col">&nbsp;</div>
                        <div className="card col-md-5 border rounded-lg" >
                            <h5 className="card-title">Extra</h5>
                            <label htmlFor="cantidadExtra" className="card-text">6.256  Gal.</label>
                            <label htmlFor="precioExtra" className="card-text">$ 9.489</label> 
                        </div>
                    </div>
                </div>

                <div className="col-md row">
                    <div className="col-md-4">
                        <div className="container">
                            <img src="img/user.png" alt="User" className='rounded mx-auto d-block' style={{width: '100px'}}/>                       
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="text-start">
                            <div className="row">&nbsp;</div>
                            <label htmlFor="nombreUsuario">Nombre de Usuario</label>
                            <br/>
                            <Link to="#">Cerrar Sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </header>);
}
