import React from "react";

export default function TablaControlComb(props) {
    const { data } = props;
    return (
        <div className="tablaControlComb">
            <table className="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">Tipo de combustible</th>
                        <th scope="col">Fecha de ingreso</th>
                        <th scope="col">Fecha final</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        
                        return (
                            <tr key={item.tipo + item.id}>
                                <td>{item.tipo}</td>
                                <td>{item.fechaIngreso}</td>
                                <td>{item.fechaFinal}</td>
                                <td>{item.precio}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
