const Fah = document.getElementById("Fahrenheit");
const Cel = document.getElementById("Celsius");
const Kel = document.getElementById("Kelvin");

function fahConvert(f) {
  var C = (f - 32) / 1.8;
  var K = ((f - 32) * 5) / 9 + 273.15;
  Cel.value = C;
  Kel.value = K;
}

function celConvert(c) {
  var F = c * 1.8 + 32;
  Fah.value = F;
  var K = c + 273.15;
  Kel.value = K;
}

function kelConvert(k) {
  var F = ((k - 273.15) * 9) / 5 + 32;
  Fah.value = F;
  var C = k - 273.15;
  Cel.value = C;
}
