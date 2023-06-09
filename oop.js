const Person = function(firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;
}
const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
console.log(jonas instanceof Person)

console.log(Person.prototype);
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();
// commented new file
console.log(jonas.__proto_);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas)); // to test if it is prototype (true or false)

