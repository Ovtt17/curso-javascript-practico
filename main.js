const menuEmail = document.querySelector('.navbar-email');
const iconMenu = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCartAside);


function toggleDesktopMenu() {    
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    shoppingCartContainer.classList.add('inactive');

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside (){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    renderShoppingCart();
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside (e) {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.innerHTML = '';

    for (product of productList) {
        if (e.target.dataset.id == product.id) {
            const productDetailClosed = document.createElement('div');
            productDetailClosed.classList.add('product-detail-close');
            const iconClosed = document.createElement('img');
            iconClosed.setAttribute('src', './icons/icon_close.png');
            productDetailClosed.appendChild(iconClosed);
            productDetailClosed.addEventListener('click', closeProductDetailAside);
    
            const productImgInfo = document.createElement('img');
            productImgInfo.setAttribute('src', product.Image);
            productImgInfo.classList.add('product-img');
    
            const productInfo_Container = document.createElement('div');
            productInfo_Container.classList.add('product-info');
    
            const productPriceInfo = document.createElement('p');
            productPriceInfo.innerText = '$ ' + product.price;
    
            const productNameInfo = document.createElement('p');
            productNameInfo.innerText = product.name;
    
            const productInfo = document.createElement('p');
            productInfo.innerText = product.description;
    
            const button = document.createElement('button');
            button.classList.add('primary-button');
            button.classList.add('add-to-cart-button');
    
            const buttonImg = document.createElement('img');
            buttonImg.setAttribute('src', './icons/bt_add_to_cart.svg');
            buttonImg.setAttribute('alt', 'add to cart');
    
            const buttonInfo = document.createElement('p');
            buttonInfo.classList.add('btn-info');
            buttonInfo.innerText = 'Add to cart';
            
            button.appendChild(buttonImg);
            button.appendChild(buttonInfo);
    
            productDetailContainer.appendChild(productImgInfo);
            
            productInfo_Container.appendChild(productPriceInfo);
            productInfo_Container.appendChild(productNameInfo);
            productInfo_Container.appendChild(productInfo);
            productInfo_Container.appendChild(button);
    
            productDetailContainer.appendChild(productDetailClosed);
            productDetailContainer.appendChild(productInfo_Container);
            
            productDetailContainer.classList.remove('inactive');  
        }
    }
    scrollToTop();
    e.stopPropagation();
}
function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
var productList = [];

productList.push({
    id: 1,
    name: 'motorcycle',
    price: 11000,
    Image: './images/image1.jpeg',
    description: 'Amazing motorcycle'
});
productList.push({
    id: 2,
    name: 'Console PS5',
    price: 560,
    Image: './images/image2.jpg',
    description: 'Amazing PS5'
});
productList.push({
    id: 3,
    name: 'Monitor',
    price: 420,
    Image: './images/image3.jpg',
    description: 'Amazing Monitor'
});
productList.push({
    id: 4,
    name: 'Computer',
    price: 1200,
    Image: './images/image4.jpg',
    description: 'Amazing Computer'
});
productList.push({
    id: 5,
    name: 'IPhone 14 Pro',
    price: 1100,
    Image: './images/image5.jpg',
    description: 'Amazing IPhone 14 Pro'
});
productList.push({
    id: 6,
    name: 'Samsung Galaxy S22',
    price: 700,
    Image: './images/image6.jpg',
    description: 'Amazing Samsung Galaxy S22'
});
productList.push({
    id: 7,
    name: 'Beats Headphones',
    price: 300,
    Image: './images/image7.jpg',
    description: 'Amazing Headphones'
});
productList.push({
    id: 8,
    name: 'Mouse Viper',
    price: 60,
    Image: './images/image8.jpeg',
    description: 'Amazing Mouse'
});


//product list
function renderProducts(arr) {
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
        productImg.classList.add('product-img');
        productImg.setAttribute('data-id', product.id);
        productImg.addEventListener('click', openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.setAttribute('data-id', product.id);
        productImgCart.addEventListener('click', openProductDetailAside);

        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
    
    
}

renderProducts(productList);

//shoppingCart
function renderShoppingCart() {
    shoppingCartContainer.innerHTML = '';

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    const titleImg = document.createElement('img');
    titleImg.setAttribute('src', './icons/flechita.svg');
    titleImg.classList.add('product-detail--img');
    titleImg.addEventListener('click', toggleShoppingCartAside);
    const titleText = document.createElement('p');
    titleText.classList.add('title');
    titleText.innerText = 'My order';
    titleContainer.appendChild(titleImg);
    titleContainer.appendChild(titleText);

    const orderContent = document.createElement('div');
    orderContent.classList.add('my-order-content');
    for (product of productList) {
        
        const cartDiv = document.createElement('div');
        cartDiv.classList.add('shopping-cart');

        const cartFigure = document.createElement('figure');
        const cartImg = document.createElement('img');
        cartImg.setAttribute('src', product.Image);
        cartFigure.appendChild(cartImg);

        const cartItemName = document.createElement('p');
        cartItemName.innerText = product.name; 
        
        const cartItemPrice = document.createElement('p');
        cartItemPrice.innerText = '$ ' + product.price; 

        const DeleteItem = document.createElement('img');
        DeleteItem.setAttribute('src', './icons/icon_close.png');
        DeleteItem.classList.add('delete-product');

        cartDiv.appendChild(cartFigure);
        cartDiv.appendChild(cartItemName);
        cartDiv.appendChild(cartItemPrice);
        cartDiv.appendChild(DeleteItem);

        orderContent.appendChild(cartDiv);
    }
    const totalCart = document.createElement('div');
    totalCart.classList.add('order');

    const totalText = document.createElement('p');
    const totalTextSpan = document.createElement('span');
    totalTextSpan.innerText = 'Total';
    totalText.appendChild(totalTextSpan);

    const totalPaying = document.createElement('p');
    totalPaying.innerText = '$ ' + product.price;

    totalCart.appendChild(totalText);
    totalCart.appendChild(totalPaying);

    const primaryButton = document.createElement('button');
    primaryButton.classList.add('primary-button');
    primaryButton.innerText = 'Checkout';

    shoppingCartContainer.appendChild(titleContainer);
    shoppingCartContainer.appendChild(orderContent);
    shoppingCartContainer.appendChild(totalCart);
    shoppingCartContainer.appendChild(primaryButton);
}