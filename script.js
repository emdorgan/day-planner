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
var button9 = document.getElementById('btn-9');
var button10 = document.getElementById('btn-10');
var button11 = document.getElementById('btn-11');
var button12 = document.getElementById('btn-12');
var button13 = document.getElementById('btn-13');
var button14 = document.getElementById('btn-14');
var button15 = document.getElementById('btn-15');
var button16 = document.getElementById('btn-16');
// var allBtn = document.querySelectorAll('button')
// console.log(allBtn);

var num = 12                        // testing out if I can iterate through the block
var test = num.toString();          // the test was successful, this method will likely be used
var timeBlockStorage = localStorage.getItem(test);
//console.log(timeBlockStorage);          // to ask: How do I then place it in the time-block?

function update(){                      //function used to contiuously update the date/time
    date = moment(new Date());          //uses the date() jquery method to get a new date and store it in date variable
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a')); //inputs the new date into an HTML element, uses moment.js format for readability
    //THIS function constantly runs, add the colorchanging blocks here!
};

$(document).ready(function(){           //ensures that the document is loaded before any scripts run
    datetime = $('#currentDay')         //stores the pointer to the element with currentDay ID
    update();                           //calls the update function
    setInterval(update, 1000);          //calls the update function every second
    
    //document.getElementById('btn-9').addEventListener('click', storeTask(9));
});

$("#user-info-9").attr("value",localStorage.getItem("user-info-9"));

$(".fas").on("click",function(event){
    event.preventDefault();
    var time = $(this).siblings(".col-lg-10").attr("id");
    var note = $(this).siblings(".col-lg-10").val();
    console.log(time, note);
    localStorage.setItem(time,note);
})

// button9.addEventListener('click', function(event){
//     event.preventDefault();
//     localStorage.setItem(9, $('#user-info-9').val())
// });
// button10.addEventListener('click', function(event){
//     event.preventDefault();
//     localStorage.setItem(10, $('#user-info-10').val())
// });
// button11.addEventListener('click', function(event){
//     event.preventDefault();
//     localStorage.setItem(11, $('#user-info-11').val())
// });
// button12.addEventListener('click', function(event){
//     event.preventDefault();
//     localStorage.setItem(12, $('#user-info-12').val())
// });
// button13.addEventListener('click', function(event){
//     event.preventDefault();
//     localStorage.setItem(13, $('#user-info-13').val())
// });
// button14.addEventListener('click', function(event){
//     event.preventDefault();
//     localStorage.setItem(14, $('#user-info-14').val())
// });
// button15.addEventListener('click', function(event){
//     event.preventDefault();
//     localStorage.setItem(15, $('#user-info-15').val())
// });
// button16.addEventListener('click', function(event){
//     event.preventDefault();
//     localStorage.setItem(16, $('#user-info-16').val())
// });



    // $('#btn-9').on('click', storeTask(9));
    // $('#btn-10').on('click', storeTask(10));
    // $('#btn-11').on('click', storeTask(11));
    // $('#btn-12').on('click', storeTask(12));
    // $('#btn-13').on('click', storeTask(13));
    // $('#btn-14').on('click', storeTask(14));
    // $('#btn-15').on('click', storeTask(15));
    // $('#btn-16').on('click', storeTask(16));

    // $(document).on('click', '#btn', storeTask)
    // function storeTask(){
    // var timeBtn = $(this.event).attr('data');
    // localStorage.setItem(timeBtn, ???)
    //}

