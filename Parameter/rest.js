function myFunc(a,b,...c)
{
    console.log('a is ',a);
    console.log('b is', b);
    console.log('c is' ,c)
}

myFunc(1,2,3,4,5,6)



function addall(...numbers)
{
    let total = 0
    for(let number of numbers)
        {
            total = total+number
        }
    return total
}

console.log(addall(5,5,8,7,2.5))