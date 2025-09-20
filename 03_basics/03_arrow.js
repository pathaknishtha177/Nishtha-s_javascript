const user = {
    username: "nish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

//console.log(this);

function once(){
    let username = "nish"
    console.log(this.username);
}

once()

const twice = function (){
    let username = "nish"
    console.log(this.username);
}

twice()

const arrow =  () => {
    let username = "nish"
    console.log(this);
}

arrow()

const addtwo = (num1, num2) => {         //basic arrow function
    return num1 + num2
}

console.log(addtwo(3, 6))


const ading = (num1, num2) => num1 + num2     //implicit return
const adding = (num1, num2) => (num1 + num2)     //another way 
const add = (num1, num2) => ({username: "nish"})     //for the objects 

console.log(adding(3, 4))