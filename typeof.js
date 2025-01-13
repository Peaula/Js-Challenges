//typeof

console.log(typeof("Madurai"+"city"));
console.log(typeof(3.14));
console.log(typeof(44+55));
console.log(typeof(function (){}));
console.log(typeof(1234n));
console.log(typeof(true));
console.log(typeof(0));
console.log(typeof('+'));
console.log(typeof(null));
console.log(typeof(''));

console.log(typeof(new Map()));
console.log(typeof{name:"aarthy"});
console.log(typeof[1,2,3,4,5]);
console.log(typeof(new Set()));


let f=['apples','banana','oranges'];
console.log(Array.isArray(f));
console.log(f instanceof Array);

const time=new Date();
console.log(time instanceof Date);

const fr=new Map([
    ['apple',500],
    ['guava',800],
    ['jackfruit',200]
]);
console.log(fr instanceof Array);
console.log(fr instanceof Map);

const s=new Set(['1','2','3','4']);
console.log(s instanceof Set);

console.log(typeof(car));
let c;
console.log(typeof(c));

let bike='apache';
bike=undefined;
console.log(bike);

let b="";
console.log(typeof(b));

f=null;
console.log(typeof(f));
f=undefined;
console.log(typeof(f));

