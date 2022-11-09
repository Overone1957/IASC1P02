var start = new Date();
console.log(start);
function stopTime(){
  var stop = new Date();
  console.log(stop);
  alert("You have been on the page for: "+ Math.floor((stop.getTime() - start.getTime()) / 600)+" seconds");
}
