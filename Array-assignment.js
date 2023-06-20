/*Question 1
Given an array of numbers, write a function that calculates the average of the numbers. */
function avg(arrays) {
  function avg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
  console.log(avg([1, 2, 3, 4, 5]));
}
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum);

/*Question 2
Given an array of numbers, write a function that finds the maximum number in the array.*/

function largest(arr) {
  let i;
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(largest([1, 2, 3, 4, 5]));

/*Question 3
Given an array of numbers, write a function that filters out the even
 numbers and returns a new array containing only the odd numbers //filter*/
// function odd(arr) {
//   var oddArr = arr[""];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0);
//     oddArr.push(arr[i]);
//   }
// }
// console.log(odd([10, 23, 12, 21]));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let odds = arr.filter((n) => n % 2);
console.log(odds);

/*Question 4
Given an array of strings, write a function that removes duplicates and
 returns a new array containing only the unique strings.*/

let strings = ["one", "one", "o", "pp", "ktn", "ntv", "ktn", "one"];
//expected outcome ["one","o","pp,"ktn","ntv"]
console.log(strings.length);
//create a new blank array
//go through each element in the string array, and add the element to the new array if it doesn't already exists in the new array

function getUniqueElements(arr) {
  let newArr = [];
  let index = 0;
  while (index < arr.length) {
    if (!newArr.includes(arr[index])) {
      newArr.push(arr[index]);
    }
    index++;
  }
  return newArr;
}
console.log(getUniqueElements(strings));

console.log(new Set(strings));

/* Question 4
Reverse string: Write a function that takes a string as an argument and returns
 the string reversed. You can use string methods such as split(), reverse(), and
  join() to accomplish this task.*/

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverseString("hello"));
/* Question 5
Given an array of intervals, merge overlapping intervals and return a new array of
merged intervals. Each interval is represented as an array of two integers, where
the first element is the start of the interval and the second element is the end
 of the interval.*/
function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [[intervals[0][0], intervals[0][1]]];

  for (let i = 1; i < intervals.l; i++) {
    if (intervals[i][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        intervals[i][1]
      );
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}
console.log(
  mergeIntervals([
    [1, 3],
    [2, 7],
    [8, 10],
    [13, 16],
  ])
);
/*Question 6
Given an array of numbers, return an array where each element is the product of 
all the elements in the original array except the current element.*/

function productArray(arr, n) {
  if (n == 1) {
    console.log(0);
    return;
  }
  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);
  let i, j;
  left[0] = 1;
  right[n - 1] = 1;

  for (i = 1; i < n; i++) left[i] = arr[i - 1] * left[i - 1];
  for (j = n - 2; j >= 0; j--) right[j] = arr[j + 1] * right[j + 1];

  for (i = 0; i < n; i++) prod[i] = left[i] * right[i];

  for (i = 0; i < n; i++) console.log(prod[i] * " ");
  return;
}
console.log(productArray([10, 3, 5, 6, 2]));

//***Check on data-structures and algorithms
