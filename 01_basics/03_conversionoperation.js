//conversion operation

let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)    
console.log(typeof valueInNumber);

/* "33" => 33
"33abc" => NaN
true => 1; false => 0
undefined => Nan
null => 0 */

let IsloggedIn = 1

let booleanIsLoggedIn = Boolean(IsloggedIn)
console.log(booleanIsLoggedIn);

/* 1 => true; 0 => false
"" => false
"nish" => true */

let somenumber = 33

let stringNumber = String(somenumber)
console.log(stringNumber);
console.log(typeof stringNumber);
