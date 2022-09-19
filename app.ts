import { filter, from, map, of } from "rxjs";
import { Logger } from "tslog";

//Logger para hacer un seguimiento del codigo
const log : Logger = new Logger();

const list = [ 1, 2, 'three', true ];

//Array Simple
list.forEach(el => {
    log.info(el);
});

//Podemos manejar de esta forma una lista com rxjs
//Se observa que se anade una metodo subscribe que representa la ejecucion de un Observable
from(list)
    .subscribe(value => {
        log.info(value)
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
from(list)
    .subscribe({
        next     : value => log.info(value),
        error    : err => log.error(err),
        complete : () => log.info("Terminado")
    });

//of: es otra funcion que hace una respuesta simulada, sirve para realizar ejemplos y como hacer una llamada falsa a un backend
//pipe: permite agregar operadores al nuestro flujo
//Al final retornamos los con el subscribe
of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .pipe(
        map(value => {
            return value * 10;
        }),
        filter(value => {
            return value > 40 && value < 90
        }),
    )
    .subscribe({
        next     : value => log.info(value),
        error    : err => log.error(err),
        complete : () => log.info("Terminado")
    });