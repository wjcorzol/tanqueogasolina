import React from 'react';
import { link} from 'react-router-dom';

function GestionarPrecio() {
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
                <li><a href="#" className="nav-link px-2 text-white">Ingreso de combustibles</a></li>
                <div className="nav-link px-2 text-white">|</div>
                <li><a href="#" className="nav-link px-2 text-white">Tanquear Cliente</a></li>
                <div className="nav-link px-2 text-white">|</div>
                <li><a href="#" className="nav-link px-2 text-white">Inhabilitar/Habilitar clientes</a></li>
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
            <h6> Ingresar Lote de combustible</h6>
            <br/>
            <div className="row">
              <div className="col-md-4">
                  <input type="text" name="tipoCombustible" id="TipCom" placeholder="Tipo de combustible" className="form-control"/>
              </div>
              
              <div className="col-md-4">
                  <input type="text" name="Cantidad" id="cantgal" placeholder="Cantidad (gal)" className="form-control"/>
              </div>

              <div className="col-md-4">
                  <input type="date" name="fingreso" id="fing" placeholder="Fecha de ingreso" className="form-control"/>
              </div>
            </div>
            <div className="col-md-12">&nbsp;</div>
            <div className="row">
              <div className="col-md-4">&nbsp;</div>
              <div className="col-md-4">
                  <input type="text" name="precio" id="precio" placeholder="Precio" className="form-control"/>
              </div>
            </div>
            <div className="col-md-12">&nbsp;</div>
            <div className="row">
              <div className="col-md-2">&nbsp;</div>
              <div className="col-md-4">
                <button type="submit" className="btn-lg btn-primary w-100"> Ingresar combustible </button>
              </div>

              <div className="col-md-4">
                <button type="submit2" className="btn-lg btn-secondary w-100">Cancelar </button>
              </div>
            </div>
            <br/>
            <br/>      
            <br/>           
            <br/>                
            <h6>  Consultar  Lotes Combustible </h6>
            <br/>
            <div className="row g-1">
                <div className="col-md-4">
                    <input type="date" name="fingreso" id="fing" placeholder="Fecha de ingreso" className="form-control"/>
                </div>
                <div className="col-md-4">
                    <input type="date" name="fsalida" id="fsali" placeholder="Fecha de salida" className="form-control"/>
                </div>
                <div className="col-md-4">
                <button type="submit2" className="btn-lg btn-primary w-100">Buscar </button>
                </div>
                <div className="col-md-12">&nbsp;</div>
            </div>
            
        </form>

        <table className="table caption-top">
            <caption>Combustible</caption>
            <thead>
              <tr>
                <th scope="col">Tipo de combustible</th>
                <th scope="col">Fecha de ingreso</th>
                <th scope="col">Fecha final</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Gasolina Extra</th>
                <td>dd/mm/año</td>
                <td>31/12/2019</td>
                <td>$12400</td>
              </tr>
              <tr>
                <th scope="row">Gasolina Corriente</th>
                <td>dd/mm/año</td>
                <td>dd/mm/año</td>
                <td>$0000</td>
              </tr>
              
            </tbody>
          </table>
    </main>
    </div>
  );
}

export default GestionarPrecio;
