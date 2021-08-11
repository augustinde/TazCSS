class Form{

    constructor() {
        this.form = document.querySelector('.form');
        this.form_input_password = this.form.querySelector('.form_input_password + span');
        this.form_input_password.addEventListener("click", this.toggleInputPassword);
    }

    toggleInputPassword(){
        this.input_password = this.parentNode.querySelector('.form_input_password');
        this.icon_password = this.parentNode.querySelector('.form_icon_password');

        this.icon_password.classList.toggle("fa-eye");
        this.icon_password.classList.toggle("fa-eye-slash");

        if(this.input_password.type === "password"){
            this.input_password.type = "text";
        }else{
            this.input_password.type = "password";
        }

    }

}


export default Form;