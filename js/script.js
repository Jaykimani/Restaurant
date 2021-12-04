
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
   preloadTl.from(".content-sec h1 span",{opacity: 0, duration: 0.1, repeat :5});
   preloadTl.from(".content-sec p", { x: -40, opacity:0, duration: 0.5, delay: 0.2});
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

   
   var navTl = gsap.timeline({ defaults: {duration: 1, delay: 0}});
   navTl.from(navContent, {x: 330, duration: 0.2});
   navTl.to(navSpan2, {opacity: 0, duration: 0.2}, ">-0.3");
   navTl.to(navSpan1, {transform: "rotate(45deg)", y: 11, duration: 0.3}, ">-0.2");
   navTl.to(navSpan3,{transform: "rotate(-45deg)", y: -12, duration: 0.3}, ">-0.3");
   
   navTl.pause();
  
   
   navToggle.addEventListener("click", function(){

      if(navContent.classList.contains("is-active") && $(window).width() > 610){
         navToggle.style.transform = "translateX(-260px)";
         navTl.play();
         gsap.from(".nav-link", {stagger: 0.2, x: 30, opacity: 0, duration: 0.5});
         navContent.classList.remove("is-active");
      } else if(navContent.classList.contains("is-active") && $(window).width() < 610){
         navToggle.style.transform = "translateX(-180px)";
         navTl.play();
         gsap.from(".nav-link", {stagger: 0.2, x: 30, opacity: 0, duration: 0.5});
         navContent.classList.remove("is-active");
      } else if(navContent.classList.contains("is-active") && $(window).width() <= 360){
         navToggle.style.transform = "translateX(-150px)";
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

   // about section
   gsap.from(".about-img-content", {
      scrollTrigger:{
         trigger: ".about-sec",
         start: "top 50%"
      },
      opacity: 0,
      duration: 0.1, 
      repeat :15

   })
   

   // main menu  
   const menuSelect = document.querySelectorAll(".menu-selection button");
   const menuSelected = document.querySelector(".menu-items");
   const menuImage = document.querySelectorAll(".menu-img");
   const outerMenu = document.querySelector(".outer-menu");
   const lunch = document.querySelector(".lunch").innerHTML;
   const lunchImg = document.querySelector(".lunch-img");

   menuSelected.innerHTML = lunch;

 
  

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
      lunchImg.style.zIndex = "-4";
      let selected =e.currentTarget.innerHTML.toLowerCase();
      let selectedDiv = outerMenu.querySelector(`.${selected}`);
      
      menuSelected.innerHTML = selectedDiv.innerHTML;
      gsap.fromTo(".menu-items .item", {x: 50, opacity: 0},{stagger: 0.2, x: 0, opacity: 1, duration: 1, ease: "back"});
      
         e.currentTarget.classList.add("hover");
        menuSelect.forEach(function(numes){
         if(numes !== e.currentTarget){
            numes.classList.remove("hover");
         }
        });
         
   
     

      menuImage.forEach(function(image){
         if(image.classList.contains(`${selected}-img`)){
            image.style.opacity = "1";
         }else if(!image.classList.contains(`${selected}-img`)){ 
            image.style.opacity = "0";
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

    });
 });




// team section
const teamImg = document.querySelectorAll(".team-img");
 
teamImg.forEach(function(team){

 team.addEventListener("mouseenter", function(e){
    let target = e.currentTarget.getAttribute("id");
    var teamTl = gsap.timeline();
    teamTl.to(`#${target} .team-info`, {y: -100, duration: 0.5, ease: "power4"});
     
    if($(window).width() < 610){
       teamTl.pause();
    }
    team.addEventListener("mouseleave", function(){
       var team = gsap.timeline();
      team.to(`#${target} .team-info`, {y: -50, duration: 1, ease: "power4"});

      if($(window).width() < 610){
         team.pause();
      }
    });

 });

});


   
