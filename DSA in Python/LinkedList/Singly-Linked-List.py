class Node:
    data = None
    next = None
    def __init__(self,data):
        self.data = data


class LinkedList:

    def __init__(self):
        self.head = None

    def addAtFirst(self,data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def traverse(self):
        current = self.head
        while(current):
            # print(current.__dict__)
            print(current.__dict__.get("data"))
            current = current.next



history = LinkedList()
history.addAtFirst(1)
history.addAtFirst(2)
history.addAtFirst(3)
history.addAtFirst(4)

history.traverse()



