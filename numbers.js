//Numbers

let a=123e6;
let a1=123e-3;
console.log(a);
console.log(a1);

let a3=0.3+0.7;
console.log('0.3+0.7='+a3);

let a4=(0.3*10+0.7*10)/10;
console.log(a4);

let a5="55";
let a6="20";
console.log(a5+a6);
console.log(typeof(a5));

let a7=2;
console.log(a5+a7);
console.log(a7+a5);

let a8=8;
console.log(a7+a8+a6);
console.log(a8/a7);
console.log(a5*a6);
console.log(a5/a6);
console.log(a5-a7);

let b=5/"deer";
console.log(b);
let b1=10/"5";
console.log(b1);

console.log(isNaN(b));

let b2=NaN;
console.log(b2+a7);
console.log(b2+a5);

console.log(typeof(b2));

let num=2;
while(num!=Infinity){
    num=num*num;
}
console.log(num);

let b3=2/0;
let b4=-5/0;
console.log(b3);
console.log(b4);
console.log(typeof Infinity);


let b5=0xFF;
console.log(b5);

console.log(a7.toString(2));
console.log(a7.toString(10));

let x=new Number(12340987);
console.log(x);
console.log(a7===a8);

let b6=999999999999999;
let b7=9999999999999999;
console.log(b6);
console.log(b7);
console.log(BigInt(b7));

let b8=BigInt(99999999999999999999999999);
console.log(typeof b8);

let c1=87654567898767n;
let c2=56789567834992n;
console.log(c1*c2);

let c3=5n;
console.log(Number(c3)/2);


let hex=0x200000000000003n;
let oct=0o400000000000000000003n;
let bin=0b100000000000000000000000000000000000000000011n;
console.log(hex+" "+oct+" "+bin);

console.log(9007199254740992 === 9007199254740993);

let c4=Number.MAX_SAFE_INTEGER;
let c5=Number.MIN_SAFE_INTEGER;
console.log(c4);
console.log(c5);

console.log(Number.isInteger(100));
console.log(Number.isInteger(3.5));

console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(123456123457890));
console.log(Number.isSafeInteger(9007199254740992));

console.log(a7.toString());
let c6=9.659;
console.log(c6.toExponential(2));
console.log(c6.toExponential(6));

console.log(c6.toFixed(0));
console.log(c6.toFixed(6));

console.log(c6.toPrecision());
console.log(c6.toPrecision(2));

console.log(c6.valueOf());

console.log(Number(true));
console.log(Number(false));
console.log(Number("   10"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("Kani"));


let d=Number(new Date("2003-12-07"));
console.log(d);

console.log(parseInt("10.20"));
console.log(parseInt("10,20"));
console.log(parseInt("-10.20"));
console.log(parseInt("-10"));
console.log(parseInt("10 20 4"));
console.log(parseInt("years 10"));
console.log(parseInt("10 years"));
console.log(parseInt("10"));


console.log(parseFloat("10"));
console.log(parseFloat("years 19"));
console.log(parseFloat("10 20 3"));
console.log(parseFloat("10.20"));
console.log(parseFloat("10 years"));


let x1=Number.EPSILON;
console.log(x1);
let x2=Number.MAX_VALUE;
console.log(x2);

let x4=Number.MIN_VALUE;
console.log(x4);
let x5=Number.MAX_SAFE_INTEGER;
console.log(x5);
let x6=Number.MIN_SAFE_INTEGER;
console.log(x6);


let x7=Number.POSITIVE_INFINITY;
console.log(x7);
let x8=Number.NEGATIVE_INFINITY;
console.log(x8);






