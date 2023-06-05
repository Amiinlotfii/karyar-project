let items = document.querySelectorAll('.carousel .carousel-item')
items.forEach((el) => {
    const screenWidth = screen.width;
    if( screenWidth > 767){
        const minPerSlide = 6
        let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
        
    }else{
        const minPerSlide = 3
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                next = items[0]
              }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }    }
    
    
})


function show_hide_password() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("eye").style.display = "none";
      document.getElementById("closeeye").style.display = "flex";
   } else {
      x.type = "password";
      document.getElementById("closeeye").style.display = "none";
      document.getElementById("eye").style.display = "flex";
    }
  }

  function change_color() {
    document.getElementById("Ga").style.display = "none";
    document.getElementById("Ba").style.display = "flex";
   }
// ---------------------------------
window.onscroll = function() {myFunction(),myFunctionB()};
    
var navbar = document.getElementById("stikyNav");
var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//----------------------------------------

var course = document.getElementById("course");
var courseTop = course.offsetTop;
var stikyNavItem1 = document.getElementById("stikyNavItem1");
var stikyNavItem1Img = document.getElementById("stikyNavItem1Img");

var Advantages = document.getElementById("Advantages");
var AdvantagesTop = Advantages.offsetTop;
var stikyNavItem2 = document.getElementById("stikyNavItem2");
var stikyNavItem2Img = document.getElementById("stikyNavItem2Img");

var steps = document.getElementById("steps");
var stepsTop = steps.offsetTop;
var stikyNavItem3 = document.getElementById("stikyNavItem3");
var stikyNavItem3Img = document.getElementById("stikyNavItem3Img");

var mentors = document.getElementById("mentors");
var mentorsTop = mentors.offsetTop;
var stikyNavItem4 = document.getElementById("stikyNavItem4");
var stikyNavItem4Img = document.getElementById("stikyNavItem4Img");

var hazine = document.getElementById("hazine");
var hazineTop = hazine.offsetTop;
var stikyNavItem5 = document.getElementById("stikyNavItem5");
var stikyNavItem5Img = document.getElementById("stikyNavItem5Img");

function myFunctionB() {
  
  
  if (window.pageYOffset >= courseTop && window.pageYOffset <= AdvantagesTop) {
    
    stikyNavItem1.classList.add("stikyActive");
    stikyNavItem2.classList.remove("stikyActive");
    stikyNavItem3.classList.remove("stikyActive");
    stikyNavItem4.classList.remove("stikyActive");
    stikyNavItem5.classList.remove("stikyActive");
    stikyNavItem1Img.classList.add("d-inline-flex")
    stikyNavItem1Img.classList.remove("d-none")
    stikyNavItem2Img.classList.remove("d-inline-flex")
    stikyNavItem2Img.classList.add("d-none")
    stikyNavItem3Img.classList.remove("d-inline-flex")
    stikyNavItem3Img.classList.add("d-none")
    stikyNavItem4Img.classList.remove("d-inline-flex")
    stikyNavItem4Img.classList.add("d-none")
    stikyNavItem5Img.classList.remove("d-inline-flex")
    stikyNavItem5Img.classList.add("d-none")
  }
  else if(window.pageYOffset >= AdvantagesTop && window.pageYOffset <= stepsTop) {
    stikyNavItem1.classList.remove("stikyActive")
    stikyNavItem2.classList.add("stikyActive");
    stikyNavItem3.classList.remove("stikyActive");
    stikyNavItem4.classList.remove("stikyActive");
    stikyNavItem5.classList.remove("stikyActive");
    stikyNavItem1Img.classList.remove("d-inline-flex")
    stikyNavItem1Img.classList.add("d-none")
    stikyNavItem2Img.classList.add("d-inline-flex")
    stikyNavItem2Img.classList.remove("d-none")
    stikyNavItem3Img.classList.remove("d-inline-flex")
    stikyNavItem3Img.classList.add("d-none")
    stikyNavItem4Img.classList.remove("d-inline-flex")
    stikyNavItem4Img.classList.add("d-none")
    stikyNavItem5Img.classList.remove("d-inline-flex")
    stikyNavItem5Img.classList.add("d-none")
  }
  else if(window.pageYOffset >= stepsTop && window.pageYOffset <= mentorsTop) {
    stikyNavItem1.classList.remove("stikyActive")
    stikyNavItem2.classList.remove("stikyActive");
    stikyNavItem3.classList.add("stikyActive");
    stikyNavItem4.classList.remove("stikyActive");
    stikyNavItem5.classList.remove("stikyActive");
    stikyNavItem1Img.classList.remove("d-inline-flex")
    stikyNavItem1Img.classList.add("d-none")
    stikyNavItem2Img.classList.remove("d-inline-flex")
    stikyNavItem2Img.classList.add("d-none")
    stikyNavItem3Img.classList.add("d-inline-flex")
    stikyNavItem3Img.classList.remove("d-none")
    stikyNavItem4Img.classList.remove("d-inline-flex")
    stikyNavItem4Img.classList.add("d-none")
    stikyNavItem5Img.classList.remove("d-inline-flex")
    stikyNavItem5Img.classList.add("d-none")
  }
  else if(window.pageYOffset >= mentorsTop && window.pageYOffset <= hazineTop) {
    stikyNavItem1.classList.remove("stikyActive")
    stikyNavItem2.classList.remove("stikyActive");
    stikyNavItem3.classList.remove("stikyActive");
    stikyNavItem4.classList.add("stikyActive");
    stikyNavItem5.classList.remove("stikyActive");
    stikyNavItem1Img.classList.remove("d-inline-flex")
    stikyNavItem1Img.classList.add("d-none")
    stikyNavItem2Img.classList.remove("d-inline-flex")
    stikyNavItem2Img.classList.add("d-none")
    stikyNavItem3Img.classList.remove("d-inline-flex")
    stikyNavItem3Img.classList.add("d-none")
    stikyNavItem4Img.classList.add("d-inline-flex")
    stikyNavItem4Img.classList.remove("d-none")
    stikyNavItem5Img.classList.remove("d-inline-flex")
    stikyNavItem5Img.classList.add("d-none")
  }
  else if(window.pageYOffset >= hazineTop) {
    stikyNavItem1.classList.remove("stikyActive")
    stikyNavItem2.classList.remove("stikyActive");
    stikyNavItem3.classList.remove("stikyActive");
    stikyNavItem4.classList.remove("stikyActive");
    stikyNavItem5.classList.add("stikyActive");
    stikyNavItem1Img.classList.remove("d-inline-flex")
    stikyNavItem1Img.classList.add("d-none")
    stikyNavItem2Img.classList.remove("d-inline-flex")
    stikyNavItem2Img.classList.add("d-none")
    stikyNavItem3Img.classList.remove("d-inline-flex")
    stikyNavItem3Img.classList.add("d-none")
    stikyNavItem4Img.classList.remove("d-inline-flex")
    stikyNavItem4Img.classList.add("d-none")
    stikyNavItem5Img.classList.add("d-inline-flex")
    stikyNavItem5Img.classList.remove("d-none")
  }
}