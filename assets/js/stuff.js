/**
 * To make internalhref go a little higher upon click
 * window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
    });

    Also smooth internal ref movement

    Also hide navbar upon click when mobile mode 
 */


 //no effect
var downButton = $("#downBtn");
downButton.hover(function(){
    this.toggleClass("downBtnShade");
});

var menuItem = $("a.nav-link");
menuItem.hover(function(){
    this.toggleClass("menuItemShade");
});
$(".nav.a").click(function(){
    $('.nav-collapse').collapse('hide');
});