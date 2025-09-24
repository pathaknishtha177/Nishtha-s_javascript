//for loop 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is a number");
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value : ${i}`);
    
    for (let j = 0; j <= 10; j++) {
            console.log(`inner loop value : ${j} and inner loop ${i}`);
            console.log(i + ' * ' + j + ' = ' + i * j);
    }
}

let myArray = ["superman" , "batman" , "flash"]

console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);   
}


//while loop 

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let myarray = ["flash" , "batsman" , "superman"]

let arr = 0 
while (arr < myarray.length){
    console.log(`value is ${myarray[arr]}`);
    arr = arr + 1
}


//do while loop

let score = 1

do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);

// for of loop

const arry = [1, 2, 3, 4, 5]

for (const num of arry) {
    console.log(num);
    
}
const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

//maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of India")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'nfs',
    'game2': 'spiderman'
}       // forof syntax is not iterable for objects 

//for in loop 

const myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobject) {
    console.log(myobject[key]);
    console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["js", "ruby", "py", "java", "cpp"]

for (const key in programming) {
   console.log(key);
   console.log(programming[key]);
}

//for each loop 

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    console.log(item);
} )

coding.forEach(item => {
    console.log(item);
});

function printme(item){
    console.log(item);
}

coding.forEach(printme)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
});

const mycoding = [ 
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: "js\py"
    }
]

mycoding.forEach(item => {
    console.log(item.languagename);
});

const values = coding.forEach(item => {
    console.log(item);
    return item
})

console.log(values);

//filter

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums = mynums.filter( (num) => num > 4) 
console.log(newnums);

const newnum = mynums.filter( (num) => {
    return num > 4
}) 
console.log(newnums);

//map

const mynumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnumers = mynumers.map( (num) => num + 10)
console.log(newnumers);

const mynumber = mynumers
                    .map((num) => num * 10)
                    .map( (num) => num + 1)

console.log(mynumber);

//reduce

const numbers = [1, 2, 3]

const mytotal = numbers.reduce(function (accumulator, currentvalue){
    console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
    return accumulator + currentvalue
}, 0)

console.log(mytotal);

const total = numbers.reduce( (accumulator, currentvalue) => accumulator+currentvalue, 0)
console.log(total);


const shoppingcart = [
    {
        itemname: "python",
        price: 999
    },
    {
        itemname: "java",
        price: 1299
    },
    {
        itemname: "mobile development",
        price: 5999
    },
    {
        itemname: "data scientist",
        price: 12999
    }
]

const pricetopay = shoppingcart.reduce((accumulator, item) => accumulator + item.price, 0)

console.log(pricetopay);
