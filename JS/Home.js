var navTab = document.getElementById("navTab")
var menuIcon = document.getElementById("menuIcon")
var menu = document.getElementById("menu")

navTab.style.right = "-200px"
menuIcon.onclick = function(){
    if(navTab.style.right === "-200px"){
        navTab.style.right = "0"
        menu.src = "photos/icons8-close-30.png";
    }
    else{
        navTab.style.right = "-200px"
        menu.src = "photos/icons8-menu-48.png";
    }
}
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 700,
	speedAsDuration: true
});