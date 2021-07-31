/*document.querySelector(".navbar_icon").addEventListener("click", function(){
    document.querySelector(".navbar_icon_bar").classList.toggle("navbar_icon_active");
    document.querySelector(".navbar_content").classList.toggle("active");

});
*/

export class Navbars{

    constructor() {
        this.navbar_icon_bar = document.querySelector(".navbar_icon_bar");
        this.navbar_content = document.querySelector(".navbar_content");

    }

    toggleNavbar(e){
        this.navbar_icon_bar.classList.toggle("navbar_icon_active");
        this.navbar_content.classList.toggle("active");
    }

    listener(){
        document.querySelector(".navbar_icon").addEventListener("click", this.toggleNavbar, false);
    }

}