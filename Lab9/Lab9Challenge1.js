function stopTime(){
  var start = new Date();
  var stop = new Date();
  var output = (stop.getTime() - start.getTime())/600;
  document.getElementById("para").innerHTML=Date();
  alert("You have been on the page for: "+output);
}
