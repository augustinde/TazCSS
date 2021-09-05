import Alert from "./alerts";
import Article from "./article";
import Form from "./forms";
import Navbar from "./navbars";
import Sidebar from "./sidebars";

export {
    Alert,
    Article,
    Form,
    Navbar,
    Sidebar
}

var alerts = document.querySelectorAll('.alert_btn_close');
var forms = document.querySelectorAll('.form_input_password + span');
var sidebars = document.querySelectorAll('.sidebar_icon');
var navbars = document.querySelectorAll('.navbar');
var articles = document.querySelectorAll('.article')

if(alerts.length > 0){
    alerts.forEach(item => {
        new Alert(item);
    });
}

if(forms.length > 0){
    forms.forEach(item => {
        new Form(item);
    });
}

if(sidebars.length > 0){
    sidebars.forEach(item => {
        new Sidebar(item);
    });
}

if(navbars.length > 0){
    navbars.forEach(item => {
        new Navbar(item);
    });
}

if(articles.length > 0){
    articles.forEach(item => {
        new Article(item);
    });
}