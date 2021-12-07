import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./rutas/App";
import Registro from "./paginas/Registro";
import GestionarCliente from "./rutas/GestionarCliente";
import GestionarSaldo from "./rutas/GestionarSaldo";
import GestionarPrecio from "./rutas/Gestionarprecio";
import TanquearClienteAdmin from "./rutas/TanquearClienteAdmin";
import TanquearCliente from "./rutas/TanquearCliente";
import RegistrarVehiculo from "./rutas/RegistrarVehiculo";
import Error404 from "./paginas/Error404";

import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/gestionarCliente" element={<GestionarCliente />} />
        <Route exact path="/gestionarSaldo" element={<GestionarSaldo />} />
        <Route exact path="/gestionarPrecio" element={<GestionarPrecio />} />
        <Route
          exact
          path="/tanquearClienteAdmin"
          element={<TanquearClienteAdmin />}
        />
        <Route exact path="/tanquearCliente" element={<TanquearCliente />} />
        <Route
          exact
          path="/registrarVehiculo"
          element={<RegistrarVehiculo />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
