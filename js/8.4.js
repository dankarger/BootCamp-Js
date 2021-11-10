const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

let mostOcorances2 =  {
    letter:'',
    occ:0
}

let result = {};
function findLetters(array) {
    let arrSplit = String(array).toLowerCase().split('');
    for(let i=0; i<arrSplit.length; i++) {
        if(result[arrSplit[i]]){
            result[arrSplit[i]]+=1;
        }else {
            result[arrSplit[i]]= 1;
        }
    }
    for (let letter of Object.keys(result) ) {
        if(result[letter]>mostOcorances2['occ']) {
            mostOcorances2['letter']=letter;
            mostOcorances2["occ"]= result[letter]
        }
    }
    return  result
}

findLetters(array)
console.log(result)
console.log(mostOcorances2)
