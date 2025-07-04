document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('.mostrarCurriculum');
    const contenido = document.querySelector('.curriculum');
    
    console.log('Botón:', boton);
    console.log('Contenido:', contenido); 
    
    if (boton && contenido) {
        boton.addEventListener('click', function() {
            if (contenido.style.display === 'none' || window.getComputedStyle(contenido).display === 'none') {
                contenido.style.display = 'block';
                boton.innerHTML = '<h2><strong>Ocultar ▲</strong></h2>';
            } else {
                contenido.style.display = 'none';
                boton.innerHTML = '<h2><strong>Mostrar ▼</strong></h2>';
            }
        });
    } else {
        console.error('Error: No se encontraron los elementos requeridos');
    }
});