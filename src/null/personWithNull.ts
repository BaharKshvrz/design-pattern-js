class Person {
   public id: number;
   public name: string;

   constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
}

class NullPerson {
    public id: null;
    public name: string;

    constructor() {
        this.id = null;
        this.name = 'Guest';
    }
}

const people = [
     new Person(1, "Jhon Doe"),
     new Person(2, "Bahar Keshavarz")
];

function findPerson(id: number): Person | NullPerson { 
    let findPerson =  people.find(person => person.id === id);
    if (findPerson) {
       return findPerson;
    } 
    return new NullPerson();
}

function Greeting(id: number) {
    let person = findPerson(id);
    console.log(`Welcome ${person.name}`);
}

Greeting(1);


