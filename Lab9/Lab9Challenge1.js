function stopTime(){
  var start = new Date();
  var stop = new Date();
  var output = stop.getTime() - start.getTime();
  var second = Math.floor(output / 600);
  alert("You have been on the page for: "+output);
}
