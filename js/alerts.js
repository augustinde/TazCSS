class Alert{

    constructor(){
        this.alert = document.querySelectorAll('.alert_btn_close');
        this.alert.forEach(item => {
            item.addEventListener("click", this.closeAlert)
        });
    }

    closeAlert(){
        this.parentNode.remove();
    }


}

export default Alert;