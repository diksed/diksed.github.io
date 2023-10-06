'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalSubtitle = document.querySelector("[data-modal-subtitle]");
const modalText = document.querySelector("[data-modal-text]");


// modal toggle function
const modalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}


// add click event to all portfolio items
const portfolioItem = document.querySelectorAll("[data-filter-item]")
for (let i = 0; i < portfolioItem.length; i++) {

  portfolioItem[i].addEventListener("click", function () {
    //modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    //modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-project-title]").innerHTML;
    modalSubtitle.innerHTML = this.querySelector("[data-project-subtitle]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-project-content]").innerHTML;

    modalFunc();
  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", modalFunc);
overlay.addEventListener("click", modalFunc);


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const navigateFunc = function (target) {

  for (let i = 0; i < pages.length; i++) {
    if (target === pages[i].dataset.page) {
      pages[i].classList.add("active");
      navigationLinks[i].classList.add("active");
      window.scrollTo(0, 0);
    } else {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    }
  }
}

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    navigateFunc(this.innerHTML.toLowerCase())
  });
}

const clientFunc = function (category) {
  navigateFunc("CV")
  setTimeout(function () {
    document.querySelector("[data-experience-anchor]").scrollIntoView();
  }, 10);
}
