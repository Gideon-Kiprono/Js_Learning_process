// sequence, conditional statements(if else, switch) and loops /iteration(for, while)

if (true) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

//multiple conditions -exam grading
let grade = "C";
if (grade == "A") {
  console.log("Very Good");
} else if (grade == "B") {
  console.log("Good");
} else if (grade == "c") {
  console.log("Pass");
} else {
  console.log("Fail");
}

console.log("***********");

let color = "black";

switch (color) {
  case "green":
    console.log("Agriculture/Earth");
    break;
  case "red":
    console.log("Blood lost fighting for indeoenence");
    break;
  case "black":
    console.log("The people");
    break;
  case "White":
    console.log("Peace");
    break;
  default:
    console.log("Not part of the kenyan flag!");
    break;
}
console.log("***********");
//loops/ iteration

let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}
console.log("***********");
let counts = 0;
for (counts; counts <= 10; counts++) {
  console.log(counts);
}

//task
//write a function that returns the average of elements in an array of numbers
let numbersArray = [1, 2, 30, 4, 34, 345, 334, 5];

/* write a function that logs the square of a number passed as an argument,
 have a conditional statement in the function to check if the argument passed 
is a number*/
console.log("***********");

function logSquare(num) {
  if (typeof num === "number") {
    const square = num * num;
    console.log("The square of", num, "is", square);
  } else {
    console.log("The argument is not a valid number.");
  }
}
logSquare(5); // Logs: The square of 5 is 25
logSquare("hello"); // Logs: The argument is not a valid number.

/*Create a function that takes in a number as argument and determines the day of
 the week based on a given number. The number 1-7 represents the days of the week,
  where 1 is monday, 2 is tuesday, and so on. If the given number is not in the 
  range of 1-7, display an error message*/
let number = 1;
switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Error");
    break;
}

/*create an object called logger that has a method called log that takes in a string 
then uses consile.log() to print out the string*/
const logger = {
  log: function (string) {
    console.log(string);
  },
};
logger.log("Hello, world!");
