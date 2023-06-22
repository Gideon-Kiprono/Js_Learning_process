const person = {
  name: null,
  age: null,
  sing: function (song) {
    console.log("I am singing!!!!");
    console.log("My song is " + song);
  },
};

const person1 = Object.create(person);
console.log(person1.sing("Hello g"));
person1.name = "Giddy";
person1.age = 18;
person1.kenya = true;

const person2 = Object.create(person);
console.log(person2.sing("Joy to the world!"));
person2.name = "Podo";
person2.age = 28;

console.log(person1);
console.log(person2.name.toUpperCase()); //PODO
console.log(person2.name.length);

//Research on prototype chaining
