const numbers = [2,4,2,45,6,1];

const maxNumbers = numbers.reduce((a,b)=>
      Math.max(a,b)
)

console.log(maxNumbers)

function findMax(arr) {
    return arr.reduce((a,b)=>Math.max(a,b))
}
console.log(findMax(numbers))

function sumArrEven(arr) {
   return  arr.filter(num=>(num%2===0)).reduce((a,b)=>
    a+b)
}


console.log('3' , sumArrEven(numbers))

function averageNumbers(arr) {
    return arr.reduce((a,b)=>
    a+b) / arr.length
}

console.log(averageNumbers(numbers))