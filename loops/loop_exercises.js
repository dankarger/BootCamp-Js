// 1
function printOn(n) {
    for (let i = 0; i < 101; i++) {
        console.log(i)
    }
}

console.log(printOn(10));

//2

function countX(n, t) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (i % t === 0) {
            result++
        }
    }
    return result
}

console.log(countX(20, 4))


function countX2(n, t) {
    let result = 0;
    for (let i = 1; i <= n; i += t) {
        result++
    }
    return result
}

console.log('2-2', countX2(20, 4))

//3

function countEven(n) {
    let numOfDigits = n.toString().length
    let numsArray = [];
    for (let i = numOfDigits; i > 0; i--) {
        let digit = parseInt(Math.floor((n % 10 ** i)).toString()[0])
        if (digit % 2 === 0) {
            numsArray.push((digit.toString())[0])
        }
    }
    return numsArray.length

}

console.log('---------------------------------------')
console.log('countEven1: ', countEven(260))


//3-1
console.log('--------------4--------------------');

// 4


function countEvenOnRange(n) {
    let count = 0;
    for (let i = 112; i <= n; i += 2) {
        count++
    }
    return 'count: ' + count;
}

console.log('4:', countEvenOnRange(500))


// 5
console.log('--------------5--------------------');

function printReverse() {
    for (let i = 100; i >= 0; i -= 2) {
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
    for (let i = 0; i < arrStr.length; i++) {
        let letter = arrStr[i];
        if (result[letter]) {
            result[letter]++
        } else {
            result[letter] = 1;
        }
    }
    return result;
}

console.log('7', countABC('this is a string'))

function countAbcReduce(str) {
    let arrStr = str.split(' ').join('').split('');
    return arrStr.reduce(function (c, p) {
        c[p] = (c[p] || 0) + 1
        return c
    }, {})

}

console.log('7-2', countAbcReduce('this is a string'))

console.log('--------------8--------------------');


function toUpper(str) {
    let result = '';
    let strArr = str.split(' ');
    strArr.forEach(word => {
        let arr = word.split('')
        arr.map(letter => {
            if (letter.charCodeAt() > 96 && letter.charCodeAt() < 123) {
                return String.fromCharCode(letter & ~(1 << 5))
            }
        })
    })
    return result
}

console.log('test', toUpper('this'))
console.log(toUpper('this is a test'))

function toUpperCase(str) {
    var asciiCode = str.charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
        if (asciiCode > 96 && asciiCode < 123) {
            // & ~(1 << 5) set the 6th bit to 1
            return String.fromCharCode(asciiCode & ~(1 << 5));
        } else {
            return str;
        }
    }
}

console.log(toUpperCase('test'))


console.log('--------------9--------------------');

function checkEmail(email) {
    let regex = /[@]/
    return regex.test(email)
}

console.log(checkEmail('ffdfdf@fd.com'))


console.log('--------------10--------------------');

function checkPassword(password) {
    let regex = /[[a-z]/g
    let regex2 = /[A-Z][A-Z]/g
    let regex3 = /[0-9][0-9][0-9]/g
    return regex.test(password) && regex2.test(password) && regex3.test(password)
}

console.log(checkPassword('TAda131313'));


console.log('--------------11--------------------');

function isStrike(num) {
    arrstr = Array.from(String(num), Number);
    for (let i = arrstr.length - 1; i >= 0; i--) {
        if (arrstr[i] < arrstr[i - 1]) {
            return false
        }
    }
    return true
}

console.log('isStrike', isStrike(455));


console.log('--------------12--------------------')

function aba(str) {
    let arrStr = str.split('');
    let arrStrReverse = arrStr.slice().reverse();

    return arrStr.join() === arrStrReverse.join();

}

//With for Loop
console.log('aba: ', aba('asddsa'))

function aba2(str) {
    let arrStr = str.split('');
    for (let i = 0, e = arrStr.length - 1; i < arrStr.length; i++, e--) {
        console.log(e)
        if (arrStr[i] !== arrStr[e]) {
            return false
        }

    }
    return true;
}


console.log('aba2: ', aba2('abba'))


console.log('--------------13--------------------')

function polyNum(num) {
    let numArr = Array.from(String(num), Number);
    let reverArr = numArr.slice().reverse();
    return numArr.join() === reverArr.join()

}

console.log('polynum: ', polyNum(12321))

console.log('--------------14--------------------')

function countChar(str) {
    let count = [1, 1]
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count[0] += 1
        } else {
            if (count[0] > count[1]) {
                count[1] = count[0];
            }
            count[0] = 1;
        }
    }
    return count[1]
}

console.log('countChar: ', countChar('aassderrrr '))


console.log('--------------15--------------------')

function countBigAndSmall(str) {
    let arrStr = str.split('');
    let count = 0;
    arrStr.forEach((letter, i) => {
        if (letter === letter.toUpperCase()) {
            arrStr[i + 1] === arrStr[i + 1].toLowerCase() ? count++ : null
        }
    })
    return count;
}

console.log('countBigSmall:', countBigAndSmall('fRdTrfdfTfgDDyDdDg'))

console.log('--------------16--------------------')

function BeforeNumber(num) {
    let count = 0;
    let arrNum = Array.from(String(num), Number);
    for (let i = arrNum.length - 1; i >= 0; i--) {
        if (arrNum[i - 1] - arrNum[i] === 1) {
            count++
        }
    }
    return count
}

console.log('beforNumber', BeforeNumber(106549898))

console.log('--------------17--------------------')

function countIncrement(num) {
    let arrNum =Array.from(String(num),Number);
    for(let i = 0; i <arrNum.length;i++) {
        if(arrNum[i]>arrNum[i+1]){
            return false
        }
    }
    return true
}
console.log('countIncriments', countIncrement(23456))