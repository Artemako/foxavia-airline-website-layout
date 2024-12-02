$(document).ready(function () {
    let listener = false;


    $(".order-box").hover(function () {
        $(".order-route--route").switchClass("no-animation", "hover--blue", 250)
    }, function () {
        $(".order-route--route").switchClass("hover--blue", "no-animation", 250)

    })

    $(".order-box").click(function () {
        if (!listener) {
            $(".order-price").switchClass("no-animation", "animation", 250)
            $(".order-status-box").switchClass("no-animation", "animation", 250)
            $(".order-route").switchClass("no-animation", "animation", 250)
            $(".order-graph-line").switchClass("no-animation", "animation", 250)
            $(".order-graph-time").text("1 пересадка").css({ "width": "90px" })
            $(".order-route--duration").switchClass("no-animation", "animation", 250)
            $(".order-route--route").switchClass("no-animation", "animation", 250)
            $(this).switchClass("no-animation", "animation", 250)
            listener = true
        } else{
            $(".order-price").switchClass("animation", "no-animation", 250)
            $(".order-status-box").switchClass("animation", "no-animation", 250)
            $(".order-route").switchClass("animation", "no-animation", 250)
            $(".order-graph-line").switchClass("animation", "no-animation", 250)
            $(".order-graph-time").text("3h 20 min").css({ "width": "70px" })
            $(".order-route--duration").switchClass("animation", "no-animation", 250)
            $(".order-route--route").switchClass("animation", "no-animation", 250)
            $(this).switchClass("animation", "no-animation", 250)
            listener = false
        }

    })

    // $(".order-status").click(function(){
    //     $(".order-status").animate({height:"400px", width:"0px"},250)

    //     setTimeout(function(){
    //         $(".order-status").css({"display":"none"})
    //     },250)
    // })
})