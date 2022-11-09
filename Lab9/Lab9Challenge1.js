function stopTime(){
  var start = new Date();
  var stop = new Date();
  console.log(start.getTime());
  var output = stop - start;
  alert("You have been on the page for: "+output);
}
