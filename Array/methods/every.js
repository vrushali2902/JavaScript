const numbers=[2,4,6,8,10]

const ans=numbers.every((number)=>number%2===0)

console.log(ans) //-------------->true


//------------------------------------------------------------

const num=[2,4,7,8,10]

const answer=num.every((number)=>number%2===0)

console.log(answer)

//------------------------------------------------------------

const usercart=[
    {productId:1,productName:"laptop",price:3000},
    {productId:2,productName:"mobile",price:2300},
    {productId:3,productName:"tv",price:1500},
]

const answ=usercart.every((cartitem)=>cartitem.price>=1000)

console.log(answ)