let fname;
console.log(typeof fname)  //------------>undefined

let lname=null
console.log(typeof lname)  //------------->object which is bug
console.log(lname)         //-------------> null

let n1 = BigInt(12)
let n2 = 123n

console.log(typeof n1,n1)  //bigint,12n

console.log(typeof n2)    //bigint
