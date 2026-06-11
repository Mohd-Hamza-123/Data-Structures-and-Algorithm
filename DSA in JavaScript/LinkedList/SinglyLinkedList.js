class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next
        } else {
            console.log("No Node Exist")
        }
    }

    addLast(data) {

        const newNode = new Node(data)
        newNode.next = null
        let current = this.head

        if (!current) {
            this.head = newNode
        }

        while (current) {
            if (current.next === null) {
                current.next = newNode
                return
            }
            current = current.next
        }
    }

    removeLast() {
        // If only one node exists, it removes it(correct) — but structure is confusing.
        // The while loop has redundant conditions.
        let current = this.head;
        if (!current) {
            console.log("LinkedList is empty")
            return
        }
        while (current) {
            if(!current.next){
                this.head = null
            }
            if (current.next && current?.next?.next === null) {
                current.next = null
                return
            }

            if (current.next === null) {
                this.head = null
                return
            }
            current = current.next
        }
    }

    traverse() {
        let current = this.head
        while (current) {
            console.log(current)
            current = current.next
        }
    }
}

const list = new LinkedList()

list.addFirst("1")
list.addFirst("2")
list.addFirst("3")
list.addFirst("4")
list.addLast("9")
list.addLast("10")
list.removeLast()


list.traverse()