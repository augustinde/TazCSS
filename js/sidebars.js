// document.querySelector(".sidebar_icon").addEventListener("click", function(){
//     document.querySelector(".sidebar_icon_bar").classList.toggle("sidebar_icon_active");
//     document.querySelector(".sidebar_content").classList.toggle("active");
//     document.querySelector(".sidebar").classList.toggle("active");
//
// });

class Sidebar{

    constructor(sidebar) {

        this.element = sidebar;
        this.element.addEventListener("click", this.toggleSidebar);
    }

    toggleSidebar(){

        this.parentNode.querySelector('.sidebar_content').classList.toggle("active");
        this.childNodes[1].classList.toggle("sidebar_icon_active");

    }


}

export default Sidebar;