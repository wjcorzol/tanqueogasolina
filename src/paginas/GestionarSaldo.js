import React, { useRef } from 'react';
import Header from '../componentes/Header';
import NavUsers from '../componentes/NavUsers';
import axios from "axios";
import Cookies from "universal-cookie";

const URLAPISALDO = "http://localhost:3222/api/v1/saldo/ingresar";
const cookies = new Cookies();

function GestionarSaldo() {
  const formGestionarSaldo = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formGestionarSaldo.current);
    const data = {
      usuario: cookies.get('usuario'),
      ingresoEfectivo: formData.get('añadirvalor'),
    };
    console.log(data);
    const respuesta = axios.post(URLAPISALDO, data);
  };

  return (
    <>

      <Header />
      <NavUsers />

      <div className="col-md-12 align-items-center">
        <label htmlFor="buscarUsuarios" className="justify-content-center"><h3>Usuarios Externos</h3></label>
      </div>

      <br />

      <main className="container" style={{ width: '75rem' }}>

        <form ref={formGestionarSaldo}>
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

            <button type="submit" className="col-md-3 btn-lg btn-primary" onClick={handleSubmit}> Registrar </button>
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
