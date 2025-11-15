// Barra de menú (selector CSS)
var navMenu =  document.querySelector(".nav-menu");

// Botón hamburguesa (selector CSS)
var menuToggle = document.querySelector(".menu-toggle");

// Evento clic del botón hamburguesa
menuToggle.onclick = () => {
    // Activa/desactiva la clase .show del nav-menu para 
    // mostrar u ocultar el menu
    navMenu.classList.toggle("show");
}