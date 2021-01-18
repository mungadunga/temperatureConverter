function temperatureConverter(cel) {
   cel = parseFloat(cel);
   var result = Math.round(cel * (9 / 5) + 32);
   document.getElementById("outputF").innerHTML = result;
}