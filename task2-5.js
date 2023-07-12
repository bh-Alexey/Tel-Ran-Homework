function toFahrenheit(value) {
  return value * 1.8 + 32;
}
let value = +prompt("Enter temperature in Celsium");
alert(`Temperature ${value}*C = ${toFahrenheit(value)}*F`);
