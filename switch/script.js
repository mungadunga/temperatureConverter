function temperatureConverter(fahr) {
   fahrenheit = parseFloat(fahr);
   var result = Math.round((fahr - 32) * (5 / 9));
   document.getElementById("outputC").innerHTML = result;
}