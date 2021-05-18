class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            pointer: null
        },
        this.tail = this.head,
        this.length = 1
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        } else {
            if (index === 0) {
                return this.prepend(value)
            }
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
    }
    traverseToIndex(index) {
        let counter = 0;
        //must traverse from the 1st node
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode
    }
    delete(index) {
        //code here
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }


}



const myLinkedList = new LinkedList(10)

