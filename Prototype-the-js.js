/* const captain = {
    name: 'samim',
    age: 33,
    country: 'bangladesh'
}

const player = Object.create(captain)

console.log(player.name) */

////////////////

/* const personMethods = {
    eat() {
        console.log('person is eating')
    },
    sleap() {
        console.log('person is sleaping')
    }
};

function Person(name, age) {
    let person = Object.create(personMethods) // ai khane Object.create(personMethods) kora karone sakib.eat() call korte parbo
    person.name = name
    person.age = age;

    return person;
}

const sakib = new Person('sakib', 23)
console.log(sakib)
sakib.eat() */

////////////////// javascript prototype
/* 
function Person(name, age) { // ai function ke constructor function
    let person = Object.create(Person.prototype)
    person.name = name;
    person.age = age;
    return person
}

Person.prototype = { //constructor function prototype
    eat() {
        console.log('person is eatinig')
    },
    sleap() {
        console.log('person is sleaping')
    },
    pley() {
        console.log('person is playing')
    }
}

const sakib = Person('sakib', 34)
const sumon = Person('sumon', 34)
console.log(sakib)
sakib.eat()
 */
////////////////////////
/* 
function PersonWithNew(name, age) { // ai function ke constructor function
    this.name = name;
    this.age = age;

}

PersonWithNew.prototype = { //constructor function prototype
    eat() {
        console.log('person is eatinig')
    },
    sleap() {
        console.log('person is sleaping')
    },
    pley() {
        console.log('person is playing')
    }
}

const mehedi = new PersonWithNew('mehedi', 34)
const maruf = new PersonWithNew('sumon', 34)
console.log(mehedi)
mehedi.eat() */
/////////////////////

class Person {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }
    eat() {
        console.log('person is eating')
    }
    sleap() {
        console.log('person is  sleaping')
    }

    play() {
        console.log('person is player')
    }
}

const marufhasan = new Person('maruf hasan', 55)
console.log(marufhasan)
marufhasan.eat()

////////////////////////////////

let person = []; // ai ta neche ta same 
let person2 = new Array()
