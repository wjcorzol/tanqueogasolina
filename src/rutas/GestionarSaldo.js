import React from 'react';
import Header from '../componentes/Header';
import NavUsers from '../componentes/NavUsers';

function GestionarSaldo() {
  return (
    <>

      <Header />
      <NavUsers />

      <div className="col-md-12 align-items-center">
        <label htmlFor="buscarUsuarios" className="justify-content-center"><h3>Usuarios Externos</h3></label>
      </div>

      <br />

      <main className="container" style={{ width: '75rem' }}>

        <form>
          <h3 className="text-center"> Agregar Saldo</h3>
          <br />
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

          <br />

          <div className="row g-1">
            <div className="col-md-6">
              <input type="number" name="añadirvalor" id="valortanqueo" placeholder="Valor a añadir" className="form-control2" />
            </div>

            <button type="submit" className="col-md-3 btn-lg btn-primary"> Registrar </button>
          </div>

        </form>

        <br />

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
    </ >
  );
}

export default GestionarSaldo;
