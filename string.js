//strings

let text=`Harry is a 'Bank Manager'`;
console.log(text);
console.log(text.length);

let ans1="It's alright";
let ans2="He is called 'Harry'";
let ans3='He is called "Harry"';
console.log(ans1+''+ans2+''+ans3);
console.log(ans1.at(-3));


let txt="It is a\"special character\"from js";
console.log(txt);
console.log(txt.at(10));

let a='Mom\'s Magic';
console.log(a);
console.log(a.charAt(0));

console.log("Welcome"+" to Javascript");

let aa="Despatch";
let b=new String("Despatch");
console.log(typeof(b));
console.log(aa===b);
console.log(aa.charCodeAt(0));
console.log(aa[4]);


let d="banana,kiwi,papaya";
console.log(d.slice(7,15));
console.log(d.slice(12));
console.log(d.slice(-18));
console.log(d.slice(-18,-6));
console.log(d.substring(7,18));
console.log(d.substring(0));
let part=d.substr(7,5);
console.log(part);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

let ans4=ans1.concat(" ",ans2);
console.log(ans4);

let e="        Hello guys  !     " +".";
console.log(e.trim());
console.log(e.trimStart());
console.log(e.trimEnd());


let f="25";
console.log(f.padStart(5,"*"));
console.log(f.padEnd(5,"0"));


let rep="Oh!";
console.log(rep.repeat(3));

let repl=text.replace("Harry","Sam");
console.log(repl);
console.log(text.replace(/Harry/i,"King"));

let g="Poco is a an Android mobile";
console.log(g);
console.log(g.replace(/Poco/g,"Oppo"));

let h="children like cats, cats are so cute. cats are so funny and enjoyable. few people get fear when  see the cats";
console.log(h);
console.log(h.length);
console.log(h.replaceAll("cats","dogs"));
console.log(h.replaceAll(/cats/g,"dogs"));

console.log(d.split(","));
console.log(text.split(" "));


console.log(d.indexOf("kiwi"));
console.log(h.indexOf("funny",20));


console.log(h.lastIndexOf("cats"));
console.log(d.lastIndexOf("dogs"));

console.log(h.search("cute"));
console.log(g.search(/mobile/));
console.log(h.search("welcome"));


let i="Risking is better than regretting,working hard,learning coding ";
const j=i.match("ing");
console.log(j);
const k=i.match(/ing/g);
console.log(k.length+" "+k);


let  l=i.matchAll(/ing/g);
console.log(Array.from(l));

console.log(i.includes("better"));
console.log(i.includes("cat"));
console.log(i.includes("working",30));


console.log(i.startsWith("Harry"));
console.log(i.startsWith("Risking"));
console.log(i.startsWith("Risking",2));


console.log(g.endsWith("Android"));
console.log(g.endsWith("mobile"));
console.log(g.endsWith("Android",20))

let fname="franclin";
let lname="joail";
console.log(`Welcome ${fname},${lname}!`);

let price=10;
let tax=0.25;
console.log(`Total:${price*(1+tax).toFixed(2)}`)


