const arr = ['boo', 'doooo', 'hoo', 'ro'];

function arrFindLength(arr) {
    let result=[];
    let i=0;
    while(i<arr.length){
        result.push(arr[i].length);
        i++;
    }
    return result;
}

console.log(arrFindLength(arr))