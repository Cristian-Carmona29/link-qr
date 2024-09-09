const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const descargarQR = document.getElementById('descargarQR');
const QR = new QRCode(contenedorQR);

// Generar el código QR cuando se envía el formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(formulario.link.value);
});

// Función para descargar el QR generado como imagen
descargarQR.addEventListener('click', () => {
    const img = contenedorQR.querySelector('img'); // Buscar la imagen QR generada
    if (img) {
        const enlace = document.createElement('a');
        enlace.href = img.src; // Obtener la URL de la imagen
        enlace.download = 'codigoQR.png'; // Establecer el nombre del archivo
        enlace.click(); // Simular el clic para descargar
    } else {
        alert('Primero debes generar un código QR');
    }
});
