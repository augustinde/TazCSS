// document.querySelector(".sidebar_icon").addEventListener("click", function(){
//     document.querySelector(".sidebar_icon_bar").classList.toggle("sidebar_icon_active");
//     document.querySelector(".sidebar_content").classList.toggle("active");
//     document.querySelector(".sidebar").classList.toggle("active");
//
// });


class Sidebar{

    constructor() {
        this.sidebar_icon_bar = document.querySelector(".sidebar_icon_bar");
        this.sidebar_content = document.querySelector(".sidebar_content");


    }

    toggleSidebar(e){
        console.log("salut");
        this.sidebar_icon_bar.classList.toggle("sidebar_icon_active");
        this.sidebar_content.classList.toggle("active");
    }

    listener(){
        document.querySelector(".sidebar_icon").addEventListener("click", this.toggleSidebar, false);
    }

}

export default Sidebar