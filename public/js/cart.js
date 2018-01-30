'use strict';

function bagInit() {

    var allProducts = [].slice.call(document.querySelectorAll('.cart_item')),
        currentState = allProducts.map(function (item) {
            return createProductObject(item)
        });

    var totalValue = countTotalValue();

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
        currentState[index].quantity++;
        totalValue = countTotalValue();
        return currentState;
    };

    function removeItem(index) {
        currentState[index].quantity--;
        countTotalValue();
        return currentState;
    };

    function clearBag() {
        currentState = [];
        countTotalValue();
        return currentState;
    };
    function confirm() {
        currentState = [];
        countTotalValue();
        return currentState;
    };

    function countTotalValue() {

        totalValue = currentState.reduce(function (prev, current) {
            var currentValue = current.price * current.quantity;
            return prev + currentValue;
        }, 0);

        return totalValue
    }

    return {
        currentState: currentState,
        updateState: updateState,
        totalValue: totalValue,
        countTotalValue: countTotalValue
    };
};

var bag = bagInit();
