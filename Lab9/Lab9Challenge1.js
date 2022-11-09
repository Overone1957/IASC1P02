function stopTime(){
  var start = new Date();
  console.log(start);
  var stop = new Date();
  console.log(stop);
  var output = Math.floor(stop.getTime() - start.getTime());
  console.log(output);
  alert("You have been on the page for: "+output+" seconds");
}
