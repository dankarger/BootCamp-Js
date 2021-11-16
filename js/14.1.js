const numbers = [2, 4, 2, 45, 6, 1];

// const maxNumbers = numbers.reduce((a,b)=>
//       Math.max(a,b)
// )
//
// console.log(maxNumbers)


//1
//option1
function findMax(arr) {
    return arr.reduce((a, b) => Math.max(a, b));
}

console.log('1:',findMax(numbers));

//option 2
function findMax2(arr) {
    return arr.reduce((max, currVal) => {
        if (currVal > max) return currVal;
        return max;
    })
}

console.log('1-2:', findMax2(numbers));

function sumArrEven(arr) {
    return arr.filter(num => (num % 2 === 0)).reduce((a, b) =>
        a + b)
}

function sumArrEven2(arr) {
    return arr.reduce((s, val)=>{
        if(val%2===0){
            return s+val
        }else{
            return s
        }
    })
}
console.log('2-2:',sumArrEven2(numbers))
console.log('2:', sumArrEven(numbers));

function averageNumbers(arr) {
    return arr.reduce((a, b) =>
        a + b) / arr.length
}



console.log('3:' ,averageNumbers(numbers));