//Navbar

document.querySelector(".navbar_icon").addEventListener("click", function(){
    document.querySelector(".navbar_icon_bar").classList.toggle("navbar_icon_active");
    document.querySelector(".navbar_content").classList.toggle("active");

});



//Sidebar

document.querySelector(".sidebar_icon").addEventListener("click", function(){
    document.querySelector(".sidebar_icon_bar").classList.toggle("sidebar_icon_active");
    document.querySelector(".sidebar_content").classList.toggle("active");
    document.querySelector(".sidebar").classList.toggle("active");

});