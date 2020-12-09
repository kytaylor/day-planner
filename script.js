$(document).ready(function() {
    // Finding the date with moment.js and sppending to the currentDay id
    var date = moment().format("MMMM Do YYYY");
    console.log(date)
    $("#currentDay").append(date);

    // Finds the current hour
    var hour = parseInt(moment().format("HH"));
    console.log(hour)

    // Changes the color of the text areas depending on the hour of day
    // If the hour has already passed, the text field is gray
    // If the hour is the current houw, the text field is red
    // If the hour is in the future, the text field is green
    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < hour) {
            $(this).addClass("past");
        } else if (name > hour) {
            $(this).addClass("future");
        } else if (name === hour) {
            $(this).addClass("present");
        }
    });
    
});