const arr = [3,4,4,3,6,3,3,4,5,6,9,0,0,0]

function removerDuplicate(arr) {
    let result =[];
    arr.forEach(element=> { if(result.indexOf(element)===-1) {
        result.push(element)
    }
    });
    return result;
}

console.log(removerDuplicate(arr))