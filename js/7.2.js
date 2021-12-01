const string = "The more you know, the more you know that you don't know";

function lastYou(string) {
    let stringArr = string.split(' ')
    let stringArrReverse = stringArr.reverse();
    console.log(stringArr)
     let result = 0;
     // stringArr.forEach(element => {if(element==='you') {
     //     result = stringArr.indexOf(element);
     // }})
    // if(stringArrReverse.indexOf('you')!=-1){
    //     stringArrReverse
    // }
    for(let i=stringArr.length-1;i>=0;i--){
        if(stringArr[i]==='you'){
            result=i;
            break;
        }

    }
    return result;
}


console.log(lastYou(string))