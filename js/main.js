$(document).ready(function(){
    $(".owl1").owlCarousel({
      autoplay:true,
      loop:true,
      nav: true,
      navText: ['<span><i class="fas fa-arrow-circle-left"></i></span>','<span><i class="fas fa-arrow-circle-right"></i></span>'],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:2,
          },
          1200:{
              items:3,
          }
      }
    });
  })
  $(document).ready(function(){
    $(".owl2").owlCarousel({
      autoplay:true,
      loop:true,
      items:2,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:2,
          },
          1200:{
              items:3,
          }
      }
    });
  });
  $(document).ready(function(){
    $(".owl3").owlCarousel({
      autoplay:true,
      loop:true,
      nav: true,
      navText: ['<span><i class="fas fa-arrow-circle-left"></i></span>','<span><i class="fas fa-arrow-circle-right"></i></span>'],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:2,
          },
          1200:{
              items:3,
          }
      }
    });
  });
  $(document).ready(function(){
    $(".owl4").owlCarousel({
      autoplay:true,
      loop:true,
      items:4,
      dots: false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:2,
          },
          1200:{
              items:3,
          }
      }
    });
  });
  $(document).ready(function(){
      $('.number').counterUp({
        delay: 1,
        time: 10000
    });
  });
  $(document).ready(function(){
    AOS.init({
        duration : 1000
    });
    
    $(".waypoints").waypoint(function(direction){
        if (direction == "down") {
            $(".mainHeader").addClass("sticky");
        } else{
            $(".mainHeader").removeClass("sticky");
        }
    });
});