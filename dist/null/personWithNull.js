"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class NullPerson {
    constructor() {
        this.id = null;
        this.name = 'Guest';
    }
}
const people = [
    new Person(1, "Jhon Doe"),
    new Person(2, "Bahar Keshavarz")
];
function findPerson(id) {
    let findPerson = people.find(person => person.id === id);
    if (findPerson) {
        return findPerson;
    }
    return new NullPerson();
}
function Greeting(id) {
    let person = findPerson(id);
    console.log(`Welcome ${person.name}`);
}
Greeting(1);
