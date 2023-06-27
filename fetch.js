// API- Application programming interface
// JSONPlaceholder -free fake api: Dictionary api

// fetch() api -- non-blocking / asynchronous code
//  We can write assynchronous by creating our own promises
// -- Research on how to create promises in js -- new promise -- then .catch
// alternatively you could use async wait.

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/clown")
  .then((resp) => resp.json())
  .then((data) => {
    //consume the data
    //console.log(data[0].meanings[0].definitions);
    console.log(data);
    let definitionE1 = document.createElement("h2")
    let wordE1 = document.createElement("h1")

    definitionE1.append(data[0].meanings[0].definitions[0].definition);
    wordE1.append(data[0].word)

    document.body.append(wordE1)
    document.body.append(definitionE1);
    document.body.style.margin = "100px";
  })
  .catch((err) => {
    console.log(err);
  });
//console.log("Hello 2");
//console.log("Hello 1");

let age = 30;

console.log("I am" + age + "yrs old"); //string concatenation
console.log(`I am ${age}+ yrs old`); // template literals



//querySelector() -- research

let cardE1 = document.getElementById("card")
cardE1.style.border =" 2px solid red"
cardE1.style.margin = "20px"
cardE1.style.padding = "10px"


if (age > 18) {
  cardE1.setAttribute("class", "card light-bg")
}

let pE1 = document.querySelector("p")
  console.log(pE1.classList.add("peru"));
  console.log(pE1.classList.remove("p"))
console.log(pE1.classList.contains("p"));// false
console.log(pE1.classList.contains("peru"));//true


//Difference between a nodelist and html collection in DOM manipulation
/*A NodeList and an HTMLcollection is very much the same thing.

Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

Both have a length property that returns the number of elements in the list (collection).

An HTMLCollection is a collection of document elements.

A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

The querySelectorAll() method returns a static NodeList.

The childNodes property returns a live NodeList.*/
//Use css framework 