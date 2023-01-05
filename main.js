// --------------------Selectores----------------
const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')


// -------------------Eventos--------------------
navEmail.addEventListener('click', toggleDesktopMenu)


//--------------------Funciones-----------------
function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive');
};