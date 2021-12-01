// block 1
function funcA() {
    var a = 1;
    console.log(a);
    console.log(foo());
    function foo() {
        return 2;
    }
}

funcA();

//result :
//1
//2
//the var a is hoisted and can be console log before the declaration
//fix: put the var a=1 in the begining of the func
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
var test = obj.prop.getFullName();
console.log(test);

//<-------------------------------------------------------------------------------------->
//Result:
//> Aurelio De Rosa'
//> function
// the first console log will point to the nearest scope of fullname  (inside the props obj)
//the second console log will show the function but not the function result, because the function is not activated
console.log('//<-------------------------------------------------------------------------------------->\n')

//block3

function funcB() {
    var a = (b = 0);

    a++;
    return a ;
}

a = funcB();
console.dir(funcB());
console.log(typeof a);
console.log(typeof b);
console.log('//<-------------------------------------------------------------------------------------->\n')
//a is not defined, will print undefined in the global scope,
//b is also no defined in the global scope,
//





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
console.log(' 5: //<-------------------------------------------------------------------------------------->\n')

function funcD1() {
    d = 1;
}

funcD1();
console.log(d);

function funcD2() {
    var e = 1;
    console.log(e);
}

funcD2();


//e is not defined , need to change it to console.log(d)
//will return 'd is not defined'
//will console log 1,
//fix: move the console.log(e) inside the function
console.log('6: //<-------------------------------------------------------------------------------------->\n')

//<-------------------------------------------------------------------------------------->

// Block 6
var f = 1;
function funcE() {

console.log("Value of f in local scope: ", f);
}

console.log("Value of f in global scope: ", f);

funcE();

//first will console log 'Value of f in local scope:  1'
//then 'Value of f in global scope:  1'
//fix: need to movethe var f declaration to the top;
console.dir(funcD2)