/* const precioOriginal =100;

const descuento = 15; */


function calcularPrecioConDescuento(precio, descuento){
    const totalDescuento = (precio * descuento) / 100;
    const precioFinal =  precio - totalDescuento;
    return precioFinal;
}


function calcularprecio() {
    const inputPrecio = document.getElementById("precio");
    const precio = inputPrecio.value;

    const inputDescuento = document.getElementById("descuento");
    const descuento = inputDescuento.value;

    console.log(precio , descuento)

    const precioFinal = calcularPrecioConDescuento(precio, descuento)

    const precioTotal = document.getElementById("precioTotal");
    precioTotal.innerText = "El precio con descuento es $" + precioFinal
}