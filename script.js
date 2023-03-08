const Fah = document.getElementById('Fahrenheit');
const Cel = document.getElementById('Celsius');
const Kel = document.getElementById('Kelvin');

function fahConvert(f) {
  var C = (f - 32) / 1.8;
  var K = ((f - 32) * 5) / 9 + 273.15;
  Cel.value = C.toFixed(2);
  Kel.value = K.toFixed(2);
}

function celConvert(c) {
  var F = c * 1.8 + 32;
  var K = c + 273.15;
  Fah.value = F.toFixed(2);
  Kel.value = K.toFixed(2);
}

function kelConvert(k) {
  var F = ((k - 273.15) * 9) / 5 + 32;
  var C = k - 273.15;
  Fah.value = F.toFixed(2);
  Cel.value = C.toFixed(2);
}
