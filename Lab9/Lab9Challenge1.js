function stopTime(){
  var start = new Date();
  var stop = new Date();
  var second = start.getSecond();
  var output = stop - start;
  alert("You have been on the page for: "+output);
}
