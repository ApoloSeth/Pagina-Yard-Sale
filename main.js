// --------------------Selectores----------------
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



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

