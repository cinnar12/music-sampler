$(document).ready(function() {

  function hideAll() {
    $("#title1").hide();
    $("#title2").hide();
    $("#title3").hide();
    $("#title4").hide();
    $("#default").hide();
    $("#soundtrack1").hide();
    $("#soundtrack2").hide();
    $("#soundtrack3").hide();
    $("#soundtrack4").hide();
  }

  hideAll();
  $("#default").show();

  $(".album").click(function() {

    hideAll();

    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });

    switch ($(this).attr("id")) {
      case "song1":
      $("#title1").show();
      $("#soundtrack1").show();
      break;
      case "song2":
      $("#title2").show();
      $("#soundtrack2").show();
      break;
      case "song3":
      $("#title3").show();
      $("#soundtrack3").show();
      break;
      case "song4":
      $("#title4").show();
      $("#soundtrack4").show();
      break;
    }
  });

  $("#music").click(function(){
    $("#mcontainer").slideToggle();
  });

});
