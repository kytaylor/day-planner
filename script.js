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

    // Query selector for all text fields
    //var formItems = document.querySelector("textarea").val

    // Gets items from local storage and displays them in the appropriate time block
    $("#9AM-text").val(localStorage.getItem("9AM"));
    $("#10AM-text").val(localStorage.getItem("10AM"));
    $("#11AM-text").val(localStorage.getItem("11AM"));
    $("#12PM-text").val(localStorage.getItem("12PM"));
    $("#1PM-text").val(localStorage.getItem("1PM"));
    $("#2PM-text").val(localStorage.getItem("2PM"));
    $("#3PM-text").val(localStorage.getItem("3PM"));
    $("#4PM-text").val(localStorage.getItem("4PM"));
    $("#5PM-text").val(localStorage.getItem("5PM"));
    
    // When a button is clicked, saves what's in the text fields to local storage
    $("button").on("click", function() {
        //localStorage.setItem("items-list", formItems)
        console.log(this)
        localStorage.setItem("9AM", (input9AM.val()))
        localStorage.setItem("10AM", (input10AM.val()))
        localStorage.setItem("11AM", (input11AM.val()))
        localStorage.setItem("12PM", (input12PM.val()))
        localStorage.setItem("1PM", (input1PM.val()))
        localStorage.setItem("2PM", (input2PM.val()))
        localStorage.setItem("3PM", (input3PM.val()))
        localStorage.setItem("4PM", (input4PM.val()))
        localStorage.setItem("5PM", (input5PM.val()))
    })

    // Variables for text inputted on each time block
    var input9AM = $("#9AM-text");
    var input10AM = $("#10AM-text");
    var input11AM = $("#11AM-text");
    var input12PM = $("#12PM-text");
    var input1PM = $("#1PM-text");
    var input2PM = $("#2PM-text");
    var input3PM = $("#3PM-text");
    var input4PM = $("#4PM-text");
    var input5PM = $("#5PM-text");

    // Puts variables into an array
    var inputArray = [input9AM, input10AM, input11AM, input12PM, input1PM, input2PM, input3PM, input4PM, input5PM];
    console.log(inputArray)
});