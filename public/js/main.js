'use strict';

var header = document.querySelector('.header');
header.addEventListener('click', function(e){
    e.preventDefault();
    var item = e.target;

    if(item.classList.contains('search_icon')){
        var container = item.closest('.search');
        container.classList.toggle('expanded');
    }
})