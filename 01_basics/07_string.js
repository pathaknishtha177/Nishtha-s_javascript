const name = "nishtha"
const repocount = 50

console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // another syntax //important try to use this mostly

const gameName = new String('nish') //another way to declare variable

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(1,4) //not able to give negative value
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "         nishtha       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nishtha.com/nishtha%20pathak"

console.log(url.replace('%20', '-'));
console.log(url.includes('375'));

const gamer = "a person who is a expert in a particular game"

console.log(gamer.split(' '));