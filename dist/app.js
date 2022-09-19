"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const tslog_1 = require("tslog");
//Logger para hacer un seguimiento del codigo
const log = new tslog_1.Logger();
const list = [1, 2, 'three', true];
log.info("<<-------->>");
log.info("Array Simple");
list.forEach(el => {
    log.info(el);
});
log.info("<<-------->>");
//Podemos manejar de esta forma una lista com rxjs
//Se observa que se anade una metodo subscribe que representa la ejecucion de un Observable
(0, rxjs_1.from)(list)
    .subscribe(value => {
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
(0, rxjs_1.from)(list)
    .subscribe({
    next: value => log.info(value),
    error: err => log.error(err),
    complete: () => log.info("Terminado")
});
//of: es otra funcion que hace una respuesta simulada, sirve para realizar ejemplos y como hacer una llamada falsa a un backend
//pipe: permite agregar operadores al nuestro flujo
//Al final retornamos los con el subscribe
(0, rxjs_1.of)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .pipe((0, rxjs_1.map)(value => {
    return value * 10;
}), (0, rxjs_1.filter)(value => {
    return value > 40 && value < 90;
}))
    .subscribe({
    next: value => log.info(value),
    error: err => log.error(err),
    complete: () => log.info("Terminado")
});
//# sourceMappingURL=app.js.map