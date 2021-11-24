//      1.      2       4
// for(let i=0; i < 10 ; i++){
//     console.log(i)//3
// }
// let arr= [1,2,3];
// arr.pop();//o(1)


// //print all the even numbers from 101 to -1
// for (let i = 101; i >= -1; i--) { // o(1) o(n) o(n^2)//100 99 98 97....
//     //100 98 96...
//     console.log(i)//3
// }

//100->155
//div by 5.

//forwards
// for (let i = 100; i <= 155; i=i+5) {
//     console.log(i)
// }

//hello world this amazing Blabla
//Hello World
//backwards
// for (let i = 155; i >= 100; i=i-5) {
//     console.log(i)
// }

//print all number divided by 6 from 1 to 145
// for(let i=6 ; i <= 144 ; i=i+6){
//     console.log(i)
// }

//print all number divided by 2 and 3 from 1 to 145
// for (let i = 1; i <= 145; i++) {
//     if (i % 6 === 0) {
//         console.log(i)
//     }
// }

//print all three digits ,(100-999)
//all print number need to be with sum of 5.
//sum = 5.
//start  = 10  end = 500

// for(let i =104 ; i < 501 ; i++){
//     // console.log(i)
//     let z = i%10;
//     let y = Math.floor(i/10%10);
//     let x = Math.floor(i/100)
//
//     if(x+y+z === 5){
//         console.log(i)
//     }
// }//
// //63 , 81 , 90

// let str = 'AAFjh lakslas^&hf lkah1Sf l;kahs42f l;kfsl;kh';

// for (let i = 0; i < str.length; i++) {
//     if (str[i].charCodeAt(0) >= 32 && str[i].charCodeAt(0) <= 64)
//         console.log(str[i])
//
//     if (!((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z'))) {
//         console.log(str[i])
//     }
// }


//map -> same size as array
// let arr = [10000,10242424,124124];
//filter =>run over all arr , max size is 0 to n(length of arr)
// let filterArr = arr.map((x, index) => {
//     return x * 2
// }).filter((x) => {
//     return x < 20
// }).map((x) => {
//     return x + 1
// }).filter((x) => {
//     return x % 2 !== 0 && x > 3
// }).filter((x) => {
//     return x < 10
// })
// let filterArr = arr.map((x, index) => {
//     return x * 2
// })
// console.log("arrExample :", filterArr)
// let r = filterArr.reduce((x, y) => {
//     console.log("x :",x)
//     console.log("y :",y)
//     return x + y
// },1000000)
// console.log(r)
// //reduce

// let arr = [];
// if (arr.length !== 0) {
//     let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max)
//
// } else {
//     console.log("empty")
// }

// let max = arr.length !== 0 ? arr.reduce((x, y) => {
//     return x > y ? x : y
// }) : null
//
// console.log(max)
//24,26
let arr = [6, 8, -100, 8124, 25, 86, 31]

// let temp = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         if (arr[i] % 2 == 0) {
//             temp.push(arr[i])
//         } else if (arr[i] % 2 != 0) {
//             temp.push(arr[i] + 1)
//         }
//     }
// }
// let arr = [6, 8, 8124, 26, 86, 32]
// let sum =0;
// for(let i=0 ; i <arr.length ; i++){
//     sum = sum + arr[i]
// }
arr.sort((x,y)=>{
    return x-y
});
console.log(arr)

// let result = arr.map((number) => {
//     return number % 2 === 0 ? number : number + 1
// }).filter((num) => {
//     return num > 0
// }).reduce((x, y) => {
//     return x + y
// }, 0)
//
// console.log(result)
//turn all number to closet even number
//sum all positive number
let arr = [1,2,3,4,5,6,7,8,9,10,2]
for (let i = 0; i < arr.length; i++) {

}

arr.forEach((el)=>{
    console.log(el)
})