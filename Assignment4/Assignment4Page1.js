function lightmode(){
  document.getElementById("wrapper").style.backgroundColor = "lightskyblue";
  document.getElementById("headerWrapper").style.backgroundColor = "orange";
  document.getElementById("headerMid").style.backgroundColor = "orange";
  document.getElementById("headerRight").style.backgroundColor = "orange";
  document.getElementById("FooterWrapper").style.backgroundColor = "orange";
}

function darkmode(){
  document.getElementById("wrapper").style.backgroundColor = "black";
  document.getElementById("headerWrapper").style.backgroundColor = "DarkSlateGray";
  document.getElementById("headerMid").style.backgroundColor = "DarkSlateGray";
  document.getElementById("headerRight").style.backgroundColor = "DarkSlateGray";
  document.getElementById("FooterWrapper").style.backgroundColor = "DarkSlateGray";
}

//The codes of changing background color are cited from https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp

function Welcome(){
  alert ("Welcome to the world of Overwatch!")
}

var second = 0;
var minute = 0;
var hour = 0;
window.setTimeout("interval();", 1000);
function interval() {
  second++;
  if (second == 60) {
    second = 0;
    minute += 1;
  }
  if (minute == 60) {
    minute = 0;
    hour += 1;
  }
  window.setTimeout("interval();", 1000);
  var time = hour + " hour " + minute + " minute " + second + " second"
  document.getElementById('time').innerHTML = time;
}

//The codes of web dwell time are cited from https://topic.alibabacloud.com/a/javascript-shows-user-dwell-time_1_24_10001928.html
