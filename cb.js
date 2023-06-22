// const number = [1, 3, 5, -4, 98, -98, 4, -3];

// const postNumbers = removeNeg(number, (x) => x >= 0);

// function removeNeg(numbers, callback) {
//   const newArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       newArray.push(x);
//     }
//   }
//   return newArray;
// }

// console.log(removeNeg(number),callback);

// A function that takes a callback function as an argument
function doSomething(callback) {
  // Perform some asynchronous or time-consuming task
  // For example, simulate a delay with setTimeout
  setTimeout(function() {
    // After the task is completed, call the callback function
    callback();
  }, 2000); // 2000 milliseconds (2 seconds) delay
}

// A callback function to be passed to the doSomething function
function callbackFunction() {
  console.log('Callback function called!');
}

// Calling the doSomething function and passing the callback function
doSomething(callbackFunction);
