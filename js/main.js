let carouselControls = document.querySelectorAll('.carousel-control');
let carouselIndicators = document.querySelectorAll('.indicators-top');

let carouselEnter = function(event) {
    [].forEach.call(carouselControls, function(control) {
        control.style.visibility = "visible";
    });

    [].forEach.call(carouselIndicators, function(indicator) {
        indicator.style.visibility = "visible";
    });
}

let carouselLeave = function(event) {
    [].forEach.call(carouselControls, function(control) {
        control.style.visibility = "hidden";
    });

    [].forEach.call(carouselIndicators, function(indicator) {
        indicator.style.visibility = "hidden";
    });
}

window.onload = function() {
    [].forEach.call(carouselControls, function(control) {
        control.style.visibility = "hidden";
    });

    [].forEach.call(carouselIndicators, function(indicator) {
        indicator.style.visibility = "hidden";
    });
}
