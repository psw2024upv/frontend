let starFilters = document.getElementsByClassName('star-filter') as HTMLCollectionOf<HTMLInputElement>;
let selectedRatings: string[] = [];

for (let i = 0; i < starFilters.length; i++) {
  starFilters[i].parentElement!.addEventListener('click', function () {
    let selectedValue = starFilters[i].value;

    if (selectedRatings.includes(selectedValue)) {
      let index = selectedRatings.indexOf(selectedValue);
      selectedRatings.splice(index, 1);
      starFilters[i].checked = false;
    } else {
      selectedRatings.push(selectedValue);
      starFilters[i].checked = true;
    }
  })
}

let wishlistFilter = document.getElementById('wishlist-filter') as HTMLInputElement;
let boughtFilter = document.getElementById('previously-bought-filter') as HTMLInputElement;
let listFilters: string[] = [];

wishlistFilter.parentElement!.addEventListener('click', () => {
  let value = wishlistFilter.value;

  if (listFilters.includes(value)) {
    let index = listFilters.indexOf(value);
    listFilters.splice(index, 1);
    wishlistFilter.checked = false;
  } else {
    listFilters.push(value);
    wishlistFilter.checked = true;
  }
})

boughtFilter.parentElement!.addEventListener('click', () => {
  let value = boughtFilter.value;

  if (listFilters.includes(value)) {
    let index = listFilters.indexOf(value);
    listFilters.splice(index, 1);
    boughtFilter.checked = false;
  } else {
    listFilters.push(value);
    boughtFilter.checked = true;
  }
})

let priceSliderValue = (document.getElementById('price-slider') as HTMLInputElement).value;
let applyButton = document.getElementById('apply-filter-button') as HTMLButtonElement;
applyButton.addEventListener('click', () => {
  let requestData = {
    priceFilter: priceSliderValue,
    ratingFilter: selectedRatings,
    listFilter: listFilters
  }

  console.log(requestData);
})
