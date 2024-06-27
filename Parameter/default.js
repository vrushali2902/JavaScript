function addtwo(a,b)
{
    if(typeof b==="undefined")
        {
            b=0;
        }
        return a+b;
}
console.log(addtwo(4));


//advanceddd

const add2 = (a,b=0)=>a+b

console.log(add2(5))