class Form{

    constructor(form) {

        this.element = form;
        this.element.addEventListener("click", this.toggleInputPassword);
    }

    toggleInputPassword(){

        this.childNodes[1].classList.toggle("fa-eye");
        this.childNodes[1].classList.toggle("fa-eye-slash");

        if(this.parentNode.querySelector(".form_input_password").type === "password"){
            this.parentNode.querySelector(".form_input_password").type = "text";
        }else{
            this.parentNode.querySelector(".form_input_password").type = "password";

        }
    }

}


export default Form;