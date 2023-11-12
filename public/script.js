//Reveal animation
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 250;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
//Hamburger Menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    hamburger.style.position = "fixed";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    hamburger.style.position = "fixed";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

//Page Up Button
document.getElementById("pageUp").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function checkScroll() {
  let backToTopBtn = document.getElementById("pageUp");
  let footer = document.querySelector("footer");
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  let footerTop = footer.getBoundingClientRect().top;

  if (scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }

  let distanceToFooter = footerTop - windowHeight;

  if (distanceToFooter < 0) {
    backToTopBtn.style.bottom = 20 - distanceToFooter + "px";
  } else {
    backToTopBtn.style.bottom = "20px";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  checkScroll();
};

//Back button (partners site)
let backButton = document.querySelector(".js-back");
if (backButton != null) {
  backButton.addEventListener("click", () => {
    history.back();
  });
}
