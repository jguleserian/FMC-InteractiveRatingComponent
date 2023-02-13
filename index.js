/*-Establish a global variable that will be used to track the rating-*/
var rating = "";
/*-Set a listener that will be called when the rating changes; if the user changes their mind, the incorrect button should go back to normal and the new one should indicate it is active-*/
$("button.circle").click(function() {
    rating = this.value;
    $(".activated").removeClass("activated");
    $(this).addClass("activated");
});

/*-Upon submission of the form, check if a rating has been chosen; if it has, toggle the visibility of both sections and display correct rating-*/

$("#numbers").submit(function(e) {
    e.preventDefault();
    if (rating > 0) {
        $(".rating").css("display", "none");
        $(".thanks").css("display", "flex");
        $("span").text(rating);
    }
});