
// preload
   let preloadTl = gsap.timeline();
   preloadTl.to(".nobu", {stagger: 0.2, opacity: 1, fontSize: "80px", duration: 1, delay: 0.5, ease: "elastic"});
   preloadTl.to(".side3",{height: "100%", duration: 0.2}, ">-0.8");
   preloadTl.to(".side2", {width: "100%", duration: 0.2}, ">-0.1");
   preloadTl.to(".side1", {height: "100%", duration: 0.2}, ">-0.1");
   preloadTl.to(".side4", {width: "100%", duration: 0.2}, ">-0.1");
   preloadTl.to(".nobu", {stagger: 0.1, color:"#fff708", duration: 0.1}, ">-0.1");
   preloadTl.to(".preloader",{ zIndex: -5,opacity: 0, duration:0.3, delay: 0.3});
   preloadTl.from(".content-sec h1", {x: 40, opacity: 0, duration: 0.5});
   preloadTl.from(".content-sec p", { x: -40, opacity:0, duration: 0.5});
   preloadTl.from(".content-sec button", {y: 40, opacity: 0, duration: 0.5});

// navbar gsap
   const a = 1;
   const b = 2;
   const c = 3;
   const navToggle = document.querySelector(".nav-toggle");
   const navContent = document.querySelector(".nav-content");
   const navSpan1 = document.querySelector(`.nav-toggle span:nth-child(${a})`);
   const navSpan2 = document.querySelector(`.nav-toggle span:nth-child(${b})`);
   const navSpan3 = document.querySelector(`.nav-toggle span:nth-child(${c})`);
   const navLinks = document.querySelectorAll(".nav-link");

   // if($(window).width() < 450){
   //    navToggle.addEventListener("click", function(){
   //       navTl.from(navContent, {x: 300, duration: 0.2});
   //    });
   // }
   var navTl = gsap.timeline({ defaults: {duration: 1, delay: 0}});
   navTl.from(navContent, {x: 300, duration: 0.2});
   navTl.to(navSpan2, {opacity: 0, duration: 0.2}, ">-0.3");
   navTl.to(navSpan1, {transform: "rotate(45deg)", y: 11, duration: 0.3}, ">-0.2");
   navTl.to(navSpan3,{transform: "rotate(-45deg)", y: -12, duration: 0.3}, ">-0.3");
   
   navTl.pause();
  
   
   navToggle.addEventListener("click", function(){

      if(navContent.classList.contains("is-active") && $(window).width() > 500){
         navToggle.style.transform = "translateX(-230px)";
         navTl.play();
         gsap.from(".nav-link", {stagger: 0.2, x: 30, opacity: 0, duration: 0.5});
         navContent.classList.remove("is-active");
      } else if(navContent.classList.contains("is-active") && $(window).width() <= 500){
         navToggle.style.transform = "translateX(-130px)";
         navTl.play();
         gsap.from(".nav-link", {stagger: 0.2, x: 30, opacity: 0, duration: 0.5});
         navContent.classList.remove("is-active");
      } else if(navContent.classList.contains("is-active") && $(window).width() <= 360){
         navToggle.style.transform = "translateX(-100px)";
         navTl.play();
         gsap.from(".nav-link", {stagger: 0.2, x: 30, opacity: 0, duration: 0.5});
         navContent.classList.remove("is-active");
      }else if(!navContent.classList.contains("is-active")){
         navToggle.style.transform = "translateX(0)";
         navTl.reverse();
         navContent.classList.add("is-active");
        }
   });

   
    
   navLinks.forEach(function(link){
    link.addEventListener("click", function(){
      navToggle.style.transform = "translateX(0)";
      navTl.reverse();
      navContent.classList.add("is-active");
    });
   });

   

   // main menu  
   const menuSelect = document.querySelectorAll(".menu-selection button");
   const menuSelected = document.querySelectorAll(".menu-items");
   const menuImage = document.querySelectorAll(".menu-img");
 


   gsap.from(".item", {
      scrollTrigger:{
         trigger: ".menu-sec",
         start: "top center",
      },
      stagger: 0.2,
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "back"
   });
   
   menuSelect.forEach(function(menu){
     menu.addEventListener("click", function(e){
         e.currentTarget.classList.add("hover");
        menuSelect.forEach(function(numes){
         if(numes !== e.currentTarget){
            numes.classList.remove("hover");
         }
        });
         
   
      let selected =e.currentTarget.innerHTML.toLowerCase();

      menuImage.forEach(function(image){
         if(image.classList.contains(`${selected}`)){
            image.style.opacity = "1";
         }else if(!image.classList.contains(`${selected}`)){ 
            image.style.opacity = "0";
        }
       });

    menuSelected.forEach(function(select){
               if(select.classList.contains(`${selected}`)){
                  select.style.opacity = "1";
                  gsap.fromTo(`.${selected} .item`, {x: 50, opacity: 0},{stagger: 0.2, x: 0, opacity: 1, duration: 1, ease: "back"})
               }else if(!select.classList.contains(`${selected}`)){ 
                 
                  select.style.opacity = "0";
              }
            }); 
    
       });
   });

// end of main menu
// testimonial section

 const testimony = document.querySelectorAll(".testimony");

 testimony.forEach(function(test){
    test.addEventListener("mouseenter", function(){
      var testTl = gsap.timeline({defaults: {duration: 0.2, transformOrigin: "top"}});
      testTl.to(test , {transform: "rotate(5deg)"});
      testTl.to(test , {transform: "rotate(-5deg)"});
      testTl.to(test , {transform: "rotate(3deg)"});
      testTl.to(test , {transform: "rotate(0)"});

      if($(window).width() < 960){
         testTl.pause();
      }
    });
 });




// team section
const teamImg = document.querySelectorAll(".team-img");
 
teamImg.forEach(function(team){

 team.addEventListener("mouseenter", function(e){
    let target = e.currentTarget.getAttribute("id");
    var teamTl = gsap.timeline();
    teamTl.to(`#${target} .team-info`, {y: -100, duration: 0.5, ease: "power4"});
     
    if($(window).width() < 960){
       teamTl.pause();
    }
    team.addEventListener("mouseleave", function(){
       var team = gsap.timeline();
      team.to(`#${target} .team-info`, {y: -50, duration: 1, ease: "power4"});

      if($(window).width() < 960){
         team.pause();
      }
    });

 });

});


   
