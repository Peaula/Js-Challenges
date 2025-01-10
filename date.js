const d=new Date();
console.log(d.getFullYear());
console.log(d);

const c=new Date('2024-03-01');
console.log(c.getDay());
console.log(c.getMonth());
console.log(c);

const b=new Date("May 25,2021 13:10:00");
console.log(b);


const a=new Date(2021,4,24,1,12,0);
console.log(a);

const e=new Date(2020,2,27);
console.log(e);

const f=new Date(2020,7);
console.log(f);

const g=new Date(2021);
console.log(g);

const h=new Date(99,11,24);
console.log(h);

const i=new Date(23,2,14);
console.log(i.getDate());
console.log(i);

const j=new Date(100000000000);
console.log(j);

const k=new Date(-100000000000);
console.log(k);

const l=new Date(24*60*60*1000);
console.log(l);


const m=new Date(0);
console.log(m);

const n=new Date("2015-04");
console.log(n);

const o=new Date("2010");
console.log(o);

const p=new Date("2015-03-25T12:00:00Z");
console.log(p.getDate());

console.log(p.getTime());
console.log(p);

const q= new Date("2015-03-25T12:00:00-06:30");
console.log(q.getHours());
console.log(q.getMinutes());
console.log(q.getSeconds());
console.log(q.getMilliseconds());
console.log(q);


const r=new Date("07/06/2008");
console.log(r.getFullYear());
console.log(r);

const s=new Date("Mar 17 2006");
console.log(s);

const t=new Date("25 Dec 1000");
console.log(t);

const u=new Date("MARCH,14,2003");
console.log(u);

let mc=Date.parse("June 19,2012");
console.log(mc);

let mm=Date.parse("January 25,2007");
const md=new Date(mm);
console.log(md);


const months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
let month=months[c.getMonth()];
console.log(month);

const w=Date.now();
console.log(w);

let diff=d.getTimezoneOffset();
console.log(diff);


const min=1000*60;
const hour=min*60;
const day=hour*24;
const year=day*365;
let years=Math.round(Date.now()/year);
console.log(years);

const st=new Date();
st.setFullYear(2002,8,9);
console.log(st);

const sm=new Date();
sm.setMonth(1);
console.log(sm);

const sd=new Date();
sd.setDate(26);
console.log(sd);

d.setDate(d.getDate()+50);
console.log(d);


const sh=new Date();
sh.setHours(21);
console.log(sh);

const smin=new Date();
smin.setMinutes(45);
console.log(smin);

const ss=new Date();
ss.setSeconds(30);
console.log(ss);


let text="";
const tday=new Date();
const someday=new Date();
someday.setFullYear(2001,6,12);

if(someday>tday){
    text="Today is before July 12,2001";
}
else{
    text="Today is after July 12,2001";
}
console.log(text);