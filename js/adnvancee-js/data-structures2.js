// addToStart(x)
// addToEnd(x)
// isEmpty()
// isFull()
// removeFirst(x)


//Stacks
let x='test'
let x1='test2'
let stack1 = [1,2,3,4,5,6,7,8,]
function Stack (stack) {
    this.stack = stack;
    this.addStart = function(x){
        stack.unshift(x)
        return this.stack
    },
        this.addEnd = function(x) {
            stack.push(x);
            return this
        }
}

class Stackstack {
    constructor(data){
        this.data = data
        this.addStart = function(x){
            data.unshift(x)
            return this.data}
        this.addEnd = function(x) {
            data.push(x);
            return this
        }
    }
}

let stack2 =  new Stack(stack1);
// console.log(stack2)
// stack2.addStart(x)
// stack2.addEnd(x)
// console.log(stack2)

let stack3 = new Stackstack(stack1)
console.log(stack3)
stack3.addStart(x);
stack3.addEnd(x1)
console.log(stack3)

//