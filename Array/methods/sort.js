const numbers=[4,5,2339,59999,67894,9034]
//["4","5","2339","59999","67894","9034"]
//
numbers.sort()
console.log(numbers) //----------> [9, 4, 5, 59999, 67894, 9034]

//-------------------------------------------

const userNames=['harshit','ABD','manika','ankaro','Vrush','naro']
userNames.sort()
console.log(userNames) //---------> ['ABD', 'Vrush', 'ankaro', 'harshit', 'manika', 'naro']


//-------------------------------------------

const num=[4,5,2339,59999,67894,9034]

num.sort((a,b)=>
{
    //return a-b; //-----------> ascending
    return b-a //--------------> descending
})

console.log(num) //------------------->ascending  [4, 5, 2339, 9034, 59999, 67894]
                 //------------------->descending [67894, 59999, 9034, 2339, 5, 4]


//--------------------------------------------


const products=[
    {productId:1,productName:"p1",prioce:300},
    {productId:2,productName:"p2",prioce:3000},
    {productId:3,productName:"p3",prioce:200},
    {productId:4,productName:"p4",prioce:5000},
    {productId:5,productName:"p5",prioce:6000},
]

const lowToHigh=products.sort((a,b)=>
{
    return a.prioce-b.prioce;
})
console.log(lowToHigh)


const highToLow=products.sort((a,b)=>
{
    return b.prioce-a.prioce
})
console.log(highToLow)