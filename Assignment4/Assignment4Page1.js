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

const btn = document.querySelector('button');
const videoBox = document.querySelector('div');
function displayVideo(){
  if (videoBox.getAttribute('class') === 'hidden'){
    videoBox.setAttribute('class','showing');
  }
}

btn.addEventListener('click', displayVideo);
videoBox.addEventListener('click', () => videoBox.setAttribute('class', 'hidden'));
const video = document.querySelector('video');
video.addEventListener('click', () => video.play());
