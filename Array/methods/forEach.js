const numbers=[2,3,4,5,6]

numbers.forEach
    (
    function(number,index)
        {
            //console.log('index is',index ,'and', 'number is' ,number)
            console.log(number*2)
        }
    )


//-------------------------------------------------------------//

const users=[
    {firstname:"harshit",age:23},
    {firstname:"vrushali",age:23},
    {firstname:"shweta",age:24}
]

users.forEach(user=>
    {
        console.log(user.firstname)
        console.log(user.age)
    }
)