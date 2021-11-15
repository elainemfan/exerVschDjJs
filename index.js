var sqaure = document.getElementById("square");
    var defaultGoldColor = window.getComputedStyle(square).backgroundColor;

    function hoverBlueColor(color) {
        sqaure.style.backgroundColor = color;
    }

    function heldDownRedColor(color) {
        sqaure.style.backgroundColor = color;
    }

    function letGoYellowColor(color) {
        sqaure.style.backgroundColor = color;
    }

    function doubleClickGreenColor(color) {
        sqaure.style.backgroundColor = color;
    }

    function scrollOrangeColor(color) {
        sqaure.style.backgroundColor = color;
    }

    function defaultGoldColor(color) {
        sqaure.style.backgroundColor = defaultColor;
    }


  