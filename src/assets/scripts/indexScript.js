let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let popularItemsWrapper = document.getElementById('popular-items-wrapper');

function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlide();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateSlide();
}

function updateSlide() {
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}


for (let i = 0; i < 8; i++) {
  let popularItem = document.createElement('div');
  popularItem.innerHTML = `<div class="h-80" style="overflow: hidden">
              <img class="w-full object-cover" src="https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/235459s2.jpg" alt="White T-shirt">
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 truncate-lines-2">White T-shirt</div>
              <p class="text-gray-700 text-base truncate-lines-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>`;
  popularItemsWrapper.append(popularItem);
}
