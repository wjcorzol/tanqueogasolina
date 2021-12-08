const INVENTARIO = [{
    id: 1,
    tipo        : 'Corriente',
    ingresos    : [{id:1,
                    cantidad:10000,
                    precio:8400,
                    fechaIngreso: '2021-06-15',
                    fechaFinal: '2021-09-24'},
                    
                    {id:2,
                    cantidad:1000,
                    precio:8450,
                    fechaIngreso: '2021-09-26',
                    fechaFinal: '2021-12-02'},
                    {id:3,
                    cantidad:18000,
                    precio:8350,
                    fechaIngreso: '2021-12-03',
                    fechaFinal: ''}],
    salidas     : [1000, 3000, 5000, 1000 ,7000, 3000, 2550 ]
    },
    {
    id: 2,
    tipo        : 'Extra',
    ingresos    : [{id:1,
        cantidad:5000,
        precio:10400,
        fechaIngreso: '2021-06-15',
        fechaFinal: '2021-09-24'},
        {id:2,
        cantidad:6000,
        precio:10450,
        fechaIngreso: '2021-09-26',
        fechaFinal: '2021-12-02'},
        {id:3,
        cantidad:4000,
        precio:10350,
        fechaIngreso: '2021-12-03',
        fechaFinal: ''}],
    salidas     : [1750, 3690, 1041, 2050, 3569, 522, 1500]
    }
];                


export default INVENTARIO;

// const rtaInventario = INVENTARIO.map((inventario) => {
//     return {
//         id: inventario.id,
//         tipo: inventario.tipo,
//         totalIngresos: inventario.ingresos.reduce((acumulador, ingreso) => {
//             return acumulador + ingreso.cantidad;
//         }, 0),
//         totalSalidas: inventario.salidas.reduce((acumulador, salida) => {
//             return acumulador + salida;
//         }, 0),
//         precio: inventario.ingresos.map((ingreso) => {
//             return ingreso.precio;
//         }),
//     };
// });

