import React, { useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";


import USERS from "../api/usuarios";
const cookies = new Cookies();

const Login = () => {
    state = {
        form: {
            usuario: '',
            contraseña: ''
        }
    }

    const handleChange = (e) => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async () => {
        await axios.get(USERS, { params: { usuario: this.state.form.usuario, contraseña: this.state.form.contraseña } })
            .then(res => {
                return res.data;
            })
            .then(res => {
                if (res.length > 0) {
                    cookies.set('usuario', res[0].usuario, { path: '/' });
                    cookies.set('_id', res[0]._id, { path: '/' });
                    cookies.set('rol', res[0].rol, { path: '/' });
                    Navigate('/gestionar');
                }
            })
    }
    console.log(USERS);
    console.log(data);
    const login = USERS.some(user => user.usuario === data.usuario && user.contrasena === data.contrasena);
    console.log(login);

return (
    <div id="wrapper">
        <div className="form-signin text-center" style={{ width: '25rem' }}>
            <div>
                <img src="img/ExxonMobil.png" alt="ExxonMobil" className='card-img-top' />
            </div>
            <div className="card-body"></div>
            <h2 className="card-title"> Inicio de Sesión</h2>
            <form action="/" ref={formLogin}>
                <div className='col-md-12'>
                    <input type="text" name="usuario" id="usuario" placeholder="Usuario" className="form-control" />
                </div>
                <br />
                <div className='col-md-12'>
                    <input type="password" name="contraseña" id="contraseña" placeholder="Contraseña" className="form-control" />
                </div>
                <br />
                <div className='row'>
                    <div className="container col-sm-6">
                        <button className="w-100 btn btn-lg btn-primary" onClick={handleSubmit} > Ingresar </button>
                    </div>
                    <div className="container col-sm-6">
                        <button className="w-100 btn btn-lg btn-secondary" >Registrarse </button>
                    </div>
                </div>
                <br />
                <br />
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