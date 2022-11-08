function stopTime(){
  var start = new Date(document.getElementById('start').value);
  var stop = new Date(document.getElementById('stop').value);
  var output = stop - start;
  alert("You have been on the page for: "+output);
}
