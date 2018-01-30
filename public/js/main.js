'use strict';
if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
    Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };

var header = document.querySelector('.header');
header.addEventListener('click', function (e) {
    e.preventDefault();
    var item = e.target;

    if (item.classList.contains('search_icon')) {
        var container = item.closest('.search');
        container.classList.toggle('expanded');
    }
});

// THIS CODE HERE ONLY TO MAKE SEARCH INPUT EXPANDABLE, BUT IT ALSO PREVENTS LOGO-LINK TO REDIRECT TO MAIN. AS THERE WAS NO MENTION OF
// THIS FUNCTIONALITY IN TASK I DECIDED NOT TO FIX IT 'COS OF LACK OF TIME :) 

// AND ALSO HERE IS A POLYFIL FOR ELEMENT.CLOSEST FROM developer.mozilla.org 