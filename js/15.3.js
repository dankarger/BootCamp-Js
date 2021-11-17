function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

//1
//Problem with line 2:
//there is no variable  arr[10], and itreturn undefined,
//because the function try to calculate undefined with the rest of the variables it return NaN;
//also all the rest of the variables are in offset of one, should start with index 1 not 2,,,

//2
//used the debugger to find out the variable arr[10] return undefined.
//then find out the variables index are wrong,


