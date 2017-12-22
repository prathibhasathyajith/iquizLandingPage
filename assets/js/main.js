$(document).ready(function () {
    $(".icon-box").mouseenter(function () {
        $(".icon-circle").removeClass("gradiantColor1");
    });
    $(".icon-box").mouseleave(function () {
        //        $(".icon-circle").addClass("gradiantColor1");
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
                "margin": "9vh auto"
            });
            $(".icon-box").css({
                "width": "250px",
                "height": "541px",
                "padding": "10px",
                "border-radius": "38px",
                "cursor": "auto"
            });
            $(".icon-circle").css({
                "width": "230px",
                "height": "521px",
                "border-radius": "30px",
                "background-color": "white",
                "margin": "0"
            });
            $(".icon-top-box").css({
                "width": "135px",
                "height": "17px",
                "background-color": "#353535"
            });

            setTimeout(function () {
                $(".icon-name").css({
                    "position": "relative",
                    "margin-top": "130px",
                    "cursor": "pointer"
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

});

function openApp() {
    $(".secondClick").css("display", "none");
    $(".searchBar").css({
        "display": "block"
    });
    $(".icon-name").removeAttr("onclick");
    $(".icon-name").css({
        "cursor": "auto",
        "margin": "-75px 0 0 0"
    });
    $(".imageClassName").attr("width", "50");

    setTimeout(function () {
        $(".content-1:nth-child(2)").css({
            "opacity": "1"
        });
        $(".content-1:nth-child(2)").attr("onclick", "viewBut(1)");
    }, 200);
    setTimeout(function () {
        $(".content-1:nth-child(3)").css({
            "opacity": "1"
        });
        $(".content-1:nth-child(3)").attr("onclick", "viewBut(2)");
    }, 400);
    setTimeout(function () {
        $(".content-1:nth-child(4)").css({
            "opacity": "1"
        });
        $(".content-1:nth-child(4)").attr("onclick", "viewBut(3)");
    }, 600);
    setTimeout(function () {
        $(".content-1:nth-child(5)").css({
            "opacity": "1"
        });
        $(".content-1:nth-child(5)").attr("onclick", "viewBut(4)");
    }, 800);

}

function viewBut(buttonNumber) {
    alert(buttonNumber);
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
