$(document).ready(function() {
    $("#masthead").hide();
    $("#main-container").hide();

    $("#entermodal").on("click", function() {
        event.preventDefault();

        $("#enter").remove();
        $("#intro").remove();
        $("#intro2").remove();

        $("#main-container").show();
        $("#masthead").show();
    })
})