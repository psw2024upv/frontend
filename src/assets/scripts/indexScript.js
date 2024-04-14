// @ts-ignore
var currentIndex = 0;
// @ts-ignore
var items = document.querySelectorAll('.carousel-item');
// @ts-ignore
var totalItems = items.length;
// @ts-ignore
function nextSlide() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    updateSlide();
}
// @ts-ignore
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    else {
        currentIndex = totalItems - 1;
    }
    updateSlide();
}
// @ts-ignore
function updateSlide() {
    var offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = "translateX(".concat(offset, "%)");
}
// TODO: MAKE AND EXPORT GLOBAL CATALOG GENERATOR
