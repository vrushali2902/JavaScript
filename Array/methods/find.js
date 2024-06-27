const myarr=["horse","cat","dog","lion"]

const ans=myarr.find((string)=>string.length===3)

console.log(ans) //--------------> cat-------->which is first dccurence

//-------------------------

const user=[
    {userId:1,username:"vrush"},
    {userId:2,username:"ash"},
    {userId:3,username:"vush"},
    {userId:4,username:"rush"},
    {userId:5,username:"vrsh"},
]

const myuser=user.find((user)=>user.userId===3)

console.log(myuser)
