/*Question 1 
Palindrome checker: Write a function that takes a string as an argument and returns 
a boolean indicating whether the string is a palindrome (a word or phrase that reads 
the same forwards and backwards).*/

function palindromeChecker(word) {
  //dad , cat
  //dad,  tac
  //convert the tring to an array ['c','a','t']
  //reverse the array to get ['t','a','t'] using reverse()
  //join back the elements of the array 'tac'
  //compare the original 'cat' with the new 'tac'
//   let wordArray = word.split("");
//   let reversedArray = wordArray.reverse();
//     let reversedString = reversedArray.join("");
    if (word == word.split("").reverse().join("")) {
     return true;
    }
    else {
        return false
    }
}
console.log(palindromeChecker("dad"))//true
console.log(palindromeChecker("cat"));//false


/*You can use string methods such as split(), reverse(),
and join() to accomplish this task.*/

//split method
const sentence = "boolean indicating whether the string";
// console.log(sentence.split("a"));
// console.log(sentence.split("a"));

console.log(["red", "yellow", "blue"].reverse().join("+"));
