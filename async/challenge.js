const fetchData = require('../uutils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try { // todo el codigo se ejecuta en el try
        const data = await fetchData(url_api) //espera hasta que esta peticion se cumple y guardala en memoria(data) (personajes)
        const character = await fetchData(`${API}${data.results[0].id}`) // creo otra variable y le paso la data anterior con mas parametros
        const origin = await fetchData(character.origin.url) // igual, creo nueva variable y le paso la data mas nuevos parametros (dimension)
        console.log(data.info.count) // muestro datos
        console.log(character.name) // muestro datos
        console.log(origin.dimension) // muestro datos
    } catch(error){ // si por alguna razon hay algun error, ejecuto catch mostrando el error
        console.error(error) // muestro error
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');
