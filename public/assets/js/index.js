$(document).ready(function() {
    $("#masthead").hide();
    $("#main-container").hide();
    $("#header").hide();
    $(".icon").hide();

    $("#entermodal").on("click", function() {
        event.preventDefault();

        $("#enter").remove();
        $("#intro").remove();
        $("#intro2").remove();

        $("#header").show();
        $("#main-container").show();
        $("#masthead").show();
        $(".icon").show();
    });
});