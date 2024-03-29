navbarDropdown();
carouselSlider();

/* Navbar - dropdown menu */
function navbarDropdown() {

document.addEventListener("click", element => {
  const isDropdownButton = element.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && element.target.closest("[data-dropdown]") != null) {
      return;
  }

  let currentDropdown;
  if (isDropdownButton) {
      currentDropdown = element.target.closest("[data-dropdown]");
      currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) {
          return;
      }
      else {
          dropdown.classList.remove("active");
      } 
  });
});
}

/* Carousel slider */
function carouselSlider() {
    const buttons = document.querySelectorAll("[data-carousel-button]");
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel").querySelector("[data-slides]");

            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;

            if(newIndex < 0) {
                newIndex = slides.children.length -1;
            }
            if(newIndex >= slides.children.length) {
                newIndex = 0;
            }

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });
}