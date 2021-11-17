function calcAverage (arr){
    var sum =0;  ;
    for(var i = 0 ; i < arr.length; i ++){ sum += arr[ i ];
    }
    return sum ;
}
console.log(calcAverage ([ 85 , 90 , 92 ]));

//1
//the sum variableis not declared as equal to zero which cause it to be undefined,
//later the function try to add numbers to the undefined sum ,
//and the result is returning sum= NaN
//

//I ued the debugger and console.log the result to find out the problem