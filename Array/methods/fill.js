const array = new Array(10).fill(-1)
console.log(array) //----------------------->[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]


const myarr = [1,2,3,4,5,6,7,8]
myarr.fill(0,2,5)
console.log(myarr) //----------------------->[1, 2, 0, 0, 0, 6, 7, 8]