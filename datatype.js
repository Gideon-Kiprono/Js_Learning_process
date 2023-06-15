//primitive and non-primitive data types
//Primitive: String, number,boolean,null, undefined

//Non-primitive: Object, arrays, function

let string = "bhbdshbds#$#$#25252"; //string
let number = 323.323232323; //number
let isTall = true; //boolean
let isDark = false;
let age; //undefined
let rating = null; //null

string = 90;

//typeof --used to check data types
console.log(typeof string); //90
console.log(typeof isTall); //boolean
console.log(typeof age);
console.log(age + age); //NaN -not a number
//non-primitives -- object , array, function
//1.Object
let person1 = {
  username: "Albert",
  age: 28,
  height: 6.2,
  race: "african",
  religon: { name: "christian", dayOfWorship: "saturday" },
};

let person2 = {
  username: "Collins",
  age: 18,
  favcolor: "green",
  iskenyan: false,
  religon: { name: "islam", dayOfWorship: "friday" },
};

//JSON data format --Javascript object Notation
//Accessing values in an object --use dot notation
console.log(person1.username);
console.log(person1.username + " is a " + person1.religon.name); // string concatenation --using = symbol to combine strings
console.log(person2.username + " is an " + person2.religon.name);
//2. Array --list(python)
//Array is made up of elements and is separated by a comma
let colors = ["blue", "black", "yellow"];
let data = [89, true, "old", "mombasa", undefined];

console.log(typeof colors); // Object type

//Arrays are zero-indexed -- this means elements of the array are ordered by indeces starting with 0
console.log(colors[0]); //element in colors array at index 0 - blue
console.log(colors[1]); //element in colors array at index 1 - black
console.log(data[3]); //element in colors array at index 3 - mombasa
