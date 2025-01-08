//object

const car={
    type:"Fiat",
    del:"500",
    color:"white"
};

let a=car.type;
console.log(car);
console.log(a);

const person={firstname:" peaula ",
    lastname:"charles",
    age:19,
    eyecolor:"blue",
    fullname:function(){
        return this.firstname+" "+this.lastname;
    }
};
console.log(person.fullname);
let ap=person.firstname+" is "+person.age+" years old.";
console.log(person);
console.log(ap);
person.study="cs";
console.log(person);
console.log(person.fullname());
const b=person;
b.age=10;
console.log(b);


const details=new Object();
details.name='papaya';
details.age=20;
details.color='yellow';
details.food='biriyani';

console.log(details);
console.log(details["color"]);


//object properties

let x='firstname';
let y='age';
console.log(person[x]+" is "+person[y]+" years old.");

person.nationality='english';
console.log(person.firstname+" is "+person.nationality+".");


person.city='madurai';
console.log(person);
delete person["eyecolor"];
console.log(person);


const myobj={
    name:'divya',
    posi:'manager',
    mycars:{
        c1:'ford',
        c2:'BMW',
        c3:'fiat'
    }
};
console.log(myobj.mycars.c2);
console.log(myobj["mycars"]["c3"]);
let p1='mycars';
let p2='c2';
console.log(myobj[p1][p2]);

details.name=function (){
    return this.color+" "+this.food;
};
console.log(details.name());


let c=person.firstname+","+person.age+","+person.city;
console.log(c);

let p={
    name:'kavya',
    regno:30,
    age:14,
    city:'madurai',
    studies:'school'
}
let text="";
for(let x in p){
    text+=p[x]+" ";
}
console.log(text);

const myArray=Object.values(p);
console.log(myArray);


const fruits={Bananas:200,Oranges:150,Apples:500};

let t="";
for(let [fruit,value]of Object.entries(fruits)){
    t+=fruit+":"+value+" ";
}
console.log(t);

let str=JSON.stringify(p);
console.log(str);

function per(first,last,age){
    this.firstname=first;
    this.lastname=last;
    this.age=age;
}
const my=new per("Harry","Potter",50);
console.log('my father is'+my.age);
per.prototype.nationality="English";
console.log('my father is'+my.nationality);

person.changeName=function(name){
    this.firstname=name;
}
person.changeName('Mary');
console.log(person.firstname);


