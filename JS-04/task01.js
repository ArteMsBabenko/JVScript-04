let array = [ 38, 258, -899, -34, 58, 606, 319, -724, 670, 99, -932,
    345, 223, -993, 11, 513, 100, -100, -258, 724 ];

function asc(number1, number2) {
return number1 - number2;
}

array.sort(asc);
console.log(array);

array.sort(asc).reverse();
console.log(array);

function getPositive(number) {
return number>=0;
}

function getNegative(number) {
return number<0;
}

let positiveNumbersArray = array.filter(getPositive).sort(asc);
console.log(positiveNumbersArray);

let negativeNumbersArray = array.filter(getNegative).sort(asc);
console.log(negativeNumbersArray);