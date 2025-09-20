//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
//iife is used to stop the pollution of global function 

(function one(){           //named iife
    console.log(`DB CONNECTED`);
})();

(  () => {                 //unnamed iife
    console.log(`DB CONNECTED TWO`)
})();   

( (name) => {              //pass parameter in iife
    console.log(`DB CONNECTED ${name}`);
})('nish')