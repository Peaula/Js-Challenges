//Hoisting

x=3;
console.log(x);
var x;

x1=6;
console.log(x1);
let x1;

x2=9;
console.log(x2);
const x2;

var x=8;
var y=5;
console.log(x+" "+y);

var x3=9;
console.log(x3+" "+y3);
var y3=1;

var x4=5;
var y4;
console.log(x4+" "+y4);
y4=7;

x5=5;
console.log((x5));
var x5;


(function random(){
    x6++;
    console.log(x6);
    var x6=33;
})();

some();
function some(){
    a=45;
    console.log(a);
    var a;
}

var b=1;
console.log(c);
var c=2;
a1=1;
console.log(a1);

re();
var reverse="*/";
function re(){
    console.log(reverse);
    reverse="/*";
}
console.log(reverse);

