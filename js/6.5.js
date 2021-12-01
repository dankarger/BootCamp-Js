//1
let arr = Array(100);

let arr100 = arr.fill({'hello':1},0,100);

//2
const arrNumber100= Array.from(Array(101).keys())
let arr2 = Array.from({length: 100}, (_,index) => index+1)
let arr3 = Array.from({length: 100}, (_,index) => index+1)
console.log('arr3: ' +arr3 )
console.log(arrNumber100)

//3

const testObj = {'hello':'hi',2:'cool',21:2,'test':'testing','test2':4};

const arrrObj = Object.values(testObj);
console.log(arrrObj);

//4

let obj4 = Object.assign({}, ['a', 'b', 'c']);
console.log(obj4);
//5
console.log(Array.isArray(arr100));
//6

let newArr100 = arr100.slice();
arr100.pop()
arr100.pop()
arr100.push('555555')
console.log(newArr100);

console.log(['lvvv'])
//- copy that is affected by original arr

const arr100Copy = arr100;

// console.log(arr100Copy);


