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

function createCartItem(settings){
    var cartItem = {
        price : settings.price,
        color : settings.color,
        size : settings.size
    }
    
    return cartItem;
}