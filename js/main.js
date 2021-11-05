import {Cliente} from './cliente.js';
import {Impuestos} from './impuesto.js';

//ingreso clientes
const impuestoCliente1 = new Impuestos(150000, 6500);
const cliente1 = new Cliente('Archivaldo', impuestoCliente1);

const impuestoCliente2 = new Impuestos(8000, 550);
const cliente2 = new Cliente('Archivaldo', impuestoCliente2);



console.log(cliente1);
console.log(impuestoCliente1);
console.log('Impuesto Cliente 1: $' + cliente1.CalcularImpuesto());

console.log('');

console.log(cliente2);
console.log(impuestoCliente2);
console.log('Impuesto Cliente 2: $' + cliente2.CalcularImpuesto());
