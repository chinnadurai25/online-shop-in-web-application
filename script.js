// Fetch products from backend
fetch('http://10.10.12.133:5000/api/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Update the DOM with product data
  })
  .catch(error => console.error('Error:', error));

// Add a new product
fetch('http://10.10.12.133:5000/api/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'New Product',
    price: 19.99,
    image: 'images/new-product.jpg',
  }),
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => console.error('Error:', error));

let cart = document.querySelector('.shopping-cart');
let login = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#cart-btn').onclick = () => {
  cart.classList.toggle('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
  login.classList.toggle('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  cart.classList.remove('active');
  login.classList.remove('active');
}

window.onscroll = () => {
  login.classList.remove('active');
  navbar.classList.remove('active');
  cart.classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
