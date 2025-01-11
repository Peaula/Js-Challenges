//Destructuring

const detial={
    name:"peaula",
    fatherName:"charles",
    age:2
}
let {name:myName}=detial;
console.log(myName);

let site="geeksforgeeks";
let [a1,a2,a3,a4,a5]=site;
console.log(a2);

const color=['blue','green','pink','red'];
let[color2,color3,color4]=color;
console.log(color4);
let [c1,,c3,c2]=color;
console.log(c1,c2);
console.log(c3);

let{[0]:co1,[1]:co2}=color;
console.log(co1);


let a="King";
let b="Queen";
[a,b]=[b,a];
console.log(a);

