'use strict';
function cart() {

    var totalPrice = document.querySelector('.price');
    var currentValue = document.querySelector('.value');

    function addToCart(item) {

        var newPrice = +totalPrice.innerHTML.substring(1) + item.price;
        var newAmount = parseInt(currentValue.innerHTML) + 1;

        totalPrice.innerHTML = '£' + newPrice.toFixed(2);
        currentValue.innerHTML = newAmount;
    }

    return {
        addToCart: addToCart
    }
};

function createProductObject(obj) {
    var id = obj.id,
        currentItem = catalog.filter(function (item) {
            if (item.id == id) {
                return item
            };
        });
    var price = currentItem[0].discountedPrice
    return {
        id: id,
        price: price,
        quantity: 1
    }
};

var mainCart = cart();

