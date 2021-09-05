class Navbar{

    constructor(navbar){
        this.element = navbar;
        this.element.querySelector('.navbar_icon').addEventListener("click", this.toggleNavbar);

    }

    toggleNavbar(){
        this.parentNode.querySelector('.navbar_content').classList.toggle("active");
        this.childNodes[1].classList.toggle("navbar_icon_active");
    }

}

export default Navbar;