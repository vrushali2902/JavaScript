const person = new Map()
person.set('firstname','harshit')
person.set('age',8)

console.log(person)

for(let key of person.keys())
    {
        console.log(key)//---------->firstname
                        //           age
    }

for(let[key,value] of person)
    {
        console.log(key,value) //------------>firstname harshit 
                               //             age 8
    }

///----------------------------------------------------------------------------


const person1 =
{
    name:"vrush",
    id:15
} 

const extrainfo = new Map()

extrainfo.set(person1,{age:84,gender:"male"})

console.log(person1.id)                   //------------------->15
console.log(extrainfo.get(person1).gender)//------------->male