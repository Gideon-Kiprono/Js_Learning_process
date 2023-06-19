//Functions are re-usable blocks of code

//To define a function we use
let count = 0;
function printName() {
  count = count + 1;
  console.log("reusable code");
  console.log("hello,I am Albert");
  console.log("performing some operations");
}

// console.log("global scope");
// //Call/invoke the function to execute the block of code

// printName(); //count=1
// printName(); //count=2
// printName(); //count=3
// printName(); //count=4
// printName(); //count=5
// console.log(count); //5

function geetAreaOfCircle(radius) {
  let result = 3.142 * radius ** 2;
  console.log("Area is: " + result);
  return result;
}
function areaOfARectangle(w, h) {
  console.log("Area is:" + w * h);
  //   return w * h;
}
areaOfARectangle(2, 4); //8
areaOfARectangle(4, 5); //20
areaOfARectangle(465, 5882); //2735130

console.log(areaOfARectangle(2, 4)); // undefined for functions that have no return value
//With a return value , we get the returned value
console.log(geetAreaOfCircle(9));

// geetAreaOfCircle(7);//153.958
// geetAreaOfCircle(14);//615.832
// geetAreaOfCircle(21);//1385.622

//Discuss different naming conventions in web programming (css classes and javascript variables)
// PascalConvention
// Hyphen Delimited (kebab-case): This convention uses hyphens to separate words in class names. For example, .header-container or .nav-item.
// Underscore Delimited (snake_case): This convention uses underscores to separate words in class names. For example, .header_container or .nav_item.
// camelCase: In this convention, the first letter of each word (except the first word) is capitalized, without any delimiter. For example, .headerContainer or .navItem.

// Discuss the variables naming rule in Javascript
//Start with a letter: Variable names in JavaScript must begin with a letter (a-z, A-Z) or an underscore (_). They cannot start with a number or any other special character.
// 2. Start with a lowercase letter: JavaScript variables should begin with a lowercase letter. It's a common convention to use lowercase for the first letter of the variable name, unless it's a constructor function or a class.
//3.Use camelCase: JavaScript typically adopts camelCase for variable names.For example: firstName, totalAmount, isAuthenticated.
//4.Avoid reserved keywords: Examples of reserved keywords include function, let, class, if, return, and so on.

//Conventions
//1. Use descriptive and meaningful names: Choose names that accurately describe the purpose or content of the variable.

//Discuss the different types of errors and when they occur
//1. Reference errors
//2. Syntax Errrors
// 3. Type errors

//Write a function called  reverseString that takes a string as a parameter and returns the reverse version of the string

function reverseString(str) {
  // Split the string into an array of characters
  var strArray = str.split('');

  // Reverse the array
  var reversedArray = strArray.reverse();

  // Join the array elements into a string
  var reversedString = reversedArray.join('');

  // Return the reversed string
  return reversedString;
}
var originalString = 'Hello, World!';
var reversed = reverseString(originalString);
console.log(reversed); // Outputs: "!dlroW ,olleH"
