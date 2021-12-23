// $(".testimo-slide").slick();

$(".lider-2").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-circle-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-circle-outline"></ion-icon></button>`,
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function() {
    menu.classList.add(activeClass);
});
window.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        menu.classList.remove(activeClass);
    }
});