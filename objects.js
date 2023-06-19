let printer = {
  test: 90,
  //Method
  print: function printWord(word) {
    console.log(word);
  },
  //Method
  say: (word) => {
    console.log(word);
  },
};
//Inheritance
let user = {
  username: "albert",
  password: "kjad",
  login: (name, pass) => {
    //compare passed values with what is stored in the db
  },
  settings: {
    font: (size) => {
      //Change the font to the size passed
    },
    colored: true,
    setTheme: function (theme) {
      //set theme
    },
  },
};

// console.log(consolle.test);
// consolle.print("hello world");
// consolle.say("hello world 2");

const squareNum = () => {
  //function's code block
  console.log("This is an arrow function");
};
//squareNum();

//Object constructor
let car = new Object();
car.color = "red";
car.model = "Toyota Landcruiser";
car.cc = 2000;
car.start = function () {
  console.log("Vrooooom!!!!");
};
console.log(car);
console.log(printer);

//Array Constructor
let colors = new Array();
colors[0] = "red";
colors[1] = "blue";
colors[2] = "Green";

//String constructor
let email = new String("gideon@gmail.com");
let email2 = "gideon@gmail.com";
console.log(email.toUpperCase());
console.log(email2.toUpperCase());

//Constructor function
function player(name, age, team, salary, number) {
  (this.name = name),
    (this.age = age),
    (this.team = team),
    (this.mshahara = salary),
    (this.tag = number);
  this.play = function () {
    console.log("playing at 9:08");
  };
  this.minimumAge = 18;
  this.nameLength = function () {
    return this.name.length;
  };
}
let player1 = new player("Mane Kiprono", 28, "arsenal", 90000, 7);
let player2 = new player("Eric", 18, "liverpool", 90000, 11);
//Prototype chaining
console.log(player1.nameLength());
console.log(player2.nameLength());

//Object Methods
console.log(Object.keys(printer));

//Array methods
console.log(colors.includes("red")); // true
console.log(colors.includes("yellow")); //false

//string methods
let animal = "tiger"
console.log(animal.length);//5
console.log(animal.charAt(1));//i
console.log(animal.charCodeAt())

let strings = ["one", "one", "o", "pp", "ktn", "ntv", "ktn","one"];
//expected outcome ["one","o","pp,"ktn","ntv"]
//create a new blank array
//go through each element in the string array, and add the element to the new array if it doesn't already exists in the new array
