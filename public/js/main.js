// preloader 

window.addEventListener('load', function () {
  document.querySelector('.pre-loader').className += ' hidden'
});

// nav bar
window.onscroll = function() { toggleNavbarShadow() };

function toggleNavbarShadow() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#ffffff"; 
    navbar.style.boxShadow = "0px 2px 15px rgba(0, 0, 0, 0.1)"; 
  } else {
    navbar.style.backgroundColor = "transparent"; 
    navbar.style.boxShadow = "none"; 
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item.dropdown");

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      if (window.innerWidth > 991) {
        const subMenu = this.querySelector(".sub-menu");
        if (subMenu) {
          subMenu.style.display = "block";
        }
      }
    });

    item.addEventListener("mouseleave", function () {
      if (window.innerWidth > 991) {
        const subMenu = this.querySelector(".sub-menu");
        if (subMenu) {
          subMenu.style.display = "none";
        }
      }
    });

    item.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const subMenu = this.querySelector(".sub-menu");
        if (subMenu) {
          const isVisible = subMenu.style.display === "block";
          subMenu.style.display = isVisible ? "none" : "block";
        }
      }
    });
  });

  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});


// Counter animation script
document.querySelectorAll('.counter').forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 200; 

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10); 
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});


//animation script

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//test

$(document).ready(function () {
  $('#testimonial-slider').owlCarousel({
      items: 1,
      itemsDesktop: [1000, 1],
      itemsDesktopSmall: [979, 1],
      itemsTablet: [768, 1],
      pagination: false,
      navigation: true,
      navigationText: ["", ""],
      slideSpeed: 2000,
      autoPlay: true
  });
});

