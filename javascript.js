//var arrow = document.getElementById("arrow");
var $arrow = $("#arrow a");

//var $off = $("main").offset().top

$("#arrow").on("click", function() {
    $("body,html").animate({
        scrollTop: $("main").offset().top
    }, 1000)
});