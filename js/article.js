class Article{

    constructor(article){
        this.element = article;
        console.log(this.element.outerHTML)
        this.open_dot = this.element.querySelector('.dot_container').addEventListener("click", this.openDot);
        this.close_dot = this.element.querySelector('.dot_close').addEventListener("click", this.closeDot);

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

export default Article;