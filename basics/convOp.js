let score="33";
let score2="33abc"


console.log(typeof score);
console.log(typeof(score));

let valueinNumber=Number(score)
console.log(typeof valueinNumber)

let valueinNumber2=Number(score2)
console.table([score2,valueinNumber2, typeof valueinNumber2])

let isLoggedIn1=1;
let isLoggedIn2=0;
let isLoggedIn3="";
let isLoggedIn4="sanjay";
let booleanIsLoggedIn1=Boolean(isLoggedIn1);
let booleanIsLoggedIn2=Boolean(isLoggedIn2);
let booleanIsLoggedIn3=Boolean(isLoggedIn3);
let booleanIsLoggedIn4=Boolean(isLoggedIn4);
console.table([booleanIsLoggedIn1,booleanIsLoggedIn2,booleanIsLoggedIn3,booleanIsLoggedIn4])

let someNumber=33;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber )