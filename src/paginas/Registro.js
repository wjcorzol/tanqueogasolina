import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Cookies from "universal-cookie";

const URLAPIREGISTRO = "http://localhost:3222/api/v1/usuario/registro";
const cookies = new Cookies();


function Registro() {

  const handleCancelar = () => {
    window.location.href = "/";
  }

  const formRegistro = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRegistro.current);
    const data = {
      nombre: formData.get('txtNombre'),
      tipoDocumento: formData.get('txtTipoDoc'),
      numeroDocumento: formData.get('txtNumDoc'),
      nacimiento: formData.get('txtFechaNac'),
      sexo: formData.get('txtSexo'),
      ciudad: formData.get('txtCiudad'),
      usuario: formData.get('txtUser'),
      contraseña: formData.get('txtPass'),
    };

    const respuesta = await axios.post(URLAPIREGISTRO, data)
    .then((respuesta) => {
      
      return respuesta.data.usuarioCreado;})
    .then((respuesta) => {
      if (respuesta) {
        console.log(respuesta);

        cookies.set("nombre", respuesta.nombre, { path: "/" });
        cookies.set("usuario", respuesta.usuario, { path: "/" }); 
        cookies.set("rol", respuesta.rol, { path: "/" });
        window.location.href ='./gestionarsaldo';
      }
      
    });
    
    // console.log(respuesta);
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
                <option value="Cédula de ciudadania">Cédula de ciudadania</option>
                <option value="Cédula de extranjeria">Cédula de extranjeria</option>
              </select>
            </div>

            <div className="col-md-4">
              <input type="number" name="txtNumDoc" id="txtNumDoc" placeholder="No. Documento" className="form-control" required />
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
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
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
              <button type="submit2" className="btn-lg btn-secondary w-100" onClick ={handleCancelar}>Cancelar </button>
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
