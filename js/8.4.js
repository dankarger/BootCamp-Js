const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function findLetters(array) {
    let result = {};
    let mostOcorances = [0,''];
    let mostOcorances2 = {};
    let arrSplit = String(array).toLowerCase().split('');

    for(let i=0; i<arrSplit.length; i++) {
        if(result[arrSplit[i]]){
            result[arrSplit[i]]+=1;
        }else {
            result[arrSplit[i]]= 1;
        }
    }
    for (let key in result) {

        if (result.hasOwnProperty(key)>mostOcorances[0]) {
                mostOcorances[0]=result[key]
                mostOcorances[1]=key;
        }

    }
    return result, mostOcorances;
}

console.log(findLetters(array))
let result = findLetters(array)
console.log(result)
