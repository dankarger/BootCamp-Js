const arr1 = [1, 4, 5, 2, 53, 6, 1, 3];

const doubleArr = arr1.map(num => {
    return doubled(num);
})


function doubled(n) {
    return n * 2;
}

function onlyEvenValues(arr) {
    let result3 = [];
    arr.forEach(num => {
        if (num % 2 === 0) {
            result3.push(num);
        }

    })
    return result3;
}

//
console.log(doubleArr);
console.log(onlyEvenValues(arr1))

//3
const arr2 = ['first', 'bla', 'ggg', 'gggggg', 'last'];

function showFirstAndLast(arr) {
    let result = [];
    arr.forEach((el, indx) => {
        if (indx === 0 || indx === arr.length - 1) {
            result.push(el);
        }
    })
    return result;
}


function showFirstAndLast2(arr) {
    let result = [];
    arr.forEach(word => {
        let r = [];
        r.push(word[0] + word[word.length - 1])
        // r.push(word[word.length-1])
        result.push(r);
    })
    return result
}

console.log(showFirstAndLast(arr2));
console.log(showFirstAndLast2(arr2))
//4
const string1 = 'this is a string bla or not ';

function vowelCount(string) {
    let result = {};
    let arr = string.split('')
    arr.forEach(el => {
        if (el.match(/[eyuioa]/g)) {
            if (result[el]) {
                result[el]++
            } else {
                result[el] = 1;
            }
        }
    })
    return result;
}

console.log(vowelCount(string1))

//5
const capitalize = (str) => {
    let arr = str.split(' ');
    let result = arr.map(word => {
        return word.slice(0, 1).toUpperCase() + word.substr(1);
    })
    return result.join(' ')
}

console.log(capitalize(string1));

//6

function shiftLetters(str) {
    let result = '';
    let charcode = -1;
    let arr = str.split('');
    arr.forEach(el => {
        charcode = (el.charCodeAt() + 1);
        result += String.fromCharCode(charcode);
    })
    return result;
}

console.log(shiftLetters(string1));

//7


function swapCase(str) {
    let arr = str.split(' ');
    let result = [];
    arr.forEach((word, indx) => {
        if (indx % 2 === 0) {
            result.push(capitalize(word));
        }
    })
    return result.join(' ')
}

console.log(swapCase(string1));