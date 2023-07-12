let n = +prompt("Input the boundary of the range");

function printOdd(range) {
  for (let i = 1; i <= range; i = i + 2) {
    alert(i);
  }
}
printOdd(n);
