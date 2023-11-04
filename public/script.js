
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger= document.querySelector(".hamburger");
  const closeIcon= document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");
  
  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      hamburger.style.position = "absolute";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      hamburger.style.position = "fixed";
      menuIcon.style.display = "none";
    }
  }
  
  hamburger.addEventListener("click", toggleMenu);
  menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )