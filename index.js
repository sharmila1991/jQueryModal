$(document).ready(function() {


  $("#myBtn").on("click", function() {
    $(".modalContainer").show("300");
  });

  $(".close").on("click", function() {
    $(".modalContainer").hide("300");
  });
  $(".closeButton").on("click", function() {
    $(".modalContainer").hide("300");
  });

});