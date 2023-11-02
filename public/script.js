const offerHeader = document.querySelector('.offer-description-header');
const offerDescription = document.querySelector('.offer-description-p');
const oc = document.getElementById('oc')

const panels = document.querySelectorAll('.panel');


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        const current = document.querySelector('.panel.offer-active');
        current.classList.remove('offer-active');
        panel.classList.add('offer-active');

        if (panel === document.getElementById('oc')){
            offerHeader.innerHTML = "Ubezpieczenie OC/AC"
            offerDescription.innerHTML="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            document.querySelector('.offer-right').style.backgroundImage = "url(/resources/car.jpg)"; 
        
    
        } else if (panel === document.getElementById('home')){
            offerHeader.innerHTML = "ubezpieczenie na mieszkanie"
            offerDescription.innerHTML="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
            document.querySelector('.offer-right').style.backgroundImage = "url(/resources/home.jpg)";
   

        } else if (panel === document.getElementById('life')){
            offerHeader.innerHTML = "ubezpieczenie na życie"
            offerDescription.innerHTML="lorem ipsum dolmpor incididuntctetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
            document.querySelector('.offer-right').style.backgroundImage = "url(/resources/life.jpg)";

        } else if (panel === document.getElementById('school')){
            offerHeader.innerHTML = "ubezpieczenie szkolne"
            offerDescription.innerHTML="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
            document.querySelector('.offer-right').style.backgroundImage = "url(/resources/szkolne.jpg)";

        }else if (panel === document.getElementById('travel')){
            offerHeader.innerHTML = "ubezpieczenie podróżne"
            offerDescription.innerHTML="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
            document.querySelector('.offer-right').style.backgroundImage = "url(/resources/travel.jpg)";

        }
    });
}
);


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