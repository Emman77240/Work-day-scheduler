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
        let timeBlock = "<div class=" + myClass + "><div class=" + "text" + timeCount + "></div><textarea></textarea><button></button></div>";
        $(".container").append(timeBlock);
        $(".text" + timeCount).addClass("hour");
        $("button").addClass("saveBtn");
        timeCount++;
    }

    // Add time to time block
    for(let i = 1; i < 10; i++) {
        if(startTime < 12) {
            $(".text" + i).text(startTime + "AM");
            startTime++;
        } else if(startTime === 12) {
            $(".text" + i).text(startTime + "PM");
            startTime++;
        } else {
            $(".text" + i).text(newTime + "PM");
            newTime++;
        }
    }


  });