'use strict';

function bagInit() {

    var allProducts = [].slice.call(document.querySelectorAll('.cart_item')).map(function (item) {
        return createProductObject(item)
    });
    var currentState = {
        items: allProducts
    };

    function countTotalValue() {
        var totalValue = currentState.items.reduce(function (prev, current) {
            var currentValue = current.price * current.quantity;
            return prev + currentValue;
        }, 0);
        return totalValue
    }

    currentState.totalValue = countTotalValue();

    function updateState(action, index) {
        var index = index;
        switch (action) {
            case 'ADD_ITEM': addItem(index);
                break;
            case 'REMOVE_ITEM': removeItem(index);
                break;
            case 'CLEAR_BAG': clearBag();
                break;
            case 'CONFIRM': confirm();
                break;
            default: return currentState;
        }
    };

    function addItem(index) {
        currentState.items[index].quantity++;
        currentState.totalValue;
        return currentState;
    };

    function removeItem(index) {
        currentState.items[index].quantity--;
        currentState.totalValue = countTotalValue();
        return currentState;
    };

    function clearBag() {
        currentState.items = [];
        currentState.totalValue
        return currentState;
    };
    function confirm() {
        currentState.items = [];
        return currentState;
    };

    return {
        currentState: currentState,
        updateState: updateState
    };
};

var bag = bagInit();


// LISTENERS

var headerTotal = document.querySelector('.price');
var footerTotal = document.querySelector('.total span');
var container = document.querySelector('.cart_items_section');

container.addEventListener('click', function (e) {
    var item = e.target;

    if (item.tagName.toLowerCase() == 'button' && item.innerHTML == '+') {
        
    }
});

