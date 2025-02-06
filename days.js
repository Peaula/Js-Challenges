var today=new Date();

var day=today.getDay();

var days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
console.log(days[day]);

var hour=today.getHours();
var min=today.getMinutes();
var sec=today.getSeconds();
console.log(hour);
console.log(min);
console.log(sec);

var p=(hour>=12) ?"pm" : "am";
console.log(p);
if(hour===0 &&p==='pm'){
    if(min===0 && sec===0)
    {
        hour=12;
        p='noon';
    }
    else {
        hour=12;
        p='pm';
    }
}
if(hour===0 &&p==='am'){
    if(min===0 && sec===0)
    {
        hour=12;
        p='midnight';
    }
    else {
        hour=12;
        p='am';
    }
}

console.log('current time:'+hour+" "+p+" "+min+" "+sec);

var dd=today.getDate();
var mm=today.getMonth();
var yyyy=today.getFullYear();

console.log(dd);
console.log(mm);
console.log(yyyy);

if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}

tdy=mm+'-'+dd+'-'+yyyy;
console.log(tdy);

tdy=mm+'/'+dd+'/'+yyyy;
console.log(tdy);

function leapyear(year){
     return (year%100===0)?(year%400===0):(year%4===0);
}
console.log(leapyear(2006));
console.log(leapyear(2024));

for(var year=2014;year<=2050;year++){
    var d=new Date(year,0,1);
    if(d.getDay()===0){
        console.log("1st January is being a sunday"+year);
    }
}

var cmas=new Date(today.getFullYear(),11,25);
if(today.getMonth()==11 && today.getDate()>25){
    cmas.setFullYear(cmas.getFullYear()+1);
}

var oneday=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(oneday))+'days left until christmas');