$(document).ready(function() {
    $(".north-1").click(function() {
        $(".north").slideToggle("slow");
    });

    $(".east-1").click(function() {
        $(".east").slideToggle("slow");
    });

    $(".south-1").click(function() {
        $(".south").slideToggle("slow");
    });

    $(".west-1").click(function() {
        $(".west").slideToggle("slow");
    });

    $(".central-1").click(function() {
        $(".central").slideToggle("slow");
    });

    $(".option").click(function() {
        $(this).toggleClass("red");
    });
});

$(".option").on("click", function() {
    $(".opener").hide("slow");
});


