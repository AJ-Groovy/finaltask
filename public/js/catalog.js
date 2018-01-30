'use strict';

// LISTENERS

var productInfo = document.querySelector('.product_description');

productInfo.addEventListener('click', function (e) {
    var item = e.target,
        product = document.querySelector('.product_item_info'),
        productObject = createProductObject(product);
    
    if (item.classList.contains('form_button')) {
        mainCart.addToCart(productObject);
    }
});

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