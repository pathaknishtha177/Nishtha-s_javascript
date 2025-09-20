//var c = 300
let a = 200
if(true){
    let a = 10
    const b = 20
    console.log("INNER:", a);
}

console.log(a);


function one (){
    const username = "nish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()

}

one()

if(true){
    const user = "nish"
    if (user === "nish"){
        const website = " youtube"
        console.log(user + website);
    }
    //console.log(website);
}

//console.log(user);



//*****************interesting*****************//
console.log(addone(5));

function addone(num){
    return num + 1
}

console.log(addone(5));

//console.log(addtwo(5));

const addtwo = function(num){       
    return num + 2
}

console.log(addtwo(5));