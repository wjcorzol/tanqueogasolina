import React, { useRef } from "react";
import Header from "../componentes/Header";
import NavAdmin from "../componentes/NavAdmin";
import TablaControlComb from "../componentes/tablaControlComb";
import INVENTARIO from "../mocks/inventario";

function GestionarPrecio() {
  const formGestionarPrecio = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formGestionarPrecio.current);
    const data = {
      tipoComb: formData.get("tipoCombustible"),
      cantidad: formData.get("Cantidad"),
      fecha: formData.get("fingreso"),
      precio: formData.get("precio"),
    };
    console.log(data);
  };

  const rtaPrecios =INVENTARIO.map((inventario)=>{
    return inventario.ingresos.map((ingreso)=>{
        return {
            key:inventario.tipo+ingreso.id,
            tipo: inventario.tipo,
            precio: ingreso.precio,
            fechaIngreso: ingreso.fechaIngreso,
            fechaFinal: ingreso.fechaFinal
        }
    })
})



  return (
    <div id="wrapper">
      <Header />
      <NavAdmin />

      <div className="col-md-12 align-items-center">
        <label htmlFor="buscarUsuarios" className="justify-content-center">
          <h3>Usuarios Externos</h3>
        </label>
      </div>

      <br />

      <main className="container" style={{ width: "75rem" }}>
        <form ref={formGestionarPrecio}>
          <h3 className="text-center"> Ingresar Lote de combustible</h3>
          <br />
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
              <button className="btn-lg btn-primary w-100" onClick={handleSubmit}>Ingresar combustible</button>
            </div>

            <div className="col-md-4">
              <button className="btn-lg btn-secondary w-100">Cancelar</button>
            </div>
          </div>
        </form>
          <br />
          <br />
          <br />
          <br />
          <h6> Consultar Lotes Combustible </h6>
          <br />
          <div className="row g-1">
            <div className="col-md-4">
              <input type="date" name="fingreso2" id="fing" placeholder="Fecha de ingreso" className="form-control"/>
            </div>
            <div className="col-md-4">
              <input type="date" name="fsalida" id="fsali" placeholder="Fecha de salida" className="form-control"/>
            </div>
            <div className="col-md-4">
              <button className="btn-lg btn-primary w-100">Buscar</button>
            </div>
            <div className="col-md-12">&nbsp;</div>
          </div>
        

        <TablaControlComb data={rtaPrecios[0]}/>
      
        <TablaControlComb data={rtaPrecios[1]}/>
      </main>
    </div>
  );
}

export default GestionarPrecio;
