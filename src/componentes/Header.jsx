import React from "react";
import { Link } from "react-router-dom";
import INVENTARIO from "../mocks/inventario";

export default function Header() {
    const rtaInventario = INVENTARIO.map((inventario) => {
        return {
            id: inventario.id,
            tipo: inventario.tipo,
            totalIngresos: inventario.ingresos.reduce((acumulador, ingreso) => {
                return acumulador + ingreso.cantidad;
            }, 0),
            totalSalidas: inventario.salidas.reduce((acumulador, salida) => {
                return acumulador + salida;
            }, 0),
            precio: inventario.ingresos.map((ingreso) => {
                return ingreso.precio;
            }),
        };
    });

    return (
        <header className="bg-primary text-white">
            <div className="container-fluid">
                <div className="row">&nbsp;</div>
                <div className="d-flex flex-wrap row">
                    <div className="col-md">
                        <Link to="/" className="justify-content-left">
                            <img
                                src="img/ExxonMobil.png"
                                alt="ExxonMobil"
                                className="rounded mx-auto d-block"
                                style={{ width: "200px" }}
                            />
                        </Link>
                    </div>

                    <div className="col-md-6">
                        <div className="row">
                            <div className="card col-md-5 border rounded-lg">
                                <h5 className="card-title">{rtaInventario[0].tipo}</h5>
                                <label htmlFor="cantidadCorriente" className="card-text">
                                    {rtaInventario[0].totalIngresos -
                                        rtaInventario[0].totalSalidas +
                                        " Gal."}
                                </label>
                                <label htmlFor="precioCorriente" className="card-text">
                                    {"$ " +
                                        rtaInventario[0].precio[rtaInventario[0].precio.length - 1]}
                                </label>
                            </div>
                            <div className="col">&nbsp;</div>
                            <div className="card col-md-5 border rounded-lg">
                                <h5 className="card-title">{rtaInventario[1].tipo}</h5>
                                <label htmlFor="cantidadExtra" className="card-text">
                                    {rtaInventario[1].totalIngresos -
                                        rtaInventario[1].totalSalidas +
                                        " Gal."}
                                </label>
                                <label htmlFor="precioExtra" className="card-text">
                                    {"$ " +
                                        rtaInventario[1].precio[rtaInventario[1].precio.length - 1]}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="col-md row">
                        <div className="col-md-4">
                            <div className="container">
                                <img
                                    src="img/user.png"
                                    alt="User"
                                    className="rounded mx-auto d-block"
                                    style={{ width: "100px" }}
                                />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="text-start">
                                <div className="row">&nbsp;</div>
                                <label htmlFor="nombreUsuario">Nombre de Usuario</label>
                                <br />
                                <Link to="#">Cerrar Sesión</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
