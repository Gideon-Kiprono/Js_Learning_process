//Higher order functions in javascript are functions that can take other functions as arguments or return functions as their results.

let numbers = [23, 2, 233, 4, 54, 9];

//currency --2dp, KSH

function formatCurrencyKsh(number) {
  let numberIn2dp = number.toFixed(2);
  return "KSH. " + numberIn2dp;
}
function formatCurrencyDollars(number) {
  let numberIn2dp = number.toFixed(2);
  return "$  " + numberIn2dp;
}

function createCurrencyArray(numbersArray, currencyFormat) {
  let newArray = [];

  for (let i = 0; i <= numbersArray.length - 1; i++) {
    newArray.push(currencyFormat(numbersArray[i]));
  }
  return newArray;
}

console.log(createCurrencyArray(numbers, formatCurrencyDollars));
 console.log(createCurrencyArray(numbers, formatCurrencyKsh));

function query(statement, cb) {
    //go toth db and execute the sql statement
    //once there are results in the db

    //call cb function with results as arguments
}
// forEach() as an array method that executes a function for every element in the array
numbers.forEach(function (numEl) {
    console.log(formatCurrencyDollars(numEl));
})

// console.log(Number.EPSILON);
// console.log(Math.abs(-98));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9)); //floor (round down), ceil (round up), round(normal)

// console.log((89.3).toFixed(5));
// console.log((0.314067823445).toFixed(3));

// console.log(formatCurrency(101.892311));
// console.log(formatCurrency(43));
