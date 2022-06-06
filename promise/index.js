/* EL CONCEPTO DE PROMESA ES QUE ALGO VA A algoPasara. EN ESTE CASO ALGO VA A PASAR A PARTIR 
DE QUE PONGA YO EN EL IF DE LA LINEA 7, SI ES TRUE ENTONCES SE RESUELVA, SI ES FALSE NO */

const algoPasara = () => { /* CREO LA PROMESA CON CUALQUIER NOMBRE */
    /* AHORA LE DIGO QUE ME VA A RETORNAR UNA PROMESA */
    return new Promise((resolve, reject) => { /* RESUELTA O RECHAZADA */
        if(true){ /* SI ES VERDADERO, ENTONCES VA A RESOLVER */
            resolve('Prosema Resuelta!');
        } else { /* SI ES FALSO, ENTONCES VA A RECHAZAR */
            reject('Promesa no resuelta )=');
        }
    });
};

/* AHORA EJECUTO LA FUNCION QUE ME DEVUELVE DOS ELEMENTOS ENCADENADOS */
algoPasara()
    .then(response => console.log(response)) /* THEN PARA EL RESOLVE */
    .catch(err => console.error((err))) /* CATCH PARA EL REJECT */


const algoPasara2 = () => {
    return new Promise ((resolve, reject) => { // RETORNO LA PROMESA
        if (true) {
            setTimeout(() =>{ // SI ES TRUE LE PASO EL SETTIMEOUT QUE RECIBE UNA FUNCION Y EL TIEMPO(2s)
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('fff');
            reject(error);
        }
    })
}

algoPasara2()
    .then(response => console.log(response)) /* THEN PARA EL RESOLVE */
    .then(() => console.log('hola')) /* ESTO LO HAGO PARA MOSTRAR QUE PODEMOS PONER MAS DE UN THEN */
    .catch(err => console.error((err))) /* CATCH PARA EL REJECT */

Promise.all([algoPasara(), algoPasara2()])
    .then(response => {console.log("Array de resultados " + response)})
    .catch(err => console.error((err))) /* CATCH PARA EL REJECT */
