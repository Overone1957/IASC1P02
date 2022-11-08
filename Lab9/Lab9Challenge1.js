function alert(){
  var start = new Date(document.getElementById('start').innerHTML=second);
  var stop = new Date(document.getElementById('stop').innerHTML=second);
  var output = stop - start;
  alert("You have been on the page for: "+output);
}
