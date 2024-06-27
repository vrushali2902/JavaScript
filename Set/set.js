const numbers= new Set()

numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(3)

console.log(numbers) //-------------->Set(3) {1, 2, 3}

if(numbers.has(1))
    {
        console.log("1 is present")
    }

//--------------------------------------------------

const item=[1,2,3,4,4,5,6,7,8,3,4,5,6]
const uniqueitem=new Set(item)

console.log(item.length); //---------------------->13

let length=0
for(let element of uniqueitem)
    {
        length++
    }
console.log(length) //----------------------------->8
