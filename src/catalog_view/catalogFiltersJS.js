var starFilters = document.getElementsByClassName('star-filter');
var selectedRatings = [];
var _loop_1 = function (i) {
    starFilters[i].parentElement.addEventListener('click', function () {
        var selectedValue = starFilters[i].value;
        if (selectedRatings.includes(selectedValue)) {
            var index = selectedRatings.indexOf(selectedValue);
            selectedRatings.splice(index, 1);
            starFilters[i].checked = false;
        }
        else {
            selectedRatings.push(selectedValue);
            starFilters[i].checked = true;
        }
    });
};
for (var i = 0; i < starFilters.length; i++) {
    _loop_1(i);
}
var wishlistFilter = document.getElementById('wishlist-filter');
var boughtFilter = document.getElementById('previously-bought-filter');
var listFilters = [];
wishlistFilter.parentElement.addEventListener('click', function () {
    var value = wishlistFilter.value;
    if (listFilters.includes(value)) {
        var index = listFilters.indexOf(value);
        listFilters.splice(index, 1);
        wishlistFilter.checked = false;
    }
    else {
        listFilters.push(value);
        wishlistFilter.checked = true;
    }
});
boughtFilter.parentElement.addEventListener('click', function () {
    var value = boughtFilter.value;
    if (listFilters.includes(value)) {
        var index = listFilters.indexOf(value);
        listFilters.splice(index, 1);
        boughtFilter.checked = false;
    }
    else {
        listFilters.push(value);
        boughtFilter.checked = true;
    }
});
var priceSliderValue = document.getElementById('price-slider').value;
var applyButton = document.getElementById('apply-filter-button');
applyButton.addEventListener('click', function () {
    var requestData = {
        priceFilter: priceSliderValue,
        ratingFilter: selectedRatings,
        listFilter: listFilters
    };
    console.log(requestData);
});
