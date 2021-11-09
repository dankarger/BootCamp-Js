const arr = ['boo', 'doooo', 'hoo', 'ro'];

function arrFindLength(arr) {
    let result = [];
    for(name of arr) {
        result.push(name.length);
    }
    return result;
}

console.log(arrFindLength(arr))