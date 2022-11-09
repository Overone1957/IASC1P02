function stopTime(){
  var start = new Date();
  console.log(start);
  var stop = new Date();
  console.log(stop);
  alert("You have been on the page for: "+ Math.round((stop.getTime()-start.getTime())/600)+" seconds");
}
