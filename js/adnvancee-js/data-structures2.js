// addToStart(x)
// addToEnd(x)
// isEmpty()
// isFull()
// removeFirst(x)


//Stacks
let x = 'test'
let x1 = 'test2'
let stack1 = [1, 2, 3, 4, 3, 5, 6, 7, 8, 3]

function Stack(stack) {
    this.stack = stack;
    this.addStart = function (x) {
        stack.unshift(x)
        return this.stack
    },
        this.addEnd = function (x) {
            stack.push(x);
            return this
        }
}

class Stackstack {
    constructor(data, size) {
        this.data = data
        this.size = size
        this.addStart = function (x) {
            if (!this.isFull()) {
            let temp = data.splice(1);
            this.data = x.concat(temp)
                console.log('add',x)
                return data
            }
        }
        this.addEnd = function (x) {
            if (!this.isFull()) {
                data.push(x);
                return this
            } else {
                return 'Stack Full'
            }
        }
        this.isFull = function () {
            if (size > data.length) {
                // console.log(size)
                return false
            } else {
                // console.log(size)
                return true
            }
        }
        this.removeAll = function (x) {
            data.forEach((el, index) => {
                if (el === x) {
                    console.log('removing--', el)
                    data.splice(index, 1)
                }
            })
            return data;
        }
        this.forLoop = function (x) {
            for (let i = 0; i < data.length; i++) {
                if (data[i] === x) {
                    console.log('Removed:', data[i])
                    data.splice(i, 1)
                    return data;
                }
            }
            console.log('Not Found')
            return data;
        }
    }
}

// let stack2 =  new Stack(stack1);
// console.log(stack2)
// stack2.addStart(x)
// stack2.addEnd(x)
// console.log(stack2)

// for(let i=0;i<3;i++)

let stack3 = new Stackstack(stack1, 17)
// console.log(stack3)
console.log(stack3.addStart('2222'));
console.log(stack3.addEnd(x1))
console.log(stack3.isFull())
console.log(stack3.removeAll(3))
console.log(stack3.forLoop(2))


//


class LinkList {
    constructor(data) {
        this.data= {data:data,left,right}
        this.left = left;
        this.right = right;


}

}



class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function printLinkedList(head){
    let currentNode = head
    // while currentNode is not null
    while (currentNode){
        // log current node's data
        console.log(currentNode.data)
        // iterate to the next node
        currentNode = currentNode.next
    }
}

function newLinkList (data) {
    let node1 = new Node(data)

}

function findLastNode (node) {
    while(node){
        console.log(node.data)
        if(node.next){
            node=node.next
        }else{
            break
        }
    }
    return node
}

function addLastNode(data,node) {
    let lastNode = findLastNode(node)
    let newNode = new Node(data)
    lastNode.next = newNode;
    return newNode
}
function findFirstNode(node) {
    while(node) {
        console.log(node.data)
        if(node.prev){
            node=node.prev;
        }else{
            break
        }
    }
    return node;
}

function addAfterNode(data,node) {
    let newNode = new Node(data)
    newNode.prev =node;
    newNode.next=node.next;
    node.next=newNode;
    return newNode;
}

function deleteNode(node){
   let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    node.next=null;
    node.prev=null;
    node.data=null;
    return
}


let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)

node1.next =node2
node2.next = node3
node3.prev= node2
node2.prev=node1

console.log(addLastNode(123,node1))
console.log(findLastNode(node1))
console.log(findFirstNode(node3))
console.log(addAfterNode('test',node3))
console.log('-----------------------------------')
console.log(findLastNode(node1))
console.log('n',deleteNode(node2))
console.log('-----------------------------------')
console.log(findFirstNode(node3))
//------------------------------------------------



console.log(node1.prev)