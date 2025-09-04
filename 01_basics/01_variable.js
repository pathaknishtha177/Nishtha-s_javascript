//variables

/*constant*/const accountId = 144553
/*variable*/let accountEmail = "nishtha35@google.com"
/*variable*/var accountPaswword = "36387" /* prefer not to use var because of issue in block scope and functional scope
/*variable*/accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "hs@hs.com"
accountPaswword = "356267672"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountEmail, accountId, accountPaswword, accountCity, accountState])



//datatype

"use strict"; //treat all JS code as newer version

//alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3) 

let name = "Nishtha"
let age = 20
let isLoggedIn = false 

// number => to power 53
// bigint 
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

//object

console.log(typeof age);



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


//*****operations*****//

let value = 3
let negValue = -value

console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hey"
let str2 = "Nish"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+true);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gamecounter = 100
gamecounter++;
console.log(gamecounter);



// comaprison

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//differnt data type
console.log("2" > 1);
console.log("02" > 1);

//different comparison operators treat null differently we need to ignore that type of comparison
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// ===

console.log("2" === 2);