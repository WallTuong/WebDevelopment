navbarDropdown();
carouselSlider();


// Navbar - dropdown menu
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

// Carousel slider
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

// Add products to grid system

    let currency = "€";
    let products = {
        data:[
            {
                productName: "Rushroom mousse",
                category: "appertizer",
                price: "11",
                image: "images/appertizer/appertizer-1.jpg",
                links: "test.html"
            },
            {
                productName: "Strange mussels",
                category: "appertizer",
                price: "14",
                image: "images/appertizer/appertizer-2.jpg",
            },
            {
                productName: "tom yam coong",
                category: "appertizer",
                price: "17",
                image: "images/appertizer/appertizer-3.jpg",
            },
            {
                productName: "Tuna Salad",
                category: "appertizer",
                price: "21",
                image: "images/appertizer/appertizer-4.jpg",
            },
            {
                productName: "coca cola - 0.5l",
                category: "beverage",
                price: "8",
                image: "images/beverages/beverage-1.webp",
            },
            {
                productName: "coca cola zero - 0.5l",
                category: "beverage",
                price: "8",
                image: "images/beverages/beverage-2.jpg",
            },
            {
                productName: "fanta orange - 0.5l",
                category: "beverage",
                price: "8",
                image: "images/beverages/beverage-3.png",
            },
            {
                productName: "fanta exotic - 0.5l",
                category: "beverage",
                price: "8",
                image: "images/beverages/beverage-4.png",
            },
            {
                productName: "sprite - 0.5l",
                category: "beverage",
                price: "8",
                image: "images/beverages/beverage-5.webp",
            },
            {
                productName: "Strawberry split",
                category: "dessert",
                price: "14",
                image: "images/dessert/dessert-2.webp",
            },
            {
                productName: "apple ice cake",
                category: "dessert",
                price: "16",
                image: "images/dessert/dessert-3.webp",
            },
            {
                productName: "straciatella",
                category: "dessert",
                price: "16",
                image: "images/dessert/dessert-4.jpg",
            },
            {
                productName: "ice cake of the forrest",
                category: "dessert",
                price: "34",
                image: "images/dessert/dessert-5.jpg",
            },
            {
                productName: "com tam saigon quan 3",
                category: "breakfast",
                price: "12",
                image: "images/breakfast/breakfast-1.jpg",
            },
            {
                productName: "gourmet openfaced sandwich",
                category: "breakfast",
                price: "28",
                image: "images/breakfast/breakfast-2.jpg",
            },
            {
                productName: "breakfast palette",
                category: "breakfast",
                price: "15",
                image: "images/breakfast/breakfast-3.jpg",
            },
            {
                productName: "crossaint with latte",
                category: "breakfast",
                price: "9",
                image: "images/breakfast/breakfast-4.jpg",
            },
            {
                productName: "Chef's mood",
                category: "Main",
                price: "49",
                image: "images/main/main-1.webp",
            },
            {
                productName: "Tuna on rice",
                category: "main",
                price: "37",
                image: "images/main/main-2.jpg",
            },
            {
                productName: "spaghetti with meat balls in tomato sauce",
                category: "main",
                price: "24",
                image: "images/main/main-3.jpg",
            },
            {
                productName: "lamb ribs with asparges",
                category: "main",
                price: "48",
                image: "images/main/main-4.jpg",
            },
            {
                productName: "tomahawk 2kg",
                category: "main",
                price: "139",
                image: "images/main/main-5.jpg",
            },
        ]
    };

for (let i of products.data) {

    // let link = document.createElement("a");
    // link.classList.add("anchor-container");
    // if (i.links == null) {
    //     i.links = "#";
    // }
    // link.href = i.links;

    let card = document.createElement("div");
    card.classList.add("card", i.category);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let itemNameContainer = document.createElement("div");
    itemNameContainer.classList.add("item-container");
    let itemName = document.createElement("h5");
    itemName.classList.add("product-name");
    itemName.textContent = i.productName.toUpperCase();
    itemNameContainer.appendChild(itemName);

    let itemPriceContainer = document.createElement("div");
    itemPriceContainer.classList.add("price-container");
    let itemPrice = document.createElement("h5");
    itemPrice.classList.add("product-price");
    itemPrice.textContent = currency + i.price;
    itemPriceContainer.appendChild(itemPrice);
    
    card.appendChild(itemNameContainer);
    card.appendChild(itemPriceContainer);
    // link.appendChild(card);
    document.querySelector(".product-container").appendChild(card);
}


// Filter items after category
function filterProduct(value) {
    
    let buttons = document.querySelectorAll(".button-filter");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.textContent.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach(element => {
        if (value == "all") {
            element.classList.remove("hide");
        }
        else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            }
            else {
                element.classList.add("hide");
            }
        }
    });
}
