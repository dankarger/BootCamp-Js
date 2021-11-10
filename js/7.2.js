const string = "The more you know, the more you know that you don't know";

function lastYou(string) {
    let stringArr = string.split(' ')
    let stringArrReverse = stringArr.reverse();
    console.log(stringArr)
     let result = 0;

    for(let i=stringArr.length-1;i>=0;i--){
        if(stringArr[i]==='you'){
            result=i;
            break;
        }

    }
    return result;
}


console.log(lastYou(string))