//var $ = require('jquery');

var tempColor = "#e74c3c";
var zIndex = 1;
$(document).ready(function(){

  $(".colorPicker, #plusColor").spectrum({
      showPaletteOnly: true,
      showPalette:true,
      color: "#e74c3c",
      change: function(color){
        tempColor = color.toHexString();
        console.log(tempColor);
      },
      palette: [
          ["#e74c3c", "#3498db","#2ecc71","#f1c40f", "#9b59b6", "#e67e22", "#1abc9c", "#674172"]
      ]
  });

  $(".note")
    .velocity("transition.bounceDownIn", {
    display: null,
    stagger: 25,
    drag:true
  });

  // var user = $(".note").attr("data-user");
  // console.log(user);
  // var tags = [];
  // var uniqueTags = [];

  // $('.tag').each(function (index, value) {
  //   tags.push($(value).text());
  // });

  // console.log(tags);
  // $.each(tags, function (index, value){
  //   if($.inArray(value, uniqueTags) === -1){
  //     $(".tagContain ul").append("<li><a href='" + user + "/" + value + "'>" + value + "</a>");
  //   }
  // }); 

  //uniqueTags.push(value);



  
  $(".note").draggable().click(function(){
    var current = $(this);
    zIndex++;
    current.zIndex(1);
    $(".note").not(current).zIndex(0);
  });

  $(".note").resizable({
      maxHeight: 750,
      maxWidth: 750,
      minHeight: 300,
      minWidth: 200,
      ghost: true
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

  $(".fa-save").click(function(){
    
    var el = $(this).closest(".note");
    var id = el.attr("data-id");
    var user = "Tim";
    var content = el.find(".noteArea").val();
    var tag = el.find(".tagBoxSmall").val();
    var color = tempColor;

    var url ="update/";

    var request = $.ajax({
      url: url,
      method: "POST",
      data: {
        id:id,
        user: user,
        tag: tag,
        content: content,
        color: color
      }
      
    });
    
    request.done(function() {
      console.log("success");
      console.log(user, content, tag,color);
      
    document.location.reload(true);
    
      
    });
    
    request.fail(function() {
      console.log( "error" );
    });

    request.always(function(){
      console.log("Post: " + url);
    });


  });

  $(".fa-floppy-o").click(function(){
    var content = $(".contentBox").val();
    var tag = $(".tagBox").val();
    var color = tempColor;
    var user = $(".note").attr("data-user");
    if(user !=="" && user !== undefined){
    
      var request = $.ajax({
        url: "create/",
        method: "POST",
        data: {
          user: user,
          tag: tag,
          content: content,
          color: color
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

  }


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

  var tagToggled = false;
  var tagPosition = "-300px";
  $(".filterBut").click(function(){  
    $(".tagContain").velocity({ 
      translateX: tagPosition
    },{
    duration: 250,
    complete: function(){
      if(tagToggled){
        tagToggled = false;
        tagPosition = "-300px";
      }else{
        tagToggled = true;
        tagPosition = "0px";
      }
    }});

  });


  $('.fa-pencil').click(function(event){
    
    var card = event.target;
    var cardBox = $(card).closest('.note');
    var tag = $(cardBox).find('.tag').text();
    var message = $(cardBox).find('.message').text();
    var color = $(this).css('backgroundColor');
    console.log(message);
    $(cardBox).find('textarea').val(message);
    $(cardBox).find('.tagBoxSmall').val(tag);

    $(card).closest('.card').toggleClass('flipped');
  });

  $('.fa-arrow-circle-left').click(function(event){
    var card = event.target;
    $(card).closest('.card').toggleClass('flipped');
  });

  $('.login a').click(function(event){
    console.log("a clicked");
    var card = event.target;
    var cardBox = $(card).closest('.note');
    var tag = $(cardBox).find('.tag').text();
    var message = $(cardBox).find('.message').text();
    var color = $(this).css('backgroundColor');
    console.log(message);
    $(cardBox).find('textarea').val(message);
    $(cardBox).find('.tagBoxSmall').val(tag);

    $(card).closest('.card').toggleClass('flipped');
  });

  $('.fa-arrow-circle-left').click(function(event){
    var card = event.target;
    $(card).closest('.card').toggleClass('flipped');
  });

});