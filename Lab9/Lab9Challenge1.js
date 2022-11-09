function stopTime(){
  var start = new Date();
  console.log(start);
  var stop = new Date();
  console.log(stop);
  var second = start.getSecond();
  console.log(second)
  var output = stop - start;
  alert("You have been on the page for: "+output);
}
