console.log("Hover state");

$( "button").hover(
    function() {
        $(this).css("background-color", "#DDE5B6");
        $(this).css("color", "black");
        $(this).css("border-color", "black")
    }, function() {
        $(this).css("background-color", "#ADC178");
        $(this).css("color", "black");
    }
);

