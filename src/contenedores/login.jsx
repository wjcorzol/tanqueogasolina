import React, { useRef } from "react";
import { Link } from "react-router-dom";

// import USERS from "../mocks/usuarios";

const Login = () => {
    const formLogin = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formLogin.current);
        const data = {
            user: formData.get('txtUser'),
            pass: formData.get('txtPass'),
        }
        console.log(data);
    }

    return (
        <div id="wrapper">
            <div className="form-signin text-center" style={{width: '25rem'}}>
                <div>
                <img src="img/ExxonMobil.png" alt="ExxonMobil" className='card-img-top'/>
                </div>
                <div className="card-body"></div>
                    <h2 className="card-title"> Inicio de Sesión</h2>
                    <form action="/" ref={formLogin}>
                        <div className='col-md-12'>
                            <input type="text" name="txtUser" id="txtUser" placeholder="Usuario" className="form-control"/>
                        </div>
                        <br/>
                        <div className='col-md-12'>
                            <input type="password" name="txtPass" id="txtPass" placeholder = "Contraseña" className="form-control"/>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className="container col-sm-6">
                                <button className="w-100 btn btn-lg btn-primary" onClick={handleSubmit} > Ingresar </button>
                            </div>
                            <div className="container col-sm-6">
                                <button className="w-100 btn btn-lg btn-secondary" >Registrarse </button>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="col-12">
                            <div className="">
                                <Link to="#" className="card-link">
                                ¿Olvidaste la contraseña?
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default Login;