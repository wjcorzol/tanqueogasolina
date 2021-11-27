import React from 'react';
import { link} from 'react-router-dom';

function GestionarCliente() {
  return (
    <div id="wrapper">
      
      <header className="p-3 mb-3 bg-primary text-white border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">            
            
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 k text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
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

      <main className="container d-flex">
        <div className="container col-md-4">
          <form action="" className="">
            <div className="form-group">
              <input type="text" id="idCliente" name="idCliente" placeholder="Id Cliente" className="form-control"/>
            </div>
            <br/>
            <br/>
            <div className="form-group align-items-center">
              <button type="submit" className="col-md-12 btn-lg btn-secondary">Consultar Cliente</button>    
            </div>
          </form>
        </div>

        <div className="container col-md-10 table-responsive align-items-center">
          <table className="table table-striped table-sm">
            <thead className="bg-primary text-white justify-content-center">
              <tr>
                  <th>Placa Vehiculo</th>
                  <th>Habilitar/Inhabilitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC123</td>
                <td>
                  <button className="btn btn-primary">Habilitar</button>
                  <button className="btn btn-secondary">Inhabilitar</button>
                </td>
              </tr>
                <tr>
                  <td>ABC123</td>
                  <td>
                    <button className="btn btn-primary">Habilitar</button>
                    <button className="btn btn-secondary">Inhabilitar</button>
                  </td>
                </tr>
                <tr>
                  <td>ABC123</td>
                  <td>
                    <button className="btn btn-primary">Habilitar</button>
                    <button className="btn btn-secondary">Inhabilitar</button>
                  </td>
                </tr>
            </tbody>
          </table>
          <div className="form-group row">
            <div className=col-md-2>&nbsp;</div>
            <button className="col-md-4 btn btn-primary">Habilitar Todos</button>
            <button className="col-md-4 btn btn-secondary">Inhabilitar Todos</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GestionarCliente;
