/*........ . . .Video js............*/
$(".slider_video").click(function () {
  $(this).addClass("slider_video_active");
  var videoURL = $(this).find('.myframe').prop('src');
  var symbol = videoURL.indexOf("?") > -1 ? "&" : "?";
  videoURL += symbol + "autoplay=1&mute=1";
  $(this).find('.myframe').prop('src', videoURL);
});


/*........ . . .Video carousel............*/
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  dots:false,
  nav:true,
  loop:true,
  navText: ["<img src='./assests/images/right-arrow-primary.svg'>", "<img src='./assests/images/right-arrow-primary.svg'>"],
  responsive:{
      0:{
          items:1,
        
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
})

// -- Header --
// $('.menu-toggle').click(function(){
//    $('.navbar').slideToggle();
// });
const toggleMenu = () => {
  const menu = document.querySelector('.navbar');
  const buttons = document.querySelectorAll('.menu-toggle');
  
  menu.classList.toggle('is-active');
  buttons[0].classList.toggle('is-active');
  
};
const buttons = document.querySelectorAll('.menu-toggle');

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', toggleMenu);
  console.log('cliked' + i);
}

// -- submenu-open --
//   $(".menu-item-has-children").click(function(){
//     $(".sub-menu").toggle(300);
// });

$(".menu-item-has-children").click(function () {
  $(".sub-menu").toggle();
});
