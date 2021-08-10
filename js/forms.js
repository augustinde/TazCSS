document.querySelector(".form_input_password + span").addEventListener("click", function(){
    document.querySelector(".form_icon_password").classList.toggle("fa-eye");
    document.querySelector(".form_icon_password").classList.toggle("fa-eye-slash");
    let input = document.querySelector(".form_input_password");
    if(input.type === "password"){
        input.type = "text";
    }else{
        input.type = "password";
    }
});