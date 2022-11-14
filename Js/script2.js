function addElemento(cont) {
    var capa = document.getElementById("capa");
    var h1 = document.createElement("h1");
    h1.innerHTML = cont;
    capa.appendChild(h1);
    if (cont == "Hola") {
        document.getElementById("mov").href = 'Movimiento.css';
    }
}