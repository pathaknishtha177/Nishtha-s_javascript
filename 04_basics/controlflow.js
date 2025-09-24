//if statement
const isUerLoggedIn = true

if(2 == "2"){
    console.log("executed");
}

// < , > , <= , >= , == , != , === , !==

const temperature = 41

if(temperature < 50){
    console.log("less than 50");
} else{
    console.log("temperature is greater than 50");
}

console.log("nish");

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power : ${power}`);
}
//    console.log(`user power : ${power}`);

const balance = 1000

if(balance > 500) console.log("test");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200"); 
} 

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard && 2 == 2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

//Switch statement

const month = 3 

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}

const day = "wed"

switch (day) {
    case "mon":
        console.log("monday");
        break;
    case "tue":
        console.log("tuesday");
        break;
    case "wed":
        console.log("wednesday");
        break;
    case "thu":
        console.log("thursday");
        break;
    case "fri":
        console.log("friday");
        break;
    default:
        console.log("default case match");
        break;
}


//falsy and truthy value

const userEmail = "nish@23.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
    
}

//falsy values = false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
//truthy values =  "0" , 'false' , " " , [] , {} , function(){}

const userEmai = []
if (userEmai.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj.length === 0)){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//Terniary operator = condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");