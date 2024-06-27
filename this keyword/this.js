
function personinfo()

    {
        console.log(`name is ${this.firstName} and age is ${this.age}`)
    }



const person={
    firstName:"vrush",
    age:23,
    about:personinfo
}

const person1={
    firstName:"ash",
    age:33,
    about:personinfo
}

const person2={
    firstName:"vrusha",
    age:24,
    about:personinfo
}


person.about();
person1.about()
person2.about()