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