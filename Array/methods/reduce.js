const numbers=[1,2,3,4,5,10]

const sum = numbers.reduce((accumulator,currentvalue)=>
{
    return accumulator+currentvalue
})

console.log(sum)