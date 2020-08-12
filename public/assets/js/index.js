$(document).ready(function() {

  $("#logo").hide();
  $(".row").hide();
  $("#aboutme").hide();

    $("#entermodal").on("click", function() {
        event.preventDefault();

        $("#enter").remove();
        $("#logo").show();
        $("#aboutme").show();
        $(".row").show();
        $(".intro").remove();

    });
});


 