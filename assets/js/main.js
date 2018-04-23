$(document).ready(function () {
    $(".icon-box").mouseenter(function () {
        $(".icon-circle").removeClass("gradiantColor1");
    });
    $(".icon-box").mouseleave(function () {
        //        $(".icon-circle").addClass("gradiantColor1");
    });

    //center function
    $(window).resize(function () {
        var window_height = $(window).height();
        var mainbox_height = $(".main-box").height();
        var sub = (window_height - mainbox_height) / 2;
        var center_val = (sub * 100) / window_height - 3;

        $(".main-box").css({
            "margin": center_val + "vh auto"
        });
    });



    $(".icon-box").click(function (e) {

        $(".icon-circle").css({
            "margin": "0px",
            "background-color": "white"
        });
        $(".imageClass").css({
            "opacity": "0"
        });
        // bottom click text
        $(".clickhere").css({
            "display": "none"
        });

        setTimeout(function () {
            $(".main-box").css({
                "margin": "6vh auto"
            });
            $(".icon-box").css({
                "width": "250px",
                "height": "541px",
                "padding": "10px",
                "border-radius": "38px",
                "cursor": "url(/assets/image/clicker3.png),auto"
            });
            $(".icon-circle").css({
                "width": "230px",
                "height": "521px",
                "border-radius": "30px",
                "background-color": "white",
                "margin": "0",
                "background-image": "url(/assets/image/back.jpg)"
            });
            $(".icon-top-box").css({
                "width": "135px",
                "height": "17px",
                "background-color": "rgb(43, 45, 41)"
            });

            setTimeout(function () {
                $(".icon-name").css({
                    "position": "relative",
                    "margin-top": "130px",
                    "cursor": "url(/assets/image/pay-per-click3.png),auto"
                });

                $(".icon-name").attr("onclick", "openApp()");
                $(".imageClassName").attr("width", "100");
                $(".secondClick").css("display", "block");

            }, 200);
            $(".imageClass").css({
                "display": "none"
            });
            $(".imageClassName").css({
                "margin-top": "100px"
            });

        }, 500);

        //disable on click
        $(".icon-box").unbind("click");

    });

    $(".closeBut").click(function () {
        $("#modalOverly").fadeOut();
        $("#modalView1").fadeOut();
        $("#modalView2").fadeOut();
        $("#modalView3").fadeOut();
        $("#modalView4").fadeOut();
    });

});

function openApp() {

    $(".icon-circle").css({
        "background-image": "url(/assets/image/backblur.jpg)"
    });

    //icon color change
    $(".imageClassName").attr("src", "assets/image/icon3.1.svg");

    $(".secondClick").css("display", "none");
    $(".searchBar").css({
        "display": "block"
    });
    $(".icon-name").removeAttr("onclick");
    $(".icon-name").css({
        "cursor": "url(/assets/image/clicker3.png),auto",
        "margin": "-75px 0 0 0"
    });
    $(".imageClassName").attr("width", "50");

    setTimeout(function () {
        $(".content-1:nth-child(2)").css({
            "opacity": "1"
        });
        $(".content-1:nth-child(2) >.insideButton").attr("onclick", "viewBut(1)");
        $(".content-1:nth-child(2) >.insideButton").css("cursor", "url(/assets/image/pay-per-click3.png),auto");
    }, 200);
    cursor:
        setTimeout(function () {
            $(".content-1:nth-child(3)").css({
                "opacity": "1"
            });
            $(".content-1:nth-child(3)>.insideButton").attr("onclick", "viewBut(2)");
            $(".content-1:nth-child(3)>.insideButton").css("cursor", "url(/assets/image/pay-per-click3.png),auto");
        }, 400);
    setTimeout(function () {
        $(".content-1:nth-child(4)").css({
            "opacity": "1"
        });
        $(".content-1:nth-child(4)>.insideButton").attr("onclick", "viewBut(3)");
        $(".content-1:nth-child(4)>.insideButton").css("cursor", "url(/assets/image/pay-per-click3.png),auto");
    }, 600);
    setTimeout(function () {
        $(".content-1:nth-child(5)").css({
            "opacity": "1"
        });
        $(".content-1:nth-child(5)>.insideButton").attr("onclick", "viewBut(4)");
        $(".content-1:nth-child(5) >.insideButton").css("cursor", "url(/assets/image/pay-per-click3.png),auto");
    }, 800);

    // side deatils
    setTimeout(function () {
        $(".details-left").show(0);
        $(".web-main-content").fadeIn(1500);
        $(".details-right").fadeIn(1000);
    }, 1000);
    setTimeout(function () {
        $(".details-left > .text-web > .line1").show(300);
    }, 1000);
    setTimeout(function () {
        $(".details-left > .text-web > .line2").show(300);
    }, 1200);
    setTimeout(function () {
        $(".details-left > .text-web > .line3").show(300);
    }, 1400);
    setTimeout(function () {
        $(".details-left > .text-web > .line4").show(300);
    }, 1600);

    setTimeout(function () {
        $(".details-right").css({
            "margin-right": "0",
            "width": "35%"
        });
    }, 1000);

}

function viewBut(buttonNumber) {
    $("#modalOverly").fadeIn();
    switch (buttonNumber) {
        case 1:
            $("#modalView1").fadeIn();
            break;
        case 2:
            $("#modalView2").fadeIn();
            break;
        case 3:
            $("#modalView3").fadeIn();
            break;
        case 4:
            $("#modalView4").fadeIn();
            break;
        default:
            break;

    }
}

function sort(length) {
    if (length <= 1) {
        $(".content-1").css("display", "block");
    } else if (length > 1 && length <= 3) {
        $(".content-1").css("display", "block");
        $(".content-1:nth-child(5)").css("display", "none");
    } else if (length > 3 && length <= 10) {
        $(".content-1").css("display", "block");
        $(".content-1:nth-child(4)").css("display", "none");
        $(".content-1:nth-child(5)").css("display", "none");
    } else if (length > 10 && length <= 15) {
        $(".content-1").css("display", "block");
        $(".content-1:nth-child(3)").css("display", "none");
        $(".content-1:nth-child(4)").css("display", "none");
        $(".content-1:nth-child(5)").css("display", "none");
    } else if (length > 15) {
        $(".content-1").css("display", "none");
    }
}
