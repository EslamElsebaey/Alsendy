

$(window).on("load", function () {
  $(".preloader").fadeOut();
})



$(document).ready(function(){


/************************************************************************************************** */


    // SWIPERS 

// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});


// news swiper
const newsSwiper = new Swiper(' .news .swiper', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.news-parent .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.news-parent .swiper-button-next ',
    prevEl: '.news-parent .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween : 20 
    },
    768: {
      slidesPerView: 2,
      spaceBetween : 30 ,
    },
   
  }
});





/************************************************************************************************** */


// counters

const mySection = document.querySelector('.counter-sec'); // get the element with ID "mySection"
const mySectionOffsetTop = mySection.offsetTop; // get the offset top of the element
const windowHeight = window.innerHeight; // get the height of the browser window

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY; // get the current scroll position
  if (scrollPosition > mySectionOffsetTop - windowHeight) {


    let  numDivs  = document.querySelectorAll(".num-holder h4") ; 
    let interval = 5000 ; 
    
  numDivs.forEach((numDiv)=>{
    if(numDiv.innerHTML == "0"){
      let startValue = 0 ; 
      let endValue = parseInt(numDiv.dataset.num ) ; 
      let duration =  Math.floor(interval / numDiv.dataset.num )  ;
      let counter =  setInterval(() => {
      startValue++ ;
      numDiv.textContent = startValue ;
       if(startValue == endValue){
         clearInterval(counter)
      }
  }, duration);
    }
  
} )

    
  }
});











/************************************************************************************************** */



// open and close sideBar
// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "visible") ;
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").css("overflow" , "hidden") ;
})



/************************************************************************************************** */
 




// footer nested menu


if($(window).width() <= 768) {
  $(".footer-title").click(function(){
    $(this).next().slideToggle(350);
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
}



   



/************************************************************************************************** */


// nav nested menu


// nested menus

if($(window).width() <= 992) {
  $(".li-drop > a").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".ul-drop").slideToggle(300) ;
    $(this).toggleClass("icon-rotate");
    $(".li-drop a").not($(this)).siblings(".ul-drop").slideUp(300);
    $(".li-drop a").not($(this)).removeClass("icon-rotate");
    })
    }



/************************************************************************************************** */


//fixed nav

    // //~~~~~~~~~ fixed header
    // $(window).on("scroll", function () {
    //   if ($(window).scrollTop() > 150) {
    //     $("header").addClass("fixed");
    //     $(".lang a span").css("color" , "#16697b");
    //     if($(window).width() > 768){
    //       $(".logo img").css("width" , "120px");
    //     }
    //   } else {
    //     $("header").removeClass("fixed");
    //     if($(window).width() > 768){
    //       $(".logo img").css("width" , "170px");
    //     }
      
    //   }
    // });
    // var fixedBar = document.querySelector("header"),
    //   prevScrollposition = $(window).scrollTop();

    // (window.onscroll = function () {
    //   var o = $(window).scrollTop();
    //   prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
    // })   
  


     // to top button
 $(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop");
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 

// fire select2
$('.myselect').select2();


$('.myform select').select2({
  minimumResultsForSearch: -1
});

$(".select2-selection").focus(function(){
  $(".select2-selection--single").toggleClass("rotate-select-icon");
 })



  })     // end of document ready







