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
        const node = new Node(data)
        node.next = this.head
        this.head = node
    }

    deleteFirst() {
        if (this.head) this.head = this.head.next
        else console.log("No nodes exist")
    }

}

const list = new LinkedList()
list.addFirst(1)
list.deleteFirst()
list.deleteFirst()
console.log(list)