let estadoLicuadora = "apagada";
let licuadora = document.getElementById('blender');

function controlarLicuadora() {
    estadoLicuadora == "apagada" ? (estadoLicuadora = "encendida", licuadora.classList.add("active")) : (estadoLicuadora = "apagada", licuadora.classList.remove("active"));
    console.log(estadoLicuadora);
}