function stopTime(){
  var start = new Date();
  console.log(start);
  var stop = new Date();
  console.log(stop);
  var output = Math.round((stop.getTime() - start.getTime())/600);
  alert("You have been on the page for: "+output+" seconds");
}
