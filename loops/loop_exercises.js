// 1
function printOn(n) {
    for(let i=0;i<101;i++){
        console.log(i)
    }
}

console.log(printOn(10));

//2

function countX(n,t) {
    let result=0;
    for(let i=1;i<=n;i++){
        if(i%t===0){
            result++
        }
    }
    return result
}

console.log(countX(20,4))


function countX2(n,t) {
    let result=0;
    for(let i=1;i<=n;i+=t){
            result++
    }
    return result
}
console.log('2-2',countX2(20,4))

//3

function countEven(n) {
    let numOfDigits = n.toString().length
    let numsArray = [];
    for(let i=numOfDigits;i>0;i--) {
        let digit = parseInt(Math.floor((n % 10 ** i)).toString()[0])
        if (digit% 2 === 0) {
           numsArray.push((digit.toString())[0])
        }
    }
    return numsArray.length

}
console.log('---------------------------------------')
console.log('countEven1: ',countEven(260))


//3-1
console.log('--------------4--------------------');

// 4



function countEvenOnRange(n) {
    let count = 0;
    for(let i=112;i<=n;i+=2){
      count++
    }
    return 'count: '+ count;
}
console.log('4:',countEvenOnRange(500))


// 5
console.log('--------------5--------------------');
function printReverse() {
    for(let i=100;i>=0;i-=2) {
        console.log(i)
    }
}
console.log(printReverse())

// 6
console.log('--------------6--------------------');

// ?



// 7
console.log('--------------7--------------------');
function countABC(str) {
    let arrStr = str.split('');
    let result = {}
    for(let i =0; i<arrStr.length;i++) {
        let letter = arrStr[i];
        if(result[letter]){
            result[letter]++
        }else {
            result[letter]=1;
        }
    }
    return result;
}

console.log('7',countABC('this is a string'))

function countAbcReduce(str) {
    let arrStr = str.split(' ').join('').split('');
    return  arrStr.reduce(function(c,p){
        c[p] = (c[p] || 0) + 1
        return c
    },{})

}

console.log('7-2',countAbcReduce('this is a string'))

console.log('--------------8--------------------');
