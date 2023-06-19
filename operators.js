//Arithmetic operators - +* /% ++ -- **
console.log(8 * 8);
console.log(8 / 8);
console.log(8 + 8);
console.log(8 - 8);
console.log(8 % 8);
let age = 40;
let Age = 40;
// get remainder after division
//++ increment --decrement --pre ++post
console.log("***********");
let rating = 0;
rating++;
console.log(rating);
rating--;
console.log(rating);

//Comparison operators
console.log("***********");
console.log(2023 - 2008 > 18); //false
console.log(2023 - 2000 > 18); //true
console.log("Age" == "age");
console.log("Age" != "age");
console.log(34 == "34"); //Type Coercion --true //loose equality check
console.log(34 === "34"); // No Type Coercion --false //strict equality check

//boolean --true or false

// console.log ("Result:" + 90); //Type coercion

//logical operators &&(AND) , ||(OR), ! (NOT)
console.log("***********");
let person = {
  name: "victor",
  age: 20,
  nationality: "Japanese",
};
if (person.age >= 18 && person.nationality == "kenyan") {
  console.log("Jambo!, karibu Maasai Mara");
} else {
  console.log("You could be a foreigner or below the age of 18 years");
}

//Ternary operator ---control structures
person.age >= 18 || person.nationality == "kenyan"
  ? console.log("Jambo!, karibu Maasai Mara")
  : console.log("You could be a foreigner or below the age of 18 years");
