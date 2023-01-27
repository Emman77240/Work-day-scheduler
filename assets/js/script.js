// Initialize global variables
let timeOfDay = "am"; 
let startTime = 9;
let timeCount = 1;
let myClass = "row";


// Run once the page DOM is ready for js code to execute
$(document).ready(function () {

    // Create time block
    for(let i = 0; i < 12; i++) {
        // Create time block
        let timeBlock = "<div class=" + myClass + "><div class=" + "text" + timeCount + "></div><textarea></textarea><button></button></div>";
        $(".container").append(timeBlock);
        $(".text" + timeCount).addClass("hour");
        $("button").addClass("saveBtn");
        timeCount++;
    }
  });