import React from 'react';
import { link} from 'react-router-dom';

function TanquearCliente() {
  return (
    <div id="wrapper">
      
      <header className="p-3 mb-3 bg-primary text-white border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">            
            
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 k text-decoration-none">
            </a>
            
            <img src="img/ExxonMobil.png" alt="ExxonMobil" className='card-img-top' style={{width: '200px'}}/>
            
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
              <a href="#">Nombre de Usuario</a>
              <br/>
              <a href="#">Cerrar Sesión</a>
            </div>
            
            <hr style={{border:'2px'}}/>
            
            <div className= "container">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 text-white">Registro de Vehiculos</a></li>
                <div className="nav-link px-2 text-white">|</div>
                <li><a href="#" className="nav-link px-2 text-white">Agregar Saldo</a></li>
                <div className="nav-link px-2 text-white">|</div>
                <li><a href="#" className="nav-link px-2 text-white">Tanquear Vehiculo</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <br/>

      <main className="container" style={{width: '75rem'}}>
        <div className="container">
          <div className="col-md-12">
            <label for="buscarUsuarios" className="justify-content-center"><h3>Realizar un Tanqueo</h3></label>
          </div>
          <br/>
          <div className="row g-1">
            <div className="col-md-6">
              <div className="card2">
                <h4>Saldo Cliente</h4>
                <h5 className="card-text">$ 6.256</h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card2">
                <h4>Puntos Cliente</h4>
                <h5 className="card-text">256</h5> 
              </div>  
            </div>
          </div>
          <div className="col-md-12">&nbsp;</div>
          <div className="col-md-12">&nbsp;</div>
          <div className="container">
            <div className="col-md-12">
              <form action="" method="POST">
                <div className="row g-2 form-group d-flex-wrap">
                  <div className="col-md-4">
                    <select className="form-control" id="tipoCombustible" required>
                      <option selected disabled value="">Tipo Combustible</option>
                      <option>Corriente</option>
                      <option>Extra</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <input type="text" className="form-control" id="buscarUsuarios" name="buscarUsuarios" placeholder="Placa Vehiculo" required/>
                  </div>
                  <div className="col-md-4">
                      <input type="number" className="form-control" id="buscarUsuarios" name="buscarUsuarios" placeholder="Galones" required/>
                  </div>
                </div>
                <div className="row g-1 form-group d-flex-wrap">
                  <div className="col-md-4">&nbsp;</div>
                  <div className="col-md-4">
                    <select className="form-control" id="medioPago" required>
                        <option selected disabled value="">Medio de Pago</option>
                        <option>Saldo Cliente</option>
                        <option>Puntos Cliente</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">&nbsp;</div>
                <div className="row g-1 form-group d-flex-wrap ">
                  <div className="col-md-2">&nbsp;</div>
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary w-100">Registrar Tanqueo</button>
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

export default TanquearCliente;
