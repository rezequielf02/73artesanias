// NAV BTN
const navMenu = document.querySelector(".nav__ul");
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu-responsive");
    navBtn.classList.toggle("nav-btn__animacion");
    navBtn.classList.toggle("nav-btn__fixed");
    if (navMenu.classList.contains("nav__menu-responsive")) {
      navBtn.setAttribute("aria-label", "Cerrar menú");
    } else {
      navBtn.setAttribute("aria-label", "Abrir menú");
    }
  });

// FANCYBOX
$(document).ready(function() {
  /*
  *   Examples - images
  */

  $("a#example1").fancybox();

  $("a#example2").fancybox({
      'overlayShow'	: false,
      'transitionIn'	: 'elastic',
      'transitionOut'	: 'elastic'
  });

  $("a#example3").fancybox({
      'transitionIn'	: 'none',
      'transitionOut'	: 'none'	
  });

  $("a#example4").fancybox({
      'opacity'		: true,
      'overlayShow'	: false,
      'transitionIn'	: 'elastic',
      'transitionOut'	: 'none'
  });

  $("a#example5").fancybox();

  $("a#example6").fancybox({
      'titlePosition'		: 'outside',
      'overlayColor'		: '#000',
      'overlayOpacity'	: 0.9
  });

  $("a#example7").fancybox({
      'titlePosition'	: 'inside'
  });

  $("a#example8").fancybox({
      'titlePosition'	: 'over'
  });

  $("a[rel=example_group]").fancybox({
      'transitionIn'		: 'none',
      'transitionOut'		: 'none',
      'titlePosition' 	: 'over',
      'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
          return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
      }
  });

  /*
  *   Examples - various
  */

  $("#various1").fancybox({
      'titlePosition'		: 'inside',
      'transitionIn'		: 'none',
      'transitionOut'		: 'none'
  });

  $("#various2").fancybox();

  $("#various3").fancybox({
      'width'				: '75%',
      'height'			: '75%',
      'autoScale'			: false,
      'transitionIn'		: 'none',
      'transitionOut'		: 'none',
      'type'				: 'iframe'
  });

  $("#various4").fancybox({
      'padding'			: 0,
      'autoScale'			: false,
      'transitionIn'		: 'none',
      'transitionOut'		: 'none'
  });
});


// CAROUSEL 1
$('.hero-carousel').slick({
  dots: false,
  infinite: false,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 913,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// CAROUSEL 2
$('.destacado-carousel').slick({
  dots: false,
  infinite: false,
  speed: 500,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 913,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
  ]
});

 //scroll to top
 $(window).scroll(function() {
  if ($(this).scrollTop() > 150) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});
$('.scrollup').click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});

// IntersectionObserver
const lazyImg2 = document.getElementById('lazy-img2');
const lazyImg3 = document.getElementById('lazy-img3');

const cargarImagen = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      entrada.target.classList.add('lazy-img__visible')
    }
  });
}

const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: '0px 0px',
  threshold: 1,
})

observador.observe(lazyImg2);
observador.observe(lazyImg3);

// DARK MODE
let body = document.querySelector(".body");
let hero = document.querySelector(".hero-section");
let llamadorAngeles = document.querySelector(".portamaceta-banner__img");
let llamadorAngelesText = document.querySelector(".portamaceta-banner__p");
let carouselTitle = document.querySelector(".destacado-section__h2");
let carouselCard = document.querySelector(".carousel-card");
let mpText = document.querySelector(".mp-banner__p");
let darkModeBtn = document.querySelector(".darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  darkModeBtn.classList.toggle("darkModeBtn-active");
  hero.classList.toggle("dark-mode");
  carouselCard.classList.toggle("dark-mode");
  llamadorAngeles.classList.toggle("dark-mode");
  llamadorAngelesText.classList.toggle("dark-mode");
  carouselTitle.classList.toggle("dark-mode");
  mpText.classList.toggle("dark-mode");
});