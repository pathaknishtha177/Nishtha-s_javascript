//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025, 7, 17)
console.log(myCreatedDate.toDateString());
let myCreateDate = new Date(2025, 7, 17, 5, 7)
console.log(myCreateDate.toLocaleString());
let mycreatDate = new Date("2025-07-17")
console.log(mycreatDate.toLocaleString());
let mycreatesDate = new Date("01-14-2025")
console.log(mycreatesDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreatesDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})