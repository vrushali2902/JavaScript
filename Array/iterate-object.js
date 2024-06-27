const person=
{
    name:"vrush",
    age:22,
    "person hobbies" :["guitar","sing","music"]
}

// by using for in loop
for(let key in person)
    {
        console.log(person[key]) 
    }

console.log("-------------------------------------")

for(let key in person)
    {
            console.log(key,":",person[key])
    }


console.log("-------------------------------------")


// by using object.keys

for(let key of Object.keys(person))
    {
        console.log(person[key])
    }