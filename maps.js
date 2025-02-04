//Map

const fruit=new Map([
    ["apple",600],
    ["guava",500],
    ["kiwi",300]
]);
console.log(fruit);
console.log(fruit.values(0));
console.log(fruit.get("guava"));

const f=new Map();
f.set("orange",800);
f.set("bananas",600);
f.set("pomegranate",200);

console.log(f);
console.log(typeof(f));
console.log(f instanceof Map);
console.log(f.size);

f.delete("pomegranate");
console.log(f);

fruit.clear();
console.log(fruit);

console.log(f.has("bananas"));
console.log(fruit.has("apples"));


let txt="";
f.forEach(function(value,key){
    txt += key + '=' + value;
})
console.log(txt);

let text="";
for(const x of f.entries()){
    text +=x;
}
console.log(text);

let t="";
for(const x of f.keys()){
    t +=x;
}
console.log(t);

let t1="";
for(const x of f.values()){
    t1 +=x;
}
console.log(t1);

let t2=0;
for(const x of f.values()){
    t2 +=x;
}
console.log(t2);

const a={name:'Apple'};
const b={name:'Banana'};
const o={name:'Oranges'};

const fruits=new Map();

fruits.set(a,qty=600);
fruits.set(b,qty=350);
fruits.set(o,qty=500);

console.log(fruits);

function call(value){
    return qty > 500 ? 'ok' : 'low';

}
const res=Map.groupBy(fruits,call);
console.log(res);