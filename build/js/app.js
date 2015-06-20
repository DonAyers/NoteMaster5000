//var $ = require('jquery');

var tempColor = "#e74c3c";
var zIndex = 1;
// $(".note")
//     .velocity("transition.bounceDownIn", {
//     display: null,
//     stagger: 25,
//     drag:true
//   });

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

  $.each($(".note"), function (i, value){
    var size = $(value).attr("data-size");
    if(size){

      var sizeJSON = JSON.parse(size);
      var height = sizeJSON[0];
      var width = sizeJSON[1];
      //console.log(height, width, sizeJSON);
      $(value).velocity({
        height: height,
        width: width
      });
    }
  });


  var tags = $(".tagLink");
  var unique = [];
  // console.log(tags);
  $.each(tags, function(i, value){
    var text = $(value).attr("href")
    if($.inArray(text, unique) !== -1){
      $(this).remove();
    }
    unique.push(text);

  });

  var dragPosition = "";
  $(".note").draggable({
    stop: function(event, ui){
      dragPosition = ui.position;
      console.log(dragPosition);
    }
  }).click(function(){
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
      ghost: true,
      stop: function(e){
        var el = $(e).closest(".note");
        var id = el.attr("data-id");
        var user = $("#container").attr("data-user");
        var color = el.attr("data-color");
        var tag = el.find('.tag').text();
        var content = el.find('.message').text();
        
        var size = [el.height(), el.width()];
        var position = [dragPosition.top, dragPosition.left];

        var sizeJSON = JSON.stringify(size);
        var posJSON = JSON.stringify(position);
        console.log(sizeJSON);
        console.log(posJSON);
        
        var url ="update/";

        var request = $.ajax({
          url: url,
          method: "POST",
          data: {
            id:id,
            user: user,
            tag: tag,
            content: content,
            color: color,
            position: posJSON,
            size: sizeJSON
          }
          
        });
      }
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

  });

  $(".fa-save").click(function(){
    
    var el = $(this).closest(".note");
    var id = el.attr("data-id");
    var user = $("#container").attr("data-user");
    var content = el.find(".noteArea").val();
    var tag = el.find(".tagBoxSmall").val();
    var color = tempColor;
    //console.log(id, user, content, tag, color);
    
    var size = [el.height(), el.width()];
    var position = [dragPosition.top, dragPosition.left];

    var sizeJSON = JSON.stringify(size);
    var posJSON = JSON.stringify(position);
    console.log(sizeJSON);
    console.log(posJSON);
    
    var url ="update/";

    var request = $.ajax({
      url: url,
      method: "POST",
      data: {
        id:id,
        user: user,
        tag: tag,
        content: content,
        color: color,
        position: posJSON,
        size: sizeJSON
      }
      
    });
    
    request.done(function() {
      console.log("success");
      //console.log(user, content, tag,color);
      
    document.location.reload(true);
    
      
    });
    
    request.fail(function() {
      console.log( "error" );
    });

  });
  $(".save").click(function(){
     $.each($(".note"), function (i, value){
        var el = $(this);
        var id = el.attr("data-id");
        var user = $("#container").attr("data-user");
        var color = el.attr("data-color");
        var tag = el.find('.tag').text();
        var content = el.find('.message').text();

        var size = [el.height(), el.width()];
        var position = [dragPosition.top, dragPosition.left];

        var sizeJSON = JSON.stringify(size);
        var posJSON = JSON.stringify(position);
        console.log(posJSON, sizeJSON, color, id);
        
        var url ="update/";

        var request = $.ajax({
          url: url,
          method: "POST",
          data: {
            id:id,
            user: user,
            tag: tag,
            content: content,
            color: color,
            position: posJSON,
            size: sizeJSON
          }
          
        });
    });
  });
      
  $(".create").click(function(){
    console.log("floppy clicked");
    var content = $(".contentBox").val();
    var tag = $(".tagBox").val();
    var color = tempColor;
    var user = $("#container").attr("data-user");
    var position = null;
    var size = null;
    
    if(user !=="" && user !== undefined){
    
      var request = $.ajax({
        url: "create/",
        method: "POST",
        data: {
          user: user,
          tag: tag,
          content: content,
          color: color,
          position: position,
          size: size
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

  }


  });

  $(".signUp input[type=submit]").click(function(){
      var username = $(".signUp input[name=username]").val();
      var password = $(".signUp input[name=password]").val();
      var confirmPass = $("input[name=confirm]").val();
      console.log(username, password, confirmPass );
      
      if(password == confirmPass){
        console.log("pass = confirmPass");
        var request = $.ajax({
          url: "signup/",
          method: "POST",
          data: {
            username: username,
            password: password
          }
        });
        
        request.done(function() {
          console.log( "success" );
          var user = $(".signUp input[name=username]").val();
          $('.login a').click();
          $(".messageSpan").text("Welcome " + user);
          $(".login").velocity('callout.pulse',{
            complete: function(){
              $(".success").delay(1000).velocity({opacity: 0}, 1000);
              $(".login input[name=username]").val(user);
              $(".login input[name=password]").val($(".signUp input[name=password]").val());
              $(".login input[type=submit]").click();
            }
          });
        });
          
        request.fail(function() {
          console.log( "error" );
        });

    }else{
      $(".signUp").velocity('callout.shake').append("<p class='error'>password doesn't match<p>");
      $(".error").delay(1000).velocity({opacity: 0}, 1000);
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

  
  $('.login a').click(function(event){
    console.log("a clicked");
    var card = event.target;
    $(card).closest('.card').toggleClass('flipped');
  });

  $('.fa-arrow-circle-left').click(function(event){
    var card = event.target;
    $(card).closest('.card').toggleClass('flipped');
  });

  $(".fa-sign-out").click(function(){
    Cookies.remove('loggedIn');
    window.location.replace("/");
  });
  

});