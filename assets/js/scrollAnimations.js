
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



// const gsapcontainer = document.querySelector('#container')
// const panels = document.querySelectorAll('.panel')
let horzontalScrollInitiate = gsap.matchMedia();
// const aboutStyle = document.querySelector("#one");
// const skillsSectiom = document.querySelector("#two");


// window.addEventListener("load", function() {
  
  
//     if (window.innerWidth < 800){
//       gsapcontainer.classList.remove("container");
//       aboutStyle.classList.add('style2')
//       skillsSectiom.classList.add('style1')
  
//     }
    
//     if (window.innerWidth > 800){
//       gsapcontainer.classList.add("container");
//       panels.classList.add('panel')
//       aboutStyle.classList.remove('style2')
//       skillsSectiom.classList.remove('style1')
//     }
  
//   });



// window.addEventListener("resize", function() {


//   if (window.innerWidth < 800){
//     gsapcontainer.classList.toggle("container");
//     aboutStyle.classList.('style2')
//     skillsSectiom.classList.add('style1')


//   }
  
// });



horzontalScrollInitiate.add("(min-width: 800px)", () => {
    gsap.to(sections, {
    xPercent: -100 * (sections.length- 0.80),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      end: "+=2000"
    }
  });
})


