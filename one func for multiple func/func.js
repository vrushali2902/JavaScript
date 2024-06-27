
function createuser(name,age,email,address)
{
    const user={}
    user.name=name
    user.age=age
    user.email=email
    user.address=address
    user.about=function()
    {
        return `${this.name} is of ${this.age}`
    }

    user.is18=function()
    {
        return this.age>=18
    }

    return user;
}


const person=createuser('vrush',19,'vrush@123','kop')
console.log(person)

const is18=person.is18()
console.log(is18)

const about = person.about()
console.log(about)