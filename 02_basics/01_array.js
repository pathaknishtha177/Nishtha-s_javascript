const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[3]);

//array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr);

console.log(myArr.includes(6));
console.log(myArr.indexOf(7));


const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 4)

console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1, 4)
console.log("C", myArr);
console.log(myn2);


const movies = ["param sundari", "saiyaara"]
const movie = ["sultan", "pk", "son of sardaar"]

movies.push(movie)

console.log(movies);

const allmovies = movie.concat(movies)
console.log(allmovies);

const all_movies = [...movies, ...movie]
console.log(all_movies);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Nish"))
console.log(Array.from("Nish"))
console.log(Array.from({name: "Nish"}))  // interesting


let score1 = 100 
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));