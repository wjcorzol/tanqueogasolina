import React, { useRef, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const URLAPIUSAURIOS = "http://localhost:3222/api/v1/usuario/login";
const cookies = new Cookies();

const Login = () => {

    // const [USERS, setUSERS] = useState([]);

    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");

    // const componentDidMount = () =>{
    //     if(!cookies.get('usuario')){
    //         window.location.href="./";
    //     }
    // }

    const handleLogin = async (event) => {
        event.preventDefault();
        const respuesta = await axios.post(URLAPIUSAURIOS,  { usuario: usuario, contraseña: contraseña } )
        .then((respuesta) => {
            return respuesta.data;
        })
        .then((respuesta) => {
            if (respuesta.data) {
                var usuario = respuesta.data;
                cookies.set("nombre", usuario.nombre, { path: "/" });
                cookies.set("usuario", usuario.usuario, { path: "/" }); 
                cookies.set("rol", usuario.rol, { path: "/" });

                if (respuesta.data.rol === "usuario externo") {
                    window.location.href ='./gestionarsaldo';
                }
                else if (respuesta.data.rol === "usuario interno") {
                    window.location.href ='./gestionarprecio';
                }
                
            
                // alert(`Bienvenido ${cookies.get("nombre")} ${cookies.get("rol")}`);

            }
            else {
                console.log(respuesta);
            }
    })
}   

const handleRegistro = () => {
    window.location.href ='./registro';
}

    // useEffect(() => {
    //     axios
    //     .get(URLAPIUSAURIOS)
    //     .then((res) => {
    //         setUSERS(res.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // })

    const formLogin = useRef(null);
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(formLogin.current);
    //     const data = {
    //         usuario: formData.get('txtUser'),
    //         contrasena: formData.get('txtPass'),
    //     }
        
    //     console.log(data);
    //     const login = USERS.some(user => user.usuario === data.usuario && user.contrasena === data.contrasena);
        
    //     if (login) {
    //         window.location.href ='./gestionarprecio';
    //     }
        
    // }

    return (
        <div id="wrapper">
            <div className="form-signin text-center" style={{width: '25rem'}}>
                <div>
                <img src="img/ExxonMobil.png" alt="ExxonMobil" className='card-img-top'/>
                </div>
                <div className="card-body"></div>
                    <h2 className="card-title"> Inicio de Sesión</h2>
                    <form onSubmit={handleLogin} ref={formLogin}>
                        <div className='col-md-12'>
                            <input type="text" name="txtUser" id="txtUser" placeholder="Usuario" className="form-control" onChange={e => setUsuario(e.target.value)} value = {usuario}/>
                        </div>
                        <br/>
                        <div className='col-md-12'>
                            <input type="password" name="txtPass" id="txtPass" placeholder = "Contraseña" className="form-control " onChange={e => setContraseña(e.target.value)} value = {contraseña}/>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className="container col-sm-6">
                                <button className="w-100 btn btn-lg btn-primary" type="submit" > Ingresar </button>
                            </div>
                            <div className="container col-sm-6">
                                <button className="w-100 btn btn-lg btn-secondary" onClick={handleRegistro} >Registrarse </button>
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