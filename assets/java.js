//get initial buttons on the page

//array of start buttons
var topics = ["Cartoons", "Brunch", "Coffee", "Monday", "Lazy", "Coding", "Homework", "Football", "Family Dinner"];

function renderButtons() {

    //make sure to empty div so buttons do not repeat when adding new
    $("#buttons-div").empty();

    //loop through array to create button for each
    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");
       
        a.addClass("sunday-gif");

        a.attr("data-topic", topics[i]);

        a.text(topics[i]);

        $("#buttons-div").append(a);
    }
}

$("#add-button").on("click", "sunday-gif", function (event) {

    //prevent page from reloading when submit button is clicked
    event.preventDefault();

    //grab information from user's input
    var button = $("#search-input").val().trim();

    //add user's movie to array
    topics.push(button);

    //call render function to clear div and put all buttons on the page, including user's input
    renderButtons();

    $("#search-input").val("");

});

//calling renderButtons here so that they exist for click function
renderButtons(); 


//get gifs

$(document).on("click", "button", function () {

    $("#gif-div").empty();

    var topic = $(this).attr("data-topic");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&api_key=bzsLQXHKeqCsizLEPeAz9MyTrTTC1Z5R";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var results = response.data;
        
        
        for (var i=0; i<results.length; i++){
            var newDiv = $("<div>");
            newDiv.addClass("gif-child")
            var image = $("<img>");
            image.addClass("gif");
            image.attr("src", results[i].images.fixed_height_still.url);
            image.attr("data-still", results[i].images.fixed_height_still.url);
            image.attr("data-animate", results[i].images.fixed_height.url);
            image.attr("data-state", "still");
            var gifRating = response.data[i].rating;
            $(newDiv).prepend("Rating: " + gifRating + "<br>", image);
            $("#gif-div").prepend(newDiv);
        }
    });
});

//animate gifs

$(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    console.log(state);
    if (state === "still"){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }

    else if (state === "animate"){
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    };


});




