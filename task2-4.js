// let array = [2, 45, 32, 45, 75, 23, 6, 39, 12]

function createArray (array) {
    let array_length = +prompt("Create an numeric array. Enter a preferred array length");
    for (let i = 0; i < array_length; i++) {
        array[i] = +prompt(`Enter array's ${i} of ${array_length} elements`);
    }
    return array;
}

function arithMean (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       sum += array[i];
    }
    return sum / array.length;
}

let array =[];
createArray(array);
alert(arithMean(array));