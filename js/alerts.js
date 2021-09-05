class Alert{

    constructor(alert){
        this.element = alert;
        this.element.addEventListener("click", this.closeAlert);
    }

    closeAlert(){
        console.log(this)
        this.parentNode.remove();
    }

}

export default Alert;