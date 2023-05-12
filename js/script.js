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
 
