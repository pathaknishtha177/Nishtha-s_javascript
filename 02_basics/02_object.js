// Object.create = another way to create a object

// object literals

const mysymbol = Symbol("key1")     // declare symbol 


const JsUser = {
    name: "Nish",
    "full name": "Nishtha Pathak",
    [mysymbol]: "key1",           // syntax of declaring symbol
    age: 20,
    location: "Jaipur",
    email: "nish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mysymbol])

JsUser.email = "nishtha@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "nishtha@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){                        // declare function
    console.log("Hello JS User!");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting);                        //give reference of the function don't print any value 

console.log(JsUser.greeting());                    //call function
console.log(JsUser.greetingtwo());



//singleton

const tinderUser1 = new Object()             // singleton object
const tinderUser = {}                        //non - singleton object

tinderUser.id = "123bso"
tinderUser.name = "Jack"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "jack@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nishtha",
            lastname: "Pathak"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}               --- similary way like array to combine 2 or more objects
const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)   ---- another way to merge 2 or more objects 

console.log(obj3);

const obj4 = {...obj1, ...obj2}          // another way
console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//destructing 

const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: Instructor}  = course        // shorten the name of variable so its easy to access

//console.log(courseInstructor);
console.log(Instructor);

// {
//    "name": "hitesh",
//  "coursename": "js in hindi"              ///API'S , JSON FORMATE
// }