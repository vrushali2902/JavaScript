const myarr=["item1","item2","item3"]
//-------delete----------
myarr.splice(1,1)//---start index,how much item want to be deleted
console.log(myarr)//-----> ['item1', 'item3']

//---------------------------------------------

//--------insert------------
const arr=["item1","item2","item3"]
arr.splice(1,0,"inserted item") //start index,how much item want to be deleted,item that ypu want to inserted
console.log(arr)//-------->['item1', 'inserted item', 'item2', 'item3']

//---------------------------------------------


//----------insert and delete----------

const ar=["item1","item2","item3"]
ar.splice(1,2,"inserted item1","inserted item2")
console.log(ar)//----------->['item1', 'inserted item1', 'inserted item2']