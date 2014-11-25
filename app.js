document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    console.log('ready?');
    var i,
        d = document,
        w = window,
        affixedElements = d.querySelectorAll('.affix'),
        bodyRect = d.body.getBoundingClientRect(),
        topPositions = [],
        e,
        s;
    
    // Get the initial postition of each element that is to be affixed.
    for (i = 0; i < affixedElements.length; i += 1) {
        e = affixedElements[i];
        s = window.getComputedStyle(e);
        
        // I wish I could explain exactly why margin-top has to be divided by 2 for this to
        // work properly, but I have no idea why.
        topPositions.push(Math.floor(Math.abs(e.getBoundingClientRect().top + (parseFloat(s.marginTop) / 2) - bodyRect.top)));
    }
    
    function onScroll(e) {
        var scrollY = w.pageYOffset || d.body.scrollTop || d.documentElement.scrollTop;
        for (i = 0; i < affixedElements.length; i += 1) {
            if (topPositions[i] <= scrollY) {
                affixedElements[i].classList.add('affixed');
                if (affixedElements[i].classList.contains('navbar-affix')) {
                    d.body.classList.add('has-affixed-navbar');
                }
            } else {
                affixedElements[i].classList.remove('affixed');
                d.body.classList.remove('has-affixed-navbar');
            }
        }
    }
    
    window.addEventListener('scroll', onScroll, false);
});