const numbers = [2,4,32,45,6,1];

const maxNumbers = numbers.reduce((a,b)=>
      Math.max(a,b)
)

console.log(maxNumbers)

function findMax(arr) {
    return arr.reduce((a,b)=>Math.max(a,b))
}
console.log(findMax(numbers))

function sumArr(arr) {
    return arr.reduce((a,b)=> a+b)
}

console.log(sumArr(numbers))

function averageNumbers(arr) {
    return arr.reduce((a,b)=>
    a+b) / arr.length
}

console.log(averageNumbers(numbers))