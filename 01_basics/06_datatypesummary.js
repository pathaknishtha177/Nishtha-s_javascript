/* primitive

7 types : string , number , boolean , null , undefined , symbol , bigint */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined 
let userEmai = undefined; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345746768328709327986n

/* reference type / non primitive : 

array, objects, functions */

const pets = ["dog", "cat", "bird"];

let obj = { 
    name: "Nish",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof obj);
console.log(typeof myFunction);



/* MEMORIES :

Stack (Primitive) , Heap (Non - Primitive) */

let myUserName = "nishthapathakk"

let anothername = myUserName
anothername = "nishpathak"

console.log(myUserName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nish@google.com"

console.log(userOne.email);
console.log(userTwo.email);