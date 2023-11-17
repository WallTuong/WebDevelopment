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
    })
})