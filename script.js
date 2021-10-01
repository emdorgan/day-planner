//  Given a bunch of HTML time-blocks representing hour-long blocks from 9am to 5pm                             <-----------------pseudocode for colored blocks
//  Convert to 24hr clock for ease of computing (which gives us 9, 10, 11, 12, 13, 14, 15, 16)
// Store the boxes in an array of [9, 10, 11, 12, 13, 14, 15, 16]
// Look at the current hourly (ignore mins and secs) time with moment.js in the hourly format on a 24 hour clock
// Store current time in a variable called dateConverted
// For each timeblock...
// compare the timeblock to dateConverted
// If timeblock is less than dateConverted then set color to grey (past)
// if timeblock is equal to dateConverted then set color to red (present)
// if the timeblock is greater than dateConverted then set the color to green (future)

//  On pageload, look at stored data                                               <------- pseudocode for saving, storing and retrieving data
//  for each key-value pair....
//  parse into an array of [key, value]
//  find the corresponding HTML timeblock to the key
//  fill timeblock with the respective value (string) associated with that key
// When user enters input and hits the save button 
// Look at which block the user entered the data
// store the user's data as value and the block as a key

var datetime;                           // initializes 2 variables for the active date/time counter
var date;

function update(){                      //function used to contiuously update the date/time
    date = moment(new Date());          //uses the date() jquery method to get a new date and store it in date variable
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a')); //inputs the new date into an HTML element, uses moment.js format for readability
    //THIS function constantly runs, add the colorchanging blocks here!
};

$(document).ready(function(){           //ensures that the document is loaded before any scripts run
    datetime = $('#currentDay')         //stores the pointer to the element with currentDay ID
    update();                           //calls the update function
    setInterval(update, 1000);          //calls the update function every second
    var allRows = $(".row");
    var hourly = parseInt(date.format('k'));
    for (var i = 0; i< allRows.length; i++ ){
        if(parseInt(allRows.eq(i).attr("id")) < hourly){
            allRows.eq(i).children().eq(1).addClass('past');
            console.log(allRows.eq(i));
        }
        else if(parseInt(allRows.eq(i).attr("id")) > hourly){
            allRows.eq(i).children().eq(1).addClass('future');
        }
        else if (parseInt(allRows.eq(i).attr("id")) === hourly){
            allRows.eq(i).children().eq(1).addClass('present');
        }

    };

    $("#user-info-9").attr("value", localStorage.getItem("user-info-9"));
    $("#user-info-10").attr("value", localStorage.getItem("user-info-10"));
    $("#user-info-11").attr("value", localStorage.getItem("user-info-11"));
    $("#user-info-12").attr("value", localStorage.getItem("user-info-12"));
    $("#user-info-13").attr("value", localStorage.getItem("user-info-13"));
    $("#user-info-14").attr("value", localStorage.getItem("user-info-14"));
    $("#user-info-15").attr("value", localStorage.getItem("user-info-15"));
    $("#user-info-16").attr("value", localStorage.getItem("user-info-16"));
    
    $(".fas").on("click",function(event){
        event.preventDefault();
        var time = $(this).siblings(".col-lg-10").attr("id");
        var note = $(this).siblings(".col-lg-10").val();
        console.log(time, note);
        localStorage.setItem(time,note);
    });

});