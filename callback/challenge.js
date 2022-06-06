let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //   INSTANCIO EL OBJETO XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData (url_api, callback){ /* LE PASO LA URL DE LA API Y EL CALLBACK */
    let xhttp = new XMLHttpRequest(); /* CREO LA REFERENCIA AL OBJETO */

    /* LE PASO EL METODO GET PARA OBTENER TODOS LOS DATOS */
    xhttp.open('GET', url_api, true); /* TRUE ES PAR ACTIVAR EL ASINCRONISMO DENTRO DE XMLHttpRequest */

    /* ESCUCHO LO QUE ME DICE LA CONEXION ANTERIOR, SI OCIRRIO ALGUN CAMBIO ENTONCES EJECUTO
     LA FUNCION  QUE RECIBE UN EVENTO EL CUAL NO SIEMPRE BAMOS A UTILIZAR */
    xhttp.onreadystatechange = function(event){ 

        /* AHORA TENGO QUE HACER VALIDACIONES PARA VER SI EJECUTO O NO MI CALLBACK */
        /* PERO CUAL ES ESA VALIDACION?? = SI EL ESTADO EN EL QUE SE ENCUENTRA ES SATISFACTORIO(4) */
        if(xhttp.readyState === 4){ /* COMPARO VALORES NUMERICOS */
            if(xhttp.status === 200){ /* AHORA COMPARO EL ESTADO */
            /* AHORA SI HAGO EL CALLBACK */
                callback(null, JSON.parse(xhttp.responseText)) /* AHORA HAGO EL PARSE A JSON PORQUE ME DEVUELVE TEXTO */
            } else {
                /* PERO SI HAY ERROR DEVO RETORNARLO */
                const error = new Error('Error' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send() /* ENVIO LA SOLICITUD */
}

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        });
    })
})