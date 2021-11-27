import React from 'react';
import { link} from 'react-router-dom';

function App() {
  return (
    <div id="wrapper">
      <div className="form-signin text-center" style={{width: '25rem'}}>
        <div>
          <img src="img/ExxonMobil.png" alt="ExxonMobil" className='card-img-top'/>
        </div>
        <div className="card-body"></div>
          <h2 className="card-title"> Inicio de Sesión</h2>
          <form action="" method="POST">
            <div className='col-md-12'>
                <input type="text" name="usuario" id="user" placeholder="Usuario" className="form-control"/>
            </div>
            <br/>
            <div className='col-md-12'>
                <input type="password" name="contraseña" id="pwd" placeholder = "Contraseña" className="form-control"/>
            </div>
            <br/>
            <div className='row'>
              <div className="container col-md-6">
                <button type="submit" className="w-100 btn btn-lg btn-primary" > Ingresar </button>
              </div>
              <div className="container col-md-6">
                <button type="submit2" className="w-100 btn btn-lg btn-secondary">Registrarse </button>
              </div>
            </div>
            <br/>
            <br/>
            <div className="col-12">
              <div className="">
                <a href="#" className="card-link">
                  ¿Olvidaste la contraseña?
                </a>
              </div>
            </div>
          </form>
        </div>
    </div>
  );
}

export default App;
