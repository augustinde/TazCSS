class Navbar{

    constructor(){
        this.navbar = document.querySelector('.navbar');
        this.navbar_icon = this.navbar.querySelector('.navbar_icon');
        this.navbar_icon.addEventListener("click", this.toggleNavbar);

    }

    toggleNavbar(){
        this.parentNode.querySelector('.navbar_content').classList.toggle("active");
        this.childNodes[1].classList.toggle("navbar_icon_active");
    }

}

const nav = new Navbar();

export default Navbar;