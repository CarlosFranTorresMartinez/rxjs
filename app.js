"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var tslog_1 = require("tslog");
//Logger para hacer un seguimiento del codigo
var log = new tslog_1.Logger();
var list = [1, 2, 'three', true];
//Array Simple
list.forEach(function (el) {
    log.info("Lista Simple");
    log.info(el);
});
//Podemos manejar de esta forma una lista com rxjs
//Se observa que se anade una metodo subscribe que representa la ejecucion de un Observable
(0, rxjs_1.from)(list)
    .subscribe(function (value) {
    log.info("Lista usando un from");
    log.info(value);
});
//Observer: es algo muy simple de entender ya que contiene las siguientes funciones
//next, error y complete, que son las funciones mas usadas
// export interface Observer<T> {
//     closed? : boolean;
//     next : (value : T) => void;
//     error : (err : any) => void;
//     complete : () => void;
// }
// Esto lo puedes usar junto con el subscribe, este es muy util usar apis rest, ya que manejamos errores de una forma mas simple
//Podemos hacerlo de 2 formas
//Forma 1
var Observer = {
    next: function (val) { return log.info(val); },
    error: undefined,
    complete: undefined
};
(0, rxjs_1.from)(list)
    .subscribe(Observer);
//Forma 2
(0, rxjs_1.from)(list)
    .subscribe({
    next: function (value) { return log.info(value); },
    error: function (err) { return log.error(err); },
    complete: function () { return log.info("Terminado"); }
});
//of: es otra funcion que hace una respuesta simulada, sirve para realizar ejemplos y como hacer una llamada falsa a un backend
//pipe: permite agregar operadores al nuestro flujo
//Al final retornamos los con el subscribe
(0, rxjs_1.of)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .pipe((0, rxjs_1.map)(function (value) {
    log.info("Se hara un mapeo de todos los datos y se multiplicara por 10");
    return value * 10;
}), (0, rxjs_1.filter)(function (value) {
    log.info("Se hace un filtro de los datos si son mayores de 40 y menores de 90");
    return value > 40 && value < 90;
}))
    .subscribe({
    next: function (value) { return log.info(value); },
    error: function (err) { return log.error(err); },
    complete: function () { return log.info("Terminado"); }
});
