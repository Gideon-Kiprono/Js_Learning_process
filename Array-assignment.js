let strings = ["one", "one", "o", "pp", "ktn", "ntv", "ktn", "one"];
//expected outcome ["one","o","pp,"ktn","ntv"]
console.log(strings.length);
//create a new blank array
//go through each element in the string array, and add the element to the new array if it doesn't already exists in the new array

function getUniqueElements(arr) {
  let newArr = [];
  let index = 0;
  while (index < arr.length) {
    if (!newArr.includes(arr[index])) {
      newArr.push(arr[index]);
    }
    index++;
  }
  return newArr;
}
console.log(getUniqueElements(strings));

console.log(new Set(strings));

//***Check on data-structures and algorithms

