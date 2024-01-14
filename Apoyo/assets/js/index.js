import propiedades_ventas from './ventas.js'
console.log('propiedades_ventas --->', propiedades_ventas);

import propiedades_alquiler from './alquiler.js'
console.log('propiedades_alquiler --->', propiedades_alquiler);




const venta3 = propiedades_ventas.slice(1,4)
console.log('venta3 --->', venta3);

const alquiler3 = propiedades_alquiler.slice(1,4)
console.log('alquiler3 --->', alquiler3);




const ventaIndex = document.getElementById('propiedades-venta-lista')

const alquilerIndex = document.getElementById('propiedades-alquiler-lista')



