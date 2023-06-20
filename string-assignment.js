/*Question 1 
Palindrome checker: Write a function that takes a string as an argument and returns 
a boolean indicating whether the string is a palindrome (a word or phrase that reads 
the same forwards and backwards). You can use string methods such as split(), reverse(),
and join() to accomplish this task.*/
function isPalindrome(string) {
  // Remove spaces and punctuation and convert to lowercase
  string = string.replace(/[^\w]/g, "").toLowerCase();

  // Reverse the string
  let reversedString = string.split("").reverse().join("");

  // Compare the original and reversed strings
  let isPalindrome = string === reversedString;

  // Print the result
  console.log(`"${string}" is${isPalindrome ? "" : " not"} a palindrome.`);
}

// Example usage
isPalindrome("A man, a plan, a canal, Panama!");

/*Question 2  
Reverse string: Write a function that takes a string as
an argument and returns the string reversed.You can use 
string methods such as split(), reverse(), and join() to accomplish this task.*/

function reverseString(string) {
  // Split the string into an array of characters, reverse the order, and join them back into a string
  let reversedString = string.split("").reverse().join("");

  return reversedString;
}
console.log(reverseString("Hello, world!"));
// Output: "!dlrow ,olleH"
/*Question 3
Longest word in a string: Write a function that takes a string as an argument and 
returns the longest word in the string. You can use string methods such as split(), 
and length to accomplish this task.*/
function longestWord(string) {
  // Split the string into an array of words
  const words = string.split(" ");

  // Initialize variables to track the longest word and its length
  let longest = "";
  let longestLength = 0;

  // Iterate through each word in the array
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // Remove any non-alphanumeric characters from the word
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "");

    // Check if the current word is longer than the current longest word
    if (cleanedWord.length > longestLength) {
      longest = cleanedWord;
      longestLength = cleanedWord.length;
    }
  }

  // Return the longest word
  return longest;
}

// Example usage
const sentence = "The quick brownse fox jumps over the lazy dog";
const result = longestWord(sentence);
console.log("Longest word:", result);

/* ##### Write a JavaScript program that analyzes a given paragraph and performs 
the following tasks:

- Word Count: Count the total number of words in the paragraph. 
Ignore punctuation and consider hyphenated words as a single word.*/
function analyzeParagraph(paragraph) {
  // Remove punctuation and convert to lowercase
  const cleanedParagraph = paragraph.replace(/[^\w\s-]/g, "").toLowerCase();

  // Split the paragraph into an array of words
  const words = cleanedParagraph.split(/\s+/);

  // Count the number of words
  const wordCount = words.length;

  // Return the word count
  return wordCount;
}
console.log(
  "Word Count:",
  analyzeParagraph(
    "JavaScript is an amazing programming language. It is versatile and widely used in web development. JavaScript allows developers to create interactive and dynamic web pages."
  )
);
/*- Longest Word: Find and display the longest word in the paragraph. 
In case of multiple words with the same longest length, display the first one encountered.*/


/*- Word Frequency: Determine the frequency of each word in the paragraph. 
Create an object where the keys are the unique words and the values are the corresponding frequencies.*/

/*- Most Frequent Word: Identify the word(s) with the highest frequency in the paragraph. 
Display the word(s) and its frequency. If there are multiple words with the same highest frequency, display all of them.*/

/*Your program should take the paragraph as input and output the results.

## Sample Output

Paragraph: "JavaScript is an amazing programming language. It is versatile and widely used in web development. JavaScript allows developers to create interactive and dynamic web pages."

Word Count: 20
Longest Word: "programming"
Word Frequency:
{
"javascript": 2,
"is": 2,
"an": 1,
"amazing": 1,
"programming": 1,
"language": 1,
"it": 1,
"versatile": 1,
"and": 1,
"widely": 1,
"used": 1,
"in": 1,
"web": 1,
"development": 1,
"allows": 1,
"developers": 1,
"to": 1,
"create": 1,
"interactive": 1,
"dynamic": 1,
"pages": 1
}
Most Frequent Word(s): "javascript" and "is" (frequency: 2)*/