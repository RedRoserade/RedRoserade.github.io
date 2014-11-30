document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    console.log('ready?');
    var d = document;
    var w = window;

    var affixedElements = d.querySelectorAll('.affix');
    var bodyRect = d.body.getBoundingClientRect();
    var topPositions = [];

    // Get the initial postition of each element that is to be affixed.
    for (var i = 0; i < affixedElements.length; i += 1) {
        var e = affixedElements[i];
        var s = window.getComputedStyle(e);

        // I wish I could explain exactly why margin-top has to be divided by 2 for this to
        // work properly, but I have no idea why.
        topPositions.push(
            Math.floor(
                Math.abs(
                    e.getBoundingClientRect().top +
                    (parseFloat(s.marginTop) / 2) -
                    bodyRect.top
                )
            )
        );
    }

    window.addEventListener('scroll', function onScroll(e) {
        var scrollY =
            w.pageYOffset ||
            d.body.scrollTop ||
            d.documentElement.scrollTop;

        for (var i = 0; i < affixedElements.length; i += 1) {
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
    }, false);
});
