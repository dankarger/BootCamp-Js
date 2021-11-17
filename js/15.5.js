function countOccurrences (str, char){
    let counter = 0 ;
    for(let i = 0 ; i < str.length; i ++){ if(str. charAt( i ) === char){
        counter += 1 ;
    }
    }
    return counter ;
}
console.log(countOccurrences ( "ini mini miny moe" , "n" ));

//1
//the counter variable is not calculated correctly in the for loop, its missing a equal sign,

//I used the debugger and console. log to find the problem