const numbers=[2,3,4,5,6]

const squarenum = numbers.map(number=>
    {
        return number*number
    }
)

console.log(squarenum)

//-----------------------------------

const users=[
    {firstname:"harshit",age:23},
    {firstname:"vrush",age:23},
    {firstname:"shweta",age:23}
]

const firstnames = users.map(user=>
    {
        return user.firstname;
    }
)

console.log(firstnames)