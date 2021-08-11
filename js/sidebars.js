// document.querySelector(".sidebar_icon").addEventListener("click", function(){
//     document.querySelector(".sidebar_icon_bar").classList.toggle("sidebar_icon_active");
//     document.querySelector(".sidebar_content").classList.toggle("active");
//     document.querySelector(".sidebar").classList.toggle("active");
//
// });

class Sidebar{

    constructor() {
        this.sidebar_icon = document.querySelector(".sidebar_icon");
        this.sidebar_icon.addEventListener("click", this.toggleSidebar);

    }

    toggleSidebar(){
        console.log("salut");

    }


}

export default Sidebar;