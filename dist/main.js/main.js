"use strict";

var _cliente = require("./cliente.js");

var _impuesto = require("./impuesto.js");

//ingreso clientes
var impuestoCliente1 = new _impuesto.Impuestos(150000, 6500);
var cliente1 = new _cliente.Cliente('Archivaldo', impuestoCliente1);
var impuestoCliente2 = new _impuesto.Impuestos(8000, 550);
var cliente2 = new _cliente.Cliente('Archivaldo', impuestoCliente2);
console.log(cliente1);
console.log(impuestoCliente1);
console.log('Impuesto Cliente 1: $' + cliente1.CalcularImpuesto());
console.log('');
console.log(cliente2);
console.log(impuestoCliente2);
console.log('Impuesto Cliente 2: $' + cliente2.CalcularImpuesto());