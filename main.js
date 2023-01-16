// --------------------Selectores----------------
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');



// -------------------Eventos--------------------
navEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingDetail);

//--------------------Funciones-----------------
function toggleDesktopMenu (){
    const isProductDetailClose = productDetail.classList.contains('inactive')

    if (!isProductDetailClose){
        productDetail.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu (){
    const isProductDetailClose = productDetail.classList.contains('inactive')
    if (!isProductDetailClose){
        productDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
};

function toggleShoppingDetail (){
    let isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    let isMobileMenuClose = mobileMenu.classList.contains('inactive')

    if (!isDesktopMenuClose && !isMobileMenuClose){
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }
    else if (!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    } else if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive')
}