const lista1 = [
    100,
    200,
    500,
    400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(lista){
    if(lista.length % 2 === 0){
        return true
    }
    else return false
}

const longitud = esPar(lista1)

if(longitud === true){
    const elemento1 = lista1[mitadLista1];
    const elelemento2 = lista1[mitadLista1] + 1;
    const mediana = elemento1 + elelemento2 / 2
    console.log("LA MEDIANA DE LA LISTA PAR ES " + mediana + "Y SUS ELEMETOS SON " + elemento1 + " Y " + elelemento2)
} else{
    mediana = lista1[mitadLista1]
    console.log("LA MEDIANA DE LA LISTA IMPAR ES " + mediana + "Y SU ELEMETO ES " + lista1[mitadLista1])
}
