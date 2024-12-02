$(document).ready(function () {

    String.prototype.replaceAt = function (index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }

    let price = {
        id: ["add-services-checkbox-1", "add-services-checkbox-2", "add-services-checkbox-3", "add-services-checkbox-4", "add-services-checkbox-5"],
        price: [11.99, 15.99, 8.99, 20.99, 2.99],
        sum: 386.76,
        visible: false,
        open_window: "None"
    }

    // Calendar

    $(".calendar--button").click(function () {
        $(".calendar--button").removeClass("active")
        if ($(this).is("#Sun")) {
            $(this).toggleClass("active")
            $(".calendar--date-now").text("1 Сентября, Воскресенье")
        } else if ($(this).is("#Mon")) {
            $(this).toggleClass("active")
            $(".calendar--date-now").text("26 Августа, Понедельник")
        } else if ($(this).is("#Tue")) {
            $(this).toggleClass("active")
            $(".calendar--date-now").text("27 Августа, Вторник")
        } else if ($(this).is("#Wed")) {
            $(this).toggleClass("active")
            $(".calendar--date-now").text("28 Августа, Среда")
        } else if ($(this).is("#Thu")) {
            $(this).toggleClass("active")
            $(".calendar--date-now").text("29 Августа, Четверг")
        } else if ($(this).is("#Fri")) {
            $(this).toggleClass("active")
            $(".calendar--date-now").text("30 Августа, Пятница")
        } else if ($(this).is("#Sat")) {
            $(this).toggleClass("active")
            $(".calendar--date-now").text("31 Августа, Суббота")
        }
    })

    // Arrows

    $(".form-box").hover(function () {
        $(".way-box--way").css("color", "#2F3A71")
        $(".way-box--duration").css("color", "#2F3A71")
        $(".way-box--arrow").toggleClass("arrow-active")
    }, function () {
        $(".way-box--way").css("color", "black")
        $(".way-box--duration").css("color", "black")
        $(".way-box--arrow").removeClass("arrow-active")
    });

    // Calculator

    $(".ticket-box--checkbox").change(function (event) {
        if ($(this).is(":checked")) {
            for (i = 0; i <= price.id.length; i++) {
                if (event.target.id === price.id[i]) {
                    price.sum += price.price[i]
                    $(".submit-box--price").text(price.sum.toFixed(2))
                }
            }
        } else {
            for (i = 0; i <= price.id.length; i++) {
                if (event.target.id === price.id[i]) {
                    price.sum -= price.price[i]
                    $(".submit-box--price").text(price.sum)
                }
            }
        }
    })

    // BTN

    $(".button-box--business").click(function () {
        $(".button-box--button").removeClass("active")
      
        if (!price.visible) {
            $(".form-box").animate({ height: "1240px" }, 250)
            $(".form-box").toggleClass("form-box--hover")
            // $(".invisible--way-box").removeClass("invisible")
            price.visible = true
            $(this).toggleClass("active")
            for (i = 0; i <= 4; i++) {
                var $parentItem = $("#" + price.id[i]).closest(".ticket-box--checkbox-item");
                var $svgPaths = $parentItem.find("svg path");
                $("#" + price.id[i]).prop("checked", false)
                var $lipar = $($parentItem).closest(".services-list--item")
                var $text = $parentItem.find(".check-box-text")
                var $price = $lipar.find(".check-box-text--price") 
                $svgPaths.attr("fill", "#666666");
                $text.css("color", "#666666");
                $price.css("color", "#666666");

            }
            price.sum = 512.76
            for (i = 2; i <= 4; i++) {
                $("#" + price.id[i]).prop("checked", true)
                var $parentItem = $("#" + price.id[i]).closest(".ticket-box--checkbox-item");
                var $svgPaths = $parentItem.find("svg path");
                price.sum += price.price[i]
                var $lipar = $($parentItem).closest(".services-list--item")
                var $text = $parentItem.find(".check-box-text")
                var $price = $lipar.find(".check-box-text--price") 
                $svgPaths.attr("fill", "#2F3A71");
                $text.css("color", "#2F3A71");
                $price.css("color", "#2F3A71");
                console.log($svgPaths)
            }
            $(".submit-box--price").text(price.sum)
            price.open_window = "BS"
        } else if (price.open_window == "BS" && price.visible) {
            $(".form-box").animate({ height: "175px" }, 250)
            // $(".invisible--way-box").toggleClass("invisible")
            price.visible = false
            price.open_window = "None"
            $(".form-box").removeClass("form-box--hover")
            console.log("Hi")

        } else {
            // $(".invisible--way-box").removeClass("invisible")
            price.visible = true
            $(this).toggleClass("active")
            for (i = 0; i <= 4; i++) {
                $("#" + price.id[i]).prop("checked", false)
                var $parentItem = $("#" + price.id[i]).closest(".ticket-box--checkbox-item");
                var $svgPaths = $parentItem.find("svg path");
                var $lipar = $($parentItem).closest(".services-list--item")
                var $text = $parentItem.find(".check-box-text")
                var $price = $lipar.find(".check-box-text--price") 
                $svgPaths.attr("fill", "#666666");
                $text.css("color", "#666666");
                $price.css("color", "#666666");

            }
            price.sum = 512.76
            for (i = 2; i <= 4; i++) {
                $("#" + price.id[i]).prop("checked", true)
                price.sum += price.price[i]
                var $parentItem = $("#" + price.id[i]).closest(".ticket-box--checkbox-item");
                var $svgPaths = $parentItem.find("svg path");
                var $lipar = $($parentItem).closest(".services-list--item")
                var $text = $parentItem.find(".check-box-text")
                var $price = $lipar.find(".check-box-text--price") 
                $svgPaths.attr("fill", "#2F3A71");
                $text.css("color", "#2F3A71");
                $price.css("color", "#2F3A71");

            }
            $(".submit-box--price").text(price.sum)
            price.open_window = "BS"
        }
        console.log(price.open_window)


    })

    $(".button-box--economy").click(function () {

        $(".button-box--button").removeClass("active")
        if (!price.visible) {

        // Находим все path внутри svg

            $(".form-box").animate({ height: "1240px" }, 250)
            $(".form-box").toggleClass("form-box--hover")
            $(".invisible--way-box").removeClass("invisible")
            price.visible = true
            $(this).toggleClass("active")
            price.sum = 386.76
            for (i = 0; i <= 4; i++) {
                $("#" + price.id[i]).prop("checked", false)
                var $parentItem = $("#" + price.id[i]).closest(".ticket-box--checkbox-item");
                var $svgPaths = $parentItem.find("svg path");
                var $lipar = $($parentItem).closest(".services-list--item")
                var $text = $parentItem.find(".check-box-text")
                var $price = $lipar.find(".check-box-text--price") 
                $svgPaths.attr("fill", "#666666");
                $text.css("color", "#666666");
                $price.css("color", "#666666");
            }
            $(".submit-box--price").text(price.sum)
            price.open_window = "EC"
        } else if (price.open_window == "EC" && price.visible) {
            $(".form-box").animate({ height: "175px" }, 250)
            // $(".invisible--way-box").toggleClass("invisible")
            price.visible = false
            price.open_window = "None"
            $(".form-box").removeClass("form-box--hover")
            console.log("Hi")

        } else {
            // $(".invisible--way-box").removeClass("invisible")
            price.visible = true
            $(this).toggleClass("active")
            price.sum = 386.76
            for (i = 0; i <= 4; i++) {
                $("#" + price.id[i]).prop("checked", false)
                var $parentItem = $("#" + price.id[i]).closest(".ticket-box--checkbox-item");
                var $svgPaths = $parentItem.find("svg path");
                var $lipar = $($parentItem).closest(".services-list--item")
                var $text = $parentItem.find(".check-box-text")
                var $price = $lipar.find(".check-box-text--price") 
                $svgPaths.attr("fill", "#666666");
                $text.css("color", "#666666");
                $price.css("color", "#666666");
            }
            $(".submit-box--price").text(price.sum)
            price.open_window = "EC"

        }
        console.log(price.open_window)


    })


    // CheckBoxes
    $(".li-checkbox svg path").attr("fill", "#666666");

    $(".checkbox-add").click(function () {
        // Находим родительский элемент .ticket-box--checkbox-item
        var $parentItem = $(this).closest(".ticket-box--checkbox-item");
        // Находим все path внутри svg
        var $svgPaths = $parentItem.find("svg path");

        var $lipar = $($parentItem).closest(".services-list--item")
        var $text = $parentItem.find(".check-box-text")
        var $price = $lipar.find(".check-box-text--price") 

        if ($(this).is(":checked")) {
            // Меняем заливку всех path на зеленый цвет при нажатом чекбоксе
            $svgPaths.attr("fill", "#2F3A71");
            console.log($text) 
            $text.css("color", "#2F3A71")
            $price.css("color", "#2F3A71")

            // Цвет при checked
        } else {
            // Возвращаем заливку всех path на исходный цвет
            $svgPaths.attr("fill", "#666666");
            $text.css("color", "#666666");
            $price.css("color", "#666666");
             // Исходный цвет
        }
    });

})