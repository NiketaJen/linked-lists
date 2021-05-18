class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        //add to end
       const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this
    }
    prepend(value) {
        //add to beginning
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array;
    }
    insert(index, value) {
        //check params
        //if index is greater than or equal to the last in the list, append the value to the end
        if (index >= this.length) {       
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        };
        //need to find the target index but go to the one before it to change pointers
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
        return this.printList
             //if (index === 0) {
         //   this.prepend(value);
          //  return this.printList()
      //  }
    }
    traverseToIndex(index) {
        //check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }
    remove(index) {
        //check params
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList()
    }

    
       
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
//console.log(myLinkedList)