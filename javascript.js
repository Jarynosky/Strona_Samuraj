var arrow = document.getElementById("arrow");
var $arrow = $("#arrow");

var $off = $("main").offset().top

$arrow.on("click", function () {
    $("body").animate({
        scrollTop: $("main").offset().top
    }, 1000)
});