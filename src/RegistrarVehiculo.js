import React from 'react';
import {Link} from 'react-router-dom';

function RegistrarVehiculo() {
  return (
    <div id="wrapper">
      
      <header className="p-3 mb-3 bg-primary text-white border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">            
            
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 k text-decoration-none">
              <img src="img/ExxonMobil.png" alt="ExxonMobil" className='card-img-top' style={{width: '200px'}}/>
            </Link>
            
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            
            <div className="card" >
              <h5 className="card-title">Gasolina Corriente</h5>
              <p className="card-text">10.489  Gal.</p>
            </div>
            
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            
            <div className="card" >
              <h5 className="card-title">Gasolina Extra</h5>
              <p className="card-text">6.256  Gal.</p> 
            </div>         
            
            <div className="dropdown text-end">
              <img src="img/user.png" alt="User" className='card-img-top' style={{width: '100px'}}/>                       
            </div>
            
            <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <Link to="#">Nombre de Usuario</Link>
              <br/>
              <Link to="#">Cerrar Sesión</Link>
            </div>
            
            <hr style={{border:'2px'}}/>
            
            <div className= "container">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/registrarVehiculo" className="nav-link px-2 text-white">Registro de Vehiculos</Link></li>
                <div className="nav-link px-2 text-white">|</div>
                <li><Link to="/gestionarSaldo" className="nav-link px-2 text-white">Agregar Saldo</Link></li>
                <div className="nav-link px-2 text-white">|</div>
                <li><Link to="/tanquearCliente" className="nav-link px-2 text-white">Tanquear Vehiculo</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <br/>

      <main className="container" style={{width: '75rem'}}>
        <div className="container">
          <div className="col-md-12 text-center">
            <h1> Registro de Vehiculos</h1>
          </div>
          <br/>
          <div className="container">
            <div className="col-md-12">
              <form action="" method="POST">
                <div className="row g-2 form-group d-flex-wrap">
                  <div className="col-md-4">
                    <input type="text" className="form-control" id="placaVehiculo" name="placaVehiculo" placeholder="Placa Vehiculo" required/>
                  </div>

                  <div className="col-md-4">
                    <select className="form-control" id="tipoVehiculo">
                      <option selected disabled value="">Tipo Vehiculo</option>
                      <option>Automovil</option>
                      <option>Camioneta</option>
                    </select>
                  </div>
                  
                  <div className="col-md-4">
                      <input type="text" className="form-control" id="marcaVehiculo" name="marcaVehiculo" placeholder="Marca Vehiculo"/>
                  </div>
                </div>
                
                <div className="col-md-12">&nbsp;</div>
                <div className="row g-1 form-group d-flex-wrap ">
                  <div className="col-md-2">&nbsp;</div>
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary w-100">Registrar</button>
                  </div>
                  <div className="col-md-4">
                    <button type="submit2" className="btn btn-secondary w-100">Cancelar</button>
                  </div>
                </div>          
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RegistrarVehiculo;
