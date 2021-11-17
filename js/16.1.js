// block 1
function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;

    function foo() {
        return 2;
    }
}

funcA();
//result :
//1
//2
//the var a is hoisted and can be console log before the declaration
//<-------------------------------------------------------------------------------------->
// block 2
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};

console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

//<-------------------------------------------------------------------------------------->
//Result:
//> Aurelio De Rosa'
//> function
// thefirstconsolelog will point to the nearest scope of fullname  (inside the props obj)
//the second console log will show the function but not the function result, because the function is not activated

//block3

function funcB() {
    let a = b = 0;
    a++;
    return a;
}

funcB();
console.log(typeof a);
console.log(typeof b);

//a is not defined, will print undefined
//b in a number, will console log  'number'.





//<-------------------------------------------------------------------------------------->

// Block 4
function funcC() {
    console.log("1");
}

funcC();

function funcC() {
    console.log("2");
}

funcC();


//will console log 1 and then an error, because funcC allready been declared.


//<-------------------------------------------------------------------------------------->

// Block 5
function funcD1() {
    d = 1;
}

funcD1();
console.log(d);

function funcD2() {
    var e = 1;
}

funcD2();
console.log(e);

//will return 'd is not defined'
//will console log 1,

//<-------------------------------------------------------------------------------------->

// Block 6
function funcE() {
    console.log("Value of f in local scope: ", f);
}

console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

//first will console log 'Value of f in local scope:  1'
//then 'Value of f in global scope:  1'
//because var is declared in the global scope