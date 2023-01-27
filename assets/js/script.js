// Initialize global variables
let startTime = 9;
let newTime = 1;
let timeCount = 1;
let myClass = "row";


// Run once the page DOM is ready for js code to execute
$(document).ready(function () {

    // Create time block
    for(let i = 0; i < 9; i++) {
        // Create time block
        let timeBlock = "<div class=" + myClass + "><div class=" + "text" + timeCount + "></div><textarea></textarea><button><i></i></button></div>";
        $(".container").append(timeBlock);
        //$("textarea").addClass("future");
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
  
    // Display date and time with Moment.js 
    let nowMoment = moment().format("dddd, MMMM Do");
    $("#currentDay").text(nowMoment);
        
    // Initialize current date
    let currentHour = moment().format("H");
    
    // Add colors to time blocks
    $(".hour").each(function() {
      // Target time attribute in time blocks
      let thisId = parseInt($(this).attr("id"));

      // Add styling to text areas according to time of day
      if(thisId == currentHour) $(this).siblings("textarea").addClass("present").removeClass("past future");
      if(thisId < currentHour) $(this).siblings("textarea").addClass("past").removeClass("present future");
      if(thisId > currentHour) $(this).siblings("textarea").addClass("future").removeClass("past present");
    
    });
    
  });