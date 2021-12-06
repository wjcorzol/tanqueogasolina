import React from 'react';
import {Link} from 'react-router-dom';

function Registro() {
  return (
    <div id="wrapper" className="text-center">
      <main className="container" style={{width: '75rem'}}>
        <div>
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 k text-decoration-none">
            <img src="img/ExxonMobil.png" alt="ExxonMobil" className='card-img-top' style={{width: '400px'}}/>
          </Link>
        </div>
        <h1> Registro de usuarios</h1>
        <br/>
        <form>

            <div className="row g-1">
                <div className="col-md-4">
                    <input type="text" name="usuario" id="name" placeholder="Nombre y Apellido" className="form-control"/>
                </div>

                <div className="col-md-4">
                    <select className="form-control" id="Tipodoc" required>
                        <option disabled value="">Tipo de documento</option>
                        <option>Cédula de ciudadania</option>
                        <option>Cédula de extranjeria</option>
                    </select>
                </div>
                
                <div className="col-md-4">
                    <input type="text" name="usuario" id="id" placeholder="No. Documento" className="form-control"/>
                </div>

                <div className="col-md-12">&nbsp;</div>
            </div>

            <div className="row g-1">
                
              <div className="col-md-4">
                  <input type="date" name="usuario" id="fnac" placeholder="Fecha de nacimiento" className="form-control"/>
              </div>

              <div className="col-md-4">
                  <select className="form-control" id="sex" required>
                      <option disabled value="">Sexo</option>
                      <option>Masculino</option>
                      <option>Femenino</option>
                  </select>
              </div>

              <div className="col-md-4">
                  <input type="text" name="usuario" id="city" placeholder="Ciudad" className="form-control"/>
              </div>

              <div className="col-md-12">&nbsp;</div>
            </div>

            <div className="row g-1">
                <div className="col-md-4">
                    <input type="text" name="usuario" id="user" placeholder="Usuario" className="form-control"/>
                </div>
                <div className="col-md-4">    
                    <input type="password" name="contraseña" id="pwd" placeholder = "Contraseña" className="form-control"/>
                </div>
                <div className="col-md-4">    
                    <input type="password" name="contraseña" id="pwd2" placeholder = "Valide contraseña" className="form-control"/>
                </div>
                <div className="col-md-12">&nbsp;</div>
            </div>
            <br/>
            <input type="checkbox" id="gridCheck"/>
            <Link to="#" className="card-link">Terminos y condiciones</Link>
            <br/>
            <br/>
            <div className="row">
              <div className="col-md-2">&nbsp;</div>
              <div className="col-md-4">
                <button type="submit" className="btn-lg btn-primary w-100"> Registrarse </button>
              </div>
              <div className="col-md-4">
                <button type="submit2" className="btn-lg btn-secondary w-100">Cancelar </button>
              </div>
            </div>
            <br/>
            <br/>

            
        </form>

      </main>
    </div>
  );
}

export default Registro;
