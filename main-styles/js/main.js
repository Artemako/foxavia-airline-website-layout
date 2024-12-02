$(document).ready(function () {

    $(".header-logo").click(function () {
        window.location.href = "../main-page--flex/index.html"
    })

    $(".booking-link").click(function () {
        window.location.href = "../booking-page--flex/booking-page.html"
    })

    $(".info-link").click(function () {
        window.location.href = "../useful-info-page--grid-page/useful-info-page.html"
    })

    $(".about-link").click(function () {
        window.location.href = "../about-page--bootstrap-page/about-page.html"
    })

    $(".main-link").click(function () {
        window.location.href = "../main-page--flex/index.html"
    })

    $(".account-link").click(function () {
        window.location.href = "../account-page--flex/account-page.html"
    })
    $(".form-link").click(function () {
        window.location.href = "../form-page--flex/form-page.html"
    })

    $(".input-animated").focus(function () {
        $(this).animate({
            borderRadius: "10px",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "#2F3A71",
            backgroundColor: "#FFFFFF",
            paddingLeft:"10px"
        }, 150);
        console.log("Hello");
    });

    $(".input-animated").blur(function () {
        $(this).animate({
            borderWidth:"0 0 3px 0",
            borderColor:"#666666",
            borderRadius:"0",
            padding:"0"
        }, 150);
        console.log("Hello");
    });


})

