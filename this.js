//this
"use strict";
function myfunc(){
    return this;
}
console.log(myfunc());


const per={
    Name:"vanitha",
    id:99,
    fun :function(){
        return this;
    }
};
console.log(per.fun());

const d={
    fname:"vincy",
    lname:"swetha",
    id:44,
    fullName:function(){
        return this.fname+" "+this.lname;
    }
}
console.log(d.fullName());

const n={
     fullName:function(){
        return this.first+" "+this.last;
     }
} 
const n1={
    first:"hari",
    last:"priya"
}
const n2={
    first:"Linda",
    last:"mary"
}
console.log(n.fullName.call(n2));
console.log(n.fullName.call(n1));
console.log(n.fullName.call(n1.first));

const n3={
    fullName:function(city,country){
        return this.first+" "+this.last+" "+city+" "+country;
    }
}
console.log(n3.fullName.call(n2,"Chennai","Tamilnadu"));



