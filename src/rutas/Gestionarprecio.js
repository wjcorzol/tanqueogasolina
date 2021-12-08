import React, { useRef } from 'react';
import Header from '../componentes/Header';
import NavAdmin from '../componentes/NavAdmin';

function GestionarPrecio() {

  const formGestionarPrecio = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formGestionarPrecio.current);
    const data = {
      tipoComb: formData.get('tipoCombustible'),
      cantidad: formData.get('Cantidad'),
      fecha: formData.get('fingreso'),
      precio: formData.get('precio'),
    };
    console.log(data);
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
    const formData = new FormData(formGestionarPrecio.current);
    const data = {
      fechaIngreso: formData.get('fingreso2'),
      fechaSalida: formData.get('fsalida'),
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

      <main className="container" style={{width: '75rem'}}>
      
        <form ref={formGestionarPrecio}>
            <h3 className="text-center"> Ingresar Lote de combustible</h3>
            <br/>
            <div className="row">
      
              <div className="col-md-4">
                <select className="form-control" id="TipCom" name="tipoCombustible" required>
                  <option disabled value="">Tipo de Combustible</option>
                  <option value="1">Corriente</option>
                  <option value="2">Extra</option>
                </select>
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
                <button type="submit" className="btn-lg btn-primary w-100" onClick={handleSubmit}> Ingresar combustible </button>
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
                    <input type="date" name="fingreso2" id="fing" placeholder="Fecha de ingreso" className="form-control"/>
                </div>
                <div className="col-md-4">
                    <input type="date" name="fsalida" id="fsali" placeholder="Fecha de salida" className="form-control"/>
                </div>
                <div className="col-md-4">
                <button type="submit2" className="btn-lg btn-primary w-100" onClick={handleSubmit2}>Buscar </button>
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
