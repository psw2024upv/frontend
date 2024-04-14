// @ts-ignore
let currentIndex: number = 0;
// @ts-ignore
const items: NodeListOf<Element> = document.querySelectorAll('.carousel-item');
// @ts-ignore
const totalItems: number = items.length;

// @ts-ignore
function nextSlide(): void {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlide();
}

// @ts-ignore
function prevSlide(): void {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateSlide();
}

// @ts-ignore
function updateSlide(): void {
  const offset: number = -currentIndex * 100;
  (document.querySelector('.carousel-inner') as HTMLElement).style.transform = `translateX(${offset}%)`;
}

// TODO: MAKE AND EXPORT GLOBAL CATALOG GENERATOR
