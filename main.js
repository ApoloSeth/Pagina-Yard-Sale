// --------------------Selectores----------------
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailCard = document.querySelector('.product-detail-card');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');


// -------------------Eventos--------------------
navEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingDetail);
productDetailClose.addEventListener('click', productClose);

//--------------------Funciones-----------------
function toggleDesktopMenu (){
    const isProductDetailClose = productDetailCard.classList.contains('inactive')
    const isProductDetailContainerClose = productDetailContainer.classList.contains('inactive')

    if (!isProductDetailClose || !isProductDetailContainerClose){
        productDetailCard.classList.add('inactive')
        productDetailContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu (){
    const isProductDetailClose = productDetailCard.classList.contains('inactive')
    
    if (!isProductDetailClose){
        productDetailCard.classList.add('inactive')
    }

    productClose();

    mobileMenu.classList.toggle('inactive')
};

function toggleShoppingDetail (){
    let isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    let isMobileMenuClose = mobileMenu.classList.contains('inactive')
    let isProductDetailContainerClose = productDetailContainer.classList.contains('inactive')

    if (!isDesktopMenuClose || !isMobileMenuClose || !isProductDetailContainerClose){
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive')
    }

    productDetailCard.classList.toggle('inactive')
}

function openProductDetail (){
    const isProductDetailClose = productDetailCard.classList.contains('inactive')
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    if (!isProductDetailClose ||!isDesktopMenuClose){
        productDetailCard.classList.add('inactive')
        desktopMenu.classList.add('inactive');
    };
    productDetailContainer.classList.remove('inactive')
}

function productClose (){
    productDetailContainer.classList.add('inactive')
}


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'TV',
    price: 250,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Desktop',
    price: 350,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Mouse',
    price: 60,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Board',
    price: 210,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Desk',
    price: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts (arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const containerInfo = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
    
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', "./icons/bt_add_to_cart.svg")
    
        productFigure.appendChild(productFigureImg);
    
        containerInfo.append(productPrice, productName);
    
        productInfo.append(containerInfo, productFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

