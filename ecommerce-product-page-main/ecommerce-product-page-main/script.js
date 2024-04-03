
const contentImage = document.querySelectorAll(".product-image");
const tabBox = document.querySelector(".small");
const tabImage = document.querySelectorAll(".thumbnail");

tabBox.addEventListener("click", function (e) {
    const clicked = e.target.closest(".thumbnail");
    if (!clicked) return;

    // Remove 'active-small' class from all thumbnails
    tabImage.forEach((el) => el.classList.remove("active-small"));

    // Add 'active-small' class to the clicked thumbnail
    clicked.classList.add("active-small");

    // Get the corresponding content element using dataset
    const contentSelector = `.operation-content-${clicked.dataset.tab}`;
    const contentElement = document.querySelector(contentSelector);

    // Remove 'active' class from all content elements
    document.querySelectorAll('[class^="operation-content"]').forEach((el) => {
        el.classList.add("active");
    });

    // Add 'active' class to the specific content element if found
    if (contentElement) {
        contentElement.classList.add("active");
    }
});

  function removeOvarlay() {
    ovarlayCart.classList.remove("d-block");
    ovarlayCart.classList.remove("height");
  }

 // Selecting elements
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const quantityDisplay = document.querySelector('.Addcart');

let productQuantity = 0; // Initial quantity

// Function to update the displayed quantity
function updateQuantityDisplay() {
  quantityDisplay.textContent = productQuantity;
}



  function cart() {
    const ovarlaycart = document.querySelector(".ovarlay-cart");
  if (ovarlaycart.style.display === 'none') {
    ovarlaycart.style.display = 'block'; // Change 'block' to the desired display style
  } else {
    ovarlaycart.style.display = 'none';
  }
}



