let estadoLicuadora = "apagada";
let licuadora = document.getElementById('blender');

function controlarLicuadora() {
    estadoLicuadora == "apagada" ? estadoLicuadora = "encendida" : estadoLicuadora = "apagada";
    console.log(estadoLicuadora);
}