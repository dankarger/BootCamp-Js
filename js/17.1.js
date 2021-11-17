// Block 1
var b = 1;

function someFunction(number) {
    function otherFunction(input) {
        return b;
    }

    b = 5;
    return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

//will return noting, because there is no console log
//<-------------------------------------------------------------------------------------->

// Block 2
var a = 1;

function b2() {
    a = 10;
    return;

    function a() {
    }
}

b2();
console.log(a);

//will return 1 because var a is set to 1, and aischanged inside the function b2 scope but remain in the functionscope
//<-------------------------------------------------------------------------------------->

// Block 3
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}

//will return 3 3 3 because the let i is declared outside the for loop scope, and because of the time out, function will
//be updated before returning , and then returned after the iterations