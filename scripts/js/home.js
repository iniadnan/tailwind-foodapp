// CHANGE CATEGORY
var el = document.querySelectorAll('#category button');
for (let i = 0; i < el.length; i++) {
  el[i].onclick = function() {
    var c = 0;
    while (c < el.length) {
      el[c++].className = 'relative text-14px text-color-130f26 mr-28px';
    }
    el[i].className = 'relative text-14px text-color-130f26 mr-28px category-active';
  };
}

// SWIPER: POPULAR FOOD
const popularFood = new Swiper("#popular-food", {
    slidesPerView: "auto",
    spaceBetween: 14,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});