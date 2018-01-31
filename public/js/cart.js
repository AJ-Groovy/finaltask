'use strict';

// PARTIAL IMPLEMENTATION OF CART FUNCTIONALITY
// DONT HAVE ENOUGH TIME TO FINISH CLEAR AND CONFIRM LISTENERS FUNCTIONALITY THOUGH LOGIC FOR THAT IS PREPARED IN bagInit() FUNCTION


function bagInit() {

    var allProducts = [].slice.call(document.querySelectorAll('.cart_item')).map(function (item) {
        return createProductObject(item)
    });
    var currentState = {
        items: allProducts
    };
    console.log(currentState.items);
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
        currentState.totalValue = countTotalValue();
        return currentState;
    };

    function removeItem(index) {
        if (currentState.items[index].quantity == 0) {
            return currentState
        }
        currentState.items[index].quantity--;
        currentState.totalValue = countTotalValue();
        return currentState;
    };

    function clearBag() {
        currentState.items = [];
        currentState.totalValue = 0;
        return currentState;
    };
    function confirm() {
        currentState.items = [];
        return currentState;
    };

    function getTotal() {
        return currentState.totalValue
    }

    function getItems() {
        return currentState.items
    }

    function getQuanity() {
        var totalQuantity = currentState.items.reduce(function (prev, current) {
            return prev + current.quantity;
        }, 0);

        return totalQuantity
    }

    return {
        updateState: updateState,
        total: getTotal,
        allItems: getItems,
        quantity: getQuanity
    };
};

var bag = bagInit();

function getItemById(id, array) {
    var products = array;
    var selected = products.filter(function (obj) {
        if (obj.id == id) {
            return obj
        }
    });
    return selected[0];
}

function getIndex(id) {
    var allItems = bag.allItems();
    var selected = getItemById(id, allItems);
    var index = allItems.indexOf(selected);
    console.log(index);
    return index;
}

function getQuantity(id) {
    var quantity = getItemById(id, bag.allItems()).quantity;
    return quantity
}


// LISTENERS

var headerTotal = document.querySelector('.price');
var footerTotal = document.querySelector('.total span');
var totalQuantity = document.querySelector('.cart .value');
var container = document.querySelector('.cart_items_section');

function renderTotals() {
    headerTotal.innerHTML = '£' + bag.total();
    footerTotal.innerHTML = '£' + bag.total();
    totalQuantity.innerHTML = bag.quantity();
}

container.addEventListener('click', function (e) {
    var item = e.target;

    if (item.tagName.toLowerCase() == 'button' && item.innerHTML == '+') {
        var parent = item.closest('.cart_item');
        var quantityContainer = parent.querySelector('.quantity .value');

        var productId = parent.id;
        var index = getIndex(productId);
        bag.updateState('ADD_ITEM', index);
        var quantity = getQuantity(productId);
        quantityContainer.innerHTML = quantity;
        renderTotals();

    } else if (item.tagName.toLowerCase() == 'button' && item.innerHTML == '-') {
        var parent = item.closest('.cart_item');
        var quantityContainer = parent.querySelector('.quantity .value');

        var productId = parent.id;
        var index = getIndex(productId);
        bag.updateState('REMOVE_ITEM', index);
        var quantity = getQuantity(productId);
        quantityContainer.innerHTML = quantity;
        renderTotals();
    }
});