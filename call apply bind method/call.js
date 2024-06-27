function about(hobby,favcol)
{
    console.log(this.name,this.age,hobby,favcol)
}

const user1={
    name:"vrush",
    age:15
}

const user2={
    name:"ash",
    age:16
}

//----------call method-------------------------
about.call(user1,"chess","red")

about.call(user2,"football","pink")


//----------------------------------------------

//------------------apply----------------------

about.apply(user1,['cricket','blue'])

about.apply(user2,['carom','white'])

//---------------------------------------------


//-----------------bind------------------------


const myfunc=about.bind(user1,'lagori','grey')
myfunc()