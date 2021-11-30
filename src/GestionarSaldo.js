import React from 'react';
import {Link} from 'react-router-dom';

function GestionarSaldo() {
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

      <div className="col-md-12 align-items-center">
        <label for="buscarUsuarios" className="justify-content-center"><h3>Usuarios Externos</h3></label>
      </div>

      <br/>

      <main className="container" style={{width: '75rem'}}>
      
        <form>
            <h3> Agregar Saldo</h3>
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

            <br/>

            <div className="row g-1">
                <div className="col-md-6">
                    <input type="number" name="añadirvalor" id="valortanqueo" placeholder="Valor a añadir" className="form-control2"/>
                </div>

                <button type="submit" className="col-md-3 btn-lg btn-primary"> Registrar </button>
            </div>

        </form>             

        <br/>

        <table className="table caption-top">
            <thead className="bg-secondary text-white">
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Placa</th>
                <th scope="col">Tipo de Combustible</th>
                <th scope="col">Valor</th>
                <th scope="col">Volumen (gal)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">dd/mm/año</th>
                <td>ABC123</td>
                <td>Corriente</td>
                <td>$ 0000</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">dd/mm/año</th>
                <td>ABC123</td>
                <td>Extra</td>
                <td>$ 0000</td>
                <td>0</td>
              </tr>
              
            </tbody>
          </table>
    </main>
    </div>
  );
}

export default GestionarSaldo;
