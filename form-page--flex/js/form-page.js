$(document).ready(function () {

    $(".ticket-box--button-submit.form-btn").click(function () {
        $("body").toggleClass("animate")
        $(".popUp-window").toggleClass("animate")
    })

    $(".to-main").click(function(){
        window.location.href = "../main-page--flex/index.html"
    })

    $(".to-account").click(function(){
        window.location.href = "../account-page--flex/account-page.html"
    })
})