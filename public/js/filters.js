'use strict';

var filters = document.querySelector('.filters_section');

filters.addEventListener('click', function (e) {
    var item = e.target,
        parentCategory = item.closest('.filter_item_container'),
        activeFilter = parentCategory.querySelector('.selected_filter')

    if (item.classList.contains('filter_option') && item.innerHTML !== 'Not selected') {
        var currentSelected = parentCategory.querySelector('.selected');

        if (currentSelected != null) {
            currentSelected.classList.remove('selected');
        };

        item.classList.add('selected');
        parentCategory.classList.add('has_filter');
        activeFilter.innerHTML = item.innerHTML;
    } else if (item.classList.contains('filter_option') && item.innerHTML == 'Not selected') {
        parentCategory.classList.remove('has_filter');
        activeFilter.innerHTML = '';
    }
});