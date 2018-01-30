'use strict';

var productInfo = document.querySelector('.product_description');

productInfo.addEventListener('click', function (e) {
    e.preventDefault();
    var item = e.target;
    if (item.classList.contains('input_emitter')) {
        var itemCategory = item.closest('label');
        var currentlyChecked = itemCategory.querySelector('.selected');
        currentlyChecked.classList.remove('selected');
        item.classList.add('selected');
    }
});

var gallery = document.querySelector('.gallery_section');

gallery.addEventListener('click', function (e) {
    var item = e.target,
        hero = gallery.querySelector('.hero_image img');

    if (item.tagName.toLowerCase() == 'img' && item.closest('.thumb_container') != null) {
        hero.src = item.src
    }
});

function cart() {

    var totalPrice = document.querySelector('.price');
    var currentValue = document.querySelector('.value');

    function addToCart(item) {

        var newPrice = +totalPrice.innerHTML.substring(1) + item.price;
        var newAmount = parseInt(currentValue.innerHTML) + 1; 

        totalPrice.innerHTML = newPrice;
        currentValue.innerHTML = newAmount;
    }

    return {
        addToCart
    }

}

var mainCart = cart();

mainCart.addToCart({ price: 180.60 });
mainCart.addToCart({ price: 180.10 });
mainCart.addToCart({ price: 1820.10 });
mainCart.addToCart({ price: 11820.12 });