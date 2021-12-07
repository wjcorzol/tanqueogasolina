import React from 'react';
import Header from '../componentes/Header';
import NavUsers from '../componentes/NavUsers';

function TanquearCliente() {
  return (
    <div id="wrapper">
      
      <Header />
      <NavUsers />

      <br/>

      <main className="container" style={{width: '75rem'}}>
        <div className="container">
          <div className="col-md-12 text-center">
            <label htmlFor="buscarUsuarios" ><h3>Realizar un Tanqueo</h3></label>
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
                      <option disabled value="">Tipo Combustible</option>
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
                        <option disabled value="">Medio de Pago</option>
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
