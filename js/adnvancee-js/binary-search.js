

//with for loop

function binarySearchForLoop(arr, n) {
    let index = 0;
    let left = 0;
    let right = arr.length ;
    let middle = Math.floor((left + right) / 2)
    for (let i = 0; left < right; i = left) {
        middle = Math.floor((left + right) / 2)
        index=middle
        console.log('middle', arr[middle]);
        if (arr[middle] === n) {
            console.log('y')
            return index ;
        }
        if (arr[middle] < n) {
            left = middle+1;
        }
        if (arr[middle] > n) {
            right = middle;
        }
    }
    return index
}
// const arr = [1, 3, 5, 8, 14,15,17];
// console.log('m', binarySearchForLoop(arr, 8));
//

console.log('------------------------------------------------')
//Recursive

function binarySearchRec(arr,n,middle=Math.floor(arr.length/2)) {
            console.log('middle:',middle)
            if(arr.length<=1){
                if(middle>=arr.length-2){
                    console.log('jjj')
                    return middle+1
                }else{
                    return -1;
                }
            }
            if(arr[middle]===n){
                console.log('mm')
                return middle;
            }
            if(arr[middle]<n){
                console.log('y',n,arr[middle])
                middle += Math.floor(((arr.length-1)-middle)/2)
                console.log('ll',middle)
                return binarySearchRec(arr,n,middle)
            }
            if(arr[middle]> n){
                console.log('t',n,arr[middle])
                middle=Math.floor((middle/2));
                console.log('pp',middle)
                return binarySearchRec(arr,n,middle);
            }
}
// const arr2 = [1, 3, 5, 8, 14,15,17];
// console.log(binarySearchRec(arr2 , 3))

function binaryRecursive2(arr,n,left=0,right=arr.length-1,index=Math.floor((arr.length-1)/2)) {
    console.log('g',index)
    if(left>right) {
        console.log('h')
        return 'Number not in the array';
    }
    if(arr[index]===n) {
        return(index)
    }
    if(arr[index]>n){
        right=index;
        index = Math.floor((left+right)/2)
        return binaryRecursive2(arr,n,left,right,index)
    }
    if(arr[index]<n){
        left=index+1;
        index = Math.floor((left+right)/2)
        return binaryRecursive2(arr,n,left,right,index)
    }
}

const arr2 = [1, 3, 5, 8, 14,15,17];
console.log(binaryRecursive2(arr2,3))

const arr3 = [0,1,2,3,4,5,6,7,8,9];
console.log(binaryRecursive2(arr3,1))