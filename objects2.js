const person = {
  name: null,
  age: null,
  sing: function (song) {
    console.log("I am singing!!!!");
    console.log("My song is" + song);
  },
};

const person1 = Object.create(person);
console.log(person1);
person1.name = "Giddy";
person1.age = 18;

const person2 = Object.create(person);
console.log(person2);
person2.name = "Podo";
person2.age = 28;

console.log(person1);
console.log(person2);
