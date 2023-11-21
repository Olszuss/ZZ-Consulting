//Get current year to footer
document.getElementById('year').innerHTML = new Date().getFullYear();

//Reveal animation
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
//Hamburger Menu
const a = document.querySelector(".menu");
const aItems = document.querySelectorAll(".menuItem");
const b = document.querySelector(".hamburger");
const c = document.querySelector(".closeIcon");
const aIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (a.classList.contains("showMenu")) {
    a.classList.remove("showMenu");
    c.style.display = "none";
    b.style.position = "fixed";
    aIcon.style.display = "block";
  } else {
    a.classList.add("showMenu");
    c.style.display = "block";
    b.style.position = "fixed";
    aIcon.style.display = "none";
  }
}

b.addEventListener("click", toggleMenu);
aItems.forEach(function (aItem) {
  aItem.addEventListener("click", toggleMenu);
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

  if (distanceToFooter < -180) {
    backToTopBtn.style.bottom = -180 - distanceToFooter + "px";
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