import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registro from './Registro';
import GestionarCliente from './GestionarCliente';
import GestionarSaldo from './GestionarSaldo';
import GestionarPrecio from './Gestionarprecio';
import TanquearClienteAdmin from './TanquearClienteAdmin';
import TanquearCliente from './TanquearCliente';
import RegistrarVehiculo from './RegistrarVehiculo';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/gestionarCliente" element={<GestionarCliente/>} />
        <Route path="/gestionarSaldo" element={<GestionarSaldo/>} />
        <Route path="/gestionarPrecio" element={<GestionarPrecio/>} />
        <Route path="/tanquearClienteAdmin" element={<TanquearClienteAdmin/>} />
        <Route path="/tanquearCliente" element={<TanquearCliente/>} />
        <Route path="/registrarVehiculo" element={<RegistrarVehiculo/>} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
