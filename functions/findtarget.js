function findtarget(array,target)
{
    for(let i=0;i<array.length;i++)
        {
            if(array[i]===target)
                {
                    return i;
                }
        }
}

console.log(findtarget([1,2,4,5,9],2))