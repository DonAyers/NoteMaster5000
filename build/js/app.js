console.log("app.js");

var colors = ["#e74c3c", "#3498db","#2ecc71","#f1c40f", "#9b59b6", "#e67e22", "#1abc9c", "#674172"];
var colorNum = 0;
var zIndex = 1;
$(document).ready(function(){
  
  var formReset = function(){

  };

  // $('.front').each(function(event){
  //   $(this).css("background-color", colors[colorNum]);
  //   colorNum++;
  //   $(event.target).closest('.back').css("background-color", colors[colorNum]);
  //   if(colorNum == 7) colorNum = 0;
  // });
	 
  // $(".note")
  //   .velocity("transition.bounceIn", { 
  //   stagger: 30,
  //   backwards: true
  // });
  
  $(".note").draggable(
    //{ snap: ".note" }
    ).click(function(){
    var current = $(this);
    zIndex++;
    current.zIndex(1);
    $(".note").not(current).zIndex(0);
  });
  

$(".fa-times").click(function(){
  var el = $(this).closest(".note");
  var id = el.attr("data-id");
//  console.log(id);
  var request = $.ajax({
    url: "delete/" + id,
    method: "POST"
  });
  
  request.done(function() {
    console.log(id + " deleted");
    el.remove();
  });
  
  request.fail(function() {
    console.log( "error" );
  });

  // request.always(function(){
  //   console.log("This always Fires");
  // });

});

$(".saveButton").click(function(){
  
  var el = $(this).closest(".note");
  var id = el.attr("data-id");
  var user = "Tim";
  var content = el.find(".noteArea").val();
  var tag = el.find(".tagBoxSmall").val();
  var color = "#9b59b6";
  var url ="update/" + id;
  
  console.log(id, content, tag, color);
  

  var request = $.ajax({
    url: url,
    method: "POST",
    // beforeSend: function(){
    //   content = el.closest(".noteArea").val();
    //   console.log("beforeSend");
    // },
    data: {
      user: user,
      tag: tag,
      content: content,
      color: color
    }
    
  });
  
  request.done(function() {
    console.log("success");
    console.log(user, content, tag);
    
  //document.location.reload(true);
  
    
  });
  
  request.fail(function() {
    console.log( "error" );
  });

  request.always(function(){
    console.log("Post: " + url);
  });


});

$(".fa-floppy-o").click(function(){
  var user = "Tim";
  var content = $(".contentBox").val();
  var tag = $(".tagBox").val();
  
  var request = $.ajax({
    url: "create/",
    method: "POST",
    data: {
      user: user,
      tag: tag,
      content: content
    }
  });
  
  request.done(function() {
    console.log( "success" );
    $(".addContain").velocity({ 
    translateX: position
  },{
  duration: 250,
  complete: function(){
    if(toggled){
      toggled = false;
      position = "400px";
    }else{
      toggled = true;
      position = "0px";
    }
  document.location.reload(true);
  }});
    
  });
  
  request.fail(function() {
    console.log( "error" );
  });

  request.always(function(){
    console.log("always");
  });


});


var toggled = false;
var position = "400px";
$(".addBut").click(function(){  
  $(".addContain").velocity({ 
    translateX: position
  },{
  duration: 250,
  complete: function(){
    if(toggled){
      toggled = false;
      position = "400px";
    }else{
      toggled = true;
      position = "0px";
    }
  }});

});

// $('.note').hover(function(e){
//  var el = $(e.target).closest(".faBox");
//  el.velocity("fadeIn", { duration: 200})
//  console.log(el);
// });





  $('.fa-pencil').click(function(event){
    // $('.note .front').click(function(event){
    var card = event.target;
    var message = $(card).find('.front p').text();
    

    var cardBox = card.closest('.note');
    var tag = $(cardBox).find('.tag').text();
    var message = $(cardBox).find('p').text();
    // console.log(message);
    // console.log(tag);

    $(cardBox).find('textarea').val(message);
    $(cardBox).find('input').val(tag);
  // if($('.card').hasClass("flipped")){
  //     message = $('textarea').val();
  //     $('.front p').text(message);
  //     messages.push(message);
  //     console.log("flip to front:", message);
  // }else{
 
     
  //    $(this).find('noteArea').val(message);
  //    console.log(message);

  // }
  $(card).closest('.card').toggleClass('flipped');
  // console.log($(this));
  //return false;
// });

});

});