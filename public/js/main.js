'use strict';

var header = document.querySelector('.header');
header.addEventListener('click', function(e){
    e.preventDefault();
    var item = e.target;

    if(item.classList.contains('search_icon')){
        var container = item.closest('.search');
        container.classList.toggle('expanded');
    }
});

// THIS CODE HERE ONLY TO MAKE SEARCH INPUT EXPANDABLE, BUT IT ALSO PREVENTS LOGO-LINK TO REDIRECT TO MAIN. AS THERE WAS NO MENTION OF
// THIS FUNCTIONALITY IN TASK I DECIDED NOT TO FIX IT 'COS OF LACK OF TIME :) 