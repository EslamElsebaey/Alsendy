

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


// blog-post Swiper
const blogPost = new Swiper(' .blog-post .swiper', {
  loop: true,
  autoplay: true,
  pagination: {
    el: ' .blog-post-parent .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ' .blog-post-parent .swiper-button-next ',
    prevEl: ' .blog-post-parent .swiper-button-prev',
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



// officeSwiper swiper
var officeSwiper = new Swiper(".office-swiper .swiper", {
  loop: true,
  autoplay : true ,
  pagination: {
    el: ".office-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.office-swiper .swiper-button-next ',
    prevEl: '.office-swiper .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
  },
});

/************************************************************************************************** */


//  mixitup


let currentPagePath = window.location.pathname;
var currentPageName = currentPagePath.split('/').pop(); 




if(currentPageName == "clients.html" || currentPageName == "blog.html" || currentPageName == "clients-en.html" || currentPageName == "blog-en.html"){


let mixitDiv = document.querySelector("#mix-container");

var mixer = mixitup(mixitDiv, {
  animation: {
    effects: "fade scale(0.5)",
  },
});

}





/************************************************************************************************** */



// open and close sideBar

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

// open search box

$(".open-serach-btn").click(function(){
  $(".search").fadeToggle(300) ;
  $(".open-serach-btn i").toggleClass("la-times")
})


/************************************************************************************************** */




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



// fancybox

$('[data-fancybox="images-library"]').fancybox({
  buttons : [ 
    'slideShow',
    'share',
    'zoom',
    'fullScreen',
    'close'
  ],
});



// trigger file button 

$(".add-file").click(function(e){
  e.preventDefault() ;
 $(this).siblings("input[type='file'").click()
})




  })     // end of document ready









