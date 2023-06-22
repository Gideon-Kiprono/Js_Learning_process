/* ##### Write a JavaScript program that analyzes a given paragraph and performs 
the following tasks:*/
/*- Most Frequent Word: Identify the word(s) with the highest frequency in the paragraph. 
Display the word(s) and its frequency. If there are multiple words with the same highest frequency, display all of them.*/

//split the sentence to an array
//Remove symbols at the end of the wordss .: ,:()
//make words be lowercase
//compare each word with the rest of the words after each time keeping its count --- keep the count in an array and get the largest count.

let sentence =
  "Most Frequent Word: Identify all the word(s) with the highest frequency in all  paragraph. Display the word(s) and its frequency. If there are multiple words with the same highest frequency, display all all of them.";
let sentenceArray = sentence.split(" ");

function cleanWords(arr) {
  let cleanArray = [];
  arr.forEach((word) => {
    [".", ":", ",", ";", "(", ")"].forEach((symbol) => {
      if (word.includes(symbol)) {
        word = word.replace(symbol, "");
      }
    });
      word = word.toLowerCase();
      cleanArray.push(word)
  });
    return(cleanArray)
}
console.log(cleanWords(sentenceArray));
const cleanArray = cleanWords(sentenceArray)

let countedWords = []
let wordCount =[]
cleanArray.forEach((word,index) => {
    if (!countedWords.includes(word)) {
        //word has been counted
        let count = 1
        for (
          let nextWordIndex = index + 1;
          nextWordIndex < cleanArray.length;
          nextWordIndex++
        ) {
          if (word === cleanArray[nextWordIndex]) {
            count = count + 1;
          }
        }
        countedWords.push(word)
        wordCount.push(count)
    }
    
})

const largestCount = Math.max(...wordCount) //spread operator
const mostFrequentWord = countedWords[wordCount.indexOf(largestCount)]

console.log(mostFrequentWord, largestCount);
console.log(wordCount);
console.log(countedWords);

let indecesOfMostFrequentWord = []
wordCount.forEach((count, index) => {
    if (count===largestCount)
    {
        indecesOfMostFrequentWord.push(index)
    }
})

indecesOfMostFrequentWord.forEach((index) => {
    console.log(countedWords[index]);// word that is appearing most frequent
})









