var capa = document.getElementById("capa");
function addElemento(texto) {
    capa = document.getElementById("capa");
    h1 = document.createElement("h1");
    h1.innerHTML = texto;
    capa.appendChild(h1);
    capa.style = `
    color:red;
    `;
}