//get initial buttons on the page

//array of start buttons
var fridayNight = ["Friday", "Alcohol", "Dance", "Programming", "Lazy", "Eating"];
console.log(fridayNight);

function renderButtons() {

    //make sure to empty div so buttons do not repeat when adding new
    $("#buttons-div").empty();

    //loop through array to create button for each
    for (var i = 0; i < fridayNight.length; i++) {

        var a = $("<button>");
        a.addClass("friday-gif");

        a.attr("data-name", fridayNight[i]);

        a.text(fridayNight[i]);

        $("#buttons-div").append(a);
    }
}

$("#add-button").on("click", function (event) {

    //prevent page from reloading when submit button is clicked
    event.preventDefault();

    //grab information from user's input
    var button = $("#search-input").val().trim();

   //add user's movie to array
    fridayNight.push(button);

    //call render function to clear div and put all buttons on the page, including user's input
    renderButtons();

});

//get gifs



renderButtons();

