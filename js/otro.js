document.addEventListener("DOMContentLoaded", function () {
    fetch("php/mis_reservas.php")
        .then(response => response.json())
        .then(data => {
            let html = "<ul>";
            data.forEach(reserva => {
                html += `<li>${reserva.tipo} - ${reserva.precio}€ - ${reserva.fecha}</li>`;
            });
            html += "</ul>";
            document.getElementById("misReservas").innerHTML = html;
        });
});
//
//Otro
//
document.getElementById("btnSuscribirse").addEventListener("click", function () {
    if (confirm("Simulación: ¿Quieres pagar la suscripción VIP?")) {
        fetch("php/suscripcion.php", { method: "POST" })
            .then(response => response.text())
            .then(data => {
                alert(data);
                document.getElementById("mensajePago").style.display = "block";
                verificarEstadoVIP();
            });
    }
});

document.getElementById("btnCancelarVIP").addEventListener("click", function () {
    fetch("php/cancelar_vip.php", { method: "POST" })
        .then(response => response.text())
        .then(data => {
            alert(data);
            document.getElementById("mensajePago").style.display = "none";
            verificarEstadoVIP();
        });
});

function verificarEstadoVIP() {
    fetch("php/estado_vip.php")
        .then(response => response.json())
        .then(data => {
            document.getElementById("estadoVIP").innerHTML = data.mensaje;
            document.getElementById("btnSuscribirse").style.display = data.vip ? "none" : "inline-block";
            document.getElementById("btnCancelarVIP").style.display = data.vip ? "inline-block" : "none";
        });
}

// Verificar estado VIP al cargar la página
verificarEstadoVIP();
//
//Otro
//
document.addEventListener("DOMContentLoaded", function () {
    fetch("php/historial_pagos.php")
        .then(response => response.json())
        .then(data => {
            let html = "<ul>";
            data.forEach(pago => {
                html += `<li>
                    <strong>Fecha:</strong> ${pago.fecha_pago} - 
                    <strong>Monto:</strong> ${pago.monto}€ - 
                    <a href="php/comprobante.php?transaccion=${pago.numero_transaccion}" target="_blank">Ver comprobante</a>
                </li>`;
            });
            html += "</ul>";
            document.getElementById("historialPagos").innerHTML = html;
        });
});