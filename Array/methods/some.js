const numbers=[2,4,5,6]

const ans=numbers.some((number)=>number%2!==0)

console.log(ans) //----------->true

//-----------------------------------------------

const usercart=[
    {productId:1,productName:"laptop",price:45000},
    {productId:2,productName:"tv",price:35000},
    {productId:3,productName:"mobile",price:75000},
]

const answer = usercart.some((cartitem)=>cartitem.price<40000)

console.log(ans)//---------- true


const answ = usercart.some((cartitem)=>cartitem.price<10000)

console.log(answ)//---------- false