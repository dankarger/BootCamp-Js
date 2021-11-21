

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
            // console.log('<', middle);

            left = middle+1;
        }
        if (arr[middle] > n) {
            // console.log('>', middle);

            right = middle;
        }
    }
    return index
}
const arr = [1, 3, 5, 8, 14,15,17];
console.log('m', binarySearchForLoop(arr, 8))