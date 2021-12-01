const arr=[1,7,3,-5,7,3,9];
for(let n in arr){
    console.log(arr[n])
}

function arrayLength(arr) {
    let arrLength = 0;
    for(let n of arr) {
        arrLength +=1;
    }
    return arrLength
}

console.log(arrayLength(arr))

function arraySum(arr) {
    let sum=0;
    for(let i=0; i<arr.length;i++) {
        sum+=arr[i];
    }
    return sum;
}
console.log(arraySum(arr))

function arrayMulti(arr) {
    let multi=1;
    for(let n of arr) {
        multi *= n;
    }
    return multi;
}

console.log(arrayMulti(arr))