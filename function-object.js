const person = {
    firstName: 'Mehedi',
    lastName: 'Hasna',
    age: 24,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(person)

function Person(firstName, lastName, age,) { // aita consuctactor function
    this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.fullName = function () {
            return firstName + '' + lastName
        }
}

console.log(new Person('momin', 'ali', 35))
const ruhul = new Person('ruhul', 'amin', 33)
// console.log(ruhul) 
console.log(ruhul.fullName())

ruhul.country = 'Bangladesh' //ruhun variable new Person modhe new properties add korlam
Person.country = 'Bangladesh' /// ai Person.country dea add kora zabe na// 
console.log(ruhul)
