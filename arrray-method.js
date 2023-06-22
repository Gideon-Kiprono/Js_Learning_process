const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

//Concat()-- an array method to combine two arrays

const combinedArray = array1.concat(array2);
console.log(combinedArray);

/*includes() method determines whether an array includes a certain value among its 
entries, returning true or false as appropriate.*/

console.log(combinedArray.includes("e")); // true
console.log(combinedArray.includes("k")); //false

/*slice() method returns a shalow copy of a porton of an array into a new array object selected from start(index)
to end(index) (end not included) where start and end represent the index of items in that array. The original array will not be included */

const animals = [
  "ant",
  "bison",
  "kangaroo",
  "camel",
  "duck",
  "elephant",
  "cow",
  "chimpansee",
  "dog",
];
let firstTwoAnimals = animals.slice(0, 2);
console.log(firstTwoAnimals);
let lastThreeAnimals = animals.slice(-3);
console.log(lastThreeAnimals);

///High Order functions (hof)-- fuction that take in other functions (callbacks) as arguments

//filter method () crates a shlow coppy of a portion of a given array , filtered down to just the elements from the given array that pass the test implemented by the provided function

//get a list/array of animals with names that ae more than five characters long
console.log("**********");

let newlist = animals.filter(function (element) {
  //console.log(element.length > 5)
  return element.length > 5;
});

console.log(newlist);


//forEach ()-- executes a function for each element in the array.  Normally used in place of a for loop.