document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.slider__btn--right');
    const nextBtn = document.querySelector('.slider__btn--left');
    let slidePosition = 0;
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;
  
    function updateSlidePosition() {
      slider.style.transform = `translateX(-${slidePosition * slides[0].clientWidth}px)`;
    }
  
    function moveToNextSlide() {
      if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
      } else {
        slidePosition++;
      }
      updateSlidePosition();
    }
  
    function moveToPrevSlide() {
      if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
      } else {
        slidePosition--;
      }
      updateSlidePosition();
    }
  
    nextBtn.addEventListener('click', moveToNextSlide);
    prevBtn.addEventListener('click', moveToPrevSlide);

    
  });
  
  let slideIndex = 0;

  function showSlides() {
    const slides = document.querySelectorAll('.slider2');
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  }

  function nextSlide() {
    slideIndex++;
    showSlides();
  }

  function prevSlide() {
    slideIndex--;
    showSlides();
  }

  showSlides(); // Show initial slide


  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider img');
    const thumbnails = document.querySelectorAll('.small img');
    const totalSlides = slides.length;
    let currentSlideIndex = 0;
  
    function showOverlay() {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
  
      const closeButton = document.createElement('span');
      closeButton.classList.add('close-button');
      closeButton.innerHTML = '&times;';
  
      closeButton.addEventListener('click', function() {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 500);
      });
  
      const prevButton = document.createElement('button');
      prevButton.classList.add('prev-btn');
      prevButton.classList.add('custom-prev-class'); // Add your custom class for previous button
      const prevImg = document.createElement('img');
      prevImg.src = 'images/icon-previous.svg'; // Replace with your icon-previous image URL
      prevButton.appendChild(prevImg);
  
      const nextButton = document.createElement('button');
      nextButton.classList.add('next-btn');
      nextButton.classList.add('custom-next-class'); // Add your custom class for next button
      const nextImg = document.createElement('img');
      nextImg.src = 'images/icon-next.svg'; // Replace with your icon-next image URL
      nextButton.appendChild(nextImg);
  
      prevButton.addEventListener('click', function() {
        currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
        updateOverlayImage();
      });
  
      nextButton.addEventListener('click', function() {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
        updateOverlayImage();
      });
  
      function updateOverlayImage() {
        overlayImage.src = slides[currentSlideIndex].src;
      }
      
      const overlayImage = document.createElement('img');
      overlayImage.src = slides[currentSlideIndex].src;
  
      overlay.appendChild(closeButton);
      overlay.appendChild(prevButton);
      overlay.appendChild(nextButton);
      overlay.appendChild(overlayImage);

      document.body.appendChild(overlay);
  
      overlay.classList.add('active');
    }
  
    slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        currentSlideIndex = index;
        showOverlay();
      });
    });
  
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', function() {
        slides.forEach(slide => {
          slide.classList.remove('active');
          slide.style.display = 'none'; // Hide all slides by default
        });
  
        thumbnails.forEach(thumb => {
          thumb.classList.remove('active-thumbnail');
        });
  
        slides[index].classList.add('active');
        slides[index].style.display = 'block'; // Display the clicked slide
        thumbnails[index].classList.add('active-thumbnail');
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const del = document.querySelector('#del');
    const addToCartBtn = document.querySelector('.button');
    const plusButton = document.querySelector('.plus');
    const minusButton = document.querySelector('.minus');
    const quantityDisplay = document.querySelector('.Addcart');
    const quantityDisplay2 = document.querySelector('.Addcart2');
    const emptyCart = document.querySelector('.cart-content-empty');
    const cartItems = document.getElementById('cartItems');
    const cartContent = document.querySelector('.ovarlay-cart');
    const cartToggleBtn = document.querySelector('.cart');
    const fulledCart = document.querySelector('.fulledCart');
    const notiYellow = document.querySelector('.noti-yellow');
    
    let productQuantity = 0; // Initial product quantity
    let productQuantity2 = 0;
 

    document.addEventListener('click', function(event) {
        const isClickInsideCart = cartContent.contains(event.target);
        const isClickOnCartToggle = (event.target === cartToggleBtn);

        if (!isClickInsideCart && !isClickOnCartToggle) {
            // Click occurred outside the cart dropdown or not on the toggle button
            cartContent.style.display = 'none';
        }
    });

    let itemQuantity = 0; // Quantity of the item in the cart

    function updateCartDisplay() {
        if (itemQuantity > 0) {
          fulledCart.style.display = 'block';
            emptyCart.style.display = 'none';
            cartItems.style.display = 'block';
            notiYellow.style.display = 'block';
            
            renderCartItems();
        } else {
          fulledCart.style.display = 'none';
            emptyCart.style.display = 'block';
            cartItems.style.display = 'none';
            notiYellow.style.display = 'none';
        }
    }

    function renderCartItems() {
      cartItems.innerHTML = ''; // Clear existing items
      if (itemQuantity) {
          const h3 = document.createElement('h3');
          const totalCost = itemQuantity * 125.00; // Multiply product quantity by product cost
          h3.textContent = `$125.00 x ${itemQuantity} $${totalCost.toFixed(2)}`; // Display multiplication expression and total cost
          cartItems.appendChild(h3);
      }
  }
  


    function updateQuantityDisplay() {
        quantityDisplay.textContent = productQuantity;
        quantityDisplay2.textContent = productQuantity2;
    }

    addToCartBtn.addEventListener('click', () => {
        itemQuantity = productQuantity; // Add the current product quantity to the cart
        productQuantity2 =productQuantity;
      
         
     
        updateCartDisplay(); // Update the cart display
        updateQuantityDisplay(); // Reset the quantity display
    });

    plusButton.addEventListener('click', () => {
        productQuantity++;
        updateQuantityDisplay();
    });

    minusButton.addEventListener('click', () => {
    
            productQuantity--;
            updateQuantityDisplay();
  
    });

    function clearCart() {
    itemQuantity = 0; // Reset the item quantity
    productQuantity = 0; // Reset the product quantity
    updateCartDisplay(); // Update the cart display
    updateQuantityDisplay(); // Update the quantity display
}

// Call clearCart function when you want to delete everything in the cart
// For example, you can attach it to a "Clear Cart" button click event listener:
 
del.addEventListener('click', clearCart);



    cartToggleBtn.addEventListener('click', () => {
        const cartContent = document.querySelector('.cartContent');
        cartContent.style.display = cartContent.style.display === 'block' ? 'none' : 'block';
    });

    // Initial cart display and quantity
    updateCartDisplay();
    updateQuantityDisplay();
});

const menu = document.querySelector('.menu');
const drop = document.querySelector('.dropdown');
const close = document.querySelector('.close');
// const dropdownContent = document.querySelector('.dropdown-content')

menu.addEventListener('click', ()=>{
  drop.style.display ="flex";
  close.style.display ="flex";
  menu.style.display = "none";

})
close.addEventListener('click', ()=>{
  drop.style.display ="none";
  close.style.display ="none";
  menu.style.display = "flex";
})