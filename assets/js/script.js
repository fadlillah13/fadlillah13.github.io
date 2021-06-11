// humberger menu & slide menu
var toggleMenu = document.querySelector('.menu-toggle');
var menu = document.querySelector('nav ul');
const list = document.querySelectorAll("nav ul li a");

toggleMenu.addEventListener('click', ubah);
function ubah(){
    document.querySelectorAll("span")[0].classList.toggle("atas");
    document.querySelectorAll("span")[1].classList.toggle("tengah");
    document.querySelectorAll("span")[2].classList.toggle("bawah");
    // slide menu
    menu.classList.toggle('pindah');
    // slide menu list
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', ubah)
    }
    // kalau pake jQuery
    // $('nav ul a').click(ubah);
}
// Button to top show in specific position scroll
  $(window).scroll(function(){
    if(pageYOffset>500){
      $('#btnTop').fadeIn(1000);
    }else if(pageYOffset>30){
      $('nav').css({
        'height':'50px',
      'backgroundColor':'rgb(233, 33, 116)',
    });
    }else{
      $('#btnTop').fadeOut();
      $('nav').css({
        'height':'55px',
        'backgroundColor':'transparent',
    });
    }
  });

  // button to top onlclick and smooth scroll
  $('#btnTop').click(topFunction)
  function topFunction() {
    // $(document).scrollTop(0);
    // $('body').scrollTop = 0;
    $('html,body').animate({scrollTop:0},1000, 'easeInOutCirc');
  }

  // smooth scroll for all element 'href'
  $('nav li a').click(function(e){

    var href = $(this).attr('href');
    var elemenHref = $(href);
  
  $('html,body').animate({
    scrollTop: elemenHref.offset().top - 50
  }, 1800, 'easeInOutExpo');
  
    e.preventDefault();
  
  });  

  // parallax effect section 1
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('#sec1 div h1').css({
      'transform' : 'translate(0px, '+wScroll*4+'%)'
    });
    $('#sec1 div h2,#sec1 div h4').css({
      'transform' : 'translate(0px, '+wScroll*1+'%)'
    });
    $('#sec1 div button,#sec1 div img').css({
      'transform' : 'translate(0px, '+wScroll/5+'%)'
    });

  });

  // typed writing with typed.js - section 1
  if ($(".text-slider1").length == 1) {
    var type_string = $('#text1').text();
    var typed = new Typed(".text-slider1",{
      strings: type_string.split(","),
      typeSpeed: 100,
      loop: true,
      backDelay: 100,
      backSpeed: 50,
    });
  }
  // typed writing with typed.js - section 2
  if ($(".text-slider2").length == 1) {
    var type_string = $('#text2').text();
    var typed = new Typed(".text-slider2",{
      strings: type_string.split(","),
      typeSpeed: 100,
      loop: true,
      backDelay: 100,
      backSpeed: 50,
    });
  }  

  // scrooll auto show About
  $(window).scroll(function(){
    if(pageYOffset>200){
      // $('#imgAbout,#descAbout').css('transform','translate(0,0)');
      $('#imgAbout,#descAbout').css({
    'opacity':'1',
    'transform':'translate(0.0)'
    });
    }else{
      $('#imgAbout').css('transform','translate(-50%,0)');
      $('#descAbout').css('transform','translate(50%,0)');
      $('#imgAbout,#descAbout').css({
      'opacity':'0'
    });
    }
  });

  // scroll auto show Service
  $(window).scroll(function(){
    if (pageYOffset>870) {
      $('#myAds').css('transform','translate(0,0)');
      $('#webDesign').css('transform','translate(0,0)');
      $('#myWriter').css('transform','translate(0,0)');
      $('#myAds,#webDesign,#myWriter').css('opacity','1');
    }else{
      $('#myAds').css('transform','translate(50%,0)');
      $('#webDesign').css('transform','translate(50%,0)');
      $('#myWriter').css('transform','translate(50%,0)');
      $('#myAds,#webDesign,#myWriter').css('opacity','0');
    }
  });

  // My Skill
  $('#sec4 #box-skill-1').mouseenter(function(){
    var descSkill = $('#sec4 #desc-skill-1').html();
    $('#sec4 #desc-skill').html(descSkill);
});
$('#sec4 #box-skill-2').mouseenter(function(){
  var descSkill = $('#sec4 #desc-skill-2').html();
  $('#sec4 #desc-skill').html(descSkill);
});
$('#sec4 #box-skill-3').mouseenter(function(){
  var descSkill = $('#sec4 #desc-skill-3').html();
  $('#sec4 #desc-skill').html(descSkill);
});
$('#sec4 #box-skill-4').mouseenter(function(){
  var descSkill = $('#sec4 #desc-skill-4').html();
  $('#sec4 #desc-skill').html(descSkill);
});
$('#sec4 #box-skill-5').mouseenter(function(){
  var descSkill = $('#sec4 #desc-skill-5').html();
  $('#sec4 #desc-skill').html(descSkill);
});
$('#sec4 #box-skill-6').mouseenter(function(){
  var descSkill = $('#sec4 #desc-skill-6').html();
  $('#sec4 #desc-skill').html(descSkill);
});

$('#box-skill-1,#box-skill-2,#box-skill-3,#box-skill-4,#box-skill-5,#box-skill-6').mouseleave(function(){
  var test = $('#sec4 #desc-skill-0').html();
  $('#sec4 #desc-skill').html(test);
});


// Portfolio
$('#portfolio-img').nextAll().hide();

$('#btn-show').click(()=>{
  $('#portfolio-img').nextAll().slideToggle(1000);

  let showBtn = document.querySelector("#show-hide");
  let iconShow = document.querySelector(".fa-angle-double-down");
  iconShow.classList.toggle("fa-angle-double-down-rotate");
  if(showBtn.innerHTML === "More"){
    showBtn.innerHTML = "Less";

  }else{
    showBtn.innerHTML = "More";
  }
  

  
});