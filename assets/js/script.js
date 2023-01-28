// Initialize global variables
let startTime = 9;
let newTime = 1;
let timeCount = 1;
let myClass = "row";

// Initialize date and time with Moment.js 
let currentHour = moment().format("H");
let nowMoment = moment().format("dddd, MMMM Do");


// Run once the page DOM is ready for js code to execute
$(document).ready(function () {

  // Initialize scheduler at the start of a new day
  if(currentHour == 9) {

    // Clear local storage
    localStorage.clear();

    // Set textarea to empty string
    $("textarea").val("");

    // Set work start time
    startTime = 9;

  }


  // Set date on page
  $("#currentDay").text(nowMoment);

  // Create time block
  for(let i = 0; i < 9; i++) {

    // Create time block
    let timeBlock = "<div class=" + myClass + "><div class=" + "text" + timeCount + "></div><textarea></textarea><button><i></i></button></div>";
    $(".container").append(timeBlock);
    $(".text" + timeCount).addClass("hour");
    $("i").addClass("fas fa-lock");
    $("button").addClass("saveBtn");
    timeCount++;
  }

  // Add time to time block
  for(let i = 1; i < 10; i++) {
    if(startTime < 12) {
      $(".text" + i).attr("id", startTime).text(startTime + "AM");
      startTime++;
    } else if(startTime === 12) {
      $(".text" + i).attr("id", startTime).text(startTime + "PM");
      startTime++;
    } else {
      $(".text" + i).attr("id", startTime).text(newTime + "PM");
      newTime++;
      startTime++
     }
  }
  
  // Add colors to time blocks
  $(".hour").each(function() {
    
    // Target time attribute in time blocks
    let thisId = parseInt($(this).attr("id"));

    // Add styling to text areas according to time of day
    if(thisId < currentHour) $(this).siblings("textarea").addClass("past").removeClass("present future");
    if(thisId > currentHour) $(this).siblings("textarea").addClass("future").removeClass("past present");
    if(thisId == currentHour) $(this).siblings("textarea").addClass("present").removeClass("past future");
    
  });

  // Save values to local storage on click
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    let time = $(this).siblings(".hour").attr("id");
    let value = $(this).siblings("textarea").val();
    localStorage.setItem(time, value);
    
  });

  // Retrieve values from local storage on page load
  $(".hour").each(function() {

    // Get id attribute
    let thisId = parseInt($(this).attr("id"));

    // Set textarea with stored value from local storage
    $(this).siblings("textarea").val(localStorage.getItem(thisId));

  });
    
});