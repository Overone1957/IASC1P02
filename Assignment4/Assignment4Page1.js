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
