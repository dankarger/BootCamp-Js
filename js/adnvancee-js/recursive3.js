//finding the exponent with number and result
function exponent(a,n) {
   if(n===a){
       return 1;
   }
   // count++
   return exponent(a,n/a)+1;
}
console.log('exponent:' ,exponent(4,16));

//-----------------------------------------------------------------------------------------

// calculate the result with number and exponent
function expo2(a,n){
    if(n===1){
    return a}
    return expo2(a,n-1)*a
}
console.log('expo2:',expo2(4,3))

function binarySearch(arr,n,pointer=0) {
        if(arr[pointer]===n){
            return pointer
        }
        if(arr.length<=1)return pointer;
        let middle = Math.floor(arr.length/2);
        if(arr[middle]>n) {
            pointer +=middle
            return binarySearch(arr.slice(0,middle),n,pointer);
        }
        if(arr[middle]<=n){
            pointer -=middle
            return binarySearch(arr.slice(middle+1),n,pointer)
        }

}
console.log(binarySearch([1,2,3,4,5,6,10,30,56],5))