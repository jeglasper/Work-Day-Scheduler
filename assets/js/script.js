// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


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
    var blockTime = $(timeBlockEl[i]).attr('id');
    console.log(blockTime);

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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

//Adds Current Date to Header of the Page
  //Use Day.js to create variable that selects the current day
  var currentDay = dayjs().format('dddd, MMMM D YYYY');
  //adds new variable as text to currentDay id and uses JQuery to add styling using css propertiea
  $('#currentDay').text(currentDay).css('font-weight', 'bolder').css('color', 'purple').css('font-size', '35px');

});
