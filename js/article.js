class Dot{

    constructor(){
        this.dot = document.querySelectorAll('.dot_container');
        this.dot.forEach(item => {
            item.addEventListener("click", this.openDot)
        });
        this.dot = document.querySelectorAll('.dot_close');
        this.dot.forEach(item => {
            item.addEventListener("click", this.closeDot)
        });
    }

    openDot(){
        console.log(this.parentNode.querySelector(".dot_content"));
        this.parentNode.querySelector(".dot_content").classList.add("dot_content_active");
    }

    closeDot(){
        console.log(this.parentNode);
        this.parentNode.classList.remove("dot_content_active");
    }

}