//1-1
function reversearr1(arr) {
    return arr.reverse();

}

console.log('1-1: ', reversearr1(['h', 'e', 'l', 'l', 'o']))

//1-2
function reverseArr2(s) {
    let result = []
    for (let i = 0; i < s.length; i++) {
        result.push(s[(s.length - 1) - i])
    }
    return result
}

console.log('1-2: ', reverseArr2(['h', 'e', 'l', 'l', 'o']))

function reverseArr3(s) {
    let result = [];
    function rec1(s) {
        if (s.length === 1) {
            result.push(s[0])
            return result;
        }
        result.push(s.pop());
        rec1(s)
    }
    rec1(s)
    return result
}

console.log('1-3: ', reverseArr3(['h', 'e', 'l', 'l', 'o', '2']))
//
// 1-4

function reverseArr4(s) {
    return s ? reverseArr4(s.substr(1)) + s[0] : s
}

console.log('1-4: ', reverseArr4('hello4'))
//2 Fibonaci

// let resultFibo = [];
// function fibo(num) {
//     if (num === 0) {
//          resultFibo.push(0);
//          return
//
//     }
//


//
// console.log(resultFibo.push((fibo(num - 2) + fibo(num - 1))))
// return (fibo(num-2))
//

// }

// fibo(4)
// console.log('fibo 4:',resultFibo)


function recursive5(str) {
    if(str==='') {
        return '';
    }
    return recursive5(str.slice(1))+str[0];
}
console.log('5:' ,recursive5('testing'))


function fibo(n) {
    if(n<2){return n;}
   console.log(n)
   return(fibo(fibo(n-1) + fibo(n-2)))
}

console.log('fibo:' ,fibo(4))