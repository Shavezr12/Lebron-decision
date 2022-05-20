 $(".Part-Two-Yes").hide();
 $(".Part-Two-No").hide();
 $(".Story-Ending-Yes").hide();
 $(".Story-Ending-No").hide();



 $(".yes-button").click(function() {
     $(".Part-Two-Yes").fadeIn();

     $(".home ").hide();


 });

 $(".no-button").click(function() {
     $(".Part-Two-No").fadeIn();
     $(".home ").hide();



 });

 $(".Reset-Button").click(function() {
     $(".home ").show();
     $(".Part-Two-No").hide();

 });

 $(".Part-Two-Yes").dblclick(function() {
     $(".Story-Ending-Yes").show();
     $(".Part-Two-Yes ").hide();
     $(".title").text("Lakers win");


 });

$(".Part-Two-No").dblclick(function() {
     $(".Story-Ending-No").show();
     $(".Part-Two-No ").hide();
     $(".title").text("Lakers win");
     });