console.log("app.js");

var colors = ["#e74c3c", "#3498db","#2ecc71","#f1c40f", "#9b59b6", "#e67e22", "#1abc9c", "#674172"];
var colorNum = 0;
var zIndex = 1;
$(document).ready(function(){
  $('.front').each(function(event){
    $(this).css("background-color", colors[colorNum]);
    colorNum++;
    $(event.target).closest('.back').css("background-color", colors[colorNum]);
    if(colorNum == 7) colorNum = 0;
  });
	 
  // $(".note")
  //   .velocity("transition.bounceIn", { 
  //   stagger: 30,
  //   backwards: true
  // });
  
  // $(".note").draggable({ snap: ".note" }).click(function(){
  //   var current = $(this);
  //   zIndex++;
  //   current.zIndex(1);
  //   $(".note").not(current).zIndex(0);
  // });
  

$(".fa-times").click(function(){
  var el = $(this).closest(".note");
  var id = el.attr("data-id");
  console.log(id);
  // $.post( "/delete/" + id, { id: id});
});

$('.note').hover(function(e){
 var el = $(e.target).closest(".faBox");
 el.velocity("fadeIn", { duration: 200})
 console.log(el);
});





//   $('.note').click(function(event){
//     $('.note .front').click(function(event){
//     var card = event.target;
//   // if($('.card').hasClass("flipped")){
//   //     // message = $('textarea').val();
//   //     // $('.front p').text(message);
//   //     // messages.push(message);
//   //     // console.log("flip to front:", message);
//   // }else{
 
//      var message = $(this).find('.front p').text();
//      $(this).find('noteArea').val(message);
//      console.log(message);

//   // }
//   $(card).closest('.card').toggleClass('flipped');
//   // console.log($(this));
//   return false;
// });

// });

});