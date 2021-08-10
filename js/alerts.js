var alertDismissibleList = document.querySelectorAll('.alert_btn_close')
alertDismissibleList.forEach( btnAlertDismissible => {

    btnAlertDismissible.addEventListener("click", function(){
        var parentBtnAlertDismissible = btnAlertDismissible.parentNode;
        parentBtnAlertDismissible.remove();
    });

});