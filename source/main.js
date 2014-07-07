$(document).ready(function(){
  $(".p1").show("2000");
  setTimeout('$(".p1").hide();$(".p2").fadeIn(1000);',1500);
  setTimeout('$(".p2").hide();$(".p3").fadeIn(1000);',3000);
})