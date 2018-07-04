/**
 * To make internalhref go a little higher upon click
 * window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
    });

    Also smooth internal ref movement

    Also hide navbar upon click when mobile mode 
 */


 //no effect
var downBtn = document.querySelector("#downBtn");

downBtn.addEventListener("mouseover", function(){
    downBtn.classList.add("downBtnShade");
});
downBtn.addEventListener("mouseleave" , function(){
    this.classList.remove("downBtnShade");
});


var menuItems = document.querySelectorAll("a.nav-link");


for(var i = 0 ; i < menuItems.length ; i ++){
    menuItems[i].addEventListener("mouseover" , function(){
        this.classList.add("menuItemShade");
    })
}
for(var i = 0 ; i < menuItems.length ; i ++){
    menuItems[i].addEventListener("mouseleave" , function(){
        this.classList.remove("menuItemShade");
    })
}