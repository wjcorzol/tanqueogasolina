import React, { useRef } from 'react';
import Header from '../componentes/Header';
import NavUsers from '../componentes/NavUsers';

function RegistrarVehiculo() {

  const formRegistrarVehiculo = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRegistrarVehiculo.current);
    const data = {
      placa: formData.get('placaVehiculo'),
      tipoCarro: formData.get('tipoVehiculo'),
      marca: formData.get('marcaVehiculo'),
    };
    console.log(data);
  };

  return (
    <>

      <Header />
      <NavUsers />

      <br />

      <main className="container" style={{ width: '75rem' }}>
        <div className="container">
          <div className="col-md-12 text-center">
            <h1> Registro de Vehiculos</h1>
          </div>
          <br />
          <div className="container">
            <div className="col-md-12">
              <form action="" method="POST" ref={formRegistrarVehiculo}>
                <div className="row g-2 form-group d-flex-wrap">
                  <div className="col-md-4">
                    <input type="text" className="form-control" id="placaVehiculo" name="placaVehiculo" placeholder="Placa Vehiculo" required />
                  </div>

                  <div className="col-md-4">
                    <select className="form-control" id="tipoVehiculo" name="tipoVehiculo">
                      <option disabled value="">Tipo Vehiculo</option>
                      <option>Automovil</option>
                      <option>Camioneta</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <input type="text" className="form-control" id="marcaVehiculo" name="marcaVehiculo" placeholder="Marca Vehiculo" />
                  </div>
                </div>

                <div className="col-md-12">&nbsp;</div>
                <div className="row g-1 form-group d-flex-wrap ">
                  <div className="col-md-2">&nbsp;</div>
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Registrar</button>
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
    </>
  );
}

export default RegistrarVehiculo;
