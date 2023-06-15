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
// CSS Classes:

// Hyphen Delimited (kebab-case): This convention uses hyphens to separate words in class names. For example, .header-container or .nav-item.

// Underscore Delimited (snake_case): This convention uses underscores to separate words in class names. For example, .header_container or .nav_item.

// Camel Case: In this convention, the first letter of each word (except the first word) is capitalized, without any delimiter. For example, .headerContainer or .navItem.

// BEM (Block Element Modifier): BEM is a popular naming convention that provides a clear and hierarchical structure to CSS classes. It consists of three parts: block, element, and modifier. For example, .header, .header__logo, or .header--dark.

// JavaScript Variables:

// Camel Case: Camel case is commonly used in JavaScript for variable and function names. It starts with a lowercase letter and capitalizes the first letter of each subsequent concatenated word. For example, myVariable or getUserData().

// Underscore Delimited (snake_case): Although less common in JavaScript, some developers use underscore delimiters to separate words in variable names. For example, my_variable or get_user_data().

// Hungarian Notation: Hungarian notation prefixes variables with characters representing their type or purpose. It was more prevalent in older programming languages but is less popular in modern JavaScript. For example, strName for a string or bIsVisible for a boolean.
// Discuss the variables naming rule in Javascript
//Write a function called  reverseString that takes a string as a parameter and returns the reverse version of the string
