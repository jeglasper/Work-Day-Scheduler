// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

//Adds time-block notes to local storage when you click the save button
  //Event Listener - Click the Save Button on the Time-Block, run a function
  var saveButton = $('.saveBtn');
  saveButton.on('click', function(event){
    //preventDefault to keep the page from refreshing when you click the save button
    event.preventDefault();
    //Add typed notes into local storage
          //property or Key would be the hour, value would be the typed text
    var timeBlock = $(this).parent().attr('id');
    localStorage.setItem (timeBlock, $(this).prev().val());
  })

//Adds past, present, or future class to each time-block
  //Use Day.js to create a variable that pulls the current hour in the 24 hour format
  var currentHour = dayjs().format('HH');
  console.log('Curent Time (Hour): ' + currentHour);
 
  //Use JQuery selector to select each time-block using the class 'time-block'
  var timeBlockEl = $('.time-block');
  console.log(timeBlockEl.length);
  console.log(timeBlockEl);

  //Create a for loop that compares the ID of each div to the current hour
  for (i = 0; i < timeBlockEl.length; i++) {
    //create variable that selects the id based on the array position
    var blockTime = $(timeBlockEl[i]).attr('id').substring(5);
    blockTime = parseInt(blockTime);
    console.log(blockTime);
    console.log(typeof(blockTime));

    //create conditional statements comparing id to current hour     
          //if statement less than HH, add past class to 
          //if statement equal to HH, add present class
          //if statement greater than HH, add future class
    if (blockTime < currentHour) {
      $(timeBlockEl[i]).addClass('past');
    } else if (blockTime == currentHour) {
      $(timeBlockEl[i]).addClass('present');
    } else {
      $(timeBlockEl[i]).addClass('future');
    }
  }

//Adds code to pull values from local storage to corresponding textarea elements
  for (i = 0; i < timeBlockEl.length; i++) {
    var storedText = localStorage.getItem($(timeBlockEl[i]).attr('id'));
    $(timeBlockEl[i]).children().eq(1).text(storedText);
  }

//Adds Current Date to Header Element of HTML
  //Use Day.js to create variable that selects the current day
  var currentDay = dayjs().format('dddd, MMMM D YYYY');
  //adds new variable as text to currentDay id and uses JQuery to add styling using css propertiea
  $('#currentDay').text(currentDay).css('font-weight', 'bolder').css('color', 'purple').css('font-size', '35px');

});
