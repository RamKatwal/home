const navToggle = document.querySelector(".menufig");
const links= document.querySelector(".nav-links");
const sliderdown=document.querySelector(".fordown");

navToggle.addEventListener("click", function() {
	links.classList.toggle("nav-active");
  sliderdown.classList.toggle("slider-active");
});


let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;



      // Clear all images
      function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = "none";
        }
      }
    

      // Init slider
      function startSlide() {
        reset();
        sliderImages[0].style.display = "block";
      }
    

      // Show prev
      function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = "block";
        current--;
      }
    
      // Show next
      function slideRight() {
        reset();
        sliderImages[current + 1].style.display = "block";
        current++;
      }
    

      // Left arrow click
      arrowLeft.addEventListener("click", function() {
        if (current === 0) {
           current = sliderImages.length;
        }
        slideLeft();
      });
    

      // Right arrow click
      arrowRight.addEventListener("click", function() {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
      });
    
      startSlide();





/*const cslide= document.querySelector(".slide");
const cimages=document.querySelector(".slide img");
const nextBtn=document.querySelector("#Next");
const prevBtn=document.querySelector("#Prev");

let counter = 1;
const size = cimages.clientWidth;

cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', function() {
	
	
	cslide.style.transition="transform 0.4s ease-in-out";
	counter++;
	
	if(counter>=3){
		nextBtn.style.display = "none";
	}
	cslide.style.transform = 'translateX(' +(-size*counter)+ 'px)';  


});

prevBtn.addEventListener('click', function() {
	cslide.style.transition="transform 0.4s ease-in-out";
	counter--;
	cslide.style.transform = 'translateX(' +(-size*counter)+ 'px)';                               
});




 cslide.addEventListener('transitioned',function(){
	if(cimages[counter].id== 'lastclone'){
		cslide.style.transition="none";
		counter=cimages.length - 2;
		cslide.style.transform = 'translateX(' +(-size*counter)+ 'px)';
	
	}

});


/*
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#Next");
const prevBtn = document.querySelector("#Prev");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
*/




const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', function() {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', function() {
  container.classList.remove("right-panel-active");
});