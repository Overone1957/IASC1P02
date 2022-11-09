function stopTime(){
  var start = new Date();
  console.log(start);
  var stop = new Date();
  console.log(stop);
  var output = stop.getTime() - start.getTime();
  console.log(output);
  var second = Math.floor(output.getTime() / 600);
  console.log(second);
  alert("You have been on the page for: "+second+" seconds");
}
