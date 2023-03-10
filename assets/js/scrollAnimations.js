
let scrollpos = window.scrollY;
const aboutSection = document.getElementById("slideRight");
const programIcons = document.querySelectorAll(".programs");

function add_class_on_scroll() {
    aboutSection.classList.add("slideRight");
    
}

function remove_class_on_scroll() {
    aboutSection.classList.remove("slideRight");
   
}

function icon_on_scroll(){
  programIcons.forEach((element) => {
    element.classList.add('flip');
  });
}

function remove_icon_on_scroll(){
  programIcons.forEach((element) => {
    element.classList.remove('flip');
  });
}

// slide righ animation
window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 200){
        add_class_on_scroll();
    }
    
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});

// icons animation 

window.addEventListener('scroll', function(){ 
  //Here you forgot to update the value
  scrollpos = window.scrollY;

  if(scrollpos > 950){
      icon_on_scroll();
  }
  
  else {
      remove_icon_on_scroll();
  }
  console.log(scrollpos);
});

const container = document.querySelector('.container')
const sections = gsap.utils.toArray(".container .panel");
const gsapContainer = document.querySelector(".container")


window.addEventListener("resize", function() {
  if (window.innerWidth < 1000) resize.classList.remove(".container");
});

let horizontalScroll = gsap.to(sections, {
  xPercent: -100 * (sections.length- 0.80),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=2000"
  }
});



