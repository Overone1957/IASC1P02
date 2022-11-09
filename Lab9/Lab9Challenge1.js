function stopTime(){
  var start = new Date();
  var stop = new Date();
  var output = stop.getTime() - start.getTime();
  var outputsecond = output / 600;
  alert("You have been on the page for: "+outputsecond);
}
