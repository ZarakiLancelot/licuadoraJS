let estadoLicuadora = "apagada";
let licuadora = document.getElementById('blender');
let sonido_licuadora = document.getElementById('blender-sound');
let boton_licuadora = document.getElementById('blender-button-sound');

function controlarLicuadora() {
    estadoLicuadora == "apagada" ? (estadoLicuadora = "encendida", licuadora.classList.add("active")) : (estadoLicuadora = "apagada", licuadora.classList.remove("active"));
    console.log(estadoLicuadora);
}

function sonidosLicuadora() {
    sonido_licuadora.paused ? (boton_licuadora.play(), sonido_licuadora.play()) : (boton_licuadora.play(), sonido_licuadora.pause(), sonido_licuadora.currentTime = 0);
}