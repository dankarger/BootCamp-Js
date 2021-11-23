for (let i = 100; i > -5; i--) {
    if (i % 5 === 0) {
        console.log(i)
    }
}

for (let i = 100; i > -5; i -= 5) {
    console.log(i)
}

console.log('--------------------------------------')
let x = 498;

for (let i = 100; i < 1000; i++) {
    let right = i % 10;
    let mid = Math.floor(i / 10 % 10);
    let left = Math.floor(i / 100)
    if (right === mid && mid === left) {
        console.log(i)
    }
}
console.log('-------------------------ggggg------------')
for (let i = 111; i < 1000; i = i + 111) {
    console.log(i)
}

console.log('------------------------------------------------')


//map  => return same array size
//filter => return new array from size 0 to n(length)
//reduce => return one value
let arr = [-3, -2, -1, 0, 1, 3, 4, 5]
//get all positive num and multiply by 2
let output = arr.filter(num => {
    return num > 0;
}).map((num => {
    return num * 2
})).filter(num => {
    return num > 8;
})


console.log('output: ', output)

console.log('------------------------------------')

let red = arr.reduce((x, y) => {
    console.log('x:', x);
    console.log('y:', y);
    return x + y;
}, 10)

console.log(red)
let red2 = arr.reduce((x, y) => {
    console.log('x:', x);
    console.log('y:', y);
    return x + y;
}, 10);

console.log('red2', red2);

let arr2 = [4, 5, -4, 12, 'b', 6, 8, 'a', 34, 9];

let red3 = arr.reduce((x, y) => {
    return x > y ? x : y;
    // if(x > y) {
    //     return x
    // }else {
    //     return y
    // }
})


let result = arr2.filter(x => {
    return x > 0;
}).reduce((x, y) => {
    return x + y;
})
console.log('result',result)

let sum = 0;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 0) {
        console.log(arr2[i])
        sum += arr2[i]
    }
}
console.log('sum:',sum)