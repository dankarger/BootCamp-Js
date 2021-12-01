function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
    console.log(sum)
}
getSum([1,2,3],[5,66,23]);

//1
// The problems:
// 1)no coma between  the variables in the function declaration,
//2) thevariable of sum was declared as a const.

// 2
//I used the debuger in webstorm to find that the arr1and arr2 where undefined, which led metoconclude the problem was with them,
//thenI find out thata coma was missing in the call of the function

//3

