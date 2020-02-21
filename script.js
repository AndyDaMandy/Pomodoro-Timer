// The goal of this project is to make a simple pomodoro timer
// then to take this timer and turn it into a galaxy watch app
// The basic idea is to have a timer that forces you to work. If you pause the timer for more than 3 minutes, it restarts, erasing your progress.
// Another idea would be that it keeps track of productivity per day. It'll motivate you  in that way.
// 

// These functions show the current time.
function showTime(){
  let currentDate = new Date();
  document.getElementById("clock").innerHTML = currentDate.toLocaleTimeString();
};
setInterval(showTime, 1000);
//
//This next function shows the input for the timer and then adds "minutes"
function showInputTime(){
  let inputTime = document.getElementById("timer").value;
  document.getElementById("inputTime").innerHTML = inputTime + " Minute Timer"
  console.log(inputTime);
};

//These functions ask for the user's input regarding how long they want their timer to be for...
// Then gatherTime() converts the number into second intervals.
// The it inserts it into the setInterval
// Lastly, the alert function is set from there

// NEW IDEA -- instead of having it gathering up only minutes, instead it'll be 3 different variables. One for hours, minutes and seconds
function gatherTime(){
  let x = document.getElementById("timer").value;
  x = x * 1000;
  x = x * 60;
  console.log(x);
  return x;
};
function alerter(){
  alert("Time's up! Take a 5 minute break!");
}

function startTimer(){
  debugger;
  if (document.getElementById("timer").value >= 0){
   let newX = gatherTime();
    setTimeout(function (){alerter();}, newX);
  };
};
// This next function is within the <body> tag, under "onchange"
// This way, it only activates once the user inputs a value;
// setInterval(alerter(), gatherTime());