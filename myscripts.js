window.addEventListener("scroll", (e) => {
  let navbar = document.getElementById("navbar").classList;
  let active_class = "navbar_scrolled";

  if (pageYOffset > 550) navbar.add(active_class);
  else navbar.remove(active_class);
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");
 
  // Показать/скрыть кнопку при прокрутке страницы
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 1000) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
 
  // Плавная прокрутка при клике на кнопку
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});