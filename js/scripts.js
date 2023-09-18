

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

scroll.on('scroll', func => {

  console.log(scroll.scroll.instance.scroll.y)

  var scroll_pos = 0;
  scroll_pos = scroll.scroll.instance.scroll.y;// aggiunge la distanza che sta al top, se maggiore di 40 px aggiunge una classe 
  
 body_el= document.body;

  if(scroll_pos > 640) {
    body_el.classList.add( "scroll-down" );
  } else {
    body_el.classList.remove( "scroll-down" );
  }
});


$( document ).ready(function() {

    $(".header_icon" ).on('click', function() {
        $('.header_menu').toggleClass('header_menu--open');
        $('.icon-hamburgher').toggleClass('icon-hamburgher--open');
    });


    $(window).load(function(){
      $('.preloader').fadeOut('slow');
    });


  

/* Scroll Class */
//fatto in jquery
// var scroll_pos = 0;

// $(document).scroll(function() {
//   scroll_pos = $(this).scrollTop();// aggiunge la distanza che sta al top, se maggiore di 40 px aggiunge una classe 
//   if(scroll_pos > 600) {
//     $("body").addClass( "scroll-down" );
//   } else {
//     $("body").removeClass( "scroll-down" );
//   }
// });

});
