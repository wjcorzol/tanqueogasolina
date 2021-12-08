import React, { useRef } from 'react';
import Header from '../componentes/Header';
import NavAdmin from '../componentes/NavAdmin';

function GestionarCliente() {
  const formGestionarCliente = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formGestionarCliente.current);
    const data = {
      cliente: formData.get('idCliente'),
    };
    console.log(data);
  };
  
  return (
    <div id="wrapper">

      <Header />
      <NavAdmin />


      <div className="col-md-12 align-items-center">
        <label htmlFor="buscarUsuarios" className="justify-content-center"><h3>Usuarios Externos</h3></label>
      </div>

      <br/>

      <main className="container d-flex">
        <div className="container col-md-4">
          <form action="" className="" ref={formGestionarCliente}>
            <div className="form-group">
              <input type="text" id="idCliente" name="idCliente" placeholder="Id Cliente" className="form-control"/>
            </div>
            <br/>
            <br/>
            <div className="form-group align-items-center">
              <button type="submit" className="col-md-12 btn-lg btn-secondary" onClick={handleSubmit}>Consultar Cliente</button>    
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
            <div className="col-md-2">&nbsp;</div>
            <button className="col-md-4 btn btn-primary">Habilitar Todos</button>
            <button className="col-md-4 btn btn-secondary">Inhabilitar Todos</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GestionarCliente;
