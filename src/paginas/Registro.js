import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function Registro() {
  const formRegistro = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRegistro.current);
    const data = {
      nombre: formData.get('txtNombre'),
      tipoDoc: formData.get('txtTipoDoc'),
      numDoc: formData.get('txtNumDoc'),
      fechaNac: formData.get('txtFechaNac'),
      sexo: formData.get('txtSexo'),
      ciudad: formData.get('txtCiudad'),
      user: formData.get('txtUser'),
      pass: formData.get('txtPass'),
    };
    console.log(data);
  };

  return (
    <>
      <main className="container-fluid text-center" >
        <div>
          <Link to="/" className="justify-content-center">
            <img src="img/ExxonMobil.png" alt="ExxonMobil" className='card-img-top' style={{ width: '400px' }} />
          </Link>
        </div>
        <h1> Registro de usuarios</h1>
        <br />

        <form className="container" action="/registro" ref={formRegistro}>

          <div className="row">
            <div className="col-md-4">
              <input type="text" name="txtNombre" id="txtNombre" placeholder="Nombre y Apellido" className="form-control"  required />
            </div>

            <div className="col-md-4">
              <select className="form-control" name="txtTipoDoc" required>
                <option disabled value="">Tipo de documento</option>
                <option value="1">Cédula de ciudadania</option>
                <option value="2">Cédula de extranjeria</option>
              </select>
            </div>

            <div className="col-md-4">
              <input type="text" name="txtNumDoc" id="txtNumDoc" placeholder="No. Documento" className="form-control" required />
            </div>

            <div className="col-md-12">&nbsp;</div>
          </div>

          <div className="row">

            <div className="col-md-4">
              <input type="date" name="txtFechaNac" id="txtFechaNac" placeholder="Fecha de nacimiento" className="form-control" />
            </div>

            <div className="col-md-4">
              <select className="form-control" id="txtSexo" name="txtSexo" required>
                <option disabled value="">Sexo</option>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
              </select>
            </div>

            <div className="col-md-4">
              <input type="text" name="txtCiudad" id="txtCiudad" placeholder="Ciudad" className="form-control"  />
            </div>

            <div className="col-md-12">&nbsp;</div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <input type="text" name="txtUser" id="txtUser" placeholder="Usuario" className="form-control" />
            </div>
            <div className="col-md-4">
              <input type="password" name="txtPass" id="txtPass" placeholder="Contraseña" className="form-control" required/>
            </div>
            <div className="col-md-4">
              <input type="password" name="contraseña" id="pwd2" placeholder="Valide contraseña" className="form-control" />
            </div>
            <div className="col-md-12">&nbsp;</div>
          </div>
          <br />
          <input type="checkbox" id="txtCheck" />
          <Link to="#" className="card-link">Terminos y condiciones</Link>
          <br />
          <br />
          <div className="row">
            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-4">
              <button  className="btn-lg btn-primary w-100" onClick={handleSubmit}> Registrarse </button>
            </div>
            <div className="col-md-4">
              <button type="submit2" className="btn-lg btn-secondary w-100">Cancelar </button>
            </div>
          </div>
          <br />
          <br />

        </form>

      </main>
    </>
  );
}

export default Registro;
