/* CREO LA FUNCION SUMA A LA CUAL LE PASO DOS NUMEROS Y ME DEVUELVE EL RESULTADO DE LA SUMA */
function suma(num1, num2){
    return num1 + num2;
}
/* AHORA CREO UNA FUNCION LLAMADA CALCULAR QUE RECIBE DOS NUMEROS Y UN CALLBACK
ESTE CALLBACK ES UNA FUNCION CUALQUIERA, PERO SE LE PONE ESE NOMBRE PARA DIFERENCIAR QUE ES UN CALLBACK */
function calcular(num1, num2, callback){
    return callback(num1,num2);
}

/* AHORA LLAMO  A MI SEGUNDA FUNCION Y LE PASO LOS DOS NUMEROS Y LA FUNCION SUMA PARA QUE LA FUNCION CALCULAR 
LE PASE LOS NUMEROS A LA FUNCION SUMA */
console.log(calcular(6,2,suma))

/* DEFINO UNA FUNCION DATE QUE ME IMPRIME DE UNA LA FECHA ACTUAL Y DESPUES MEDIANTE EL METODO setTimeout 
HACE UN CALLBACK PARA VOLVER A IMPRIMIR LA FECHA DE HOY PERO 3s DESPUES */
function date(callback){
    console.log(new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date);
    }, 3000)
}

/* ACA SOLO IMPRIMO LOS DATOS DE LA FUNCION ANTERIOR
 */function printDate(dateNow){
    console.log(dateNow)
}

date(printDate);