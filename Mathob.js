//Math objects

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.LOG2E);
console.log(Math.LOG10E);


console.log(Math.round(4.4));
console.log(Math.round(4.7));
console.log(Math.round(8.3));

console.log(Math.ceil(4.9));
console.log(Math.ceil(4.2));
console.log(Math.ceil(-4.2));

console.log(Math.floor(7.9));
console.log(Math.floor(3.4));
console.log(Math.floor(-2.2));

console.log(Math.trunc(3.9));
console.log(Math.trunc(3.3));
console.log(Math.trunc(-1.9));


console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(6));
console.log(Math.sign(9));


console.log(Math.pow(8,3));
console.log(Math.pow(5,2));
console.log(Math.pow(2,5));

console.log(Math.sqrt(16));
console.log(Math.sqrt(125));
console.log(Math.sqrt(8));


console.log(Math.abs(-4.8));
console.log(Math.abs(7.3));
console.log(Math.abs(0));

console.log(Math.sin(90*Math.PI/180));
console.log(Math.cos(0*Math.PI/180));


console.log(Math.min(0,180,30,-70,-0,33,81,66));
console.log(Math.max(0,180,30,-70,-0,33,81,66));
console.log(Math.random());


console.log(Math.log(1));
console.log(Math.log(2));
console.log(Math.log(-6));

console.log(Math.log2(8));
console.log(Math.log2(128));
console.log(Math.log2(16));

console.log(Math.log10(1000));
console.log(Math.log10(2500));
console.log(Math.log10(8000));


let a=Math.acos(-1);
console.log(a);
let b=Math.acos(0);
console.log(b);
let c=Math.acos(1);
console.log(c);

let a1=Math.acosh(1);
console.log(a1);
let b1=Math.acosh(0);
console.log(b1);
let c1=Math.acosh(2);
console.log(c1);

console.log(Math.cosh(3));
console.log(Math.cosh(8));
console.log(Math.cosh(0));


console.log(Math.sinh(3));
console.log(Math.sinh(8));
console.log(Math.sinh(0));

console.log(Math.asin(1));
console.log(Math.asin(-1));
console.log(Math.asin(0));

let a3=Math.asinh(0);
console.log(a3);
let b3=Math.asinh(1);
console.log(b3);
let c3=Math.asinh(-1);
console.log(c3);

console.log(Math.cbrt(125));
console.log(Math.cbrt(8));
console.log(Math.cbrt(64));

let a4=Math.exp(1);
console.log(a4);
let b4=Math.exp(-2);
console.log(b4);
let c4=Math.exp(10);
console.log(c4);

let a5=Math.expm1(3);
console.log(a5);
let b5=Math.expm1(987);
console.log(b5);
let c5=Math.expm1(-3);
console.log(c5);


let a6=Math.log1p(2);
console.log(a6);
let b6=Math.log1p(-1);
console.log(b6);
let c6=Math.log1p(3.567);
console.log(c6);

let x=Math.E;
console.log(x);

console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*2));
console.log(Math.floor(Math.random()*3))+3;

function Int(min,max){
    return Math.floor(Math.random()*(max-min+2))+min;
}
console.log(Int(5,10));

console.log(Boolean(12>8));
console.log(10>5);
console.log(0);


console.log(Boolean(100));
console.log(Boolean(-5));
console.log(Boolean(3.44));

console.log(Boolean("false"));
console.log(Boolean(7+44+3.14));
console.log(Boolean(-0));

console.log(Boolean(""));
console.log(Boolean());
console.log(Boolean(null));

let x1=false;
let x2=new Boolean(false);
console.log(typeof(x1));
console.log(typeof(x2));
console.log(x1===x2);
let x3=new Boolean(false);
console.log(x2===x3);


console.log(2<12);
console.log(2<"helina");
console.log("4"=="12");
console.log(2=="form");
console.log("2">"12");

const car={
    type:"BMW",model:"600",color:"blue"
};
console.log(car?.name);
