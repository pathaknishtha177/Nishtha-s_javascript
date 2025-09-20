function sayMyName(){           // function definition
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}

sayMyName()  // executive function
sayMyName   // reference of the function

function addTwoNumbers(number1, number2){               // num1,num2 are the parameters
    console.log(number1 + number2);
}

addTwoNumbers(3 , 6)                                   //num1 , num2 are the arguments
addTwoNumbers(3 ,"4")
addTwoNumbers(3 ,"a")

function addtwonum(num1, num2){

    let result = num1 + num2
    return result
    console.log("nish");
}

const result = addtwonum(4, 7)

console.log("Result: ", result);


function loginUserMessage(username){   // (username = "nish")  another way to keep the value atleast nish
    if(username === undefined)  
    // if(!username) another way
        console.log("Please enter a username");
    return `${username} just logged in`
}

console.log(loginUserMessage("Nishtha"))
console.log(loginUserMessage())

function calculateCartPrice(...num1){          //... - rest operatror
    return num1
}

//console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200, 400, 500))

function calculateCartPrice1(val1, val2, ...number1){          //... - rest operatror
    return number1
}

console.log(calculateCartPrice1(200, 400, 500, 400))

const user = {
    username: "nish",
    price: 399
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 199
})

const myArray = [200, 300, 500, 600]

function returnSecondValue(getarray){
    return getarray[2]
}

console.log(returnSecondValue(myArray));