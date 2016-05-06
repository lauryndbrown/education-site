// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var serviceActive=false;
var homeActive=true;
var aboutActive = false;
var contactActive = false;


$(document).on('click', '#contact-button', function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        1000);
});

 $(document).scroll(function(){
   
        var scrollPos = $(document).scrollTop(); 
        var servicesSection =  $("#services").offset().top-100;
        var aboutSection =  $("#about").offset().top-100;
        var contactSection =  $("#contact").offset().top-100;
    if(scrollPos >= servicesSection  && serviceActive==false && scrollPos < aboutSection) {

      activateLink(2); 
      serviceActive=true;
      homeActive = false;
      aboutActive = false;
    }
    if(scrollPos >= aboutSection && aboutActive==false && scrollPos < contactSection)
    {
      activateLink(3);
      aboutActive=true;
      serviceActive = false;
      contactActive = false;
    }
     if(scrollPos >= contactSection && contactActive==false)
    {
      activateLink(4);
      contactActive=true;
      aboutActive = false;
    }
    if( scrollPos < (servicesSection -400) && homeActive==false)
    {
      activateLink(1);
      homeActive=true;
      serviceActive = false;    
    }
  });   

function activateLink(linkNum)
{
      var link = $('#navigation-links li:nth-child('+linkNum+')');
      link.addClass("active");
      link.siblings().removeClass("active");
}
