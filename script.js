var scrTags = document.getElementsByTagName("script"); // You are looking for the name script
var src = scrTags[scrTags.length-1].src; // you are searching for the src argument
var userdata = unescape(src).split("userdata=")[1].split("&")[0]; // make sure to give it the sme nane you gave the parameter. src=js/script.js?userdat=userID
alert(userdata); // the userID will be calle.

// You can also process the data to PHP via ajax
$(function(){
    $.ajax({
      url:"example.com/processor.php",
      method:"post",
      data:{userdata:userdata},
      success:function(data){
        alert(data);
      }
    })
})
