/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }

( function () {
    console.log('Welcome to Appleseeds Bootcamp!');
})();

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

console.log((function(a=4){
    return Math.pow(a, 2)
})());



// From function expressions to IIFE functions.

// const squareRoot = a => Math.sqrt(a);

(function(a=4){
    return Math.sqrt(a)
})();


const randomNumbers = (a, b) => Math.random() * (a - b) + b;

(function(a=4,b=2){
    return Math.random() * (a - b) + b;
})();


