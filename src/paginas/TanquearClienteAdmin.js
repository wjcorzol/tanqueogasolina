import React, { useRef } from "react";
import Header from "../componentes/Header";
import NavAdmin from "../componentes/NavAdmin";

function TanquearClienteAdmin() {
  const formTanquearClienteAdmin = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formTanquearClienteAdmin.current);
    const data = {
      usuario: formData.get("txtUsuario"),
      tipoCombustible: formData.get("txtTipo"),
      placaVehiculo: formData.get("txtPlaca"),
      cantidad: formData.get("txtCantidad"),
      medioPago: formData.get("txtMedioPago"),
    };
    console.log(data);
  };
  return (
    <div id="wrapper">
      <Header />
      <NavAdmin />

      <main className="container" style={{ width: "75rem" }}>
        <div className="container">
          <div className="col-md-12 text-center">
            <label htmlFor="buscarUsuarios">
              <h3>Realizar un Tanqueo</h3>
            </label>
          </div>
          <form action="/" ref={formTanquearClienteAdmin}>
            <br />
            <div className="container row">
              <div className="col-md-2">&nbsp;</div>
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id="txtUsuario"
                  name="txtUsuario"
                  placeholder="Id cliente"
                  required
                />
              </div>
              <div className="col-md-3">
                <button className="btn btn-primary w-100">Buscar</button>
              </div>
            </div>
            <div className="col-12">&nbsp;</div>
            <div className="col-12">&nbsp;</div>
            <div className="row">
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
                <div className="row g-2 form-group d-flex-wrap">
                  <div className="col-md-4">
                    <select
                      className="form-control"
                      id="txtTipo" name="txtTipo"
                      required
                    >
                      <option disabled value="">
                        Tipo Combustible
                      </option>
                      <option value="corriente">Corriente</option>
                      <option value="extra">Extra</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      id="txtPlaca"
                      name="txtPlaca"
                      placeholder="Placa Vehiculo"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control"
                      id="txtCantidad"
                      name="txtCantidad"
                      placeholder="Galones"
                      required
                    />
                  </div>
                </div>
                <div className="row g-1 form-group d-flex-wrap">
                  <div className="col-md-4">&nbsp;</div>
                  <div className="col-md-4">
                    <select className="form-control" id="txtMedioPago" name="txtMedioPago" required>
                      <option disabled value="">Medio de Pago</option>
                      <option value="1">Saldo Cliente</option>
                      <option value="2">Puntos Cliente</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">&nbsp;</div>
                <div className="row g-1 form-group d-flex-wrap ">
                  <div className="col-md-2">&nbsp;</div>
                  <div className="col-md-4">
                    <button className="btn btn-primary w-100" onClick={handleSubmit}>
                      Registrar Tanqueo
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-secondary w-100">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default TanquearClienteAdmin;
